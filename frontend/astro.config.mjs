import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from "@astrojs/react"

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
  integrations: [
    storyblok({
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
  tailwind(), 
  react()
],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    },
  },
  output: 'server',
})
