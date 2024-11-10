// vitest.config.js
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///C:/Users/KAI/Desktop/rain/code/vue/Coisini-K/node_modules/.store/vitest@2.1.4/node_modules/vitest/dist/config.js";

// vite.config.js
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///C:/Users/KAI/Desktop/rain/code/vue/Coisini-K/node_modules/.store/vite@5.4.10/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/KAI/Desktop/rain/code/vue/Coisini-K/node_modules/.store/@vitejs+plugin-vue@5.1.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/KAI/Desktop/rain/code/vue/Coisini-K/node_modules/.store/vite-plugin-vue-devtools@7.6.3/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import envCompatible from "file:///C:/Users/KAI/Desktop/rain/code/vue/Coisini-K/node_modules/.store/vite-plugin-env-compatible@2.0.1/node_modules/vite-plugin-env-compatible/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/KAI/Desktop/rain/code/vue/Coisini-K/vite.config.js";
var vite_config_default = defineConfig({
  // 设置基础路径，生产环境使用 '/your-subpath/'，开发环境使用 './'
  // base: process.env.NODE_ENV === 'production' ? '/your-subpath/' : './',
  // 开发服务器配置
  server: {
    port: 5173,
    // 服务器端口号
    host: "0.0.0.0",
    // 服务器主机名，允许外部访问
    open: false,
    // 启动时自动打开浏览器
    proxy: {
      "/api": "http://localhost:5000"
      // 代理 API 请求，解决跨域问题
    }
  },
  // 构建配置
  build: {
    outDir: "dist",
    // 构建输出目录
    assetsDir: "assets",
    // 静态资源目录
    sourcemap: false,
    // 生产环境下关闭 source map
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    },
    chunkSizeWarningLimit: 1e3
    // 调整 chunk 大小警告限制，单位是 KB
  },
  // CSS 配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/styles/variables.scss";`
        // 预处理器选项，例如 SCSS 变量导入
      }
    }
  },
  // 路径解析配置
  resolve: {
    alias: {
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url)),
      // 别名配置，@ 指向 src 目录
      "@components": fileURLToPath(new URL2("./src/components", __vite_injected_original_import_meta_url)),
      // 别名配置，@components 指向 src/components 目录
      "@utils": fileURLToPath(new URL2("./src/utils", __vite_injected_original_import_meta_url))
      // 别名配置，@utils 指向 src/utils 目录
    }
  },
  // 环境变量配置
  envDir: "env",
  // 环境变量文件所在的目录
  envPrefix: "VITE_",
  // 环境变量前缀，例如 VITE_API_URL
  // 定义全局常量
  define: {
    "process.env": {},
    // 定义 process.env 为一个空对象
    "global": "window"
    // 在浏览器环境中，将 global 定义为 window
  },
  // 插件配置
  plugins: [
    vue(),
    // Vue 插件
    vueDevTools(),
    // Vue DevTools 插件
    envCompatible()
    // 环境变量兼容插件
    // 其他插件
  ]
});

