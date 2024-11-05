import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
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
  test: {
    environment: "happy-dom",
    globals: true,

    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
    },
    setupFiles: ["./src/setup-tests.tsx"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
