import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = [
  {
    title: "Everyway Design",
    description:
      "I don't just build some of the fastest websites you have ever seen. I provide the systems and tech behind them to support your business and achieve your goals. If you want to hire me, this is the place to go.",
    image: "/everywaydesign.jpg",
    tags: [],
    links: [
      {
        name: "Hire Me",
        url: "https://everywaydesign.com",
        icon: PiLinkSimpleBold,
      }
    ],
  },
  {
    title: "YouTube",
    description:
      "I'm recording everything I know and doing my best to condense it into usable guides and tutorials which will be posted completely for free on YouTube. The first series in currently in progress. Subscrbe now to be notified when its published. ",
    image: "/youtube.jpg",
    tags: [],
    links: [
      {
        name: "Subscribe",
        url: "https://www.youtube.com/@goeveryway",
        icon: PiLinkSimpleBold,
      }
    ],
  },
  {
    title: "Quick Call",
    description:
      "Schedule a no strings attached 30 minute call with me to discuess how I can help your organization.",
    image: "/schedule.jpg",
    tags: [],
    links: [
      {
        name: "Schedule a Call",
        url: "https://calendly.com/mattgilbert/30min",
        icon: PiLinkSimpleBold,
      }
    ],
  },
  {
    title: "The Hobbinomicon",
    description: "This is more of a fun one. I want to help indie creators in the tabletop and miniature painting communities so I am building a platform to bring more people into the hobby, find cool projects, and then actually start playing them. ",
    image: "/hobbinomicon.jpg",
    tags: [],
    links: [
      {
        name: "YouTube",
        url: "https://www.youtube.com/@thehobbinomicon",
        icon: FaYoutube,
      },
      {
        name: "Website",
        url: "https://hobbinomicon.com",
        icon: PiLinkSimpleBold,
      },
      {
        name: "Discord",
        url: "https://discord.gg/e5hpQZv7gD",
        icon: FaDiscord,
      }
    ],
  }
  
]
