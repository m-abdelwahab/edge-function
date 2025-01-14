import { drizzle } from 'https://esm.sh/drizzle-orm@0.38.3/neon-http';
import { pgTable, serial, text, timestamp } from 'https://esm.sh/drizzle-orm@0.38.3/pg-core';

export const users = pgTable('users', {
  id: serial().primaryKey(),
  name: text(),
  email: text(),
  createdAt: timestamp().defaultNow(),
});


export const schema ={
  users
}

const db = drizzle(Netlify.env.get("DATABASE_URL"),{
  schema: {
    users: users
  }
});


export default async () => {
  const users = await db.query.users.findMany();
  return new Response(JSON.stringify(users));
};


export const config = {
  path: '/users',
}