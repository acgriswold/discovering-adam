import { ISbStoriesParams, ISbStoryParams, useStoryblokApi } from "@storyblok/astro";

export function useStoryblokWrapper() {
    const wrappedApi = useStoryblokApi();
    const version = import.meta.env.PUBLIC_ENV === 'production' 
        ? 'published'
        : 'draft'

    function get(slug: string, params?: ISbStoryParams) {
        return wrappedApi.get(slug, { version, ...params })
    }

    function getStories(params?: ISbStoriesParams) {
        return wrappedApi.getStories({ version, ...params })
    }

    function getStory(slug: string, params?: ISbStoryParams) {
        let storyblokSlug = slug ?? 'home'
        return get(`cdn/stories/${storyblokSlug}`, params)
    }

    function translateToRelativeSlug(slug: string) : string {
        return slug.startsWith('/') ? slug : `/${slug}`
    }

    return {
        get,
        getStories,
        getStory,
        translateToRelativeSlug
    }
}