import fs from 'fs'
import path from 'path'
import { sendSubmissionEmail } from '../../lib/email'
import { insertSubmission } from '../../lib/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { 
      firstName, 
      lastName, 
      phone, 
      email, 
      address, 
      propertyType, 
      services, 
      timeline, 
      budget, 
      details 
    } = req.body

    // Create submission data
    const submission = {
      id: Date.now().toString(),
      type: 'survey',
      timestamp: new Date().toISOString(),
      data: {
        firstName,
        lastName,
        phone,
        email,
        address,
        propertyType,
        services,
        timeline,
        budget,
        details
      }
    }

    // Prefer database storage when configured
    try {
      await insertSubmission(submission)
    } catch (dbErr) {
      console.warn('[survey] DB insert failed, falling back to file:', dbErr?.message || dbErr)
    }

    // Best-effort local storage (may not be writable in some serverless/prod envs)
    try {
      const dbPath = path.join(process.cwd(), 'data', 'submissions.json')
      const dataDir = path.join(process.cwd(), 'data')
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
      }
      let submissions = []
      if (fs.existsSync(dbPath)) {
        const fileContent = fs.readFileSync(dbPath, 'utf8')
        submissions = JSON.parse(fileContent)
      }
      submissions.push(submission)
      fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2))
    } catch (persistErr) {
      console.warn('[survey] Persist skipped:', persistErr?.message || persistErr)
    }

    // Email notification (skip if no API key provided)
    await sendSubmissionEmail({ type: 'survey', submission })

    // Log for debugging
    console.log('Survey form submission stored:', submission)

    res.status(200).json({ message: 'Survey request sent successfully' })
  } catch (error) {
    console.error('Error processing survey form:', error)
    res.status(500).json({ message: 'Error sending survey request' })
  }
}
