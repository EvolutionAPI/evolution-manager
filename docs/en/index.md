[title]: \\ "About"

# Evolution Manager

## Introduction

Evolution Manager is an open-source management tool for the Evolution API, designed to streamline the administration and monitoring of instances. It can be accessed online at [Evolution Manager](https://github.com/gabrielpastori1/evolution-manager).

---

🇧🇷 **Atenção, Comunidade Brasileira!** 🇧🇷

Se você é um desenvolvedor ou usuário brasileiro interessado no Evolution Manager, temos boas notícias! Agora você pode acessar a documentação completa do projeto em português. Isso facilitará seu entendimento e uso desta ferramenta incrível. Clique no link abaixo para ler o README em português:

🔗 [Leia o README em Português](https://github.com/gabrielpastori1/evolution-manager/blob/main/README.pt_BR.md)

---

## Features

- **Instance Management**: Create, manage, and delete instances.
- **Instance Settings**: Customize behavior settings (e.g., disabling calls, always-online mode), webhook integration, RabbitMQ, WebSocket, Chatwoot, and Typebot configurations.
- **User Utilities**: Check user numbers, search for conversations, and find groups.

## Limitations

- The version hosted on Vercel requires the server to have an SSL certificate.

## Technology

- The project is built using Vue.js v3 and Vuetify.

## Evolution-Manager CLI - Documentation

For detailed information on how to use the Evolution-Manager CLI, please refer to the documentation available at the following links:

🔗 Full Documentation:  [Documentation in English](https://github.com/gabrielpastori1/evolution-manager/blob/main/docs/en/cli.md)

## Docker Image - Documentation

For detailed information on using the Docker image, including configurations and examples, please refer to our comprehensive documentation. You will find step-by-step instructions, as well as helpful tips to make the most of the Evolution Manager's Docker image.

🔗 Full Documentation: [Documentation in English](https://github.com/gabrielpastori1/evolution-manager/tree/main/docs/en/docker.md)

## Self-Hosted - Evolution Manager CLI and PM2

### Straight to the Point: Quick Setup with PM2

To quickly install Evolution Manager globally and set it up with PM2, follow these commands:

1. **Install Evolution Manager Globally**:

   ```bash
   npm install -g evolution-manager
   ```

2. **Set Up PM2 for Evolution Manager**:

   ```bash
   evolution-manager pm2 setup
   ```

These two steps will install the Evolution Manager CLI globally on your system and configure it to run with PM2, a powerful process manager.

### Installation and Configuration

These two steps will install the Evolution Manager CLI globally on your system and configure it to run with PM2, a powerful process manager.

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

## Contributing

Contributions are an essential part of the Evolution Manager project. Whether you're contributing code, suggestions, or feedback, your input is invaluable. To facilitate contributions, we have included a direct means for donations:

### Making a Donation

If you wish to support the project financially, we have provided a QR code for Pix donations. Your generosity helps in maintaining and evolving this open-source tool.

<img src="https://github.com/gabrielpastori1/evolution-manager/blob/main/src/assets/pix.svg" width="300" alt="Pix Donation QR Code">

### Contributing Code or Ideas

We also welcome code contributions and innovative ideas. If you're interested in contributing in this way, please read our contributing guidelines for more information on how to get started.

Your support, in any form, makes a significant difference and is greatly appreciated. Thank you for being a part of the Evolution Manager community!

## License

This project is open-source and available under the [MIT License](LICENSE.md).
