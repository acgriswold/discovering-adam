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
    bridge: !inProduction,
    accessToken: env.STORYBLOK_TOKEN,
    apiOptions: {
      region: 'us',
    },
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
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
