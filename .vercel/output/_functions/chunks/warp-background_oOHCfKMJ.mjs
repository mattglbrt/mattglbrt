import { c as createComponent, a as createAstro, b as addAttribute, f as renderScript, d as renderTemplate, g as defineScriptVars, u as unescapeHTML, e as renderComponent, h as renderHead, r as renderSlot } from './astro/server_DJvMgjMm.mjs';
import 'kleur/colors';
/* empty css                         */
import { c as $$Font } from './_astro_assets_BDez-UxF.mjs';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { Warp } from '@paper-design/shaders-react';

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/mattglbrt/Documents/dev/mattglbrt/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mattglbrt/Documents/dev/mattglbrt/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$LoadingIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LoadingIndicator;
  const {
    color,
    height = "2px",
    class: className = "astro-loading-indicator",
    animationDuration = 300,
    threshold: defaultThreshold = 200
  } = Astro2.props;
  const threshold = defaultThreshold === false ? 0 : defaultThreshold;
  const styles = `.${className} {
  pointer-events: none;
  background-color: ${color};
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: ${height};
  transition: transform ${animationDuration}ms ease-out, opacity ${animationDuration / 2}ms ${animationDuration / 2}ms ease-in;
	transform: translate3d(0, 0, 0) scaleX(var(--progress, 0));
  transform-origin: 0;
}

[dir="rtl"] .${className} {
  transform-origin: 100% 0;
}
`;
  return renderTemplate(_a || (_a = __template(["<style>", "</style><script>(function(){", `
(() => {
  let progress = 0.25
  let opacity = 0
  /** @type {number | undefined} */
  let trickleInterval = undefined
  /** @type {number | undefined} */
  let thresholdTimeout = undefined;

  const element = document.createElement("div")
  element.classList.add(className)
  element.ariaHidden = "true"

  /** @param {typeof progress} _progress */
  const setProgress = (_progress) => {
    progress = _progress
    element.style.setProperty('--progress', String(progress))
  }

  /** @param {typeof opacity} _opacity */
  const setOpacity = (_opacity) => {
    opacity = _opacity
    element.style.setProperty('opacity', String(opacity))
  }

  setOpacity(opacity)

  document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(element)
  })

  document.addEventListener("astro:before-preparation", () => {
    thresholdTimeout = setTimeout(() => {
      setOpacity(1)
      trickleInterval = window.setInterval(() => {
        setProgress(progress + Math.random() * 0.03)
      }, animationDuration)
    }, threshold)
  })

  document.addEventListener("astro:before-swap", (ev) => {
    if (!thresholdTimeout) {
      return
    }
    window.clearTimeout(thresholdTimeout)

    ev.newDocument.body.prepend(element)
    window.clearInterval(trickleInterval)
    trickleInterval = undefined

    setProgress(1)
    window.setTimeout(() => {
      setOpacity(0)
    }, animationDuration / 2)

    window.setTimeout(() => {
      setProgress(0.25)
    }, animationDuration * 2)
  })
})()
})();<\/script>`])), unescapeHTML(styles), defineScriptVars({ className, animationDuration, threshold }));
}, "/Users/mattglbrt/Documents/dev/mattglbrt/node_modules/astro-loading-indicator/src/LoadingIndicator.astro", void 0);

const $$Astro = createAstro();
const $$RootLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RootLayout;
  const { title, description } = Astro2.props;
  const defaultTitle = "Matt Gilbert";
  const defaultDescription = "The digital garden of Matt Gilbert from Chesapeake, VA.";
  return renderTemplate`<html lang="en" data-astro-cid-mdysn4oi> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title ?? defaultTitle}</title><meta name="description"${addAttribute(description ?? defaultDescription, "content")}><meta property="og:url" content="https://mattglbrt.com/"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(defaultTitle, "content")}><meta property="og:description"${addAttribute(defaultDescription, "content")}><meta property="og:image" content="/social-image.jpg"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="mattglbrt.com"><meta property="twitter:url" content="https://mattglbrt.com/"><meta name="twitter:title"${addAttribute(defaultTitle, "content")}><meta name="twitter:description"${addAttribute(defaultDescription, "content")}><meta name="twitter:image" content="/social-image.jpg">${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-geist", "preload": true, "data-astro-cid-mdysn4oi": true })}${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-mdysn4oi": true })}${renderComponent($$result, "LoadingIndicator", $$LoadingIndicator, { "color": "#f4f4f5", "height": "2px", "data-astro-cid-mdysn4oi": true })}${renderHead()}</head> <body class="font-sans min-h-screen bg-zinc-900" data-astro-cid-mdysn4oi> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/mattglbrt/Documents/dev/mattglbrt/src/layouts/RootLayout.astro", void 0);

function WarpBackground(props) {
  const defaultProps = {
    speed: 0.4,
    rotation: 0.5,
    style: { width: "100%", height: "100%" }
  };
  return /* @__PURE__ */ jsx(Warp, { ...defaultProps, ...props, style: { ...defaultProps.style, ...props.style } });
}

export { $$RootLayout as $, WarpBackground as W };
