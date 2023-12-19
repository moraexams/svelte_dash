import { integer, sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

// ##### students table ######
// ###########################
export const student_tbl = sqliteTable('tbl_students', {
	id: integer('index_no', { mode: 'number' }).primaryKey(),
	nic: text('nic', { length: 15, mode: 'text' }).notNull().unique(),
	name: text('name', { length: 255, mode: 'text' }),
	gender: text('gender', { enum: ['M', 'F', 'NA'] }),
	stream_id: integer('stream_id', { mode: 'number' })
		.notNull()
		.references(() => streams_tbl.id),
	school: text('school', { length: 255, mode: 'text' }),
	address: text('address', { length: 255, mode: 'text' }),
	email: text('email', { length: 100, mode: 'text' }),
	telephone: text('telephone', { length: 15, mode: 'text' }),
	checked: integer('checked', { mode: 'boolean' }),
	by: integer('edited_by', { mode: 'number' }).references(() => user_tbl.user_id),
	dt: integer('edited_dt', { mode: 'timestamp' })
	// payment options ?
});

// ##### marks table ######
// ###########################
export const mark_tbl = sqliteTable('tbl_marks', {
	id: integer('index_no', { mode: 'number' })
		.primaryKey()
		.references(() => student_tbl.id),
	s1p1: real('s1p1_mrk'),
	s1p1_by: integer('s1p1_entry_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s1p1_dt: integer('s1p1_entry_dt', { mode: 'timestamp' }),
	s1p1_chkd: integer('s1p1_chkd', { mode: 'boolean' }),
	s1p1_mod_by: integer('s1p1_mod_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s1p1_mod_dt: integer('s1p1_mod_dt', { mode: 'timestamp' }),
	s1p2: real('s1p2_mrk'),
	s1p2_by: integer('s1p2_entry_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s1p2_dt: integer('s1p2_entry_dt', { mode: 'timestamp' }),
	s1p2_chkd: integer('s1p2_chkd', { mode: 'boolean' }),
	s1p2_mod_by: integer('s1p2_mod_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s1p2_mod_dt: integer('s1p2_mod_dt', { mode: 'timestamp' }),
	s2p1: real('s2p1_mrk'),
	s2p1_by: integer('s2p1_entry_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s2p1_dt: integer('s2p1_entry_dt', { mode: 'timestamp' }),
	s2p1_chkd: integer('s2p1_chkd', { mode: 'boolean' }),
	s2p1_mod_by: integer('s2p1_mod_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s2p1_mod_dt: integer('s2p1_mod_dt', { mode: 'timestamp' }),
	s2p2: real('s2p2_mrk'),
	s2p2_by: integer('s2p2_entry_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s2p2_dt: integer('s2p2_entry_dt', { mode: 'timestamp' }),
	s2p2_chkd: integer('s2p2_chkd', { mode: 'boolean' }),
	s2p2_mod_by: integer('s2p2_mod_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s2p2_mod_dt: integer('s2p2_mod_dt', { mode: 'timestamp' }),
	s3p1: real('s3p1_mrk'),
	s3p1_by: integer('s3p1_entry_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s3p1_dt: integer('s3p1_entry_dt', { mode: 'timestamp' }),
	s3p1_chkd: integer('s3p1_chkd', { mode: 'boolean' }),
	s3p1_mod_by: integer('s3p1_mod_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s3p1_mod_dt: integer('s3p1_mod_dt', { mode: 'timestamp' }),
	s3p2: real('s3p2_mrk'),
	s3p2_by: integer('s3p2_entry_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s3p2_dt: integer('s3p2_entry_dt', { mode: 'timestamp' }),
	s3p2_chkd: integer('s3p2_chkd', { mode: 'boolean' }),
	s3p2_mod_by: integer('s3p2_mod_by', { mode: 'number' }).references(() => user_tbl.user_id),
	s3p2_mod_dt: integer('s3p2_mod_dt', { mode: 'timestamp' })
});

// ##### exams table ######
// ###########################
export const exams_tbl = sqliteTable('tbllll', {
	id: integer('index_no', { mode: 'number' })
		.primaryKey()
		.references(() => student_tbl.id),
	streams_id: integer('stream_id', { mode: 'number' })
		.notNull()
		.references(() => streams_tbl.id),
	s1_id: integer('s1_id', { mode: 'number' })
		.notNull()
		.references(() => subjects_tbl.id),
	s1_medium: text('s1_medium', { enum: ['E', 'T'] }).notNull(),
	s2_id: integer('s2_id', { mode: 'number' })
		.notNull()
		.references(() => subjects_tbl.id),
	s2_medium: text('s2_medium', { enum: ['E', 'T'] }).notNull(),
	s3_id: integer('s3_id', { mode: 'number' })
		.notNull()
		.references(() => subjects_tbl.id),
	s3_medium: text('s3_medium', { enum: ['E', 'T'] }).notNull(),
	rnk_dist_id: integer('rnk_dist_id', { mode: 'number' })
		.notNull()
		.references(() => rnk_dist_tbl.dist_id),
	exm_dist_id: integer('exm_dist_id', { mode: 'number' })
		.notNull()
		.references(() => exm_dist_tbl.dist_id),
	cent_id: integer('cent_id', { mode: 'number' })
		.notNull()
		.references(() => exm_cent_tbl.cent_id)
});

// ##### subjects table ######
// ###########################
export const subjects_tbl = sqliteTable('subjects_tbl', {
	id: integer('subj_id').primaryKey(),
	name: text('subj_name', { length: 100, mode: 'text' }).notNull()
});
// 1 physics
// 2 chemistry
// 9 biology
// 10 com maths
// 20 ict
// in other tbl null not entered
// in other tbl 0 not taking

// ##### streams table ######
// ###########################
export const streams_tbl = sqliteTable('streams_tbl', {
	id: integer('stream_id').primaryKey(),
	name: text('stream_name', { length: 100, mode: 'text' }).notNull(),
	s1_id: integer('s1', { mode: 'number' })
		.default(0)
		.notNull()
		.references(() => subjects_tbl.id),
	s2_id: integer('s2', { mode: 'number' })
		.default(0)
		.notNull()
		.references(() => subjects_tbl.id),
	s3_id: integer('s3', { mode: 'number' })
		.default(0)
		.notNull()
		.references(() => subjects_tbl.id),
	rnk: integer('rank', { mode: 'boolean' }).notNull().default(false)
});
// in other tbl null not entered
// in other tbl 0 not a stream
// 101 physics only
// 102 chemistry only
// 109 biology only
// 110 com maths only
// 120 ict only
// 20902 agri
// 3090102 biological science stream
// 3100102 physical science stream
// 3100120 maths ict stream
// 3090220 bio chem ict stream
// 3090120 bio phy ict stream

export const result_tbl = sqliteTable('tbl_results', {
	id: integer('index_no', { mode: 'number' })
		.primaryKey()
		.references(() => student_tbl.id),
	stream_id: integer('stream_id', { mode: 'number' })
		.notNull()
		.references(() => streams_tbl.id),
	s1_result: text('subject1_result'),
	s2_result: text('subject2_result'),
	s3_result: text('subject3_result'),
	d_rnk: integer('rnk_d', { mode: 'number' }),
	i_rnk: integer('rnk_i', { mode: 'number' })
});

// rnk_dist_tbl
export const rnk_dist_tbl = sqliteTable('rnk_dist_tbl', {
	dist_id: integer('rnk_dist_id', { mode: 'number' }).primaryKey().notNull(),
	dist_name: text('rnk_dist_name').unique().notNull()
});

// exm_dist_tbl
export const exm_dist_tbl = sqliteTable('exm_dist_tbl', {
	dist_id: integer('exm_dist_id', { mode: 'number' }).primaryKey().notNull(),
	dist_name: text('exm_dist_name').unique().notNull()
});

// exm_cent_tbl
export const exm_cent_tbl = sqliteTable('exm_cent_tbl', {
	cent_id: integer('cent_id', { mode: 'number' }).primaryKey().notNull(),
	cent_name: text('cent_name').unique().notNull(),
	cent_map: text('cent_map')
});

// user_tbl
export const user_tbl = sqliteTable('user_tbl', {
	user_id: integer('user_id', { mode: 'number' }).primaryKey().notNull(),
	user_name: text('user_name').unique().notNull(),
	admin: integer('admin', { mode: 'boolean' }).notNull(),
	password_hash: text('hash').unique().notNull()
});

// sqlite views
// rank statistics in each district ( total sitting, total candidates)
// readable rank view
// readable student and exams detail view
// center wise details