// vitest.config.js
var __vite_injected_original_import_meta_url2 = "file:///C:/Users/KAI/Desktop/rain/code/vue/Coisini-K/vitest.config.js";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy5qcyIsICJ2aXRlLmNvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEtBSVxcXFxEZXNrdG9wXFxcXHJhaW5cXFxcY29kZVxcXFx2dWVcXFxcQ29pc2luaS1LXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLQUlcXFxcRGVza3RvcFxcXFxyYWluXFxcXGNvZGVcXFxcdnVlXFxcXENvaXNpbmktS1xcXFx2aXRlc3QuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9LQUkvRGVza3RvcC9yYWluL2NvZGUvdnVlL0NvaXNpbmktSy92aXRlc3QuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnLCBkZWZpbmVDb25maWcsIGNvbmZpZ0RlZmF1bHRzIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5pbXBvcnQgdml0ZUNvbmZpZyBmcm9tICcuL3ZpdGUuY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VDb25maWcoXG4gIHZpdGVDb25maWcsXG4gIGRlZmluZUNvbmZpZyh7XG4gICAgdGVzdDoge1xuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qKiddLFxuICAgICAgcm9vdDogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0pXG4pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLQUlcXFxcRGVza3RvcFxcXFxyYWluXFxcXGNvZGVcXFxcdnVlXFxcXENvaXNpbmktS1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcS0FJXFxcXERlc2t0b3BcXFxccmFpblxcXFxjb2RlXFxcXHZ1ZVxcXFxDb2lzaW5pLUtcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0tBSS9EZXNrdG9wL3JhaW4vY29kZS92dWUvQ29pc2luaS1LL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJztcbmltcG9ydCBlbnZDb21wYXRpYmxlIGZyb20gJ3ZpdGUtcGx1Z2luLWVudi1jb21wYXRpYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gXHU4QkJFXHU3RjZFXHU1N0ZBXHU3ODQwXHU4REVGXHU1Rjg0XHVGRjBDXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU0RjdGXHU3NTI4ICcveW91ci1zdWJwYXRoLydcdUZGMENcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTRGN0ZcdTc1MjggJy4vJ1xuICAvLyBiYXNlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJy95b3VyLXN1YnBhdGgvJyA6ICcuLycsXG5cbiAgLy8gXHU1RjAwXHU1M0QxXHU2NzBEXHU1MkExXHU1NjY4XHU5MTREXHU3RjZFXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzMgICwgLy8gXHU2NzBEXHU1MkExXHU1NjY4XHU3QUVGXHU1M0UzXHU1M0Y3XG4gICAgaG9zdDogJzAuMC4wLjAnLCAvLyBcdTY3MERcdTUyQTFcdTU2NjhcdTRFM0JcdTY3M0FcdTU0MERcdUZGMENcdTUxNDFcdThCQjhcdTU5MTZcdTkwRThcdThCQkZcdTk1RUVcbiAgICBvcGVuOiBmYWxzZSwgLy8gXHU1NDJGXHU1MkE4XHU2NUY2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcsIC8vIFx1NEVFM1x1NzQwNiBBUEkgXHU4QkY3XHU2QzQyXHVGRjBDXHU4OUUzXHU1MUIzXHU4REU4XHU1N0RGXHU5NUVFXHU5ODk4XG4gICAgfSxcbiAgfSxcblxuICAvLyBcdTY3ODRcdTVFRkFcdTkxNERcdTdGNkVcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JywgLy8gXHU2Nzg0XHU1RUZBXHU4RjkzXHU1MUZBXHU3NkVFXHU1RjU1XG4gICAgYXNzZXRzRGlyOiAnYXNzZXRzJywgLy8gXHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU3NkVFXHU1RjU1XG4gICAgc291cmNlbWFwOiBmYWxzZSwgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU0RTBCXHU1MTczXHU5NUVEIHNvdXJjZSBtYXBcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InOyAvLyBcdTVDMDYgbm9kZV9tb2R1bGVzIFx1NEUyRFx1NzY4NFx1NkEyMVx1NTc1N1x1NjI1M1x1NTMwNVx1NTIzMCB2ZW5kb3IgY2h1bmsgXHU0RTJEXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCwgLy8gXHU4QzAzXHU2NTc0IGNodW5rIFx1NTkyN1x1NUMwRlx1OEI2Nlx1NTQ0QVx1OTY1MFx1NTIzNlx1RkYwQ1x1NTM1NVx1NEY0RFx1NjYyRiBLQlxuICB9LFxuXG4gIC8vIENTUyBcdTkxNERcdTdGNkVcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCIvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO2AsIC8vIFx1OTg4NFx1NTkwNFx1NzQwNlx1NTY2OFx1OTAwOVx1OTg3OVx1RkYwQ1x1NEY4Qlx1NTk4MiBTQ1NTIFx1NTNEOFx1OTFDRlx1NUJGQ1x1NTE2NVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIC8vIFx1OERFRlx1NUY4NFx1ODlFM1x1Njc5MFx1OTE0RFx1N0Y2RVxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLCAvLyBcdTUyMkJcdTU0MERcdTkxNERcdTdGNkVcdUZGMENAIFx1NjMwN1x1NTQxMSBzcmMgXHU3NkVFXHU1RjU1XG4gICAgICAnQGNvbXBvbmVudHMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL2NvbXBvbmVudHMnLCBpbXBvcnQubWV0YS51cmwpKSwgLy8gXHU1MjJCXHU1NDBEXHU5MTREXHU3RjZFXHVGRjBDQGNvbXBvbmVudHMgXHU2MzA3XHU1NDExIHNyYy9jb21wb25lbnRzIFx1NzZFRVx1NUY1NVxuICAgICAgJ0B1dGlscyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvdXRpbHMnLCBpbXBvcnQubWV0YS51cmwpKSwgLy8gXHU1MjJCXHU1NDBEXHU5MTREXHU3RjZFXHVGRjBDQHV0aWxzIFx1NjMwN1x1NTQxMSBzcmMvdXRpbHMgXHU3NkVFXHU1RjU1XG4gICAgfSxcbiAgfSxcblxuICAvLyBcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTkxNERcdTdGNkVcbiAgZW52RGlyOiAnZW52JywgLy8gXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU2NTg3XHU0RUY2XHU2MjQwXHU1NzI4XHU3Njg0XHU3NkVFXHU1RjU1XG4gIGVudlByZWZpeDogJ1ZJVEVfJywgLy8gXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU1MjREXHU3RjAwXHVGRjBDXHU0RjhCXHU1OTgyIFZJVEVfQVBJX1VSTFxuXG4gIC8vIFx1NUI5QVx1NEU0OVx1NTE2OFx1NUM0MFx1NUUzOFx1OTFDRlxuICBkZWZpbmU6IHtcbiAgICAncHJvY2Vzcy5lbnYnOiB7fSwgLy8gXHU1QjlBXHU0RTQ5IHByb2Nlc3MuZW52IFx1NEUzQVx1NEUwMFx1NEUyQVx1N0E3QVx1NUJGOVx1OEM2MVxuICAgICdnbG9iYWwnOiAnd2luZG93JywgLy8gXHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3M0FGXHU1ODgzXHU0RTJEXHVGRjBDXHU1QzA2IGdsb2JhbCBcdTVCOUFcdTRFNDlcdTRFM0Egd2luZG93XG4gIH0sXG5cbiAgLy8gXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSwgLy8gVnVlIFx1NjNEMlx1NEVGNlxuICAgIHZ1ZURldlRvb2xzKCksIC8vIFZ1ZSBEZXZUb29scyBcdTYzRDJcdTRFRjZcbiAgICBlbnZDb21wYXRpYmxlKCksIC8vIFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1NTE3Q1x1NUJCOVx1NjNEMlx1NEVGNlxuICAgIC8vIFx1NTE3Nlx1NEVENlx1NjNEMlx1NEVGNlxuICBdLFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVSxTQUFTLGlCQUFBQSxzQkFBcUI7QUFDeFcsU0FBUyxhQUFhLGdCQUFBQyxlQUFjLHNCQUFzQjs7O0FDRDRRLFNBQVMsZUFBZSxPQUFBQyxZQUFXO0FBQ3pXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLG1CQUFtQjtBQUpxTCxJQUFNLDJDQUEyQztBQU1oUSxJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUsxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNSLFdBQVc7QUFBQTtBQUFBLElBQ1gsV0FBVztBQUFBO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixhQUFhLElBQUk7QUFDZixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQTtBQUFBLEVBQ3pCO0FBQUE7QUFBQSxFQUdBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSUMsS0FBSSxTQUFTLHdDQUFlLENBQUM7QUFBQTtBQUFBLE1BQ3BELGVBQWUsY0FBYyxJQUFJQSxLQUFJLG9CQUFvQix3Q0FBZSxDQUFDO0FBQUE7QUFBQSxNQUN6RSxVQUFVLGNBQWMsSUFBSUEsS0FBSSxlQUFlLHdDQUFlLENBQUM7QUFBQTtBQUFBLElBQ2pFO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxRQUFRO0FBQUE7QUFBQSxFQUNSLFdBQVc7QUFBQTtBQUFBO0FBQUEsRUFHWCxRQUFRO0FBQUEsSUFDTixlQUFlLENBQUM7QUFBQTtBQUFBLElBQ2hCLFVBQVU7QUFBQTtBQUFBLEVBQ1o7QUFBQTtBQUFBLEVBR0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBO0FBQUEsSUFDSixZQUFZO0FBQUE7QUFBQSxJQUNaLGNBQWM7QUFBQTtBQUFBO0FBQUEsRUFFaEI7QUFDRixDQUFDOzs7QUR4RWdOLElBQU1DLDRDQUEyQztBQUlsUSxJQUFPLHdCQUFRO0FBQUEsRUFDYjtBQUFBLEVBQ0FDLGNBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxNQUNKLGFBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxHQUFHLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDN0MsTUFBTUMsZUFBYyxJQUFJLElBQUksTUFBTUYseUNBQWUsQ0FBQztBQUFBLElBQ3BEO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbImZpbGVVUkxUb1BhdGgiLCAiZGVmaW5lQ29uZmlnIiwgIlVSTCIsICJVUkwiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJkZWZpbmVDb25maWciLCAiZmlsZVVSTFRvUGF0aCJdCn0K
