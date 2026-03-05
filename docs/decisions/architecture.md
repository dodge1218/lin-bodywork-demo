# Architecture Decision

- Next.js 15 App Router with route-per-page for Home, Services, About, Results, Contact, Get Started.
- Shared site constants in `src/data/site.ts` for CTA/copy/offer block reuse and easy A/B edits.
- Shared UI primitives in `src/components/ui/*` and global shell in `src/app/layout.tsx`.
- SEO handled with Next Metadata API + generated `sitemap.ts` and `robots.ts`.
- JSON-LD emitted in layout (Organization) and homepage (ProfessionalService).
