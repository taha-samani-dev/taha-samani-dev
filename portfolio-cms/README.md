# Taha Samani — Portfolio & CMS Demo

Responsive bilingual English / Persian developer portfolio with a frontend-only CMS.

## Stack
Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide icons.

## Run
```bash
cd portfolio-cms
pnpm install
pnpm dev
```
Open http://localhost:3000 and visit /admin for the CMS.

## Demo login
Email: admin@taha-samani.ir
Password: demo1234

## Included
- Public portfolio: About, Skills, Projects, Contact
- English / Persian switch with RTL support
- Dark / light mode
- Responsive layouts for desktop, tablet, and mobile
- CMS dashboard, mock analytics, messages, media, profile, and settings
- Local CRUD for Projects, Skills, Posts, and Experience
- Search, modal editor, status selection, toast feedback
- Browser localStorage persistence
- Animated hero and project hover interactions

## Mock backend
No API, database, server authentication, or real contact delivery is included. The admin login is simulated and demo content is stored in localStorage. Analytics and messages are illustrative only.

Before production, implement server-side authentication and authorization, persistent storage, validation, media uploads, rate limiting, and a real contact API.
