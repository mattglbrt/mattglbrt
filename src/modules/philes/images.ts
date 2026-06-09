import type { ImageMetadata } from "astro";

// All bundleable images live under src/images/ so Astro can optimize them at
// build time (resize, format conversion, hashing). Phile bodies reference them
// by public-style path, e.g. ![alt](/images/foo/bar.jpg), which maps here to
// the source asset /src/images/foo/bar.jpg.
const imageAssets = import.meta.glob<{ default: ImageMetadata }>(
  "/src/images/**/*.{jpeg,jpg,png,gif,webp,avif,JPEG,JPG,PNG,GIF,WEBP,AVIF}"
);

export async function resolvePhileImage(src: string): Promise<ImageMetadata | undefined> {
  if (!src.startsWith("/images/")) {
    return undefined;
  }

  const loader = imageAssets[`/src${src}`];

  if (!loader) {
    return undefined;
  }

  return (await loader()).default;
}
