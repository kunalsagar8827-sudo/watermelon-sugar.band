# Watermelon Sugar Band — Website

Next.js site: landing page, journal (blog), and a 4-step audition apply form
that emails you every submission and auto-replies to the applicant.

## Local setup

```
npm install
cp .env.example .env
```

Fill `.env` with your Gmail address, a Gmail App Password, and where you
want applications delivered. Then:

```
npm run dev
```

Site runs at http://localhost:3000

## Still needed before launch

- `public/favicon.ico`
- `public/og-cover.jpg` (1200x1500 — used when the link is shared on social/WhatsApp)
- Instagram link in the footer/thank-you message once the account exists

## Deploy

Push to GitHub, import into Vercel, add the three env vars
(`EMAIL_USER`, `EMAIL_PASS`, `TO_EMAIL`) in Vercel project settings, then
point `watermelonsugar.band` at it from the domain's DNS settings.
