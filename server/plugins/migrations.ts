import { migrate } from 'drizzle-orm/d1/migrator'

import { useDrizzle } from '../utils/drizzle'

import { defineNitroPlugin, onHubReady } from '#imports'

export default defineNitroPlugin(async () => {
  if (!import.meta.dev) {
    return
  }

  onHubReady(async () => {
    await migrate(useDrizzle(), {
      migrationsFolder: './server/db/migrations',
    })
  })
})
