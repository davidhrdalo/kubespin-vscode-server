FROM codercom/code-server:latest

# Set environment variables
ENV PASSWORD=vscode
ENV SUDO_PASSWORD=vscode
ENV DEFAULT_WORKSPACE=/workspace
ENV PORT=8080

# Create workspace directory
RUN mkdir -p /workspace

# Install additional tools and extensions
RUN code-server --install-extension ms-vscode.vscode-typescript-next
RUN code-server --install-extension ms-vscode.vscode-json
RUN code-server --install-extension ms-vscode.vscode-python
RUN code-server --install-extension ms-vscode.vscode-java
RUN code-server --install-extension ms-vscode.vscode-go
RUN code-server --install-extension ms-vscode.vscode-rust
RUN code-server --install-extension ms-vscode.vscode-cpptools

# Set up user permissions
RUN chown -R coder:coder /workspace

# Expose port
EXPOSE 8080

# Start code-server
CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "password", "/workspace"] 