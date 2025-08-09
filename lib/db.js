import { neon } from '@neondatabase/serverless'

export const getDb = () => {
  const url = process.env.DATABASE_URL
  if (!url) return null
  try {
    return neon(url)
  } catch (err) {
    console.warn('[db] Failed to init Neon client:', err)
    return null
  }
}

export const ensureSchema = async () => {
  const sql = getDb()
  if (!sql) return
  await sql`create table if not exists submissions (
    id text primary key,
    type text not null,
    timestamp timestamptz not null,
    data jsonb not null
  )`
}

export const insertSubmission = async (submission) => {
  const sql = getDb()
  if (!sql) return { skipped: true }
  await ensureSchema()
  await sql`insert into submissions (id, type, timestamp, data) values (
    ${submission.id}, ${submission.type}, ${submission.timestamp}, ${JSON.stringify(submission.data)}::jsonb
  ) on conflict (id) do nothing`
  return { ok: true }
}

export const fetchSubmissions = async () => {
  const sql = getDb()
  if (!sql) return null
  await ensureSchema()
  const rows = await sql`select id, type, timestamp, data from submissions order by timestamp desc`
  return rows
}


