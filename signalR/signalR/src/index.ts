import { Grid, Edit, Toolbar, EditEventArgs,Page } from '@syncfusion/ej2-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { HubConnection } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';

Grid.Inject(Edit, Toolbar, Page);

let data: DataManager = new DataManager({
    url: 'https://localhost:7212/api/Grid',
    insertUrl: 'https://localhost:7212/api/Grid/Insert',
    updateUrl: 'https://localhost:7212/api/Grid/Update',
    removeUrl: 'https://localhost:7212/api/Grid/Remove',
    adaptor: new UrlAdaptor()
});
let connection: HubConnection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7212/ChatHub")  //Use remote server host instead number ****
    .build();
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    allowPaging: true,
    created: onCreated,
    actionComplete: actionComplete,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'ShipCity', width: 140 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 140 }
    ]
});

grid.appendTo('#Grid');

function onCreated() {
    connection.on("ReceiveMessage", (message: string) => {
        if (grid) {
            grid.refresh();
        }

    });
    connection.start()
        .then(() => {
            console.log("SignalR connection established successfully");
            connection.invoke('SendMessage', "refreshPages")
                .catch((err: Error) => {
                    console.error("Error sending data:", err.toString());
                });
        })
        .catch((err: Error) => {
            console.error("Error establishing SignalR connection:", err.toString());
        });
}
function actionComplete(args: EditEventArgs) {
    if (args.requestType === "save" || args.requestType === "delete") {
        connection.invoke('SendMessage', "refreshPages")
            .catch((err: Error) => {
                console.error(err.toString());
            });
    }


}