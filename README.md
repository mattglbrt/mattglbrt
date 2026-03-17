# mattglbrt.com

Personal site built with [Astro](https://astro.build/) using the Norlin theme. Deployed on Netlify.

## Development

```bash
npm install     # install dependencies
npm run dev     # start dev server (localhost:4321)
npm run build   # production build
npm run preview # preview production build
```

## Project Structure

- `src/data/settings.ts` — site config (title, author, nav, hero, social links, etc.)
- `src/content/posts/` — blog posts (`.md` / `.mdx`)
- `src/content/pages/` — content pages (about, contact)
- `src/pages/` — Astro page routes
- `src/images/` — all site images
- `src/styles/0-settings/_variables.scss` — color/style variables

---

## Post Authoring Guide

### Frontmatter

Every post starts with YAML frontmatter between `---` fences:

```yaml
---
title: My Post Title              # Required — the post headline
description: A short summary...   # Optional — used in previews and meta tags
date: 2025-06-01 12:00:00 +0300   # Required — publish date
updatedDate: 2025-06-15 10:00:00  # Optional — last updated date
image: '../../images/01.jpg'      # Optional — featured/hero image
tags: [Design, Notes]             # Optional — array of tags (defaults to [])
featured: true                    # Optional — pin to featured section (defaults to false)
draft: true                       # Optional — hide from production build (defaults to false)
author: Jane Doe                  # Optional — post author name
---
```

### Images

```markdown
![Alt text](../../images/photo.jpg)
```

Add a caption on the line directly below:

```markdown
![Mountain landscape](../../images/photo.jpg)
*Mountain landscape / [Unsplash](https://unsplash.com/)*
```

### Wide Images

```markdown
:::wide
![Wide panorama](../../images/panorama.jpg)
:::
```

### Image Galleries

```markdown
:::gallery
![Photo one](../../images/01.jpg)
![Photo two](../../images/02.jpg)
![Photo three](../../images/03.jpg)
:::
```

With a caption:

```markdown
:::gallery
![Photo one](../../images/01.jpg)
![Photo two](../../images/02.jpg)
![Photo three](../../images/03.jpg)

*Photos from the trip / [Unsplash](https://unsplash.com/)*
:::
```

### Blockquotes

```markdown
> The longer I live, the more I realize that I am never wrong about anything.
>
> <cite>George Bernard Shaw</cite>
```

### Callouts

Five types: **note**, **tip**, **important**, **warning**, **caution**.

#### Directive syntax

```markdown
:::note
This is a note with useful background information.
:::

:::tip
A helpful tip for the reader.
:::

:::important
Something the reader should not overlook.
:::

:::warning
Proceed with caution — this could cause issues.
:::

:::caution
Dangerous action ahead — data loss is possible.
:::
```

Custom title:

```markdown
:::tip{title="Pro move"}
You can customise the callout heading like this.
:::
```

#### GitHub-style syntax

```markdown
> [!NOTE]
> This is a note.

> [!TIP]
> A helpful tip.

> [!IMPORTANT]
> Don't miss this.

> [!WARNING]
> Be careful here.

> [!CAUTION]
> This is dangerous.
```

Custom title:

```markdown
> [!TIP] Pro move
> You can customise the callout heading like this.
```

### YouTube Embeds

```html
<p><iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe></p>
```

Replace `VIDEO_ID` with the ID from the YouTube URL (the part after `v=`).

### Drafts

Set `draft: true` in frontmatter to keep a post visible in local dev but hidden from production. Remove the field or set it to `false` when ready to publish.
