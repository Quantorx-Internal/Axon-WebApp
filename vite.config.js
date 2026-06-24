import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split heavy libraries into their own cacheable chunks so the main
        // bundle stays small and animation/vendor code is cached separately.
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          gsap: ['gsap'],
          vendor: [
            'lenis',
            'react-icons',
            'react-phone-input-2',
            'clsx',
            'tailwind-merge',
          ],
        },
      },
    },
  },
});
