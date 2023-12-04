import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectRootDir = path.resolve(__dirname, '..')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'RComponent': path.resolve(projectRootDir, 'src'),
    },
  },
  plugins: [react()],
})
