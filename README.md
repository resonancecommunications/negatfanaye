# Nigat Fanawi Trading PLC website

Redesign of [negatfanawi.et](https://negatfanawi.et). Built with Next.js, Tailwind CSS and Lucide icons. Every page is prerendered, so full content is in the served HTML.

The audit behind this redesign is in the [Figma file](https://www.figma.com/design/2J9uGtOoFNaik8NNP1ndWi/Resonance-Communications?node-id=44-27003), on the "Negat Fanawi" page.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Where things live

| What | Where |
| --- | --- |
| All copy and data (businesses, projects, licences, partners) | `src/content/site.ts` |
| Colours, fonts and button styles | `src/app/globals.css` |
| Pages | `src/app/` |
| Old URL redirects | `next.config.ts` |
| Contact form email sending | `src/app/api/contact/route.ts` |

## Contact form setup

The form sends through [Resend](https://resend.com). Set these variables on the host:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Resend API key |
| `CONTACT_FROM` | Yes | Sender on a verified domain, for example `Website <web@negatfanawi.et>` |
| `CONTACT_TO` | No | Recipient. Defaults to the company email in `site.ts` |

Until these are set, the form can't send. It shows visitors an error with a link to email the message instead, so nothing is lost silently. Real delivery hasn't been tested yet because it needs an API key.

## Confirm with the client before launch

**Facts**

- [ ] **Project counts.** The old site claimed 6 completed, 1 under execution and 6 in pipeline, but listed 5, 1 and 7. The new site counts the list (5, 1, 7). If a sixth completed project exists, add it to `projects` in `site.ts`.
- [ ] **"Projects completed under 3 months".** The old homepage claimed this for 6 projects, but the claim couldn't be verified, so it's been dropped.
- [ ] **Project clients and locations.** These were taken from the project names only. Check they're right, and fill the gaps shown as "—".
- [ ] **Abel Fekede's title.** The old site said "V/ Chief Executive Officer". The new site says "Vice Chief Executive Officer".
- [ ] **Company name spelling.** The site says "Nigat" and the domain says "negat". The new site follows the old site's "Nigat Fanawi".
- [ ] **Business page wording.** The pages are written from the old site's real facts, but the phrasing is new.

**Needed from the client**

- [ ] **Real photos.** Every image except the leadership portraits appears to be stock. Replace the sports car on the vehicles panel first, because it isn't an EV or hybrid. Then the showroom, imported cars and finished projects. Files are in `public/images/`.
- [ ] **Vector logo.** The site uses a small PNG of the mark.
- [ ] **Phone number.** Hidden for now because the old site had none.
- [ ] **Company email on the domain.** The site currently shows a Gmail address.
- [ ] **Social links.** Hidden because the old ones pointed to the generic facebook.com, linkedin.com and tiktok.com homepages.
- [ ] **Vehicle model list.** The vehicles page has no models yet.
- [ ] **Partner logos.** Partners are shown with icons for now.
- [ ] **Amharic.** Decide whether the site needs an Amharic version.

## Removed from the old site

These contained only template content, or duplicated other pages. All old URLs redirect.

- **Blog:** every post was template text.
- **Project detail pages:** all 8 were template text. Projects are now a filterable table, and detail pages can return when real case studies exist.
- **Testimonial and newsletter:** the testimonial was fake and there was nothing to send.
- **`/team`:** merged into About.
