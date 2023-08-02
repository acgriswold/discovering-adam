/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly STORYBLOK_TOKEN: string
    readonly PUBLIC_ENV: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Href {
    readonly url: string,
    readonly cached_url: string
}