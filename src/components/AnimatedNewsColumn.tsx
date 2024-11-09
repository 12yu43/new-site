"use client"

import { Endpoints } from '@/constants/endpoints'
import { cn } from '@/lib/cn'
import { News } from '@/types'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Link from 'next/link'

const AnimatedNewsColumn = (props: { duration?: number, data: News[], url?: string, className: string }) => {
    const controls = useAnimationControls()
    const [isHovered, setIsHovered] = React.useState(false)

    useEffect(() => {
        const startAnimation = async () => {
            controls.set({ y: 0 })
            await controls.start({
                y: "-50%",
                // x:"-50%",
                transition: {
                    duration: props.duration || 30,
                    ease: "linear",
                    repeat: Infinity,
                }
            })
        }

        if (!isHovered) {
            startAnimation()
        } else {
            controls.stop()
        }
    }, [isHovered, controls, props.duration])
    return (
        <div
            className={cn('overflow-hidden ', props.className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={controls}
                className={cn('flex flex-row lg:flex-col gap-6 pb-6')}>
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <React.Fragment key={idx}>
                        {props.data?.slice(0, 8).map(({ images, image_alt, title, url, cat_slug }, i) => (
                            <Link href={props.url + '/' + url || "#"} className='group' key={i}>
                                <Image src={Endpoints.ImageUrl + images} alt={image_alt} width={100} height={100} />
                                <div className='flex items-center gap-2 mt-5'>
                                    <div className='flex flex-col'>
                                        <div className='font-medium tracking-tight leading-5 group-hover:underline'>{title}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    )
}

export default AnimatedNewsColumn