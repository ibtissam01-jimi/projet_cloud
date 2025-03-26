import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    loader: 'jsx', // Cette ligne permet de traiter les fichiers .js contenant du JSX
  },
});
