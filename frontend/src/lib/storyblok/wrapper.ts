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

    function translateToRelativeSlug(href: Href, prefix: string = "") : string {
        if (href.url && href.url.length > 0)
            return `${href.url}`

        return `${prefix}${href.cached_url}`
    }

    return {
        get,
        getStories,
        getStory,
        translateToRelativeSlug
    }
}