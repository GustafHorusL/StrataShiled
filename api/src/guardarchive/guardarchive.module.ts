import { Module } from '@nestjs/common';
import { GUARDarchiveRepository } from './guardarchive.repository';

@Module({
  providers: [GUARDarchiveRepository],
  exports: [GUARDarchiveRepository],
})
export class GuardarchiveModule {}
