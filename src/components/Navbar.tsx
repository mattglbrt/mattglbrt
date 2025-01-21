import { FaComment, FaYoutube } from "react-icons/fa"
import { ModeToggle } from "./ModeToggle"
import { BsSubstack } from "react-icons/bs";
import { GrGrow } from "react-icons/gr";

const socials = [
  {
    name: "Contact Me",
    url: "https://everywaydesign.com/contact",
    icon: FaComment,
  },
  {
    name: "Substack",
    url: "https://mattglbrt.substack.com",
    icon: BsSubstack,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@mattglbrt",
    icon: FaYoutube,
  },
]

const Navbar = () => {
  return (
    <nav className="z-40 fixed top-5 left-0 right-0 my-0 mx-auto max-w-max px-5 py-2 border border-slate-200 dark:border-slate-700 rounded-full bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-md">
      <ul className="flex items-center justify-center gap-8 text-slate-700 dark:text-slate-300 text-xl">
        {socials.map((social, index) => (
          <li key={index} className="hover:scale-90 duration-150">
            <a href={social.url} target="_blank" rel="noreferrer">
              <social.icon />
            </a>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
