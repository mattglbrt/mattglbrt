import avatar from '../images/15.jpg';
import heroImage from '../images/01.jpg';
import projectsHeroImage from '../images/06.jpg';
import projectImage1 from '../images/03.jpg';
import projectImage2 from '../images/04.jpg';
import projectImage3 from '../images/05.jpg';

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
      { text: 'Daily Vlogger', url: 'https://www.youtube.com/@Hobbinomicon', external: true },
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
      name: 'Project One',
      description: 'A short description of this project and what it is about.',
      image: projectImage1,
      links: [
        { label: 'Website', url: 'https://example.com' },
        { label: 'GitHub', url: 'https://github.com' },
      ],
    },
    {
      name: 'Project Two',
      description: 'Another project with a brief description of what it does.',
      image: projectImage2,
      links: [
        { label: 'Visit', url: 'https://example.com' },
      ],
    },
    {
      name: 'Project Three',
      description: 'A third project to show how the layout works with multiple entries.',
      image: projectImage3,
      links: [
        { label: 'Website', url: 'https://example.com' },
        { label: 'Docs', url: 'https://example.com/docs' },
        { label: 'GitHub', url: 'https://github.com' },
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
  contact: {
    email: 'your_formspree_form_id', // Example 'mbjebqko'
  },

  /* -----------------------------
   * Comments (Disqus)
   * ----------------------------- */
  comments: {
    enabled: true,
    disqusIdentifier: 'anvodstudio-demo',
  },

  /* -----------------------------
   * Analytics
   * ----------------------------- */
  analytics: {
    google: '', // GA4 Measurement ID
  },

  /* -----------------------------
   * Newsletter
   * ----------------------------- */
  newsletter: {
    enabled: true,
    mailchimpIdentifier: 'gmail.us21.list-manage.com/subscribe/post?u=8aeb9c31a5c97a3a5f9ff2740&id=0e31fd7793',
    description: 'Subscribe to my newsletter and I’ll send you the coolest post and hobby news from each month.',
    buttonText: 'Join',
  },
} as const