"use client"
import { testimonials } from '@/constants/testimonials'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import HeadingTitle from '@/components/shared/HeadingTitle'

export const TestimonialsColumn = (props: { children: React.ReactNode, className?: string, duration?: number }) => {

    return (
        <div className={props.className}>
            <motion.div animate={{
                translateY: "-50%"
            }}
                transition={{
                    repeatType: "loop",
                    repeat: Infinity,
                    ease: "linear",
                    duration: props.duration || 10
                }}
                className={cn('flex flex-col gap-6 pb-6 ')}>
                {[...new Array(2).fill(0).map((_, idx) => (
                    <React.Fragment key={idx}>
                        <>{props.children}</>
                    </React.Fragment>
                ))]}

            </motion.div>
        </div>
    )
}

export function Testimonials() {
    return (
        <section className='bg-white py-6'>
            <div className='container '>
                <HeadingTitle>Testimonials</HeadingTitle>
                <div className='max-w-[540px] mx-auto'>
                    <div className='flex items-center justify-center'>
                    </div>
                    <p className='section-description mt-5'>
                        From intuitive design to powerful design, our app has become an element essential tool for users  around the world.
                    </p>
                </div>
                <div className='flex justify-center gap-6 mt-10  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[739px] overflow-hidden'>
                    <TestimonialsColumn className='hidden md:block' duration={18}>
                        {
                            testimonials.slice(0.3).map(({ text, name, username }, i) => (
                                <div
                                    className='card' key={i}>
                                    <div>{text}</div>
                                    <div className='flex items-center gap-2 mt-5'>
                                        <div className='flex flex-col'>
                                            <div className='font-medium tracking-tight leading-5'>{name}</div>
                                            <div className='leading-5 tracking-tight'>{username}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </TestimonialsColumn>
                    <TestimonialsColumn className='hidden md:block' duration={19} >
                        {
                            testimonials.slice(3, 6).map(({ text, name, username }, i) => (
                                <div
                                    className='card' key={i}>
                                    <div>{text}</div>
                                    <div className='flex items-center gap-2 mt-5'>
                                        <div className='flex flex-col'>
                                            <div className='font-medium tracking-tight leading-5'>{name}</div>
                                            <div className='leading-5 tracking-tight'>{username}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </TestimonialsColumn>
                    <TestimonialsColumn className='hidden lg:block' duration={17} >
                        {
                            testimonials.slice(6, 9).map(({ text, name, username }, i) => (
                                <div
                                    className='card' key={i}>
                                    <div>{text}</div>
                                    <div className='flex items-center gap-2 mt-5'>
                                        <div className='flex flex-col'>
                                            <div className='font-medium tracking-tight leading-5'>{name}</div>
                                            <div className='leading-5 tracking-tight'>{username}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </TestimonialsColumn>
                </div>

            </div>
        </section>
    )
}