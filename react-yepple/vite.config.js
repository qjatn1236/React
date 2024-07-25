import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      //
      { find: "@images", replacement: "/src/assets/images" },
      //
      { find: "@pages", replacement: "/src/pages" },
      { find: "@components", replacement: "/src/components" },
      { find: "@routes", replacement: "/src/routes" },
      //
      { find: "@atoms", replacement: "/src/components/atoms" },
      { find: "@molecules", replacement: "/src/components/molecules" },
      { find: "@organisms", replacement: "/src/components/organisms" },
      { find: "@templates", replacement: "/src/components/templates" },
    ],
  },
});
