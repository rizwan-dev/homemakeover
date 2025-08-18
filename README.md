# Home Makeover — Interior Design & Painting (Next.js)

Modern marketing site with admin panel for managing submissions.

## Features
- Customer-facing website: services, projects, locations, blog, contact, survey
- Elegant UI with Tailwind CSS and a custom theme palette (`primary`, `secondary`, `accent`, `neutral`, `text`, `background`)
- Our Process with refined SVG icons
- Testimonials horizontal scroller with arrows and edge fades
- Admin panel: view submissions from Contact and Survey forms
- Data storage:
  - Primary: Neon Postgres (serverless, free, great on Vercel)
  - Fallback: local JSON file `data/submissions.json` (for local dev only)
- Email notifications via Resend (optional, recommended)

## Tech Stack
- Next.js 14
- Tailwind CSS
- Neon Postgres via `@neondatabase/serverless`
- Resend for transactional emails

## Quick Start (Local)
1) Install
```bash
npm ci
```
2) Create `.env.local` in project root:
```bash
# Database (Neon Postgres connection string)
DATABASE_URL=postgres://USER:PASSWORD@HOST/dbname?sslmode=require

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
NOTIFY_EMAIL=homesmakeover.in@gmail.com
RESEND_FROM=onboarding@resend.dev
```
3) Run dev
```bash
npm run dev
```

## Deployment (Vercel)
Set these environment variables in Vercel → Project → Settings → Environment Variables:
- `DATABASE_URL` (Production + Preview): Neon connection string
- `RESEND_API_KEY` (Production + Preview)
- `NOTIFY_EMAIL` (optional; defaults to homesmakeover.in@gmail.com)
- `RESEND_FROM` (optional; defaults to onboarding@resend.dev)

Deploy. The API auto-creates the `submissions` table on first use.

## Admin Panel
- Protected via Basic Auth middleware using environment variables (no API call, no hardcoded creds)
- Access: `/admin/dashboard` (you'll get a native username/password prompt)
- Set in `.env.local` (and Vercel → Project Settings → Environment Variables):
  ```bash
  ADMIN_USERNAME=your_username
  ADMIN_PASSWORD=your_strong_password
  ```
- Restart dev/build after changing env vars
- Note: A legacy `/admin/login` page exists but is not required when using middleware auth

## Forms & Storage
- Contact form: `pages/contact.js` → API: `pages/api/contact.js`
- Survey form: `pages/survey.js` → API: `pages/api/survey.js`
- Admin submissions API: `pages/api/admin/submissions.js`

Flow:
1) Insert into Neon DB (if `DATABASE_URL` set)
2) Fallback: write to `data/submissions.json` (local dev only)
3) Send email via Resend (if `RESEND_API_KEY` set). Uses `NOTIFY_EMAIL` and `RESEND_FROM`.

## Email Setup (Resend)
- Verify your domain in Resend for custom sender, or use `onboarding@resend.dev` during testing
- Ensure `RESEND_API_KEY` is set. Optional `RESEND_FROM`, `NOTIFY_EMAIL`.

## Social Links
- Instagram: `https://www.instagram.com/homesmakeover/`
- Facebook: `https://www.facebook.com/profile.php?id=61578062693960`

## Notes
- DB utilities: `lib/db.js` (Neon serverless client)
- Email utility: `lib/email.js`
- Custom theme applied throughout (see `tailwind.config.js`)

