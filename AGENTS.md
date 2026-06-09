# AGENTS.md

## Git

- `main` is the published branch. Netlify deploys from it on every push.
- For anything non-trivial, branch from `main`:
  - `feat/<short-name>` for features
  - `fix/<short-name>` for bug fixes
  - `ci/<short-name>` for CI-only changes
  - `docs/<short-name>` for docs-only changes
- Open a pull request and squash-merge it into `main`. Small, low-risk changes can land on `main` directly.
- Use Conventional Commits: `<type>[optional scope]: <description>`.
- Write a commit body when the subject alone does not explain the why, tradeoff, or verification.

## Commands

- `pnpm install --frozen-lockfile`
- `pnpm format`
- `pnpm lint`
- `pnpm check`
- `pnpm build`
- `pnpm assets:fonts` after changing CJK font coverage
