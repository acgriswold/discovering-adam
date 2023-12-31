import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from "@astrojs/react"
import vercel from "@astrojs/vercel/serverless"
import robotsTxt from "astro-robots-txt"

const env = loadEnv('', process.cwd(), 'STORYBLOK')
const inProduction = env.PUBLIC_ENV === 'production'

export default defineConfig({
  integrations: [
    storyblok({
      bridge: {
        preventClicks: !inProduction,
        resolveLinks: "url"
      },      
    accessToken: env.STORYBLOK_TOKEN,
    apiOptions: {
      region: 'us'
    },
    components: {
      page: 'storyblok/Page',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      'navigation-menu': 'storyblok/Navigation Menu',
      'sticker-set': 'storyblok/StickerSet',
      'sticker': 'storyblok/Sticker',
      'sticker-card-content': 'storyblok/StickerCardContent',
      'hero': 'storyblok/Hero',
      'socials-collection': 'storyblok/SocialsCollection',
      'socials-link': 'storyblok/SocialsLink',
      'separator': 'storyblok/Separator',
      'footer-content': 'storyblok/FooterContent',
      'bento-box': 'storyblok/BentoBox',
      'bento-box-card': 'storyblok/BentoBoxCard',
      'notebook-list': 'storyblok/NotebookList',
      'notebook-featured': 'storyblok/NotebookFeatured',
      'notebook-page': 'storyblok/NotebookPage',
      'paragraph': 'storyblok/Typography/Paragraph',
      'copywrite': 'storyblok/Typography/Copywrite',
      'under-construction': 'storyblok/UnderConstruction',
    },
  }), 
  tailwind({
    applyBaseStyles: false,
  }), 
  react(), 
  robotsTxt({
    policy: [
      {
        userAgent: '*',
        disallow: !inProduction ? '/' : '' 
      }
    ]
  })
],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    },
  },
  output: !inProduction ? 'server' : 'static',
  adapter: !inProduction ? vercel() : undefined
})
