import { Body, Controller, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CrearTicketDto } from './dto/crear-ticket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post('registrar')
  registrar(@Body() crearTicketDto: CrearTicketDto) {
    return this.ticketsService.registrarTicket(crearTicketDto);
  }
}
