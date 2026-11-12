import { Injectable } from '@nestjs/common';
import { CrearTicketDto } from './dto/crear-ticket.dto';

@Injectable()
export class TicketsService {
  registrarTicket(crearTicketDto: CrearTicketDto) {
    const status =
      crearTicketDto.urgencia > 3
        ? 'Prioridad Flash - Asignando Worker'
        : 'En cola estándar';

    return {
      mensaje: 'Ticket registrado correctamente',
      ...crearTicketDto,
      status,
    };
  }
}