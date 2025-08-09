import fs from 'fs'
import path from 'path'
import { sendSubmissionEmail } from '../../lib/email'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { firstName, lastName, email, phone, service, message } = req.body

    // Create submission data
    const submission = {
      id: Date.now().toString(),
      type: 'contact',
      timestamp: new Date().toISOString(),
      data: {
        firstName,
        lastName,
        email,
        phone,
        service,
        message
      }
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
      console.warn('[contact] Persist skipped:', persistErr?.message || persistErr)
    }

    // Email notification (skip if no API key provided)
    await sendSubmissionEmail({ type: 'contact', submission })

    // Log for debugging
    console.log('Contact form submission stored:', submission)

    res.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error processing contact form:', error)
    res.status(500).json({ message: 'Error sending message' })
  }
}
