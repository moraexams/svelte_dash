import { relations } from "drizzle-orm";
import {
	integer,
	sqliteTable,
	text,
	real,
	numeric,
} from "drizzle-orm/sqlite-core";

// ##### students table ######
// ###########################
export const students_tbl = sqliteTable("students_tbl", {
	id: integer("index_no", { mode: "number" }).primaryKey(),
	nic: text("nic", { length: 12, mode: "text" })
		.notNull()
		// .unique()
		.default("000000000000"),
	name: text("name", { length: 255, mode: "text" }),
	gender: text("gender", { enum: ["M", "F", "NA"] }),
	stream_id: integer("stream_id", { mode: "number" })
		.notNull()
		.references(() => streams_tbl.id),
	school: text("school", { length: 255, mode: "text" }),
	address: text("address", { length: 255, mode: "text" }),
	email: text("email", { length: 100, mode: "text" }),
	telephone: text("telephone", { length: 15, mode: "text" }),
	checked: integer("checked", { mode: "boolean" }).default(false),
	by: integer("edited_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	dt: integer("edited_dt", { mode: "timestamp" }),
	// payment options ?
});

// ##### marks table ######
// ###########################
export const marks_tbl = sqliteTable("marks_tbl", {
	id: integer("index_no", { mode: "number" })
		.primaryKey()
		.references(() => students_tbl.id),
	s1p1: real("s1p1_mrk"),
	s1p1_by: integer("s1p1_entry_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s1p1_dt: integer("s1p1_entry_dt", { mode: "timestamp" }),
	s1p1_chkd: integer("s1p1_chkd", { mode: "boolean" }),
	s1p1_mod_by: integer("s1p1_mod_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s1p1_mod_dt: integer("s1p1_mod_dt", { mode: "timestamp" }),
	s1p2: real("s1p2_mrk"),
	s1p2_by: integer("s1p2_entry_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s1p2_dt: integer("s1p2_entry_dt", { mode: "timestamp" }),
	s1p2_chkd: integer("s1p2_chkd", { mode: "boolean" }),
	s1p2_mod_by: integer("s1p2_mod_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s1p2_mod_dt: integer("s1p2_mod_dt", { mode: "timestamp" }),
	s2p1: real("s2p1_mrk"),
	s2p1_by: integer("s2p1_entry_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s2p1_dt: integer("s2p1_entry_dt", { mode: "timestamp" }),
	s2p1_chkd: integer("s2p1_chkd", { mode: "boolean" }),
	s2p1_mod_by: integer("s2p1_mod_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s2p1_mod_dt: integer("s2p1_mod_dt", { mode: "timestamp" }),
	s2p2: real("s2p2_mrk"),
	s2p2_by: integer("s2p2_entry_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s2p2_dt: integer("s2p2_entry_dt", { mode: "timestamp" }),
	s2p2_chkd: integer("s2p2_chkd", { mode: "boolean" }),
	s2p2_mod_by: integer("s2p2_mod_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s2p2_mod_dt: integer("s2p2_mod_dt", { mode: "timestamp" }),
	s3p1: real("s3p1_mrk"),
	s3p1_by: integer("s3p1_entry_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s3p1_dt: integer("s3p1_entry_dt", { mode: "timestamp" }),
	s3p1_chkd: integer("s3p1_chkd", { mode: "boolean" }),
	s3p1_mod_by: integer("s3p1_mod_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s3p1_mod_dt: integer("s3p1_mod_dt", { mode: "timestamp" }),
	s3p2: real("s3p2_mrk"),
	s3p2_by: integer("s3p2_entry_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s3p2_dt: integer("s3p2_entry_dt", { mode: "timestamp" }),
	s3p2_chkd: integer("s3p2_chkd", { mode: "boolean" }),
	s3p2_mod_by: integer("s3p2_mod_by", { mode: "number" }).references(
		() => users_tbl.user_id
	),
	s3p2_mod_dt: integer("s3p2_mod_dt", { mode: "timestamp" }),
});

// ##### exams table ######
// ###########################
export const exams_tbl = sqliteTable("exams_tbl", {
	id: integer("index_no", { mode: "number" })
		.primaryKey()
		.references(() => students_tbl.id),
	streams_id: integer("stream_id", { mode: "number" })
		.notNull()
		.references(() => streams_tbl.id),
	s1_id: integer("s1_id", { mode: "number" })
		.notNull()
		.references(() => subjects_tbl.id),
	s1_medium: text("s1_medium", { enum: ["E", "T"] }).notNull(),
	s2_id: integer("s2_id", { mode: "number" })
		.notNull()
		.references(() => subjects_tbl.id),
	s2_medium: text("s2_medium", { enum: ["E", "T"] }).notNull(),
	s3_id: integer("s3_id", { mode: "number" })
		.notNull()
		.references(() => subjects_tbl.id),
	s3_medium: text("s3_medium", { enum: ["E", "T"] }).notNull(),
	rnk_dist_id: integer("rnk_dist_id", { mode: "number" })
		.notNull()
		.references(() => rnk_dist_tbl.dist_id),
	exm_dist_id: integer("exm_dist_id", { mode: "number" })
		.notNull()
		.references(() => exm_dist_tbl.dist_id),
	cent_id: integer("cent_id", { mode: "number" })
		.notNull()
		.references(() => exm_cent_tbl.cent_id),
});

// ##### subjects table ######
// ###########################
export const subjects_tbl = sqliteTable("subjects_tbl", {
	id: integer("subj_id").primaryKey(),
	name: text("subj_name", { length: 100, mode: "text" }).notNull(),
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
export const streams_tbl = sqliteTable("streams_tbl", {
	id: integer("stream_id").primaryKey(),
	name: text("stream_name", { length: 100, mode: "text" }).notNull(),
	s1_id: integer("s1", { mode: "number" })
		.default(0)
		.notNull()
		.references(() => subjects_tbl.id),
	s2_id: integer("s2", { mode: "number" })
		.default(0)
		.notNull()
		.references(() => subjects_tbl.id),
	s3_id: integer("s3", { mode: "number" })
		.default(0)
		.notNull()
		.references(() => subjects_tbl.id),
	rnk: integer("rank", { mode: "boolean" }).notNull().default(false),
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

export const results_tbl = sqliteTable("results_tbl", {
	id: integer("index_no", { mode: "number" })
		.primaryKey()
		.references(() => students_tbl.id),
	stream_id: integer("stream_id", { mode: "number" })
		.notNull()
		.references(() => streams_tbl.id),
	s1_result: text("subject1_result", { length: 3 }),
	s2_result: text("subject2_result", { length: 3 }),
	s3_result: text("subject3_result", { length: 3 }),
	d_rnk: integer("rnk_d", { mode: "number" }),
	i_rnk: integer("rnk_i", { mode: "number" }),
});

// rnk_dist_tbl
export const rnk_dist_tbl = sqliteTable("rnk_dist_tbl", {
	dist_id: integer("rnk_dist_id", { mode: "number" }).primaryKey().notNull(),
	dist_name: text("rnk_dist_name").unique().notNull(),
});

// exm_dist_tbl
export const exm_dist_tbl = sqliteTable("exm_dist_tbl", {
	dist_id: integer("exm_dist_id", { mode: "number" }).primaryKey().notNull(),
	dist_name: text("exm_dist_name").notNull(), // unique
});

// exm_cent_tbl
export const exm_cent_tbl = sqliteTable("exm_cent_tbl", {
	cent_id: integer("cent_id", { mode: "number" }).primaryKey().notNull(),
	dist_id: integer("exm_dist_id", { mode: "number" })
		.notNull()
		.references(() => exm_dist_tbl.dist_id),
	cent_name: text("cent_name").unique().notNull(),
	gender: text("gender", { enum: ["M", "F", "MIX"] })
		.notNull()
		.default("MIX"),
	cent_map: text("cent_map"),
});

// user_tbl
export const users_tbl = sqliteTable("users_tbl", {
	user_id: integer("user_id", { mode: "number" }).primaryKey().notNull(),
	username: text("username").unique().notNull(),
	admin: integer("admin", { mode: "boolean" }).notNull().default(false),
	access: integer("access", { mode: "boolean" }).notNull().default(false),
	track: text("track", { mode: "json" }),
	pass_hash: text("pass_hash").unique().notNull(),
	// used for persisting logged in state
	cookie: text("logged_in_cookie").unique(),
	created_at: integer("created_at", { mode: "timestamp_ms" }),
});

export const log_tbl = sqliteTable("logs_tbl", {
	id: integer("index_no", { mode: "number" })
		.primaryKey()
		.references(() => students_tbl.id),
	tx_url: text("tx_url").notNull().default("offline"),
	mods: text("mods", { mode: "json" }),
});

export const exm_dist_coordinators_tbl = sqliteTable(
	"exm_dist_coordinators_tbl",
	{
		coordinator_id: integer("coordinator_id", {
			mode: "number",
		}).primaryKey(),
		dist_id: integer("dist_id", {
			mode: "number",
		}).notNull(),
		name: text("name").notNull(),
		telephone: text("telephone", { length: 15, mode: "text" }),
	}
);

// sqlite views
// rank statistics in each district ( total sitting, total candidates)
// readable rank view
// readable student and exams detail view
// center wise details

// · You're about to delete tbl_feedback table with 299 items
// · You're about to delete tbl_online table with 6637 items

// · You're about to delete coordinator column in tbl_exam_districts table with 32 items
// · You're about to delete telephone column in tbl_exam_districts table with 32 items

// · You're about to delete district_id_ranking column in tbl_students table with 6821 items
// · You're about to delete district_ranking column in tbl_students table with 6821 items
// · You're about to delete district_id_sitting column in tbl_students table with 6821 items
// · You're about to delete centre_id column in tbl_students table with 6821 items
// · You're about to delete datetime column in tbl_students table with 6821 items
// · You're about to delete checked_by column in tbl_students table with 6821 items
// · You're about to delete firstname column in tbl_users table with 14 items
// · You're about to delete lastname column in tbl_users table with 14 items
// · You're about to delete status column in tbl_users table with 14 items
// · You're about to delete date column in tbl_users table with 14 items

//
// DISABLED FOR NOW
//

// export const students_relation = relations(students_tbl, ({ one }) => ({
// 	results: one(results_tbl, {
// 		fields: [students_tbl.id],
// 		references: [results_tbl.id],
// 	}),
// 	marks: one(marks_tbl, {
// 		fields: [students_tbl.id],
// 		references: [marks_tbl.id],
// 	}),
// 	stream: one(streams_tbl, {
// 		fields: [students_tbl.stream_id],
// 		references: [streams_tbl.id],
// 	}),
// 	exams: one(exams_tbl, {
// 		fields: [students_tbl.id],
// 		references: [exams_tbl.id],
// 	}),
// }));

// export const subjects_relation = relations(subjects_tbl, ({ many }) => ({
// 	streams: many(streams_tbl),
// }));

// // Bug: these relations are not being visualized now
// export const streams_subject_relation = relations(streams_tbl, ({ one }) => ({
// 	s1: one(subjects_tbl, {
// 		fields: [streams_tbl.s1_id],
// 		references: [subjects_tbl.id],
// 	}),
// 	s2: one(subjects_tbl, {
// 		fields: [streams_tbl.s2_id],
// 		references: [subjects_tbl.id],
// 	}),
// 	s3: one(subjects_tbl, {
// 		fields: [streams_tbl.s3_id],
// 		references: [subjects_tbl.id],
// 	}),
// }));

// export const streams_relation = relations(streams_tbl, ({ many }) => ({
// 	students: many(students_tbl),
// 	results: many(results_tbl),
// }));

// export const exam_centre_relations = relations(exm_cent_tbl, ({ one }) => ({
// 	district: one(exm_dist_tbl, {
// 		fields: [exm_cent_tbl.dist_id],
// 		references: [exm_dist_tbl.dist_id],
// 	}),
// }));

// export const exams_relations = relations(exams_tbl, ({ one }) => ({
// 	stream: one(streams_tbl, {
// 		fields: [exams_tbl.streams_id],
// 		references: [streams_tbl.id],
// 	}),
// }));

// export const exam_dist_relations = relations(exm_dist_tbl, ({ many }) => ({
// 	coordinators: many(exm_dist_coordinators_tbl),
// 	exam_centres: many(exm_cent_tbl),
// }));

// export const exam_dist_coordinators_relations = relations(
// 	exm_dist_coordinators_tbl,
// 	({ one }) => ({
// 		dist: one(exm_dist_tbl, {
// 			fields: [exm_dist_coordinators_tbl.dist_id],
// 			references: [exm_dist_tbl.dist_id],
// 		}),
// 	})
// );

// export const results_relations = relations(results_tbl, ({ one }) => ({
// 	stream: one(streams_tbl, {
// 		fields: [results_tbl.stream_id],
// 		references: [streams_tbl.id],
// 	}),
// }));
