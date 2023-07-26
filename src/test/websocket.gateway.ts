// websocket.gateway.ts
import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: any, ...args: any[]) {
    // Handle a new client connection
        this.server.emit('message', `Client ${client.id} connected`);

  }

  handleDisconnect(client: any) {
    // Handle a client disconnection
        this.server.emit('message', `Client ${client.id} disconnected`);

  }

  // Add more methods to handle events and data exchange
  @SubscribeMessage('chat')
  async onChat(client, message) {
    client.broadcast.emit('chat', message);
  }
}
