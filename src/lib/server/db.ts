import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './shema';

export const client = createClient({
	url: env.TURSO_DATABASE_URL,
	authToken: env.TURSO_DATABASE_AUTH_TOKEN
});

// await client.sync(); // for turso embedded replicas
export const db = drizzle(client, { schema });
