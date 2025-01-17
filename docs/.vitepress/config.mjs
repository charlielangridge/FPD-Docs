import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FPD Docs",
  description: "Here you can find the documentation for the all the FPD software.",
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'MailCoach',
        items: [
          { text: 'User Guide', link: '/mailcoach' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'StaffTrack',
        items: [
          { text: 'Administration Guide', link: '/stafftrack/admin'},
          { text: 'Management Guide', link: '/stafftrack/management'},
          { text: 'User Guide', link: '/stafftrack/user'},
        ]
      }
    ],

    // socialLinks: [
    //   // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
