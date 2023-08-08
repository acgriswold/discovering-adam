import { PropsWithChildren, ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../ui/tooltip";


type TooltipWrapperPropsInternal = {
    trigger?: ReactNode
    children?: ReactNode,
}

export type TooltipWrapperProps = PropsWithChildren<TooltipWrapperPropsInternal>

export function TooltipWrapper({ children, trigger }: TooltipWrapperPropsInternal) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {trigger}
                </TooltipTrigger>
                <TooltipContent>
                    {children}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

