import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../talkB',
    emptyOutDir: true,
  },
  base: process.env.GITHUB_ACTIONS ? '/talks/talkB/' : '/'
})
