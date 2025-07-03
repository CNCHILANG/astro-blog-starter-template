# Glassmorphism Personal Landing Page (Astro + Cloudflare Workers)

This starter turns the original Astro blog template into a minimalist **liquid-glass personal landing page** with:

* ✨ Glassmorphism UI (blurred gradient background + translucent card)
* 🔗 Dynamic link list powered by an API endpoint (`/api/links`)
* 🔐 Simple admin dashboard at `/admin` to edit links (uses a bearer token)
* ☁️ Ready to deploy to Cloudflare Workers via `wrangler`

![screenshot](https://placehold.co/800x450?text=Preview+Screenshot)

---

## 1. Quick start

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Build & preview production output
npm run build && npm run preview

# Deploy to Cloudflare Workers
npm run deploy
```

If this is your first time using Cloudflare Workers, install the Wrangler CLI and log in:

```bash
npm install -g wrangler
wrangler login
```

---

## 2. Customization guide

All customization can be done **without touching any build tooling**.

### 2.1 Basic profile

Edit `src/pages/index.astro`:

```astro
<!-- Avatar image URL -->
<img class="avatar" src="https://placehold.co/120x120.png" alt="avatar" />

<!-- Your display name -->
<h1>Your Name</h1>

<!-- Short tagline / bio -->
<p class="tagline">A short tagline about yourself</p>
```

Replace the image URL, name, and tagline to match your profile.

### 2.2 Links

1. Navigate to `http://localhost:4321/admin` (or `/admin` in prod).
2. Paste your links as a JSON array, e.g.

```json
[
  { "label": "GitHub", "url": "https://github.com/you" },
  { "label": "Blog",   "url": "https://blog.example.com" }
]
```
3. Click **Save**.

🚧 **Authentication** – For production, set an environment variable named `PUBLIC_ADMIN_SECRET` and use it as the bearer token in the admin page. Locally, the default secret is `changeme`.

### 2.3 Styling tweaks

The glassmorphism styles live in `src/styles/glass.css`. Feel free to adjust colors, blur radius, shadows, etc.

---

## 3. Environment variables

Name | Purpose | Default
-----|---------|--------
`PUBLIC_ADMIN_SECRET` | Bearer token required when calling `POST /api/links` | `changeme`

Set variables locally with an `.env` file or via Wrangler secrets for Cloudflare.

---

## 4. Project structure (important parts)

```
src/
  pages/
    index.astro        # Landing page (UI)
    admin.astro        # Simple dashboard
    api/links.ts       # GET / POST endpoint for links
  styles/
    glass.css          # Glassmorphism styles
  env.d.ts             # Type declarations / env variables
```

---

## 5. License

MIT – use it freely in your personal or commercial projects.
