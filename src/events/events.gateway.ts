import {WebSocketGateway, SubscribeMessage, MessageBody} from '@nestjs/websockets'

@WebSocketGateway(80, { namespace: 'events' })
export class EventsGateway {
    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string): string {
    return data;
    }
}