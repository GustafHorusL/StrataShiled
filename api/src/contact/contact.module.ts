import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { GuardarchiveModule } from '../guardarchive/guardarchive.module';

@Module({
  imports: [GuardarchiveModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
