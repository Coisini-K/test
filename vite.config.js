import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  // 设置基础路径，生产环境使用 '/your-subpath/'，开发环境使用 './'
  // base: process.env.NODE_ENV === 'production' ? '/your-subpath/' : './',

  // 开发服务器配置
  server: {
    port: 5173, // 服务器端口号
    host: '0.0.0.0', // 服务器主机名，允许外部访问
    open: false, // 启动时自动打开浏览器
    proxy: {
      '/api': 'http://localhost:5000', // 代理 API 请求，解决跨域问题
    },
  },

  // 构建配置
  build: {
    outDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录
    sourcemap: false, // 生产环境下关闭 source map
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // 将 node_modules 中的模块打包到 vendor chunk 中
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // 调整 chunk 大小警告限制，单位是 KB
  },

  // CSS 配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/styles/variables.scss";`, // 预处理器选项，例如 SCSS 变量导入
      },
    },
  },

  // 路径解析配置
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 别名配置，@ 指向 src 目录
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)), // 别名配置，@components 指向 src/components 目录
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)), // 别名配置，@utils 指向 src/utils 目录
    },
  },

  // 环境变量配置
  envDir: 'env', // 环境变量文件所在的目录
  envPrefix: 'VITE_', // 环境变量前缀，例如 VITE_API_URL

  // 定义全局常量
  define: {
    'process.env': {}, // 定义 process.env 为一个空对象
    'global': 'window', // 在浏览器环境中，将 global 定义为 window
  },

  // 插件配置
  plugins: [
    vue(), // Vue 插件
    vueDevTools(), // Vue DevTools 插件
    envCompatible(), // 环境变量兼容插件
    // 其他插件
  ],

  // 手动指定入口文件
  optimizeDeps: {
    include: ['@/main'], // 假设你的入口文件是 src/main.js 或 src/main.ts
  },
});