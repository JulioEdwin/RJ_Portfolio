import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Sur GitHub Pages, le site est servi sous /RJ_Portfolio/ : `base` relatif
// garantit que les assets (JS/CSS/images) pointent au bon endroit.
// En local (`npm run dev`), base '/' est conservée.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/RJ_Portfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))
