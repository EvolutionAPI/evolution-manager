[title]: \\ "CLI"

# Evolution-Manager CLI

## Description
The Evolution-Manager CLI is a command-line tool designed to manage servers, PM2 processes, and interact with the "evolution-api" project.

## Installation
To install the Evolution-Manager CLI, run the following command:
```
npm install -g evolution-manager
```

## Available Commands

### General
- `help`: Displays a list of available commands. Refer to this document for additional details on each command.

### Server
- `server start [--port=9615]`: Starts a temporary server in the terminal, ideal for local use. The `--port` parameter allows specifying the port, with `9615` as the default.
- `server build`: Executes the server build but does not start it. (Currently without specific use).

### PM2
Interacts with PM2 to manage Evolution Manager processes:
- `pm2 setup`: Configures PM2 to host the Evolution Manager. Automatically installs PM2 if not present.
- `pm2 start`: Starts the Evolution Manager process in PM2.
- `pm2 stop`: Stops the Evolution Manager process in PM2.
- `pm2 restart`: Restarts the Evolution Manager process in PM2.
- `pm2 delete`: Removes the Evolution Manager process from PM2.

### API

The API section of the Evolution-Manager CLI includes various functions for managing the installation and versions of the Evolution Manager within the API. The available commands are:

- `setup` or `install`: Installs the manager inside the Evolution API at the path `/manager`. This command can also be accessed using the shorthand `i`.
- `uninstall`: Uninstalls the manager from the Evolution API.
- `changeVersion` or `cv`: Switches to a specific version of the Evolution API, whether newer or older. Example usage: `changeVersion --v=1.5.0`.

These commands provide a flexible and powerful command-line interface for managing the versions and configuration of the manager in your Evolution API installation.

## Typical Usage Flow
1. Install the CLI globally.
2. Use `help` to view available commands.
3. Use PM2 commands to host the Evolution Manager.
4. Run `server start` for a local temporary server.
5. Within the "evolution-api" installation, use `api setup` to update to the new manager.
