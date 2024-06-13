import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: 'hybrid'
  // output: 'hybrid' // para que sea un sitio con cosas estáticas y dinámicas
  // output: 'server' // para que sea un sitio con cosas dinámicas
  // output: 'static' // para que sea un sitio con cosas estáticas
  ,
  adapter: node({
    mode: "standalone"
  })
});