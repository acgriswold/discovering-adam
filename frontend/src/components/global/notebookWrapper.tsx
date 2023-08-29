import { PropsWithChildren } from "react";

import { useStoryblokWrapper } from "@/lib/storyblok/wrapper"


type NotebookPropsInternal = {
    lead?: string,
    description?: string,
}

export type NotebookProps = PropsWithChildren<NotebookPropsInternal>

export function NotebookWrapper({ lead, description, children }: NotebookProps) {
    return (
        <div>
            <div className="container mx-auto flex flex-col gap-4 my-12 place-items-center">
                <div className="prose mb-8 mt-2">
                    <div className="prose prose-2xl">
                        {lead}
                    </div>

                    <div>{description}</div>
                </div>

                {children}
            </div>
        </div>
    )
}



type NotebookPreviewPropsInternal = {
    href?: Href,
    title?: string,
    subtitle?: string,
    tags?: string[]
}

export type NotebookPreviewProps = PropsWithChildren<NotebookPreviewPropsInternal>

export function NotebookPreview({ href, title, subtitle, tags, children }: NotebookPreviewProps) {
    const { translateToRelativeSlug } = useStoryblokWrapper()

    return (
        <a
            className="grid min-w-full max-w-full"
            href={translateToRelativeSlug(href)}
        >
            <div className="p-4 border border-slate-100 rounded shadow-sm">
                <div className="prose-2xl">{title}</div>
                <div className="prose-md text-secondary-foreground italic mb-2">{subtitle}</div>

                {children}

                <div className="prose-sm flex flex-row">
                    {tags?.map((tag) => {
                        return (
                            <div className="border m-2 py-0 px-4 rounded-full">{tag}</div>
                        )
                    })}
                </div>
            </div>
        </a>
    )
}