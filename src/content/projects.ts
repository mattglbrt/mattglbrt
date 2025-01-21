import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = [
  {
    title: "Everyway Design",
    description:
      "I don't just build some of the fastest websites you have ever seen. I provide the systems and tech behind them to support your business and achieve your goals. If you want to hire me, this is the place to go.",
    image: "/everywaydesign.jpg",
    tags: ["Wordpress", "Shopify", "Optimization", "Lead Gen", "AI"],
    links: [
      {
        name: "Hire Me",
        url: "https://everywaydesign.com",
        icon: PiLinkSimpleBold,
      }
    ],
  },
  {
    title: "The Hobbinomicon",
    description: "A community, podcast, and website devoted to TTRPGs, Miniature Painting, and Table Top Wargames, with a focus on indie games and helping people actually play them.",
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
  },
  {
    title: "The Book of Valtiare",
    description: "I don't entirely know what this is going to be yet, but if you like the Hobbinomicon and the things I talk about there, hopefully you will like this too.",
    image: "/valtiare.jpg",
    tags: [],
    links: [
      {
        name: "Open the Book",
        url: "https://valtiare.com",
        icon: PiLinkSimpleBold,
      },
    ],
  }
  
]
