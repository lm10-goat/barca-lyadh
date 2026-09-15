# BARCA_LYADH

Premium, dark-aesthetic football media website for the **@barca_lyadh**
Instagram brand. Built with React + Vite + Tailwind CSS, fully static
and ready to deploy on GitHub Pages.

---

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

---

## Customizing

Everything editable lives in `src/data/` — you should never need to
touch the component files just to update content.

### Brand info, Instagram handle, email, stats
Edit **`src/data/site.js`**:
- `brandName`, `tagline`, `description`
- `instagramHandle`, `instagramUrl`
- `businessEmail` — used across the site and in the mailto contact form
- `stats` — the four placeholder audience figures (`XXK+` etc.) shown
  in the statistics section. Replace with real numbers once you have
  verified Instagram insights.
- `socialProof` — follower/post/engagement placeholders and content
  categories shown near the Instagram CTA.

### Featured posts, content pillars, coverage areas
Edit **`src/data/content.js`**:
- `contentPillars` — the six "What we create" cards
- `coverageAreas` — the tag grid in "The game we cover"
- `featuredContent` — the recent-stories grid (headline, category,
  date, like/comment placeholders)

### Partnerships, reasons to work with us, contact form options
Edit **`src/data/partnerships.js`**:
- `partnershipTypes` — the six partnership offering cards
- `whyReasons` — the "Why BARCA_LYADH" list
- `contactChannels` — the three contact category blurbs
- `budgetRanges` / `campaignTypes` — dropdown options in the contact form

### Images
Edit **`src/data/images.js`** to point at your own files, and drop the
actual image files into **`public/images/`** (see
`public/images/README.txt` for the expected filenames). Any image
that's missing automatically falls back to a generated gradient panel,
so the site keeps working while you're still sourcing photography.

### Business email / contact form
The site is fully static, so the contact form has no backend. On
submit it opens the visitor's email client via a `mailto:` link
addressed to `site.businessEmail`, pre-filled with their form answers.

If you'd rather collect submissions without relying on the visitor's
email client, swap the `handleSubmit` logic in
`src/components/Contact.jsx` for a
[Formspree](https://formspree.io/)-compatible form action instead.

---

## Deploying to GitHub Pages

### Option A — GitHub Actions (recommended, automatic)

This repo already includes `.github/workflows/deploy.yml`, which
builds and deploys automatically on every push to `main`.

1. Create a new GitHub repository (e.g. `barca-lyadh`) and push this
   project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/lm10-goat/barca-lyadh.git
   git push -u origin main
   ```
2. In your GitHub repo, go to **Settings → Pages**, and under
   **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
   Your site will be published to:
   ```
   https://lm10-goat.github.io/barca-lyadh/
   ```

### Option B — `gh-pages` package (manual)

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. In
**Settings → Pages**, set the source to the `gh-pages` branch.

### Important: the `base` path

`vite.config.js` sets:

```js
base: '/barca-lyadh/'
```

This **must match your repository name** exactly (with leading and
trailing slashes), or assets will 404 once deployed. If you:
- rename the repo → update `base` to match
- deploy to a user/organization page (`YOUR_USERNAME.github.io`) or a
  custom domain → change `base` back to `'/'`

Also update the `homepage` field in `package.json` and the
`og:url` meta tag in `index.html` to your real GitHub Pages URL once
you know it.

---

## Project structure

```
barca-lyadh/
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── public/
│   ├── favicon.svg
│   └── images/                    # drop your photography here
├── src/
│   ├── components/                # all UI sections
│   ├── data/                      # site.js, content.js, partnerships.js, images.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                     # SEO / OG / Twitter meta tags
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Tech stack

- React 18 + Vite 5
- Tailwind CSS
- Framer Motion (hero reveal, scroll-in stat counters)
- Lucide React (icons)

No backend, database, authentication, or paid APIs are required —
the entire site is static and works as-is on GitHub Pages.
