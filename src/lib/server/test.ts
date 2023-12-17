// const result = await db.query.applicants.findMany({
// 	where: eq(schema.applicants.nic, nic_no)
// });

// const res = await client.execute(`
// SELECT tbl_students.index_no, tbl_marks.subject1_part1 AS maths_marks
// FROM tbl_students
// JOIN tbl_students ON tbl_students.index_no = tbl_marks.index_no
// WHERE tbl_students.subject_group_id = 'MATHS';`);
// console.log(res);
// const res = await client.execute(`
// SELECT index_no, name....columnN
// FROM tbl_students
// WHERE nic==`);
// console.log(res);

// const result = await db.select().from(schema.student_tbl).limit(10);

// console.log(result);

// async function createAverageMarksTable() {
// 	await db.schema.createTable('average_marks', (table) => {
// 		table.float('science');
// 		table.float('maths');
// 	});
// }
