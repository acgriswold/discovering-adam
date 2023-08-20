import { PropsWithChildren, ReactNode } from 'react';

import { Card, CardHeader, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'
import { cn } from '@/lib/utils';

type CardWrapperPropsInternal = {
    title?: ReactNode,
    description?: ReactNode,
    footer?: ReactNode,
}

export type CardWrapperProps = PropsWithChildren<CardWrapperPropsInternal & React.HTMLAttributes<typeof Card>>

export default function CardWrapper({ title, description, children, footer, className, style }: CardWrapperProps) {
    return (
        <Card className={cn(className)} style={{ ...style }}>
            {title && description &&
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            }

            {children}

            {footer &&
                <CardFooter>
                    {footer}
                </CardFooter>
            }
        </Card>
    )
} 