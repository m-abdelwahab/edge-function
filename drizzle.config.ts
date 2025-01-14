import type { Config } from "drizzle-kit";

export default {
  schema: './netlify/edge-functions/users.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
} satisfies Config;