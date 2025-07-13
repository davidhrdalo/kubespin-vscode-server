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

# Switch back to coder user
USER coder

# Expose port
EXPOSE 8080

# Start code-server
CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "password", "/workspace"] 