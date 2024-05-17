// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import { db } from "$lib/server/db";
import { count } from "drizzle-orm";
import type { PageServerLoad } from "../$types";
import { student_tbl } from "$lib/server/shema";

export const load: PageServerLoad = async (args) => {
	const dbResponse = await db.select({ total: count(), verified: count(student_tbl.checked) }).from(student_tbl)

	return {
		students: {
		total: dbResponse[0].total,
		verifiedPercentage: (dbResponse[0].verified * 100 / dbResponse[0].total).toFixed(2)
		}
	};
};