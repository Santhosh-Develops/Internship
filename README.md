# Santhosh M | 90-Day Tech Internship & Guidance Program Landing Page

An ultra-modern, high-converting landing page built for Santhosh M's 90-Day Tech Internship & Guidance Program.

## 🚀 Features
- **Ultra-Clean Dark Glassmorphism Design:** Curated palette (`#080c14`, emerald green `#10b981`, and indigo gradients).
- **Interactive Role Track Explorer:** Real-time tab switcher showcasing 5 tracks:
  - Frontend Engineering (React, Next.js, Tailwind, TypeScript)
  - Backend Engineering (Node.js, Express, PostgreSQL, REST APIs, Auth)
  - UI/UX Design (Figma Systems, Wireframing, User Testing)
  - QA & Testing (Manual Test Plans, Postman API Testing, Automation)
  - Product & Business Analyst (PRD writing, User Stories, Agile Sprints)
- **Live Urgency Countdown Timer:** Counts down dynamically to cohort registration close.
- **Interactive Daily Cadence Roadmap:** Start-of-day (SOD), 4-hour core focus, and End-of-day (EOD) proof workflow with Wednesday Agile Scrum highlights.
- **100-Point Evaluation Matrix:** Transparent point-based certification scorecard.
- **2 Offline Meetup Spotlights:** Highlighting in-person connects in India + Demo Day pitch.
- **Interactive FAQ Accordion:** Expandable answers with smooth animation.
- **Direct WhatsApp Conversion:** Direct registration buttons with floating action pill.
- **Vercel & SEO Ready:** Includes `vercel.json` with security headers and clean URLs.

---

## 🛠️ How to Push to GitHub

When you have your chosen GitHub repository created (e.g. `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git`), run these commands:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Stage all customized files
git add .

# 3. Create initial commit
git commit -m "feat: customize modern 90-day tech internship landing page"

# 4. Set default branch to main
git branch -M main

# 5. Link your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🌐 How to Deploy Live on Vercel

### Option A: Via GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** -> **"Project"**.
3. Import your newly pushed GitHub repository.
4. Framework Preset: **Other** (it's pure static HTML/CSS/JS, no build command needed).
5. Click **"Deploy"**. Your site will be live on `https://your-project.vercel.app` in 10 seconds! Every time you `git push`, Vercel will automatically redeploy.

### Option B: Via Vercel CLI
If you have Vercel CLI installed:
```bash
npx vercel
```
Follow the prompts and your site goes live immediately.
