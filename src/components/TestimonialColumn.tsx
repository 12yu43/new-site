"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type TestimonialsColumnProps = {
    children: React.ReactNode,
    className?: string,
    duration?: number,
    directionX?: "left" | "right",
    directionY?: "up" | "down",

};

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = (props) => {
    const { children, className, duration, directionX, directionY } = props;

    const translateX = directionX === 'left' ? '-30%' : directionX === 'right' ? '30%' : '0';
    const translateY = directionY === 'up' ? '-50%' : directionY === 'down' ? '-30%' : '0';

    return (
        <div className={className}>
            <motion.div animate={{
                translateX,
                translateY
            }}
                transition={{
                    repeatType: "loop",
                    repeat: Infinity,
                    ease: "linear",
                    duration: duration || 20
                }}
                className={cn('flex justify-between gap-6 pb-6 ', directionY && "flex-col")}>
                {[...new Array(2)].map((_, idx) => (
                    <React.Fragment key={idx}>
                        {children}
                    </React.Fragment>
                ))}
                
            </motion.div>
        </div>
    );
}
