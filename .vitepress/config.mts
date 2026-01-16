import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import MarkdownItPlantuml from 'markdown-it-plantuml'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "My Awesome Project",
  description: "A VitePress Site",
  lang: 'ja-JP',
  ignoreDeadLinks: [
    /localhost/
  ],

  markdown: {
    config: (md) => {
      md.use(MarkdownItPlantuml);
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ]
    //   },
    // ],

    // sidebar: {
    //   '/foo': generateSidebar([
    //     {
    //       documentRootPath: '/docs',
    //       scanStartPath: '/foo',
    //       collapsed: true,
    //     },
    //   ])
    // },

    sidebar: generateSidebar([
      {
        documentRootPath: '/docs',
        collapsed: true,
        // documentRootPath: '/',
        // scanStartPath: '/',
        // frontmatterTitleFieldName: 'FOO',
        // rootGroupText: 'Contents',
        // frontmatterTitleFieldName: 'aa',
      },
    ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'test',
      copyright: 'copy light'
    }
  },
  
  sitemap: {
    hostname: 'https://example.com'
  }
})
