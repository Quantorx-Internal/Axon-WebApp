# AXON — Web App

Marketing site for **AXON**, the AI-native GIS platform. Ask spatial questions in
plain language — in **English or Arabic** — and get instant ArcGIS maps, charts,
and grounded answers. No SQL, no GIS training.

Built with **React + Vite + Tailwind CSS**, with GSAP / Framer Motion / Lenis for
the motion and scroll experience.

## What the site covers

The single-page experience (`src/views/pages/Home.jsx`) is composed of section
views under `src/views/pages/HomeViews/`:

| Section | Purpose |
| --- | --- |
| `Hero` | Headline, value prop, and common test cases |
| `TrustedWorldwide` | Foundation logos + product metrics |
| `WhyAxon` | The three core differentiators (natural language, grounded answers, enterprise) |
| `PlatformUsers` | Capability tabs — Ask, Visualize, Analyze, Integrate |
| `PlatformShowcase` | Pinned scroll walkthrough of real features |
| `Enterprise` | Security, governance, performance, deployment |
| `CloudEcosystem` | Spatial data connectors + deploy-anywhere |
| `Industry` | Sector use cases (real estate, government, telecom, …) |
| `SpatialData` | Mid-page demo CTA |
| `Plans` | Pricing tiers |
| `RequestDemo` | Demo request form |
| `Footer` | Links, contact, socials |

Reusable UI and the product mockups live in `src/views/components/`
(`Mockups.jsx` renders the chat, map, analytics, and API previews).

## Getting started

```bash
bun install      # or: npm install
bun run dev      # start the dev server (Vite)
bun run build    # production build → dist/
bun run preview  # preview the production build
```

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **GSAP** (ScrollTrigger), **Framer Motion**, **Lenis** (smooth scroll)
- **react-icons**, **react-phone-input-2**

## Related

The actual product (Angular + FastAPI + an OpenAI Agents SDK service over
PostGIS / ArcGIS) lives in the separate `axon` repository. Keep marketing claims
on this site grounded in that product's real capabilities.

## License

MIT
