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
// export const client = createClient({
// 	url: import.meta.env.VITE_TURSO_DATABASE_URL,
// 	authToken: import.meta.env.VITE_TURSO_DATABASE_AUTH_TOKEN
// });

const client = createClient({
	url: 'file:./src/lib/db/me22.db'
	// authToken: import.meta.env.VITE_TURSO_DATABASE_AUTH_TOKEN
});

// await client.sync();
export const db = drizzle(client, { schema });

// const result = await db.query.applicants.findMany({
// 	where: eq(schema.applicants.nic, nic_no)
// });

// const res = await client.execute(`
// SELECT tbl_students.index_no, tbl_marks.subject1_part1 AS maths_marks
// FROM tbl_students
// JOIN tbl_students ON tbl_students.index_no = tbl_marks.index_no
// WHERE tbl_students.subject_group_id = 'MATHS';`);
// console.log(res);
const res = await client.execute(`
SELECT index_no, name....columnN
FROM tbl_students
WHERE nic==`);
console.log(res);

// const result = await db.select().from(schema.student_tbl);

// console.log(result);

// async function createAverageMarksTable() {
// 	await db.schema.createTable('average_marks', (table) => {
// 		table.float('science');
// 		table.float('maths');
// 	});
// }
