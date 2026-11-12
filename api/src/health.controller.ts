import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get()
  root() {
    return { service: 'stratashield-api', status: 'ok' };
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }
}
