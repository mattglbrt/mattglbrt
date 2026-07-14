# CLAUDE.md — mattglbrt.com

Project scope and build instructions for **mattglbrt.com**, Matt Gilbert's personal artist hub. Built on the **Entropic** Astro theme (retro textmode/ASCII blog). This file is the content/scope brief; the theme's own `AGENTS.md` covers how the engine works — read both.

---

## 1. What this site is
mattglbrt.com is **Matt's personal artist page** — the human behind the brands. It's the central hub that points out to everything he makes, surfaces his latest videos, hosts a free-form blog, and takes commission inquiries. It is **not** a storefront and **not** a brand site; it's the person.

## 2. Audience & purpose
- Fans/followers who want one place to find all of Matt's projects and channels.
- People considering hiring him for **commissions** (miniature painting / sculpting / art).
- Himself — a free-form **blog/log** for thoughts and work that don't fit any brand.

## 3. The template — work with its grain
Entropic is a **textmode/ASCII blog engine**: fixed-width text, ASCII frames, ANSI colors. Posts are `.phile` files grouped into **volumes** (its categories). Static Astro build. Key config knobs:
- `src/config/site.ts` — home page text + links
- `src/config/volumes.ts` — volume titles, sorting, postscripts
- `src/config/appearance.ts` — colors, fonts, text cell sizing
- Content: `src/content/philes/volume-*/**/*.phile` (frontmatter: title, date, author; optional order, subtitle, redacted)
- Commands: `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm build`, `pnpm check`
- Deploy target: **Netlify** (static `pnpm build` → `dist/`). Add `netlify.toml`.

Don't fight the aesthetic. Lean into the terminal look — it's the brand.

## 4. KEY DECISION — text-first hub, link out for visuals
This site is the **text/link command-center**. Matt's visual work (painted minis, art) lives on the brand sites and Instagram; mattglbrt.com **links to** those rather than trying to be a gallery. Keep it text-forward. Do NOT redesign the theme into an image gallery.

## 5. Site structure
Map to Entropic's home + volumes + a couple of pinned pages:

1. **Home** (`site.ts`) — ASCII wordmark ("matt gilbert" / mattglbrt), a one-line identity (e.g. "miniature painter, sculptor, writer — the hands behind The Hobbinomicon & MDG Growth"), **the full link hub directly on the home page** (see §7 — this is the homepage's core, NOT a separate page), and nav to: Videos · Log · Commissions.
2. **Videos** — a volume showing his **latest YouTube videos**, auto-fed (see §6).
3. **Log** (the blog) — free-form volume; the catch-all for anything that doesn't fit elsewhere.
4. **Commissions** — showcase + inquiry form (see §8).

_No separate "Projects" page — the project/link directory lives on the homepage itself, configured via `site.ts` (extend the home links config / home component as needed to hold the grouped directory)._

Footer: attribution line — **"All artwork and creative content by Matt Gilbert — no AI-generated art."** (Scope this claim to his *creative work*; it's a trust signal for commission buyers. It does NOT refer to site tooling.)

## 6. Latest videos — auto-fetch from YouTube (build-time)
- At build, fetch Matt's channel RSS feeds (`https://www.youtube.com/feeds/videos.xml?channel_id=<ID>`), merge, dedupe, sort by date desc, render the latest N (e.g. 10) as title + date + link (+ small thumbnail, theme renders images).
- Channels to include — `TODO:` Matt to supply channel IDs:
  - The Hobbinomicon Daily Vlog (@Hobbinomicon)
  - The Hobbinomicon (flagship, @TheHobbinomicon)
  - Hobbinomicon: Warmachine
  - Hobbinomicon: KDM
  - Alone in the Dungeon (@AloneInTheDungeon)
- Keep it current with a **Netlify scheduled build hook** (e.g. daily/every few days) so new uploads appear without manual posts.
- Implement as an Astro build-time data fetch feeding the Videos volume/page. Fail gracefully if a feed is unreachable (skip, don't break the build).

## 7. The link hub — ON THE HOMEPAGE (link OUT)
Directory of everything Matt makes, rendered **directly on the home page** (not a separate route). Pull live URLs from `businesses/mdg-growth/PROFILES.md`. Group sensibly:
- **YouTube channels:** the 5 live channels above.
- **Brand sites:** hobbinomicon.com, yellowimp.com, brickmancy.com, minitrukk.com, thetablesedge.com, mdggrowth.com, aloneinthedungeon.com.
- **Shop:** Buzzard's Trading Post (eBay store), Yellow Imp store (when live).
- **Social:** Instagram (Alone in the Dungeon own; Warmachine shared) + others as claimed (see PROFILES handle tracker).
- **Commissions:** internal link to the Commissions page.
Mark not-yet-live links clearly or omit until live. `TODO:` confirm final URL list at build time.

## 8. Commissions page
- **Showcase + inquiry form** (no payment step yet — conversation-first).
- Content: what Matt offers (miniature painting / sculpting / commissioned art), a few example pieces (`TODO:` Matt supplies images — allowed here as inline examples), current **availability/status** (open / waitlist / closed — make it easy to toggle), and rough scope of what he takes on.
- **Inquiry form** via Netlify Forms: name, contact, project type, description, budget/timeline, message. Honeypot + success state.
- Keep it consistent with the textmode aesthetic.
- (Future: add a Stripe deposit link when Matt's ready — leave a clean spot for it, don't build it yet.)

## 9. Tech / build / deploy
- Package manager: **pnpm** (lockfile present). `pnpm install --frozen-lockfile`.
- `pnpm build` → static `dist/`. Add `netlify.toml` (build command + publish dir + scheduled build hook note).
- Set up `dev` branch workflow per the theme's AGENTS.md if contributing upstream; for this build, work on Matt's fork.
- Performance: it's textmode — keep it fast and clean. Self-host fonts (theme already commits font assets).

## 10. Voice & tone
Matt's own voice — personal, a little wry, craftsman's pride. The terminal aesthetic + first-person log suits an indie maker. The blog ("Log") is explicitly free-form; don't over-structure it.

## 11. Honesty
- The "no AI-generated art" footer claim must stay true — it refers to his creative/artistic output, which is genuinely his.
- Don't invent examples, testimonials, or availability. Use real work and real status; leave `TODO:` for anything Matt must supply.

## 12. Open items for Matt to supply
- YouTube channel IDs (for the auto-feed)
- Commission example images + current availability status
- Short identity/bio line + any longer About copy
- Contact email for the inquiry form
- Final confirmed project/link list + which socials are live
- Appearance preferences (colors/font) if changing the theme defaults

## 13. Definition of done
- Home (with the link hub built in), Videos, Log, Commissions all built in the Entropic aesthetic.
- Videos auto-fetch from the listed channels at build; Netlify scheduled rebuild configured.
- Commissions inquiry form works on Netlify with success state.
- Footer attribution line present.
- No fabricated content; unverified assets left as clear `TODO:`.
- Builds clean with `pnpm build`; `netlify.toml` present.