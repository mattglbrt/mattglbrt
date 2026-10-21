# CLAUDE.md — mattglbrt.com · "The Love Letter"

Project scope and build instructions for **mattglbrt.com**, Matt Gilbert's personal
artist page. **Rewritten 2026-10-21:** the Entropic/textmode/Astro build is being
replaced by a ground-up redesign ("the love letter") built on **Hugo**. The old
brief's textmode rules no longer apply.

---

## 1. What this site is
Matt's personal artist page — the museum, per `identity-architecture.md` (grind-board
repo): a showcase of the creative work and a map to the ventures. It builds **no
audience** (no cadence, no funnel, no newsletter) and sells **nothing** — commissions
and all commerce live at Yellow Imp. The audience is superfans and the curious;
the register is "one pair of hands makes all of this."

## 2. THE DESIGN — a love letter to the early-2000s fantasy-gaming web
The site recreates the design language of ~2001–2007 games-workshop.com,
mageknight.com, and worldofwarcraft.com — sincerely, not as parody — while being
fully responsive and fast. Reference material:

- **Approved mock direction: the "Fantasy skin"** (per the 2006 us.games-workshop.com
  /games/warhammer captures): parchment ground with torn ribbon edges, maroon top
  bar, red-gold chrome wordmark over a bold black subtitle, parchment sidebar with
  maroon bold section headers and dash-prefixed sub-items, white content canvas,
  default-blue underlined links, black caps-bar captioned image boxes, welcome row
  (portrait / bold *Welcome* lead / product box with price + 🛒 + red ?).
- **Gallery = the "Miniature Range catalog" pattern** (per the Orcs & Goblins
  catalog capture): category sections — Lords and Heroes · Core Units · Special
  Units · Rare Units — 4-up product grid, bold names, parenthetical pack info
  ("1 bony model"), per-item icons (🎥 watch · 📜 read · 🛒 Yellow Imp), and an
  icon **legend** at the bottom.
- An alternate **"40K teal-weave skin"** exists in the mocks and may skin a future
  section (GW skinned each game world differently on one chassis — we inherit that
  trick if ever useful). The WoW-style gold/stone round-1 mock is retained as
  reference only.
- Era furniture, used sincerely: Verdana/Arial 11–12px body, blue/purple visited
  links, news ticker, NEW! starburst, **working visitor counter**, **guestbook**,
  "best viewed at 1024×768" footer gag, GW-style exhaustive-legalese parody footer.
- Modern non-negotiables: responsive (sidebar stacks ≤720px), **all textures
  procedural** (CSS gradients + inline SVG feTurbulence — no image chrome files),
  accessible contrast/focus states, no JS frameworks.

## 3. Design workflow — mocks first, templates second
Design is hammered out as **plain self-contained HTML mocks** (fast iteration, in
Cowork chat with Matt), stored in `mocks/`. Only after Matt approves a page's mock
does it get ported to Hugo templates. **Never design in templates**; never let the
Hugo port drift from the approved mock without a mock update first.
Current rounds: `mocks/round1-keep.html` (WoW-ish, reference), `mocks/round2-40k.html`
(teal skin), `mocks/round3-fantasy-home.html` + `mocks/round3-fantasy-gallery.html`
(the leading direction), `mocks/directions-board.html` (early concepts, superseded).

## 4. Build — Hugo (new)
- **Hugo** replaces the Astro/Entropic build. Matt wants to learn Hugo — explain
  non-obvious Hugo-isms as you go. Scaffold on a branch (`hugo-rebuild`); the Astro
  site keeps serving until the port ships, then the Astro code is removed.
- Layouts port the approved mocks; content as markdown under `content/`;
  gallery entries as a data file or page bundles with front matter
  (name, system, pack-info line, year, icons/links, image).
- **Videos page**: fetch YouTube channel RSS at build (`resources.GetRemote`),
  merged + sorted; Netlify scheduled build hook keeps it fresh (daily). Note:
  channels were **consolidated to one Hobbinomicon channel** (commit `35e7c7f`) —
  confirm the live channel list with Matt before wiring feeds.
- **Visitor counter + guestbook**: Netlify Functions + Blobs (same stack as the
  grind board) — SSG-agnostic, lives in `netlify/functions/`. Counter increments
  per page load and renders in the footer odometer; guestbook = form → function →
  blob, entries rendered client-side, honeypot + length caps, no auth.
- Deploy: Netlify, `hugo` build → `public/`. Update `netlify.toml` on port.

## 5. Site structure
- **Home** — welcome row, orange promo slot (rotating: launches/releases), feature
  teasers (2-col, rounded thumbs, blue headline links), captioned caps-bar boxes.
- **/work** — the Painted Works Catalog (the range page). The heart of the site.
- **/videos** — latest uploads via RSS.
- **/about** — the painter. **/guestbook** — sign it.
- **Commissions:** external link to `yellowimp.com/commissions` everywhere;
  **301 the old `/commissions`** route there (moved to Yellow Imp Aug 2026).
- **The Log/Chronicle:** retired from this site (`35e7c7f`) — writing ships via
  Alone in the Dungeon / Substack. The round-3 mocks still show a "Chronicle" nav
  item — **OPEN QUESTION for Matt: cut it, or revive the on-site log?** Resolve
  before the Hugo port.

## 6. Voice & honesty
In-world keeper voice — personal, wry, craftsman's pride ("ravens also accepted";
"variably registered in the deep end of the dungeon"). The footer line **"All
artwork and creative content by Matt Gilbert — no AI-generated art"** must stay
present and true (it scopes his creative output, not site tooling). No fabricated
work, availability, or testimonials; unverified assets stay `TODO:`.

## 7. Open items for Matt
- Photography: gallery shots (the catalog needs ~16 to start) + a portrait for the
  welcome row. Fresh commission photos arrive after Oct 30.
- Confirm live channel list + IDs for the videos feed.
- Final link list: Discord invite, Threads handle, Substack subdomain, eBay store.
- Chronicle: cut or revive (see §5).
- Skin call: lock Fantasy as master; decide if any section wears the teal.

---

## Session workflow (Everyway standard)
This repo follows `~/Documents/dev/_system/PLAYBOOK.md` (venture context in
`../CLAUDE.md`). **Start:** `/orient` — read `STATUS.md`. **End:** `/wrap` —
`SESSION_LOG.md` entry (newest first), refresh STATUS.md, update `../PROJECTS.md`
row if the picture changed. Git per `AGENTS.md` (squash-merge PRs).
