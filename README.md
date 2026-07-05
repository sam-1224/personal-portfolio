# saumitra.dev — Portfolio

Personal portfolio of **Saumitra Dubey** — AI-native SDET & Software Engineer.

> "I test AI in production. I also build it."

**Live:** https://sam-1224.github.io/personal-portfolio/

![Screenshot](docs/screenshot.png)
<!-- TODO: replace docs/screenshot.png after first deploy -->

## Stack

- **React 18 + Vite** — fast static build
- **Tailwind CSS** — utility styling
- **[daisyUI](https://daisyui.com/docs/themes/)** — 10 switchable themes (dark, night, synthwave, dracula, sunset, dim, light, corporate, retro, nord) via `data-theme`
- **lucide-react** — icons
- **GitHub Actions → GitHub Pages** — CI/CD deploy on every push to `main` (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))

No animation libraries — CSS transitions + a small IntersectionObserver hook.

## Local development

```bash
npm install
npm run dev      # dev server at http://localhost:5173/personal-portfolio/
npm run build    # production build → dist/
npm run preview  # preview the production build
npm test         # UI smoke & interaction tests (Vitest + Testing Library)
```

## Deploying

Push to `main`. The GitHub Actions workflow builds and deploys to GitHub Pages automatically. In the repo settings, set **Pages → Source → GitHub Actions** once.

## Content updates

All copy lives in [`src/data/content.js`](src/data/content.js) — edit one file to update the site. Resume PDF is at [`public/resume.pdf`](public/resume.pdf); keep it in sync with the latest master resume.
