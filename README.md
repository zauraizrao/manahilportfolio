# Manahil Hassan Portfolio

Editorial single-page portfolio built with Next.js App Router, React, Framer Motion, and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build` and then `npm run start`.

## Deploy to Vercel

Import this project/repository in Vercel. The framework preset is auto-detected as Next.js and no environment variables are required.

## Edit content

All editable site content lives in `data/content.js`: contact details, navigation, project records, services, skills, process steps, and timeline entries. Visual styles live in `app/globals.css`.

## Contact form SMTP setup

The form sends securely through the server-side `/api/contact` route using Nodemailer. Add these environment variables locally in `.env.local` and in your Vercel project settings:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password-or-app-password
SMTP_FROM=your-verified-sender@example.com
SMTP_TO=manahilhassan.1230@gmail.com
```

Use an app password when your email provider requires two-factor authentication. Never commit `.env.local` or SMTP credentials. After adding the variables, form submissions are delivered to `manahilhassan.1230@gmail.com`; the visitor's email is set as `Reply-To` so you can respond directly.
