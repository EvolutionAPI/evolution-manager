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

## Self-Hosted Instructions (Ubuntu Server)
1. **Prepare the Environment**: Install Node.js, Yarn, and any other necessary dependencies on your Ubuntu server.
2. **Clone and Build**:
   - Clone the repository and build the project using the steps provided in the Development Setup section.
3. **Deploy**:
   - Host the contents of the `dist` folder on your web server.
   - Ensure the server is configured with an SSL certificate for secure access.

## Contributing
Contributions are welcome! Please read our contributing guidelines to get started.

## License
This project is open-source and available under the [MIT License](LICENSE.md).
