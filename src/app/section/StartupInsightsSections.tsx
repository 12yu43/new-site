import HeadingTitle from '@/components/shared/HeadingTitle'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Endpoints } from '@/constants/endpoints'
import { cn } from '@/lib/cn'
import { ApiResponse } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartupInsightsSections = ({ data }: { data: ApiResponse }) => {
    return (
        <section className='bg-white py-6'>
            <div className='container '>
                <HeadingTitle>Startup Insights</HeadingTitle>
                <main className='flex flex-col md:flex-row gap-4 pt-8 items-start'>
                    <div>
                        <BentoGrid className=" md:auto-rows-[16rem] md:grid-cols-3 flex-1 overflow-hidden">
                            {data.data.startup_insight?.slice(0, 9).map((item, i) => (
                                <article key={i} className={cn('border-b-2 border-dotted border-black', i >= 4 && "max-md:hidden")}>
                                    <Link href={item?.cat_slug
                                        .replace(/\s+/g, "-")
                                        .toLowerCase() + "/" + item?.url}>
                                        <Image src={Endpoints.ImageUrl + item.images} alt={item.image_alt} width={300} height={200} className='h-[180px]' />
                                        <h2 className='line-clamp-2 font-semibold pt-2 hover:underline'>
                                            {item.title}
                                        </h2>
                                    </Link>
                                </article>
                            ))}
                        </BentoGrid>
                        <div className='flex items-center justify-center mt-8'>
                            <Link className="tag" href={'/startup-insights'}>
                                View more
                            </Link>
                        </div>
                    </div>
                    <div className='md:w-[400px] bg-gray-50 p-4'>
                        <h1 className='sub-heading  text-2xl font-semibold'>Crypto News</h1>

                        <ul>

                        </ul>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default StartupInsightsSections