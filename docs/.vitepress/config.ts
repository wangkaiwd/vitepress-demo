import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TypeScript Library Template',
  description: 'Quick create a typescript library with zero configuration',
  base: '/vitepress-demo/',
  themeConfig: {
    nav: [
      {
        link: 'https://github.com/wangkaiwd/vitepress-demo',
        text: 'github'
      }
    ],
    sidebar: false
  },
  markdown: {
    lineNumbers: true
  }
})