import { commissionStatus, commissionStatusShort } from "./commissions";

export type HomeItem = {
  label: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
  prefix?: string;
};

export type HomeSection = {
  title: string;
  items?: HomeItem[];
  volumes?: {
    include?: number[];
    exclude?: number[];
    sort?: "asc" | "desc";
    showEmpty?: boolean;
  };
};

export type SiteConfig = {
  name: string;
  description: string;
  homeAsciiArt: string;
  homeSections: HomeSection[];
};

// Matt Gilbert's personal artist hub. Text-first command-center: it links OUT
// to everything he makes rather than trying to be a gallery (see CLAUDE.md §4).
// Mark not-yet-live links plainly instead of pointing at dead URLs.
export const siteConfig: SiteConfig = {
  name: "mattglbrt",
  description: "Matt Gilbert — miniature painter, sculptor & writer. The hands behind The Hobbinomicon.",
  homeAsciiArt: `█   █  ███  █████ █████  ████ █     ████  ████  █████
██ ██ █   █   █     █   █     █     █   █ █   █   █
█ █ █ █████   █     █   █  ██ █     ████  ████    █
█   █ █   █   █     █   █   █ █     █   █ █  █    █
█   █ █   █   █     █    ████ █████ ████  █   █   █`,
  homeSections: [
    {
      title: "whoami",
      items: [
        { label: "Matt Gilbert. Husband, father, artist, aspiring sculptor, writer." },
        { label: "Hobbying from the deep end of the dungeon." }
      ]
    },
    {
      title: "go",
      items: [
        { label: "Videos — latest from the channels", linkLabel: "Videos", href: "/videos/" },
        {
          label: `Commissions — ${commissionStatusShort[commissionStatus]}`,
          linkLabel: "Commissions",
          href: "/commissions/"
        }
      ]
    },
    {
      title: "channels",
      items: [
        {
          label: "The Hobbinomicon — indie tabletop games, painting & everything on the workbench",
          href: "https://www.youtube.com/@Hobbinomicon",
          external: true
        },
        {
          label: "Alone in the Dungeon — solo wargames, ttrpgs, and philosophical rambling",
          href: "https://www.youtube.com/@AloneInTheDungeon",
          external: true
        }
      ]
    },
    {
      title: "projects",
      items: [
        { label: "hobbinomicon.com", href: "https://hobbinomicon.com", external: true },
        {
          label: "aloneinthedungeon.com — my personal hobby blog: writing & finished art",
          href: "https://aloneinthedungeon.com",
          external: true
        },
        // TODO(matt): flip these to live links once each site is published.
        { label: "yellowimp.com (coming soon)" },
        // Hidden until ready — re-add when live:
        // { label: "brickmancy.com (coming soon)" },
        // { label: "minitrukk.com (coming soon)" },
        { label: "thetablesedge.com (coming soon)" }
      ]
    },
    {
      title: "support",
      items: [
        {
          label: "eBay store",
          href: "https://www.ebay.com/usr/buzzardstradingpost",
          external: true
        },
        { label: "Yellow Imp store (coming soon)" }
      ]
    },
    {
      title: "social",
      items: [
        {
          label: "Instagram @hobbinomicon",
          href: "https://www.instagram.com/hobbinomicon/",
          external: true
        },
        {
          label: "Discord — come hang out in the server",
          href: "https://discord.gg/9kzUhhk86r",
          external: true
        }
        // TODO(matt): add Alone in the Dungeon IG + any other live handles.
      ]
    },
    {
      title: "contact",
      items: [
        { label: "matt@hobbinomicon.com", href: "mailto:matt@hobbinomicon.com" },
        { label: "Commissions Are Currently Open", linkLabel: "Commissions", href: "/commissions/" }
      ]
    }
  ]
};
