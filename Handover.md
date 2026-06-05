# Vicinity — Handover

## Active Clients

### JMarie (Justine Marie)
- **Services**: International Psychic Medium, Usui Reiki Master, QHHT Hypnotherapist
- **Website**: Wix site (offline/under construction), visible only through Wix dashboard
- **Brand**: Moving from "Hippie Sage" to "Justine Marie Readings" — boho chic, nebula/galaxy theme, light colors with dark accents
- **Socials**: @jmariereadings (IG), Facebook, Reddit (new account building karma), TikTok, YouTube

#### JMarie Website Status

**Completed:**
- "Hippie Sage" identity removed (blogs deleted)
- /about 404 fixed (dead link removed from footer)
- Reiki page content expanded (descriptions for all 4 sessions)
- Branding logos/silhouette in progress
- Reddit profile pic and banner created
- Payment setup linked (LLC, Chase business bank, IRS doc uploaded)
- Wix payments active (cards, Apple Pay, Google Pay, PayPal)
- Calendly added to site (trial expired, considering SquareUp Appointments instead)
- Professional Footer Build (email, phone, and social media icons deployed in Wix global footer)
- Consolidate Reiki Options (Usui Reiki Session removed; replaced with 4 specialized offerings)
- Deepen Core Descriptions (Intuitive Reading & QHHT descriptions expanded to sell the experience)

**In Progress:**
- Logo: Silhouette of Justine with nebula sky, crystals, fireflies, zodiac elements
- Graphics: Profile pics, banners, variants for each platform
- Wix booking/calendar configuration

**Pending (from site-polish-checklist):**
- Deploy Contact Page (copy ready in `Clients/JMarie/contact-page-copy.md`)
- Social Proof Injection (2-3 of the client's own real testimonials; do not deploy placeholders)
- Organic Blog Dating
- Home Page Service Layout
- End-to-End Booking Test
- Mobile Stress Test
- Etsy listings (3 services with graphics)
- Special Reddit links with discounts/promos
- Google Voice/TextNow for second phone line
- Referral: Tarot reader friend may want a simple website (end of May)

**Client Preferences:**
- 4-page max, mobile-friendly
- Nebula/galaxy backgrounds
- Light purple, light blue, light green with gray/black dark accents
- No sacred geometry, no gold, no dark purple
- Bio on main page, booking/services as separate pages
- Coloring: lighter scale (avoids "dark arts" association)

## Project Structure
```
D:\portfolio\vicinity_repo\
├── AgentV.md               # Operational handbook (ADD-friendly)
├── Handover.md             # This file
├── Model-Recommendations.md # LLM model usage guide
├── next-session.md         # Session wrap-up + next priorities
├── fiverr-gig-1-landing-page.md  # Fiverr gig copy (copy-paste ready)
├── calculator-preview.html # Standalone Menu Cost Calculator widget
├── .gitignore
├── .env                    # API keys
├── Clients/
│   ├── JMarie.md           # Client dossier
│   └── JMarie/             # Client assets & content
│       ├── contact-page-copy.md
│       ├── final-site-copy.md
│       ├── reiki-descriptions.md
│       ├── site-polish-checklist.html
│       ├── WhatsApp Chat with Justine Marie.txt
│       └── Justine Marie Doc.md
└── portfolio/              # Main site (deployed to Vercel)
    ├── index.html          # Vicinity Web & Creative portfolio site
    ├── assets/
    │   └── headshot.png    # Your circular headshot (About section)
    ├── .gitignore
    ├── .vercel/            # Vercel project config
    ├── burger-demo/        # Demo site — Smash & Stack (burger restaurant)
    ├── real-estate-demo/   # Demo site — Summit Realty (real estate)
    └── medical-demo/       # Demo site — Lake Care Family Medicine
```

## Live Sites & URLs
- **Portfolio site (Vicinity):** https://vicinity-creative.vercel.app
- **GitHub repo:** https://github.com/vic-from-vicinity/vicinity_one
- **Fiverr gig #1:** https://www.fiverr.com/victormendoz324/design-a-high-converting-landing-page-or-squeeze-page
- **Demo — Summit Realty:** https://real-estate-demo-xi-eight.vercel.app
- **Demo — Smash & Stack:** https://burger-demo-mu.vercel.app
- **Demo — Lake Care:** https://medical-demo-five.vercel.app

## Deploy Pipeline
- **Main site:** GitHub → Vercel auto-deploy (connected via Git, root=`portfolio/`)
- **Demo sites:** CLI-only deploys (NOT connected to GitHub — future manual deploys via `npx vercel --prod --yes`)
- **To redeploy main site:** `git push origin main`

## Tools & Accounts
- **Wix Dashboard**: App-based management, payments active
- **Chase Business**: Checking + "Tax Reserve (8.6%)" auto-transfer setup recommended
- **Canva**: Primary design tool (used for Fiverr gig thumbnail + composite)
- **SquareUp Appointments**: Under consideration to replace Calendly
- **Google Voice/TextNow**: For separate business line
- **GitHub**: `vic-from-vicinity/vicinity_one` (connected to Vercel auto-deploy)
- **Vercel**: `vicinity-creative` project (auto-deploys from GitHub `main` on push)
- **Fiverr**: Seller name `victormendoz324` — gig #1 live (Landing Page)
- **Contra**: Account created (incomplete — needs featured image + portfolio)
- **Gumroad**: Not set up yet (planned for digital products)

## Notes
- **Git repo IS initialized** — connected to GitHub, auto-deploys to Vercel on push
- `AgentV.md` contains the full operational handbook (ADD-friendly workflow guidelines)
- Always check client dossier before starting work
- See `Model-Recommendations.md` for which LLM to use per task type
- `next-session.md` has the priority stack for next work session
- **Tip from Gemini:** Before building the bar inventory app, talk to local San Antonio bar managers about their pain points first
