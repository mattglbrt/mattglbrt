import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mattglbrt.com/",
  vite: {
    plugins: [tailwindcss()]
  }
});
