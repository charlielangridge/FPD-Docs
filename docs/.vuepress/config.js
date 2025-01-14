import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(),

    lang: 'en-GB',
    title: 'FPD Docs',
    description: 'Here you can find the documentation for the all the FPD softwares.',
})
