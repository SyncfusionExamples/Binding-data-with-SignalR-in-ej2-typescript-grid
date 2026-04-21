# Binding Data with SignalR in EJ2 TypeScript Grid

## Repository Description
This repository demonstrates real-time data binding integration of Microsoft SignalR with Syncfusion EJ2 TypeScript Grid component, enabling seamless multi-client data synchronization with live updates in ASP.NET Core applications.

## Overview
SignalR integration with EJ2 Grid efficiently enables real-time bidirectional communication between server and connected clients, allowing instant data updates across all users without page refreshes.

## Features
- SignalR Integration: real-time server-to-client communication
- Live Data Binding: automatic grid updates from server
- Multi-Client Synchronization: synchronized data across all connected clients
- CRUD Operations: create, read, update, and delete operations
- Server-Side Processing: filtering, sorting, and pagination
- TypeScript Support: fully typed components for better development

## Prerequisites
- .NET 8.0 or higher
- Node.js and npm installed
- Visual Studio or VS Code
- ASP.NET Core SDK
- TypeScript knowledge
- SignalR client library understanding

## Installation
1. Clone repository
2. Navigate to project directory
3. Run `npm install` for frontend dependencies
4. Run `dotnet restore` for backend packages
5. Execute `dotnet build`
6. Run `dotnet run`

## Usage
To implement real-time grid binding with SignalR:
1. Configure SignalR hub endpoint in Program.cs
2. Create and register SignalR hub (ChatHub)
3. Connect grid to SignalR hub on client-side
4. Define message handlers for grid refresh
5. Implement CRUD endpoints in GridController
6. Invoke SignalR notifications after CRUD operations

## Configuration
- Hub Endpoint: Map SignalR hub in Program.cs (e.g., `app.MapHub<ChatHub>("/chatHub")`)
- Hub URL: Configure client connection URL in TypeScript (e.g., `https://localhost:7212/ChatHub`)
- Connection Protocol: WebSocket (default SignalR transport)
- Data Format: JSON serialization for messages
- CRUD URLs: Configure DataManager URLs (insertUrl, updateUrl, removeUrl)




