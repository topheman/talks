import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../talkB',
    emptyOutDir: true,
  },
  base: '/talks/talkB/'
})
