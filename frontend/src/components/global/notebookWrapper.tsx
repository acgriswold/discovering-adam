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
    title?: string
}

export type NotebookPreviewProps = PropsWithChildren<NotebookPreviewPropsInternal>

export function NotebookPreview({ href, title, children }: NotebookPreviewProps) {
    const { translateToRelativeSlug } = useStoryblokWrapper()

    return (
        <a
            className="grid min-w-full max-w-full"
            href={translateToRelativeSlug(href)}
        >
            <div className="p-4 border border-slate-100 rounded shadow-sm">
                <div className="prose-lg mb-2">{title}</div>

                {children}
            </div>
        </a>
    )
}