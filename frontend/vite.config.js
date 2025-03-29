import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  esbuild: {
    loader: 'jsx', // Cette ligne permet de traiter les fichiers .js contenant du JSX
  },
  plugins: [
    tailwindcss(),
  ],
});
