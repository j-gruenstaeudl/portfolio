import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://me.gruenstaeudl.at',
  base: '/portfolio',
  integrations: [react()]
});