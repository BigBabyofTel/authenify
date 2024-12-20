import { index, int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { z } from 'zod'

export const usersTable = sqliteTable(
  'usersTable',
  {
    id: int('id').primaryKey({ autoIncrement: true }),
    username: text('username').notNull().unique(),
    password: text('password').notNull().unique(),
    createdAt: text('createdAt').notNull().default('CURRENT_TIMESTAMP'),
  },
  t => [index('username_idx').on(t.username)],
)

export const userSchema = z.object({
  username: z.string().min(1).max(255),
  password: z.string().min(5).max(255),
})
