import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: { port: 3005, host: true },
  root: ".",
});
