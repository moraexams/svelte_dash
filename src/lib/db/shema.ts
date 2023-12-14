import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const applicants = sqliteTable('tbl_students', {
	id: text('index_no', { length: 50, mode: 'text' }).notNull(),
	name: text('name', { length: 255, mode: 'text' }),
	email: text('email', { length: 255, mode: 'text' }),
	nic: text('nic', { length: 15, mode: 'text' }).notNull()
});
