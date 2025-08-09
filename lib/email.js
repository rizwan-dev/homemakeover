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

  // Recipients: prefer NOTIFY_EMAILS (comma-separated), then NOTIFY_EMAIL, else defaults
  const toEmails = (process.env.NOTIFY_EMAILS
    ? process.env.NOTIFY_EMAILS.split(/[,;]+/).map(s => s.trim()).filter(Boolean)
    : [])
  if (toEmails.length === 0) {
    const single = process.env.NOTIFY_EMAIL?.trim()
    if (single) toEmails.push(single)
  }
  if (toEmails.length === 0) {
    toEmails.push('riztech.dev@gmail.com', 'imranulhaque41@gmail.com')
  }
  const fromEmail = process.env.RESEND_FROM || 'onboarding@resend.dev'
  const subject = type === 'contact'
    ? `New Contact Message from ${submission.data.firstName} ${submission.data.lastName}`
    : `New Survey Request from ${submission.data.firstName} ${submission.data.lastName}`

  const esc = (v) => String(v ?? '').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const fmt = (label, v) => {
    if (v == null || v === '' || (Array.isArray(v) && v.length === 0)) return ''
    const val = Array.isArray(v) ? v.join(', ') : v
    return `
      <tr>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;width:180px;font-weight:600;color:#111827;">${esc(label)}</td>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;color:#374151;">${esc(val)}</td>
      </tr>`
  }

  const d = submission.data || {}
  const baseRows = `
    ${fmt('Submission ID', submission.id)}
    ${fmt('Submitted At', submission.timestamp)}
    ${fmt('Type', submission.type)}
  `
  const contactRows = `
    ${fmt('First Name', d.firstName)}
    ${fmt('Last Name', d.lastName)}
    ${fmt('Email', d.email)}
    ${fmt('Phone', d.phone)}
    ${fmt('Service', d.service)}
    ${fmt('Message', d.message)}
  `
  const surveyRows = `
    ${fmt('First Name', d.firstName)}
    ${fmt('Last Name', d.lastName)}
    ${fmt('Email', d.email)}
    ${fmt('Phone', d.phone)}
    ${fmt('Address', d.address)}
    ${fmt('Property Type', d.propertyType)}
    ${fmt('Services', d.services)}
    ${fmt('Timeline', d.timeline)}
    ${fmt('Budget', d.budget)}
    ${fmt('Details', d.details)}
  `
  const detailRows = type === 'contact' ? contactRows : surveyRows

  const html = `
    <div style="font-family:Inter,Arial,Helvetica,sans-serif;color:#111827;">
      <h2 style="margin:0 0 8px 0;font-size:20px;">${esc(subject)}</h2>
      <p style="margin:0 0 16px 0;color:#6b7280;">You have received a new ${esc(type)} submission from the Home Makeover website.</p>
      <table style="border-collapse:collapse;width:100%;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        <tbody>
          ${baseRows}
          ${detailRows}
        </tbody>
      </table>
      <p style="margin-top:16px;color:#9ca3af;font-size:12px;">This email was sent automatically by Home Makeover.</p>
    </div>
  `

  try {
    const displayName = (d.firstName || d.lastName)
      ? `${esc(d.firstName || '')} ${esc(d.lastName || '')}`.trim()
      : (d.email ? esc(d.email) : 'Home Makeover Website')
    // Optionally send "From" as the customer's email (not recommended unless domain is verified)
    const allowCustomerFrom = process.env.ALLOW_CUSTOMER_FROM === 'true'
    const fromAddress = allowCustomerFrom && d.email ? d.email : fromEmail
    const fromHeader = `${displayName} <${fromAddress}>`

    await resend.emails.send({
      from: fromHeader,
      to: toEmails,
      subject,
      html,
      text: `${subject}\n\nSubmitted At: ${submission.timestamp}\n\n${JSON.stringify(submission, null, 2)}`,
      reply_to: submission?.data?.email || undefined
    })

    // Send confirmation to submitter if email provided
    if (d.email) {
      const brandFromHeader = `Home Makeover <${fromEmail}>`
      const confirmSubject = type === 'contact'
        ? 'We received your message — Home Makeover'
        : 'We received your survey request — Home Makeover'
      const confirmHtml = `
        <div style="font-family:Inter,Arial,Helvetica,sans-serif;color:#111827;">
          <h2 style=\"margin:0 0 8px 0;font-size:20px;\">Thank you, ${esc(d.firstName || 'there')}!</h2>
          <p style=\"margin:0 0 16px 0;color:#374151;\">We have received your ${esc(type)} submission. Our team will contact you shortly.</p>
          <h3 style=\"margin:16px 0 8px 0;font-size:16px;color:#111827;\">Summary</h3>
          <table style=\"border-collapse:collapse;width:100%;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;\">
            <tbody>
              ${fmt('Submitted At', submission.timestamp)}
              ${fmt('Name', `${d.firstName || ''} ${d.lastName || ''}`.trim())}
              ${fmt('Phone', d.phone)}
              ${fmt('Service', d.service || (Array.isArray(d.services) ? d.services.join(', ') : undefined))}
              ${fmt('Details', d.details || d.message)}
            </tbody>
          </table>
          <p style=\"margin-top:16px;color:#6b7280;\">If you need urgent assistance, call us at <a href=\"tel:+919031263531\" style=\"color:#4f46e5;text-decoration:none;\">+91 9031263531</a>.</p>
          <p style=\"margin-top:8px;color:#9ca3af;font-size:12px;\">This is an automated confirmation from Home Makeover.</p>
        </div>
      `
      await resend.emails.send({
        from: brandFromHeader,
        to: d.email,
        subject: confirmSubject,
        html: confirmHtml,
        text: `Thank you! We received your ${type} submission and will contact you shortly. Submitted at: ${submission.timestamp}`
      })
    }

    return { sent: true }
  } catch (err) {
    console.error('[email] Failed to send via Resend:', err)
    return { sent: false, error: String(err) }
  }
}