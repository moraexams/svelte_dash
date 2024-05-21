import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		students: await db.query.students_tbl.findMany({
			columns: {
				id: true,
				name: true,
				nic: true,
				stream_id: true,
				gender: true,
				school: true,
				address: true,
				email: true,
				telephone: true,
				checked: true,
				by: true,
				dt: true
			},
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
