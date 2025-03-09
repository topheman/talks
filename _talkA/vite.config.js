import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../talkA',
    emptyOutDir: true,
  },
  base: process.env.GITHUB_ACTIONS ? '/talks/talkA/' : '/'
})
