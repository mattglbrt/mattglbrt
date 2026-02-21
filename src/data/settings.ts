import avatar from '../images/15.jpg';
import heroImage from '../images/01.jpg';
import projectsHeroImage from '../images/06.jpg';
import hobbinomiconImage from '../images/hobbinomicon.jpg';

export const settings = {
  /* -----------------------------
   * Site
   * ----------------------------- */
  site: {
    title: 'mattglbrt',
    logo: '', // '/images/logo.png',
    description: 'The digital garden of Matt Gilbert',
    url: 'https://mattglbrt.com',
    image: '/images/og-image.jpg',
    language: 'en',
  },

  /* -----------------------------
   * SEO & Social
   * ----------------------------- */
  seo: {
    twitter: {
      handle: '@mattglbrt',
      site: '@mattglbrt',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
    },
  },

  /* -----------------------------
   * Author
   * ----------------------------- */
  author: {
    name: 'Matt Gilbert',
    src: avatar,
  },

  /* -----------------------------
   * Navigation
   * ----------------------------- */
  navigation: {
    items: [
      { title: 'Home', url: '/' },
      { title: 'About', url: '/about/' },
      { title: 'Contact Me', url: '/contact/' },
      { title: 'My Projects', url: '/projects/' },
    ],
  },

  /* ----------------------------------------------------
   * Pagination settings for the homepage
   * Controls how many posts are displayed and loaded
   * ------------------------------------------------- */
  pagination: {
    initial: 8, // Number of posts to show initially on the homepage
    step: 3 // Number of additional posts to load when clicking "Load More" button
  },

  /* -----------------------------
   * Hero
   * ----------------------------- */
  hero: {
    title: 'Matt Gilbert',
    description: [
      { text: 'Artist', url: 'https://www.youtube.com/@mattglbrt', external: true },
      { text: 'Aspiring Sculptor', url: 'https://yellowimp.com', external: true },
      { text: 'Daily Hobby Vlogger', url: 'https://www.youtube.com/@Hobbinomicon', external: true },
    ],
    src: heroImage,
  },

  /* -----------------------------
   * Projects Page
   * ----------------------------- */
  projectsPage: {
    image: projectsHeroImage,
  },

  projects: [
    {
      name: 'The Hobbinomicon',
      description: 'Hobbying from the deep end of the dungeon. Daily Hobby Vlog.',
      image: hobbinomiconImage,
      links: [
        { label: 'Website', url: 'https://hobbinomicon.com' },
        { label: 'YouTube', url: 'https://www.youtube.com/@Hobbinomicon' },
      ],
    },
    {
      name: 'Yellow Imp Miniatures',
      description: 'A miniature and game company in the making.',
      image: hobbinomiconImage, // TODO: replace with Yellow Imp image
      links: [
        { label: 'Website', url: 'https://yellowimp.com' },
      ],
    },
    {
      name: "Buzzard's Trading Post",
      description: '3D printed miniatures, printing services, and new & used hobby supplies all in one shop.',
      image: hobbinomiconImage, // TODO: replace with Buzzard's Trading Post image
      links: [
        { label: 'Website', url: 'https://buzzardstradingpost.com' },
      ],
    },
  ],

  /* -----------------------------
   * Social Links
   * ----------------------------- */
  // Uses Font Awesome Free 7 icons via Iconify (SVG, npm-based).
  // Other icons can be found at https://icon-sets.iconify.design/fa7-brands/
  socialLinks: [
    {
      icon: 'fa7-brands:x-twitter',
      name: 'X',
      link: '',
    },
    {
      icon: 'fa7-brands:facebook-f',
      name: 'Facebook',
      link: 'https://www.facebook.com/mattglbrt',
    },
    {
      icon: 'fa7-brands:dribbble',
      name: 'Dribbble',
      link: '',
    },
    {
      icon: 'fa7-brands:instagram',
      name: 'Instagram',
      link: 'https://www.instagram.com/hobbinomicon/',
    },
    {
      icon: 'fa7-brands:pinterest',
      name: 'Pinterest',
      link: '',
    },
    {
      icon: 'fa7-brands:youtube',
      name: 'Youtube',
      link: 'https://www.youtube.com/@mattglbrt',
    },
    {
      icon: 'fa7-brands:github',
      name: 'Github',
      link: 'https://github.com/mattglbrt',
    },
    {
      icon: 'fa7-brands:vimeo-v',
      name: 'Vimeo',
      link: '',
    },
  ],

  /* -----------------------------
   * Contact
   * ----------------------------- */
  contact: {},

  /* -----------------------------
   * Comments (Disqus)
   * ----------------------------- */
  comments: {
    enabled: false,
    disqusIdentifier: 'anvodstudio-demo',
  },

  /* -----------------------------
   * Analytics
   * ----------------------------- */
  analytics: {
    google: 'G-71LCCMDVF8', // GA4 Measurement ID
  },

  /* -----------------------------
   * Newsletter
   * ----------------------------- */
  newsletter: {
    enabled: true,
    description: "Subscribe to my newsletter and I'll send you the coolest post and hobby news from each month.",
    buttonText: 'Join',
  },
} as const