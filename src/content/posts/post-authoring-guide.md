---
title: Post Authoring Guide
description: A reference guide covering all the tools and features available when writing posts — frontmatter fields, images, galleries, callouts, embeds, and more.
date: 2025-06-01 12:00:00 +0300
tags: [Notes]
draft: true
---

This guide documents every feature available when writing posts for this site. Use it as a quick reference while authoring content.

## Frontmatter

Every post starts with YAML frontmatter between `---` fences. Here are all supported fields:

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

## Images

Use standard markdown image syntax with a relative path from the post file to the `src/images/` directory:

```markdown
![Alt text](../../images/photo.jpg)
```

Add an italicized caption on the line directly below the image:

```markdown
![Mountain landscape](../../images/photo.jpg)
*Mountain landscape / [Unsplash](https://unsplash.com/)*
```

## Wide Images

Wrap an image in a `:::wide` directive to make it break out of the content column and span the full width:

```markdown
:::wide
![Wide panorama](../../images/panorama.jpg)
:::
```

## Image Galleries

Use the `:::gallery` directive to display multiple images in a grid layout:

```markdown
:::gallery
![Photo one](../../images/01.jpg)
![Photo two](../../images/02.jpg)
![Photo three](../../images/03.jpg)
:::
```

You can also add a caption below the images inside the directive:

```markdown
:::gallery
![Photo one](../../images/01.jpg)
![Photo two](../../images/02.jpg)
![Photo three](../../images/03.jpg)

*Photos from the trip / [Unsplash](https://unsplash.com/)*
:::
```

## Blockquotes

Standard markdown blockquotes. Use an HTML `<cite>` tag for attribution:

```markdown
> The longer I live, the more I realize that I am never wrong about anything.
>
> <cite>George Bernard Shaw</cite>
```

## Callouts

There are five callout types: **note**, **tip**, **important**, **warning**, and **caution**. Each one has a distinct icon and styling. You can use either of two syntaxes.

### Directive syntax

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

Add a custom title with the `title` attribute:

```markdown
:::tip{title="Pro move"}
You can customise the callout heading like this.
:::
```

### GitHub-style syntax

You can also write callouts as blockquotes using the `[!TYPE]` pattern:

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

Add a custom title after the type label:

```markdown
> [!TIP] Pro move
> You can customise the callout heading like this.
```

## YouTube Embeds

Embed a YouTube video using a raw HTML iframe wrapped in a `<p>` tag:

```html
<p><iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe></p>
```

Replace `VIDEO_ID` with the ID from the YouTube URL (the part after `v=`).

## Drafts

Set `draft: true` in frontmatter to keep a post visible in local development but hidden from the production build. Remove the field or set it to `false` when you're ready to publish.
