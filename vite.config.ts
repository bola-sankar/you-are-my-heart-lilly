import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/you-are-my-heart-lilly/',
  plugins: [react()],
})
