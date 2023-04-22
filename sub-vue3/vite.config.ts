import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';

// useDevMode 开启时与热更新插件冲突
const useDevMode = true

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('vue3Vite', { useDevMode })
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
