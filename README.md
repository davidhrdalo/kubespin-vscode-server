# VS Code Server Plugin

A Kubespin plugin that provides a web-based VS Code development environment using code-server.

## Features

- **Web-based VS Code**: Full VS Code experience in your browser
- **Pre-installed Extensions**: Common development extensions included
- **Workspace Management**: Access to project files and folders
- **Secure Access**: Password-protected access
- **Health Monitoring**: Built-in health checks and status monitoring

## Components

### Containers

- **vscode-server**: Main VS Code Server container running code-server
- **kubespin-ui**: UI components for the Kubespin platform integration

### UI Components

- **Editor Page**: Main interface for accessing VS Code Server
- **Status Widget**: Real-time status monitoring
- **Quick Access Widget**: Easy access buttons

## Configuration

### Environment Variables

- `PASSWORD`: Password for VS Code Server access (default: vscode)
- `SUDO_PASSWORD`: Sudo password for VS Code Server (default: vscode)
- `DEFAULT_WORKSPACE`: Default workspace directory (default: /workspace)
- `PORT`: Port for VS Code Server (default: 8080)

### Ports

- **8080**: VS Code Server web interface
- **80**: Kubespin UI components

### Volumes

- `/workspace`: Persistent workspace storage

## Usage

1. **Install the Plugin**: The plugin will be available in the Kubespin platform
2. **Access the Editor**: Navigate to the VS Code Server page in the sidebar
3. **Open VS Code Server**: Click "Open VS Code Server" to launch the full interface
4. **Login**: Use the default password "vscode" to access the server

## Development

### Building the UI

```bash
cd kubespin-ui
npm install
npm run build
```

### Running Locally

```bash
# Build the containers
docker build -t vscode-server ./vscode-server
docker build -t kubespin-ui ./kubespin-ui

# Run the containers
docker run -p 8080:8080 vscode-server
docker run -p 80:80 kubespin-ui
```

## Architecture

The plugin consists of two main components:

1. **VS Code Server Container**: Runs the actual code-server instance
2. **Kubespin UI Container**: Provides the integration interface

The UI container serves as a proxy and provides status monitoring, while the VS Code Server container provides the actual development environment.

## Security

- Password-protected access
- Isolated container environment
- Secure workspace permissions
- Health monitoring and status checks

## Extensions

The following VS Code extensions are pre-installed:

- TypeScript support
- JSON support
- Python support
- Java support
- Go support
- Rust support
- C/C++ support

## Troubleshooting

### Common Issues

1. **Server not accessible**: Check if the container is running and healthy
2. **Password issues**: Verify the PASSWORD environment variable is set correctly
3. **Workspace access**: Ensure the /workspace volume is properly mounted

### Health Checks

The plugin includes built-in health checks that monitor:
- Server availability
- Port accessibility
- Container status

## License

This plugin is part of the Kubespin platform and follows the same licensing terms. 