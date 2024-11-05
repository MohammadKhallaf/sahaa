// vite.config.ts
import react from "file:///F:/Others/sahaa/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.1_vite@5.4.10_@types+node@22.8.6_sass-embedded@1.80.5_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { defineConfig } from "file:///F:/Others/sahaa/node_modules/.pnpm/vite@5.4.10_@types+node@22.8.6_sass-embedded@1.80.5/node_modules/vite/dist/node/index.js";
import svgr from "file:///F:/Others/sahaa/node_modules/.pnpm/vite-plugin-svgr@4.3.0_rollup@4.24.3_typescript@5.6.3_vite@5.4.10_@types+node@22.8.6_sass-embedded@1.80.5_/node_modules/vite-plugin-svgr/dist/index.js";
import tsconfigPaths from "file:///F:/Others/sahaa/node_modules/.pnpm/vite-tsconfig-paths@5.0.1_typescript@5.6.3_vite@5.4.10_@types+node@22.8.6_sass-embedded@1.80.5_/node_modules/vite-tsconfig-paths/dist/index.js";
var __vite_injected_original_dirname = "F:\\Others\\sahaa";
var vite_config_default = defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2
        }
      }
    }),
    tsconfigPaths(),
    react()
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@layouts": path.resolve(__vite_injected_original_dirname, "./src/layouts"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      "@styles": path.resolve(__vite_injected_original_dirname, "./src/styles"),
      "@schemas": path.resolve(__vite_injected_original_dirname, "./src/app/schemas"),
      "@utils": path.resolve(__vite_injected_original_dirname, "./src/app/utils"),
      "@types": path.resolve(__vite_injected_original_dirname, "./src/app/types"),
      "@hooks": path.resolve(__vite_injected_original_dirname, "./src/app/hooks"),
      "@app": path.resolve(__vite_injected_original_dirname, "./src/app"),
      "@actions": path.resolve(__vite_injected_original_dirname, "./src/store/actions"),
      "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets"),
      "@store": path.resolve(__vite_injected_original_dirname, "./src/store"),
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxPdGhlcnNcXFxcc2FoYWFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXE90aGVyc1xcXFxzYWhhYVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovT3RoZXJzL3NhaGFhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHN2Z3Ioe1xyXG4gICAgICBzdmdyT3B0aW9uczoge1xyXG4gICAgICAgIHBsdWdpbnM6IFtcIkBzdmdyL3BsdWdpbi1zdmdvXCIsIFwiQHN2Z3IvcGx1Z2luLWpzeFwiXSxcclxuICAgICAgICBzdmdvQ29uZmlnOiB7XHJcbiAgICAgICAgICBmbG9hdFByZWNpc2lvbjogMixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICB0c2NvbmZpZ1BhdGhzKCksXHJcbiAgICByZWFjdCgpLFxyXG4gIF0sXHJcblxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQGNvbXBvbmVudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzXCIpLFxyXG4gICAgICBcIkBsYXlvdXRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvbGF5b3V0c1wiKSxcclxuICAgICAgXCJAcGFnZXNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9wYWdlc1wiKSxcclxuICAgICAgXCJAc3R5bGVzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvc3R5bGVzXCIpLFxyXG5cclxuICAgICAgXCJAc2NoZW1hc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2FwcC9zY2hlbWFzXCIpLFxyXG4gICAgICBcIkB1dGlsc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2FwcC91dGlsc1wiKSxcclxuICAgICAgXCJAdHlwZXNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9hcHAvdHlwZXNcIiksXHJcbiAgICAgIFwiQGhvb2tzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXBwL2hvb2tzXCIpLFxyXG4gICAgICBcIkBhcHBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9hcHBcIiksXHJcblxyXG4gICAgICBcIkBhY3Rpb25zXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvc3RvcmUvYWN0aW9uc1wiKSxcclxuICAgICAgXCJAYXNzZXRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXNzZXRzXCIpLFxyXG4gICAgICBcIkBzdG9yZVwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3N0b3JlXCIpLFxyXG5cclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhcGk6IFwibW9kZXJuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFPLE9BQU8sV0FBVztBQUN2UCxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sbUJBQW1CO0FBSjFCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILGFBQWE7QUFBQSxRQUNYLFNBQVMsQ0FBQyxxQkFBcUIsa0JBQWtCO0FBQUEsUUFDakQsWUFBWTtBQUFBLFVBQ1YsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsSUFDZCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsZUFBZSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDekQsWUFBWSxLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ25ELFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUMvQyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFFakQsWUFBWSxLQUFLLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsTUFDdkQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsTUFDbkQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsTUFDbkQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsTUFDbkQsUUFBUSxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BRTNDLFlBQVksS0FBSyxRQUFRLGtDQUFXLHFCQUFxQjtBQUFBLE1BQ3pELFdBQVcsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUNqRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFFL0MsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
