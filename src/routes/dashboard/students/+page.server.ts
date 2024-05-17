import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		student_tbl: await db.query.student_tbl.findMany({
			limit: 10
		})
	};
};

// const get_table = async () => {
// 	// const result = await db.select().from(schema.applicants);
// 	const result = await db.query.student_tbl.findMany({
// 		limit: 10,
// 		offset: 0
// 	});
// 	return result;
// };
