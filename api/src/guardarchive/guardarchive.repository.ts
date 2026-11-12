import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { CreateContactDto } from '../contact/dto/create-contact.dto';
import { SUPABASE_CLIENT } from '../supabase/supabase.constants';

export interface GuardarchiveContact {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  status: 'new' | 'reviewed' | 'closed';
  createdAt: string;
}

type ContactRow = {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  status: GuardarchiveContact['status'];
  created_at: string;
};

@Injectable()
export class GUARDarchiveRepository {
  private readonly table = 'contacts';

  constructor(
    @Inject(SUPABASE_CLIENT)
    private readonly client: SupabaseClient,
  ) {}

  async createContact(dto: CreateContactDto): Promise<GuardarchiveContact> {
    const { data, error } = await this.client
      .from(this.table)
      .insert({
        name: dto.name,
        email: dto.email.toLowerCase(),
        company: dto.company ?? '',
        message: dto.message,
        status: 'new',
      })
      .select('id, name, email, company, message, status, created_at')
      .single<ContactRow>();

    if (error) {
      throw new InternalServerErrorException(
        `GUARDarchive could not create contact: ${error.message}`,
      );
    }

    return this.toContact(data);
  }

  async findContacts(): Promise<GuardarchiveContact[]> {
    const { data, error } = await this.client
      .from(this.table)
      .select('id, name, email, company, message, status, created_at')
      .order('created_at', { ascending: false })
      .limit(100)
      .returns<ContactRow[]>();

    if (error) {
      throw new InternalServerErrorException(
        `GUARDarchive could not list contacts: ${error.message}`,
      );
    }

    return (data ?? []).map((row) => this.toContact(row));
  }

  private toContact(row: ContactRow): GuardarchiveContact {
    return {
      id: row.id,
      name: row.name,
      email: row.email,
      company: row.company,
      message: row.message,
      status: row.status,
      createdAt: row.created_at,
    };
  }
}
