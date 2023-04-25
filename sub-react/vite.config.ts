import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun';
import path from "path";

// useDevMode 开启时与热更新插件冲突
const useDevMode = true

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    qiankun('sub-react', { useDevMode })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, "src"),
      },
    ]
  },
})
