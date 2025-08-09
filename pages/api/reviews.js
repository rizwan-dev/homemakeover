// Reviews API removed as per request. Keeping a placeholder to avoid 404s if referenced.
export default function handler(_req, res) {
  res.status(200).json({ reviews: [], message: 'Google reviews disabled; using hardcoded testimonials.' })
}


