# CONTENT PACK — mattglbrt.com · the love letter
*Updated 2026-10-21 · companion to claude.md §5. When every ☐ below is checked,
the Hugo build has everything and ships in one pass.*

---

## 0 · Open decisions (block parts of the pack — decide first)

- ☐ **Chronicle: cut or revive.** On-site Log was retired (`35e7c7f`); writing lives
  on AITD/Substack. If CUT: home teaser #4 becomes a Videos teaser, gallery 📜 icons
  link to AITD posts, nav loses "The Chronicle." If REVIVE: it returns as a Hugo
  content section. *(Affects: nav, home, gallery icons.)*
- ☐ **Video channel list** post-consolidation — which channels exist and their IDs.
- ☐ **Visitor counter seed** — start at 0 (honest) or seed with lifetime-ish number?
  (Recommend 0 with a "counting since Nov 2026" title tooltip — honest AND era-true.)
- ☐ **Guestbook moderation** — recommend: no pre-moderation, honeypot + length cap,
  and a "sweep" command to Claude anytime to prune spam from the blob.
- ☐ **Promo banner policy** — recommend: one `data/promo.yaml` entry, changed by
  hand at launches/releases; falls back to "latest from the gallery" when empty.

## 1 · Global chrome (copy final unless noted)

- Topbar: MATTGLBRT + The Hobbinomicon ● Alone in the Dungeon ● Yellow Imp ✔
- Wordmark: IM Fell DW Pica, edged gold (treatment D) ✔ *(subtitle below)*
- Subtitle: **MINIATURES, TERRAIN & TALL TALES** ✔
- Icon strip label: **THE WORKS OF MATTGLBRT** ✔
- Footer links: Home | About the Painter | Gallery | Videos | Guestbook | Commissions ✔
- Footer legal: *"All artwork and creative content by Matt Gilbert — no AI-generated
  art. © MDG Growth LLC 2026. Variably registered in the deep end of the dungeon."* ✔
- Footer gags: counter odometer · "best viewed at 1024×768" ✔
- ☐ Sidebar link URLs: **Discord invite · Threads handle · Substack URL · eBay
  (Buzzard's Trading Post) URL** — Matt to confirm final four.

## 2 · Home

- Welcome lead (draft, Matt may redline):
  > ***Welcome** to the workshop of Matt Gilbert.* If you are new here, we suggest
  > you start with a quick intro tour. Generals, dungeon-delvers, and painters of
  > small monsters will all find something on these shelves: painted warbands and
  > the boards they fight over, long solo campaigns written from the deep end of
  > the dungeon, and the occasional coffee cup, carefully based.
- ☐ **Portrait photo** (3:4, the Thorgim slot) + caption "Matt Gilbert, the Painter."
- ☐ **Product box**: real Yellow Imp hero product shot (4:5) + confirm "from $__"
  floor price.
- Feature teasers ×4 — drafted in the mock (Trench Crusade Gallery / Ice King's
  Dusk Preview / Dolmenwood Gallery / #4 pending Chronicle decision). Stored as
  `data/features.yaml`; ☐ Matt confirms the opening four.
- "On the Bench" caps-box: manual one-liner in `data/bench.yaml`; ☐ first line.

## 3 · /work — The Painted Works Catalog (the big one)

- Intro copy + icon legend: drafted in mock ✔ (legend: 🎥 watch · 📜 read · 🛒 Imp)
- **Tally line**: ☐ real 2026 total (log froze at 32 on Aug 11 — current number
  lives in the grind board; Matt reports, or sweep it from the morning check-ins).
- **Entries**: seeded in `data/gallery.yaml` from the canonical painted log —
  every piece painted in 2026, categorized Lords and Heroes / Core Units /
  Special Units / Rare Units. Per entry Matt owes:
  - ☐ photo (square-ish, neutral/white sweep per the GW catalog look)
  - ☐ video URL (or `none`) — which upload shows this piece
  - ☐ post-August additions (Dusk army pieces, Crucible Guard, commission work —
    client pieces welcome, mark `commission: true` so the caption credits it)
- ☐ Sketch-strip image (16:5, workbench/WIP shots) or cut the strip.

## 4 · /videos

- Intro line (draft): *"Moving pictures from the workshop — freshly conjured."* ✔
- ☐ Channel ID(s) per decision above. Build fetches RSS; page needs nothing else.

## 5 · /about — The Painter

Draft (Matt redlines; keeper voice, ~150 words):
> Matt Gilbert paints small monsters and builds the worlds they fight over.
> Husband, father, artist — hobbying from the deep end of the dungeon, where the
> painting became a daily practice, the practice became three channels and a
> miniatures company, and the company needed somewhere to hang it all. That's
> this place.
>
> Everything here is made by hand: the minis, the boards, the words. No
> AI-generated art, ever — when you commission a piece or buy from the Yellow
> Imp, you're getting hours of actual brush time from an actual human who
> actually cares about edge highlights.
>
> Want something painted? The studio takes commissions through
> [Yellow Imp](https://yellowimp.com/commissions). Want to talk shop? Sign the
> guestbook or send a raven.
- ☐ Matt approves/edits. Uses the same portrait as home.

## 6 · /guestbook

- Intro (draft): *"Travelers' marks. Leave a name, where you wandered in from, and
  a word for the keeper. Ravens accepted at matt@hobbinomicon.com."* ✔
- Form: name · where-from · message (280 chars) · honeypot ✔ (spec'd)
- ☐ Moderation decision (see §0).

## 7 · 404 page

Draft ✔:
> **YOU HAVE WANDERED OFF THE MAP**
> This corridor was never dug. The torchlight ends here.
> [Back to the Keep] · [The Gallery] · [Sign the guestbook and complain]

## 8 · Meta / SEO / sundries

- Titles + descriptions per page: drafted in `data/meta.yaml` skeleton ✔
- ☐ OG image: the D wordmark on parchment, 1200×630 (can generate from the mock).
- ☐ Favicon: suggest a tiny gold "M" on maroon, or a 16×16 pixel imp (Matt's call).
- Redirects: `/commissions → yellowimp.com/commissions` (301) ✔ spec'd;
  ☐ map old Astro routes (`/volume/*`, `/log`) → home or AITD.
- Alt text convention: "painted miniature: {name}, {system}" ✔

## 9 · The photography shot list (one session, ~90 min)

| Shot | Format | Count |
|---|---|---|
| Gallery entries (each piece, neutral sweep) | square | ~16–20 |
| Portrait of Matt at the bench | 3:4 | 1 |
| Feature teaser thumbs (warband group shots) | 4:3 | 4 |
| Yellow Imp product hero | 4:5 | 1 |
| Workbench sketch-strip | wide 16:5 | 1 |

*Shoot before commission pieces ship back (queue wraps Oct 30).*

---

## The Matt list (everything above, in one place)

1. Decisions: Chronicle · channels · counter seed · guestbook moderation · promo policy
2. Current painted total + post-August finishes (names + what's a commission)
3. Photography session per §9
4. Video URL per gallery entry
5. Final URLs: Discord, Threads, Substack, eBay store · YI price floor
6. Redline the welcome, about, guestbook, 404 drafts
7. Favicon call

When this list is empty: `hugo-rebuild` branch, one build, done.
