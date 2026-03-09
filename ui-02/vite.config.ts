import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: ["react-slick", "slick-carousel"],
  },
  // It helps to process faster files in Windows
  server: {
    watch: {
      usePolling: true,
    },
  },
});
