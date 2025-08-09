import fs from 'fs'
import path from 'path'
import { fetchSubmissions } from '../../../lib/db'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Prefer database if available
    const dbRows = await fetchSubmissions()
    if (dbRows) {
      const submissions = dbRows.map((r) => ({
        id: r.id,
        type: r.type,
        timestamp: r.timestamp,
        data: r.data
      }))
      return res.status(200).json({ submissions })
    }

    // Fallback to file
    const dbPath = path.join(process.cwd(), 'data', 'submissions.json')
    if (!fs.existsSync(dbPath)) {
      return res.status(200).json({ submissions: [] })
    }
    const fileContent = fs.readFileSync(dbPath, 'utf8')
    const submissions = JSON.parse(fileContent)
    submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    res.status(200).json({ submissions })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    res.status(500).json({ message: 'Error fetching submissions' })
  }
}

