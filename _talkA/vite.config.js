import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../talkA',
    emptyOutDir: true,
  },
  base: '/talks/talkA/'
})
