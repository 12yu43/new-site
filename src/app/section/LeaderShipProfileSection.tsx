import HeadingTitle from '@/components/shared/HeadingTitle'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { ApiResponse } from '@/types'
import Link from 'next/link'
import React from 'react'

const LeaderShipProfileSection = ({ data }: { data: ApiResponse }) => {
    return (
        <section className='bg-white py-6'>
            <div className='container '>
                <HeadingTitle>Leadership Profiles</HeadingTitle>
                <BentoGrid className="pt-8  lg:auto-rows-[17rem]">
                    {data.data.featured_people?.data?.slice(0, 8).map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            image_alt={item.image_alt}
                            url={'/feature' + "/" + item?.url.replace(/&/g, '')
                                .replace(/\s+/g, "-")
                                .toLowerCase()}
                            images={item.images}
                        />
                    ))}
                </BentoGrid>
                <div className='flex items-center justify-center mt-8'>
                    <Link className="tag" href={'/featured-vendors'}>
                        View more
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LeaderShipProfileSection