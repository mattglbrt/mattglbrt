import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJvMgjMm.mjs';
import 'kleur/colors';
import { $ as $$H1 } from '../chunks/h1_B4g7cWx5.mjs';
import { $ as $$InfoLayout, a as $$ExternalLink } from '../chunks/InfoLayout_DN_fDgqD.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-screen flex flex-col justify-between"> <div> ${renderComponent($$result2, "H1", $$H1, {}, { "default": ($$result3) => renderTemplate`How I can help? ` })} <p class="mt-4 md:mt-8 lg:mt-12 text-xl xl:text-2xl text-zinc-400 text-balance">
I don't just build some of the fastest websites you have ever seen. I provide the systems and tech behind them to support your business and achieve your goals. If you think I can help, shoot me an email at the address below.
</p> <div class="mt-6 sm:mt-12 flex flex-col gap-1"> <a href="mailto:matt@goeveryway.com" class="mb-8 w-fit group flex items-center gap-1 text-base lg:text-xl text-zinc-400 hover:text-zinc-50">
matt@goeveryway.com
<svg xmlns="http://www.w3.org/2000/svg" class="-rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out" width="24" height="24" viewBox="0 0 24 24"> <title>Arrow Icon</title> <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></path> <path fill="currentColor" d="M13.53 8.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z"></path> </svg> </a> ${renderComponent($$result2, "ExternalLink", $$ExternalLink, { "href": "https://github.com/mattglbrt" }, { "default": ($$result3) => renderTemplate`GitHub` })} ${renderComponent($$result2, "ExternalLink", $$ExternalLink, { "href": "https://www.youtube.com/@mattglbrt" }, { "default": ($$result3) => renderTemplate`YouTube` })} </div> </div> <div> <p class="text-base sm:text-lg text-zinc-500">Chesapeake, Virginia</p> <p class="text-base sm:text-lg text-zinc-500">United States</p> </div> </div> ` })}`;
}, "/Users/mattglbrt/Documents/dev/mattglbrt/src/pages/contact.astro", void 0);

const $$file = "/Users/mattglbrt/Documents/dev/mattglbrt/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$Contact,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
