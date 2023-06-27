import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://KrzysztofRozbicki.github.io/goit-react-hw-03-image-finder/',
});
