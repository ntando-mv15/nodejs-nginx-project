# Project Overview: Deploying a Node.js Application with an Nginx Proxy Server

In this project, I set out to deploy a Node.js application running on port 3000 and configure an Nginx server as a reverse proxy to manage incoming requests. The Node.js server serves as the application server where the core application logic executes. This logic, written in simple JavaScript, displays the running processes within the Node.js runtime.

### Project Goals
- **Set up a Node.js application**: Develop and deploy a Node.js application that listens on port 3000 and provides information about the running processes.
- **Configure Nginx as a reverse proxy**: Set up an Nginx server to act as a reverse proxy, forwarding incoming HTTP requests to the Node.js application.

For detailed steps and code snippets, check out the full article on Medium.com [here](https://medium.com/@ntando.mv15/devops-from-scratch-week-3-with-project-e6928da36274).

### Node.js Application
The Node.js application was built to showcase a straightforward example of server-side JavaScript execution. The application listens on port 3000 and serves an endpoint that outputs details about the Node.js runtime's current processes.

**Key Features:**
- **Simple JavaScript Logic**: The application logic is minimal, focusing on retrieving and displaying process information.
- **Port Configuration**: The server is configured to listen on port 3000.

### Nginx Configuration
To enhance the scalability and security of the Node.js application, I configured an Nginx server as a reverse proxy. This setup allows Nginx to handle incoming requests and forward them to the Node.js application, providing several benefits such as load balancing, SSL termination, and caching.

**Configuration Highlights:**
- **Reverse Proxy Setup**: Nginx is configured to listen on the default HTTP port (80) and forward requests to the Node.js application running on port 3000.
- **Load Balancing**: Although this project uses a single Node.js instance, the Nginx configuration can be easily extended to support load balancing across multiple instances.

### Steps Involved
1. **Set up the Node.js application**:
   - Initialize a Node.js project and install necessary dependencies.
   - Develop the application logic to display running processes.
   - Configure the application to listen on port 3000.

2. **Install and configure Nginx**:
   - Install Nginx on the server.
   - Configure the Nginx server to forward requests to the Node.js application.
   - Test the configuration to ensure proper forwarding and handling of requests.


