import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/f-blog/',
  title: "我的个人博客",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: []
  }
})