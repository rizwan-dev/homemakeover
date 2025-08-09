import { Resend } from 'resend'

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  try {
    return new Resend(apiKey)
  } catch {
    return null
  }
}

export async function sendSubmissionEmail({ type, submission }) {
  const resend = getResend()
  if (!resend) {
    console.log('[email] RESEND_API_KEY not set; skipping email send')
    return { skipped: true }
  }

  const toEmail = process.env.NOTIFY_EMAIL || 'homesmakeover.in@gmail.com'
  const subject = type === 'contact'
    ? `New Contact Message from ${submission.data.firstName} ${submission.data.lastName}`
    : `New Survey Request from ${submission.data.firstName} ${submission.data.lastName}`

  const html = `
    <div style="font-family:Arial, Helvetica, sans-serif;">
      <h2>${subject}</h2>
      <p><strong>Submitted At:</strong> ${submission.timestamp}</p>
      <hr />
      <pre style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">${
        JSON.stringify(submission, null, 2)
      }</pre>
    </div>
  `

  try {
    await resend.emails.send({
      from: 'Home Makeover <noreply@homemakeover.local>',
      to: toEmail,
      subject,
      html
    })
    return { sent: true }
  } catch (err) {
    console.error('[email] Failed to send via Resend:', err)
    return { sent: false, error: String(err) }
  }
}


