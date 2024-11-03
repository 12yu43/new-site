import NewsCard from '@/components/NewsCard';
import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { NewsResponseType } from '@/types';
import { redirect } from 'next/navigation';
import React from 'react'


const Technology = async ({ params }: { params: { slug: string } }) => {
    const slugMapping: { [key: string]: string } = {
        "Big-data": "Big data",
        "Data-analytics": "Data analytics",
        "Cyber-security": "Cyber security",
        "IT-services": "IT Services",
        "media-entertainment": "Media & Entertainment",
        "banking-finance": "Banking & Finance",
        "food-beverage": "Food & Beverage",
        "digital-marketing": "Digital Marketing"
    };
    const slug = slugMapping[params?.slug] || params?.slug || 'Software';
    let data: NewsResponseType | null = null;
    try {
        const res = await fetch(getFullUrl(`${Endpoints.GetNews}/${"technology"}/${slug}`))
        data = await res.json()
        if (!data || !data.data) {
            redirect('/')
        }
    } catch (error) {
        console.log(error)
    }
    return (
        <div className='container'>
            <div className='flex flex-col gap-4'>
                {
                    data?.data.data.map((item) => (
                        <NewsCard item={item} key={item.id} url={`/${item.cat_slug}/${item?.url}`} />
                    ))
                }
            </div>
        </div>
    )
}

export default Technology