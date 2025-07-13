import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        'page-view': resolve(__dirname, 'entries/page-view.jsx'),
        'editor': resolve(__dirname, 'pages/editor.jsx'),
        'status': resolve(__dirname, 'widgets/status.jsx'),
        'quick-access': resolve(__dirname, 'widgets/quick-access.jsx')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  server: {
    port: 3000
  }
}) 