import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    strictPort: false, // إذا كان المنفذ 5173 مشغولاً سينتقل تلقائياً للمنفذ التالي بدلاً من إعطاء خطأ
  },
})
