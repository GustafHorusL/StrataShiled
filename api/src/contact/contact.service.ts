import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import {
  GUARDarchiveRepository,
  GuardarchiveContact,
} from '../guardarchive/guardarchive.repository';

@Injectable()
export class ContactService {
  constructor(
    private readonly guardarchive: GUARDarchiveRepository,
  ) {}

  create(dto: CreateContactDto): Promise<GuardarchiveContact> {
    return this.guardarchive.createContact(dto);
  }

  findAll(): Promise<GuardarchiveContact[]> {
    return this.guardarchive.findContacts();
  }
}
