import { defineConfig } from "vite";

export default defineConfig({
  // Relative asset paths so the build works from a GitHub Pages sub-path.
  base: "./",
  build: {
    // three.js alone is ~600 kB minified (≈165 kB gzipped); that's expected.
    chunkSizeWarningLimit: 800,
  },
});
