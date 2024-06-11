import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: 'hybrid' // para que sea un sitio con cosas estáticas y dinámicas
  // output: 'server' // para que sea un sitio con cosas dinámicas
  // output: 'static' // para que sea un sitio con cosas estáticas
});