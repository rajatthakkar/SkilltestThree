// src/config/webSocket.js
import websocket from 'websocket';


const setupWebSocket = (server) => {
  // Create a new WebSocket server
  const wss = new websocket.connection


  // Handle new client connections
  wss.on('connection', (ws) => {
    console.log('New client connected');

    // Handle incoming messages from clients
    ws.on('message', (message) => {
      console.log(`Received: ${message}`);
      
      // Send a response back to the client
      ws.send(`Server received: ${message}`);
    });

    // Handle client disconnection
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
};

// Export the setupWebSocket function
export default setupWebSocket; 
