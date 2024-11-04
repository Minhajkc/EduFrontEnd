import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': {
        target: 'https://eduserver-04u2.onrender.com', // Your backend URL
        changeOrigin: true,
      },
    },
  },
});
