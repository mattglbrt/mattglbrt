---
title: Markdown Notes
date: 2024-04-04
lastMod: 2024-05-18T07:29:49.820Z
tags: [Video, Markdown]
category: Notes
summary: Leaving myself some reminders
draft: true
---

## Codepen

```md
::codepen{#gOyLepE author="lxchapu"}
```

::codepen{#gOyLepE author="lxchapu"}

## Youtube

```md
::youtube{#BuKft9LpL_0}
```

::youtube{#BuKft9LpL_0}

## Icons

Gyoza uses the **font-class** method to reference icons. Most of these icons come from [Remix Icons](https://remixicon.com/) and are managed and exported on [iconfont](https://www.iconfont.cn/).

Below is an image showing all the icons in the project:

![All icons](https://s2.loli.net/2024/05/08/mbdT5HqYMEajyRG.webp)

When adding social media accounts to the homepage, you might want to use these icons. Simply enter the name below the icon with the `icon-` prefix in the corresponding configuration option.

If you are using icons in a component, you can do it like this:

```jsx
<i className="iconfont icon-xxx"></i>
```

Why Not SVG Icons?
You may have seen many projects using iconify. Iconify is an open-source icon set that contains over 200,000 icons and provides various framework integrations. Astro also has a plugin, astro-icon, which can be used (if you’re interested, you can check out their documentation).

I have also tried using Iconify in this project, but I ultimately switched to the font-class method for the following reasons:

Since the project uses both Astro and React, the way to use Iconify icons in Astro components and React components is different, which would lead to two usage methods coexisting in the code.
Iconify requires a request to their server during loading, and although the concern about request failures is mostly unnecessary, I still preferred avoiding it.
I needed a feature where I could inject some icons into the markdown when rendering articles, such as an icon at the end of external links. Iconify didn’t make this easy.
Embedding SVG icons directly in HTML didn’t feel elegant. Using font-class only requires the corresponding class name, which feels lighter in terms of HTML size, making page loads slightly faster. I haven’t tested this specifically, but I tend to avoid filling the page with a large number of SVGs just for icons.
The project doesn’t use many icons—mostly just common social media icons for customizing contact details. I preferred managing all the icons together in one place for convenience.
I must admit that the current icon solution is not very elegant, as every time the icon set changes, I need to update the corresponding font files and CSS files. It also makes it harder for others to manage the icon set.

Perhaps in the future, I’ll try other methods, such as @iconify/tailwind. If you have better solutions, feel free to leave a comment.

Custom Icons
If you want to replace the icons in iconfont, modify the following files:

public/fonts/iconfont.ttf
public/fonts/iconfont.woff
public/fonts/iconfont.woff2
src/styles/iconfont.css

Note that this will replace all the icons used in the project, so make sure you know what you're doing.

Let me know if you need any other adjustments!
