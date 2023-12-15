import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './shema';
// export type Applicant = {
// 	id: string;
// 	name: string;
// 	email: string;
// 	nic: string;
// };

// insecure implementation. find a way to initiate the client on server side and use in in client side.
export const client = createClient({
	url: import.meta.env.VITE_TURSO_DATABASE_URL,
	authToken: import.meta.env.VITE_TURSO_DATABASE_AUTH_TOKEN
});

export const db = drizzle(client, { schema });

// const result = await db.query.applicants.findMany({
// 	where: eq(schema.applicants.nic, nic_no)
// });

const result = await db.select().from(schema.student_tbl);

// console.log(result);
