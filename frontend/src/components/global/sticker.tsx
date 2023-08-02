import { HoverCardContent, HoverCard } from '@/components/ui/hover-card';

import { HoverCardTrigger } from '@radix-ui/react-hover-card';
import { ReactNode } from 'react';

import { motion } from 'framer-motion'

export interface IStickerAsset {
    alt: string,
    title: string,
    filename: string,
}

export interface IStickerProps {
    sticker: IStickerAsset,
    children?: ReactNode,
    offsetDx: number,
    offsetDy: number,
}

export function Sticker({ sticker, children, offsetDx, offsetDy }: IStickerProps) {
    return (
        <motion.div
            initial={{ translate: `${offsetDx}px ${offsetDy}px`, scale: 1 }}
            drag
            whileDrag={{ scale: 0.90 }}
            dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
            whileTap={{ scale: 0.95, cursor: "grabbing" }}
            dragElastic={0.3}
            dragTransition={{ bounceStiffness: 33, bounceDamping: 10 }}
            whileHover={{ scale: 1.05, cursor: "grab" }}
            transition={{ duration: .3, bounce: true }}
        >
            <HoverCard openDelay={1.5} closeDelay={1}>
                <HoverCardTrigger>
                    <img onDragStart={(e => e.preventDefault())} src={sticker.filename} alt={sticker.alt} />
                </HoverCardTrigger>

                <HoverCardContent>
                    {children}
                </HoverCardContent>
            </HoverCard>
        </motion.div>
    )
}