import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from './supabase.constants';

@Global()
@Module({
  providers: [
    {
      provide: SUPABASE_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService): SupabaseClient => {
        const url = config.get<string>('SUPABASE_URL');
        // The secret key stays on the server and bypasses RLS by design.
        // SUPABASE_SERVICE_ROLE_KEY is kept as a migration fallback.
        const key =
          config.get<string>('SUPABASE_SECRET_KEY') ??
          config.get<string>('SUPABASE_SERVICE_ROLE_KEY');

        if (!url || !key) {
          throw new Error(
            'Missing SUPABASE_URL and SUPABASE_SECRET_KEY (or SUPABASE_SERVICE_ROLE_KEY)',
          );
        }

        return createClient(url, key, {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
          },
        });
      },
    },
  ],
  exports: [SUPABASE_CLIENT],
})
export class SupabaseModule {}
