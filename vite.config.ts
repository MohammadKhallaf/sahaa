import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
    }),
    tsconfigPaths(),
    react(),
    checker({
      typescript: true,
    }),
  ],

  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),

      "@schemas": path.resolve(__dirname, "./src/app/schemas"),
      "@utils": path.resolve(__dirname, "./src/app/utils"),
      "@types": path.resolve(__dirname, "./src/app/types"),
      "@hooks": path.resolve(__dirname, "./src/app/hooks"),
      "@app": path.resolve(__dirname, "./src/app"),

      "@actions": path.resolve(__dirname, "./src/store/actions"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@store": path.resolve(__dirname, "./src/store"),

      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
