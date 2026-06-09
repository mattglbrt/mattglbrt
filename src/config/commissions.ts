export type CommissionStatus = "open" | "waitlist" | "closed";

// Single source of truth for commission availability. Flip this one value and
// both the Commissions page banner AND the home page "go" link retune together.
export const commissionStatus: CommissionStatus = "open";

// Short label used in nav-style links (e.g. the home page "go" section).
export const commissionStatusShort: Record<CommissionStatus, string> = {
  open: "Currently Open",
  waitlist: "Waitlist Open",
  closed: "Currently Closed"
};

// Full ANSI-tagged status line shown on the Commissions page itself.
export const commissionStatusLine: Record<CommissionStatus, string> = {
  open: "#[G|OPEN] — taking new inquiries now.",
  waitlist: "#[Y|WAITLIST] — taking inquiries; there's a queue right now.",
  closed: "#[R|CLOSED] — not taking new work at the moment, but say hello anyway."
};
