# Session Log — mattglbrt.com

Append-only. **Newest entry first.**

---

## 2026-10-21 (Claude Code) — Orient + handoff close-out; rebuild confirmed

**Context:** Started from the orchestrator's HANDOFF ("Wake: content session",
planned Thu 10-29; commissions-moved-to-Yellow-Imp question).

**What happened:** Orient flagged that STATUS/claude.md had drifted from git:
`35e7c7f` (07-15) had already retired the on-site Log and consolidated to one
Hobbinomicon channel. Matt said he wants to rebuild the site from the ground
up; the vision is still being finished. No code changed in this session.
Proposed safety plan for the rebuild: tag the Astro site before removal, build on
a branch, keep `main` serving until approval. The brief (claude.md) has since
been rewritten (Cowork session below) and already covers that.

**Handoff items addressed:** (1) Commissions: answered by the new brief. External
link to Yellow Imp, plus a 301 from `/commissions`. (2) Content session (channel
IDs, bio, links, Log entries): replaced by the redesign. The Log is retired, and
content asks are now Next #4–5 of the Hugo plan. HANDOFF.md deleted.

**Open:** Uncommitted round-3 mock edits plus `mocks/wordmark-test.html` are Matt's
in-progress work and were left uncommitted. Suggest a `v1-entropic` tag before
the Astro code is removed.

---

## 2026-10-21 — The love letter: full redesign direction + Hugo decision

**Context:** Matt rejected the textmode direction entirely (all four problems: no
art, tired of the terminal vibe, rough execution, template feel) and three fresh
concepts (Plinth/Cabinet/Workbench). What he actually wants: a sincere love letter
to the early-2000s fantasy-gaming web — games-workshop.com, mageknight.com,
worldofwarcraft.com — responsive, with image-free procedural CSS textures.

**What happened:** Three mock rounds in Cowork chat, driven by Matt's Wayback
screenshots: round 1 (WoW-ish gold/stone keep), round 2 (40K teal-weave skin, built
to the 2007 40K capture), round 3 (Fantasy skin — parchment + torn ribbons, maroon
bar, chrome wordmark — built to the 2006 Warhammer captures, plus the Gallery as a
GW "Miniature Range" catalog page with Lords and Heroes/Core/Special/Rare sections
and an icon legend, built to the Orcs & Goblins catalog capture). All committed to
`mocks/`. Brief (claude.md) rewritten top to bottom; STATUS refreshed.

**Decisions:** Build target moves **Astro → Hugo** (Matt wants to learn it; scaffold
on `hugo-rebuild`, Astro serves until the port ships). Design workflow is
**mocks-first**: plain HTML in `mocks/` until Matt approves, then port — never
design in templates. Fantasy skin is the leading master skin. Era furniture is in
(ticker, NEW! burst, working visitor counter, guestbook, 1024×768 gag); counter +
guestbook ship as Netlify Functions + Blobs. Commissions stay at Yellow Imp; old
/commissions will 301.

**Open:** Chronicle cut-or-revive (retired in `35e7c7f`, still in mock nav);
channel list for the videos feed post-consolidation; photography (after Oct 30);
final link list; teal-skin usage.

**Next session:** iterate round 3 with Matt's feedback → approval → Hugo scaffold.

---

## 2026-07-21 — Everyway organization standard installed

STATUS.md, this log, `/wrap` `/orient` commands added; standard footer appended to claude.md. Git conventions unchanged (AGENTS.md: feat/fix branches, squash-merge PRs to main, Conventional Commits).
