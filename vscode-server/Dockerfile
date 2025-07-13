FROM codercom/code-server:latest

# Set environment variables
ENV PASSWORD=vscode
ENV SUDO_PASSWORD=vscode
ENV DEFAULT_WORKSPACE=/workspace
ENV PORT=8080

# Switch to root to create workspace and install extensions
USER root

# Create workspace directory with proper permissions
RUN mkdir -p /workspace && chown coder:coder /workspace

# Install additional tools and extensions
RUN code-server --install-extension ms-vscode.vscode-typescript-next
RUN code-server --install-extension ms-vscode.vscode-json
RUN code-server --install-extension ms-vscode.vscode-python
RUN code-server --install-extension ms-vscode.vscode-java
RUN code-server --install-extension ms-vscode.vscode-go
RUN code-server --install-extension ms-vscode.vscode-rust
RUN code-server --install-extension ms-vscode.vscode-cpptools

# Switch back to coder user
USER coder

# Expose port
EXPOSE 8080

# Start code-server
CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "password", "/workspace"] 