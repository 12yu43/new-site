"use client"
import { testimonials } from '@/constants/testimonials'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialsColumn = (props: { testimonials: typeof testimonials, className?: string, duration?: number }) => {

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
                        {
                            props.testimonials.map(({ text, name, username }, i) => (
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
                    </React.Fragment>
                ))]}

            </motion.div>
        </div>
    )
}

export function Testimonials() {
    return (
        <section className='bg-white py-24'>
            <div className='container '>
                <div className='max-w-[540px] mx-auto'>
                    <div className='flex items-center justify-center'>
                        <div className='tag'>Testimonials</div>
                    </div>
                    <h2 className='section-title mt-5'>What our users say</h2>
                    <p className='section-description mt-5'>
                        From intuitive design to powerful design, our app has become an element essential tool for users  around the world.
                    </p>
                </div>
                <div className='flex justify-center gap-6 mt-10  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[739px] overflow-hidden'>
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className='hidden md:block' duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className='hidden lg:block' duration={17} />
                </div>

            </div>
        </section>
    )
}