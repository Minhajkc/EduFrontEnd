import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Specify only the API routes that need to go to the backend
      '/api': {
        target: 'https://eduserver-04u2.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: Remove `/api` prefix before sending to backend
      }
    },
  },
});
