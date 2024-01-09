# To Do

### Newsletter

You can find the newsletter sign up form in `./src/components/SignUpForm.tsx` — if you have a newsletter you'll want to wire this up with whatever mailing list software you use to get it to actually work.

### RSS feed

The site uses a [route handler](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) to automatically generate an RSS feed at run time based on the rendered home page.

You can edit the metadata for the feed (like the title and description) in `./src/app/feed.xml/route.ts`.

Make sure to set your `NEXT_PUBLIC_SITE_URL` environment variable as the RSS feed needs this to generate the correct links for each entry.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

Commit is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Motion One](https://motion.dev/) - the official Motion One documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
