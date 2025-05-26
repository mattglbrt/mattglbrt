import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJvMgjMm.mjs';
import 'kleur/colors';
import { $ as $$H1 } from '../chunks/h1_B4g7cWx5.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_DN_fDgqD.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-screen flex flex-col justify-between gap-32"> <div class="space-y-4 sm:space-y-12"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": ($$result3) => renderTemplate` Get to know me ` })} <p class="text-xl xl:text-2xl text-zinc-500 text-balance">
I am an artist, seeker, husband, and father of four.
<br>
I help creatives, makers, and small business owners create successful businesses.
</p> <p class="text-xl xl:text-2xl text-zinc-500 text-balance">
I built my first website back in 2004 while I was still in high school. Fast forward to now—200+ websites later—and I’ve led product marketing and demand generation teams for startups, entrepreneurs, and Fortune 100 companies.
</p> <p class="text-xl xl:text-2xl text-zinc-500 text-balance">
I’ve helped startups launch and get acquired, guided small businesses from zero to their first $10 million, and managed global marketing teams for publicly traded companies. I’ve also worked with government agencies and contractors. I know my way around both the public and private sectors.
</p> <p class="text-xl xl:text-2xl text-zinc-500 text-balance">
I’ve generated millions of dollars for my employers and clients. Now I want to help as many people as possible do the same.
</p> <p class="text-xl xl:text-2xl text-zinc-500 text-balance"> <a class="underline" href="https://themattgilbert.com/">Check out my full cv.</a> </p> </div> </div> ` })}`;
}, "/Users/mattglbrt/Documents/dev/mattglbrt/src/pages/about.astro", void 0);

const $$file = "/Users/mattglbrt/Documents/dev/mattglbrt/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$About,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
