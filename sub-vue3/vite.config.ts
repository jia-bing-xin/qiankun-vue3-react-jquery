import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
