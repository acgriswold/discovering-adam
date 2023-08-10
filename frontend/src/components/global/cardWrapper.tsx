import { PropsWithChildren, ReactNode } from 'react';

import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'

type CardWrapperPropsInternal = {
    title?: ReactNode,
    description?: ReactNode,
    footer?: ReactNode,
}

export type CardWrapperProps = PropsWithChildren<CardWrapperPropsInternal & React.HTMLAttributes<typeof Card>>

export default function CardWrapper({ title, description, children, footer }: CardWrapperProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                {footer}
            </CardFooter>
        </Card>
    )
} 