import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";
//element-plus自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.vue', '.json', '.less', '.css'],
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', //解决i8n警告
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, "src"),
      },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variable.scss";',
        javascriptEnabled: true
      }
    }
  },
})
