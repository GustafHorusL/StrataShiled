import { IsEmail, IsInt, IsString, Max, Min } from 'class-validator';

export class CrearTicketDto {
  @IsString()
  titulo!: string;

  @IsString()
  contenido!: string;

  @IsInt()
  @Min(1)
  @Max(5)
  urgencia!: number;

  @IsEmail()
  correoCliente!: string;
}