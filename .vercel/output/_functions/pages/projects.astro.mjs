import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DJvMgjMm.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_BDez-UxF.mjs';
import { $ as $$H1 } from '../chunks/h1_B4g7cWx5.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_DN_fDgqD.mjs';
export { renderers } from '../renderers.mjs';

const ACGenerator = new Proxy({"src":"/_astro/ac-generator.DOBLFjwi.jpg","width":617,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mattglbrt/Documents/dev/mattglbrt/src/assets/ac-generator.jpg";
							}
							
							return target[name];
						}
					});

const FluidPropulsion = new Proxy({"src":"/_astro/fluid-propulsion.BUBknHRd.jpg","width":736,"height":952,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mattglbrt/Documents/dev/mattglbrt/src/assets/fluid-propulsion.jpg";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Everyway Design",
      description: "I don't just build some of the fastest websites you have ever seen. I provide the systems and tech behind them to support your business and achieve your goals. If you want to hire me, this is the place to go.",
      image: ACGenerator,
      url: "https://everywaydesign.com"
    },
    {
      title: "AI & Automation",
      description: "Make more, do less. Improve your bottom line through AI and a focus on customer experience.",
      image: FluidPropulsion,
      url: "https://everyway.io/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-screen"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": ($$result3) => renderTemplate` How I can help ` })} <ul class="mt-4 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8"> ${projects.map((project) => renderTemplate`<li> <a${addAttribute(project.url, "href")} target="_blank" rel="noopener noreferrer" class="group block"> ${renderComponent($$result2, "Image", $$Image, { "src": project.image, "alt": project.title, "class": "aspect-[1/1.33] object-center object-cover rounded-lg shadow-lg mb-4 sm:mb-0 sm:mr-4 transition group-hover:opacity-90" })} <div class="p-1 sm:p-2"> <h2 class="text-base text-zinc-100 underline group-hover:text-blue-400 transition"> ${project.title} </h2> <p class="text-sm text-zinc-400 text-balance">${project.description}</p> </div> </a> </li>`)} </ul> </div> ` })}`;
}, "/Users/mattglbrt/Documents/dev/mattglbrt/src/pages/projects.astro", void 0);

const $$file = "/Users/mattglbrt/Documents/dev/mattglbrt/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
