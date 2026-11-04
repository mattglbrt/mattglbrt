# STATUS — mattglbrt.com · updated 2026-11-04

## Now
**Live: the current Astro/textmode site**, now with a site-wide banner at the top:
"Warmachine-focused hobby channel coming this month · [ go sub ]" →
youtube.com/@TheHobbinomiconWarmachine (shipped 11-04, `be65160`). On 11-04 Matt
chose to keep the current site as it is. The Hugo "love letter" redesign (brief in
claude.md, mocks in `mocks/`) is **on hold (inferred)**. Nothing on it changed this
session. The Mac is set up: pnpm + deps installed, `pnpm build` passes.

## Next (ranked)
1. **When the Warmachine channel launches (this month):** update the banner copy
   (e.g. "now live") or remove it. It's in `src/layouts/textmode/TextmodeLayout.astro`.
2. Matt: decide whether the Hugo redesign resumes, and when. If yes, the old plan
   picks up at mock approval → `hugo-rebuild` branch (see claude.md §3–4).
3. Optional quick wins on the current site: point the old /commissions page to
   yellowimp.com/commissions (moved Aug 2026).

## Blockers
- None for the live site.
- (not blocking) Redesign: Matt's call on resuming; mock approval + photography
  were the blockers before it was paused.

## Notes
- Netlify deploys from `main` (`pnpm build` → `dist/`), live ~45s after merge.
  The daily rebuild function needs `BUILD_HOOK_URL` in the Netlify UI. There are
  no local `.env` files and none are needed.
- `pnpm build` warns that collection "philes" is empty. Harmless.

## Recently done
- 2026-11-04 — Warmachine channel CTA banner live on every page (PR #2).
  Landing-page-only replacement built, then dropped at Matt's call (PR #1 closed).
- 2026-11-04 — Mac migration: pnpm, deps, build verified, no Windows leftovers.
- 2026-10-21 — Love-letter redesign direction, Hugo decision, round 1–3 mocks
  (`b158742` locked round 3 on IM Fell treatment D).

## Open questions
- Hugo redesign: paused, or still on for later? (Matt)
- Banner after launch: swap the copy or remove it? (Matt)
- Chronicle / teal skin / guestbook moderation: parked with the redesign.
