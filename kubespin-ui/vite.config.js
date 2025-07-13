import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        // Main integration components
        'page-view': resolve(__dirname, 'entries/page-view.js'),
        
        // Home screen widgets
        'status': resolve(__dirname, 'entries/status.js'),
        'quick-access': resolve(__dirname, 'entries/quick-access.js'),
        
        // Additional pages
        'editor': resolve(__dirname, 'entries/editor.js'),
      },
      external: ['react', 'react-dom'],
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    }
  },
  
  server: {
    port: 3000,
    host: true,
  },
  
  preview: {
    port: 3000,
    host: true,
  },
}) 