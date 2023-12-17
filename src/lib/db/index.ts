import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './shema';

// insecure implementation. find a way to initiate the client on server side and use in in client side.
export const client = createClient({
	url: import.meta.env.VITE_TURSO_DATABASE_URL,
	authToken: import.meta.env.VITE_TURSO_DATABASE_AUTH_TOKEN
});

// await client.sync(); // for turso embedded replicas

export const db = drizzle(client, { schema });
