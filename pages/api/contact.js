import fs from 'fs'
import path from 'path'

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

    // Store in local JSON file
    const dbPath = path.join(process.cwd(), 'data', 'submissions.json')
    
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing data or create new array
    let submissions = []
    if (fs.existsSync(dbPath)) {
      const fileContent = fs.readFileSync(dbPath, 'utf8')
      submissions = JSON.parse(fileContent)
    }

    // Add new submission
    submissions.push(submission)

    // Write back to file
    fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2))

    // Log for debugging
    console.log('Contact form submission stored:', submission)

    res.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error processing contact form:', error)
    res.status(500).json({ message: 'Error sending message' })
  }
}
