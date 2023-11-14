# Evolution Manager - README

## Introduction
Evolution Manager is an open-source management tool for the Evolution API, designed to streamline the administration and monitoring of instances. It can be accessed online at [Evolution Manager](https://github.com/gabrielpastori1/evolution-manager).

## Features
- **Instance Management**: Create, manage, and delete instances.
- **Instance Settings**: Customize behavior settings (e.g., disabling calls, always-online mode), webhook integration, RabbitMQ, WebSocket, Chatwoot, and Typebot configurations.
- **User Utilities**: Check user numbers, search for conversations, and find groups.

## Limitations
- The version hosted on Vercel requires the server to have an SSL certificate.

## Technology
- The project is built using Vue.js v3 and Vuetify.

## Development Setup
1. **Prerequisites**: Ensure you have `yarn` installed on your system.
2. **Clone the Repository**:
   ```bash
   git clone https://github.com/gabrielpastori1/evolution-manager.git
   cd evolution-manager
   ```
3. **Install Dependencies**:
   ```bash
   yarn install
   ```
4. **Run Development Server**:
   ```bash
   yarn dev
   ```
   This will start a local development server. You can access the app at `localhost:8080`.

## Building the Project
To build the project for production, run:
```bash
yarn build
```
This will create a `dist` folder with the compiled assets.

## Self-Hosted - Evolution Manager CLI and PM2

### Installation and Configuration

1. **Install Evolution Manager Globally**:
   - Ensure Node.js and NPM are installed on your system.
   - Install Evolution Manager globally using NPM to access the CLI (Command Line Interface):
     ```bash
     npm install -g evolution-manager
     ```

2. **Using the CLI**:
   - After installation, access the CLI commands by typing `evolution-manager` in your terminal.
   - Available commands include:
     - `help`: Displays a list of available commands and their descriptions.
     - `server`: Server-related operations.
       - `start [--port=9615]`: Starts the server on the specified port (default: 9615).
       - `build`: Builds the project.
     - `pm2`: Manages the process with PM2.
       - `setup`: Sets up PM2 for the project.
       - `start`: Starts the service with PM2.
       - `stop`: Stops the service in PM2.
       - `restart`: Restarts the service in PM2.
       - `delete`: Removes the service from PM2.

3. **Running the Project with PM2**:
   - To set up and manage the service with PM2, start with the setup command:
     ```bash
     evolution-manager pm2 setup
     ```
   - Then, you can start, stop, restart, or delete the service using the respective `pm2` commands in the CLI.

These instructions provide a streamlined method for managing Evolution Manager across various systems, utilizing PM2 for efficient service start-up, maintenance, and control.
## Contributing
Contributions are welcome! Please read our contributing guidelines to get started.

## License
This project is open-source and available under the [MIT License](LICENSE.md).
