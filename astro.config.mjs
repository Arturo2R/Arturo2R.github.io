import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    // Example: Provide a custom path to a Tailwind config file
    config: {
      path: './tailwind.config.js',
      applyBaseStyles: true
    }
  }), svelte(), partytown({})],
  site: 'https://arturo2r.github.io',
  base: '/',

});