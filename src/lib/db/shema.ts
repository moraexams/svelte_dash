import { integer, sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

export const student_tbl = sqliteTable('tbl_students', {
	id: text('index_no', { length: 50, mode: 'text' }).notNull().primaryKey(),
	name: text('name', { length: 255, mode: 'text' }),
	sub_grp: text('subject_group_id', { length: 100, mode: 'text' }),
	// sub_grp_id: text('subject_group_id', { length: 100, mode: 'text' }),
	medium: text('medium', { length: 100, mode: 'text' }),
	rnk_dist_id: integer('district_id_ranking'),
	// rnk_dist: text('district_ranking', { length: 255, mode: 'text' }),
	exm_dist_id: integer('district_id_sitting'),
	exm_cent_id: text('centre_id', { length: 100, mode: 'text' }).notNull(),
	nic: text('nic', { length: 15, mode: 'text' }).notNull(),
	gender: text('gender', { length: 100, mode: 'text' }),
	school: text('school', { length: 100, mode: 'text' }),
	address: text('address', { length: 255, mode: 'text' }),
	email: text('email', { length: 255, mode: 'text' }),
	telephone: text('telephone', { length: 15, mode: 'text' }),
	checked: text('checked', { length: 100, mode: 'text' }),
	reg_by: text('user_id', { length: 100, mode: 'text' }),
	reg_dt: text('datetime'),
	chk_by: text('checked_by', { length: 100, mode: 'text' }),
	// datetime: integer('datetime', { mode: 'timestamp' }),
	chk_dt: text('checked_datetime')
});

export const mark_tbl = sqliteTable('tbl_marks', {
	id: text('index_no', { length: 50, mode: 'text' }).notNull().primaryKey(),
	// sub_grp: text('subject_group_id', { length: 100, mode: 'text' }),
	s1p1: real('subject1_part1'),
	s1p1_by: text('sub1_p1_entered_by', { length: 200, mode: 'text' }),
	s1p1_chk: integer('sub1_p1_checked'),
	s1p1_chk_by: text('sub1_p1_checked_by', { length: 200, mode: 'text' }),
	// s1p1_dt: text('checked_by', { length: 100, mode: 'text' }),
	// s1p1_mod_by: text('sub1_p1_checked_by', { length: 100, mode: 'text' }),
	// s1p1_mod_dt: text('checked_by', { length: 100, mode: 'text' }),
	s1p2: real('subject1_part2'),
	s1p2_by: text('sub1_p2_entered_by', { length: 200, mode: 'text' }),
	s1p2_chk: integer('sub1_p2_checked'),
	s1p2_chk_by: text('sub1_p2_checked_by', { length: 200, mode: 'text' }),
	// s1p2_dt: text('checked_by', { length: 100, mode: 'text' }),
	// s1p2_mod_by: text('checked_by', { length: 100, mode: 'text' }),
	// s1p2_mod_dt: text('checked_by', { length: 100, mode: 'text' }),
	s2p1: real('subject2_part1'),
	s2p1_by: text('sub2_p1_entered_by', { length: 200, mode: 'text' }),
	s2p1_chk: integer('sub2_p1_checked'),
	s2p1_chk_by: text('sub2_p1_checked_by', { length: 200, mode: 'text' }),
	// s2p1_dt: text('checked_by', { length: 100, mode: 'text' }),
	// s2p1_mod_by: text('checked_by', { length: 100, mode: 'text' }),
	// s2p1_mod_dt: text('checked_by', { length: 100, mode: 'text' }),
	s2p2: real('subject2_part2'),
	s2p2_by: text('sub2_p2_entered_by', { length: 200, mode: 'text' }),
	s2p2_chk: integer('sub2_p2_checked'),
	s2p2_chk_by: text('sub2_p2_checked_by', { length: 200, mode: 'text' }),
	// s2p2_dt: text('checked_by', { length: 100, mode: 'text' }),
	// s2p2_mod_by: text('checked_by', { length: 100, mode: 'text' }),
	// s2p2_mod_dt: text('checked_by', { length: 100, mode: 'text' }),
	s3p1: real('subject3_part1'),
	s3p1_by: text('sub3_p1_entered_by', { length: 200, mode: 'text' }),
	s3p1_chk: integer('sub3_p1_checked'),
	s3p1_chk_by: text('sub3_p1_checked_by', { length: 200, mode: 'text' }),
	// s3p1_dt: text('checked_by', { length: 100, mode: 'text' }),
	// s3p1_mod_by: text('checked_by', { length: 100, mode: 'text' }),
	// s3p1_mod_dt: text('checked_by', { length: 100, mode: 'text' }),
	s3p2: real('subject3_part2'),
	s3p2_by: text('sub3_p2_entered_by', { length: 200, mode: 'text' }),
	s3p2_chk: integer('sub3_p2_checked'),
	s3p2_chk_by: text('sub3_p2_checked_by', { length: 200, mode: 'text' })
	// s3p2_dt: text('checked_by', { length: 100, mode: 'text' }),
	// s3p2_mod_by: text('checked_by', { length: 100, mode: 'text' }),
	// s3p2_mod_dt: text('checked_by', { length: 100, mode: 'text' })
});

export const mod_mark_tbl = sqliteTable('tbl_marks', {
	id: text('index_no', { length: 50, mode: 'text' }).notNull().primaryKey(),
	sub_grp: text('subject_group_id', { length: 100, mode: 'text' }),
	s1p1: real('medium'),
	s1p2: real('medium'),
	s2p1: real('medium'),
	s2p2: real('medium'),
	s3p1: real('medium'),
	s3p2: real('medium')
});

export const result_tbl = sqliteTable('tbl_results', {
	id: text('index_no', { length: 50, mode: 'text' }).notNull().primaryKey(),
	name: text('name', { length: 100, mode: 'text' }),
	sub_grp: text('subject_group_id', { length: 100, mode: 'text' }),
	medium: text('medium', { length: 100, mode: 'text' }),
	s1_result: text('subject1_result'),
	s2_result: text('subject2_result'),
	s3_result: text('subject3_result'),
	dist_rnk: text('district_ranking')
	// island_rnk: integer('rnk_d', { mode: 'number' })
});

// rnk_dist_tbl
// exm_dist_tbl
// exm_cent_tbl
// sub_grp_tbl
// school_tbl
// user_tbl
