import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { dbCredentials } from './config';

export const client = createClient(dbCredentials);

// await client.sync(); // for turso embedded replicas
export const db = drizzle(client, { schema });
