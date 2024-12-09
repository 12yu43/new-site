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
                        <BentoGrid className=" md:auto-rows-[16rem] md:grid-cols-4 flex-1 space-y-0  overflow-hidden">
                            {data.data.startup_insight?.slice(0, 12).map((item, i) => (
                                <article key={i} className={cn('border-b-2 border-dotted border-black pb-2', i >= 4 && "max-md:hidden")}>
                                    <Link href={item?.cat_slug
                                        .replace(/\s+/g, "-")
                                        .toLowerCase() + "/" + item?.url.replace(/&/g, '')
                                            .replace(/\s+/g, "-")
                                            .toLowerCase()}>
                                        <Image src={Endpoints.ImageUrl + item.images} alt={item.image_alt} width={300} height={200} className='h-[180px] mx-auto image-effect' />
                                        <h2 className='line-clamp-2 font-semibold pt-2 hover:underline text-center sm:text-left'>
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
                </main>
            </div>
        </section>
    )
}

export default StartupInsightsSections