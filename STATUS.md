# STATUS — mattglbrt.com · updated 2026-10-21

## Now
**Full redesign underway: "the love letter."** The textmode/Entropic/Astro site is
being replaced by an early-2000s fantasy-gaming-web homage (GW 2006 Fantasy skin:
parchment + torn edges, maroon bar, chrome wordmark, blue links, catalog-style
gallery) rebuilt on **Hugo** — Matt wants to learn it. Design iterates as plain
HTML mocks in `mocks/` (rounds 1–3 committed; round 3 Fantasy home + gallery is
the leading direction, built to Matt's Wayback screenshots). Brief rewritten
(claude.md). Commissions moved to Yellow Imp — old /commissions will 301.

## Next (ranked)
1. **Iterate mocks with Matt to approval** — home + gallery first; resolve the
   Chronicle question (retired per `35e7c7f` but still in the mock nav) and lock
   the Fantasy skin as master.
2. Scaffold Hugo on a `hugo-rebuild` branch; port approved mocks to layouts;
   gallery as data-driven catalog entries.
3. Netlify Functions + Blobs: working visitor counter + guestbook.
4. Videos feed via Hugo `resources.GetRemote` + daily build hook — confirm the
   consolidated channel list with Matt first.
5. Content: gallery photography (~16 shots; fresh commission photos after
   Oct 30), portrait, final link list (Discord/Threads/Substack/eBay).
6. Ship: 301 /commissions → yellowimp.com/commissions; tag `v1-entropic`, then
   remove Astro code after the Hugo port serves.

## Notes
- Matt's 10-29 planner slot ("content session", from the orchestrator handoff) is
  replaced by mock iteration (Next #1). The Log is retired, so "first Log entries" is gone.
- Uncommitted WIP in `mocks/` (round-3 edits + `wordmark-test.html`): Matt's,
  in progress.

## Blockers
- Matt: final vision notes + mock approval (still being worked out as of 10-21).
- Matt: photography. The commission queue wraps Oct 30; shoot the pieces before they ship.
- (not blocking) Yellow Imp launch (Oct 31) has Matt's focus until November.

## Recently done
- 2026-10-21 — Direction chosen: love-letter redesign, Hugo build, mocks-first
  workflow; brief rewritten; rounds 1–3 mocks committed to `mocks/`.
- 2026-10-21 — Identity architecture settled (grind-board repo): this site = the
  museum; no commerce; commissions live at Yellow Imp.
- (earlier) — Channel consolidation to one Hobbinomicon channel; on-site Log
  retired (`35e7c7f`).

## Open questions
- Chronicle/Log: cut from the new site, or revive? (Matt)
- Any section wearing the 40K teal skin, or Fantasy everywhere? (Matt)
- Guestbook moderation: none / manual sweep via chat? (Matt)
