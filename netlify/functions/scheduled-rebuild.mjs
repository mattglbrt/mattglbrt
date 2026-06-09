// Daily scheduled rebuild so the "latest videos" feed stays current without
// manual posts (CLAUDE.md §6). Triggers a Netlify Build Hook.
//
// Requires the BUILD_HOOK_URL environment variable (see netlify.toml for setup).
// If it's not set, the function no-ops instead of failing.

export const config = {
  schedule: "@daily"
};

export default async () => {
  const hookUrl = process.env.BUILD_HOOK_URL;

  if (!hookUrl) {
    console.warn("BUILD_HOOK_URL not set — skipping scheduled rebuild.");
    return new Response("BUILD_HOOK_URL not configured", { status: 200 });
  }

  const response = await fetch(hookUrl, { method: "POST" });

  if (!response.ok) {
    console.error(`Build hook failed: ${response.status} ${response.statusText}`);
    return new Response("Build hook failed", { status: 500 });
  }

  return new Response("Rebuild triggered", { status: 200 });
};
