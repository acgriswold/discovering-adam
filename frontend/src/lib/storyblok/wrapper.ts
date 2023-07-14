import { ISbStoryParams, useStoryblokApi } from "@storyblok/astro";

export function useStoryblokWrapper() {
    const wrappedApi = useStoryblokApi();
    const version = import.meta.env.PUBLIC_ENV === 'production' 
        ? 'published'
        : 'draft'

    function get(slug: string, params?: ISbStoryParams) {
        return wrappedApi.get(slug, { version, ...params })
    }

    function getStory(slug: string, params?: ISbStoryParams) {
        let storyblokSlug = slug ?? 'home'
        return get(`cdn/stories/${storyblokSlug}`, params)
    }

    return {
        get,
        getStory
    }
}