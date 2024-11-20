import Loading from '@/app/loading';
import NewsCard from '@/components/NewsCard';
import Pagination from '@/components/shared/Pagination';
import RelatedNews from '@/components/shared/RelatedNews';
import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { NewsResponseType, SearchParams } from '@/types';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'


const Technology = async ({ params, searchParams }: { params: { slug: string }, searchParams: SearchParams }) => {
    const slugMapping: { [key: string]: string } = {
        "big-data": "Big data",
        "data-analytics": "Data analytics",
        "cyber-security": "Cyber security",
        "it-services": "IT Services",
        "media-entertainment": "Media & Entertainment",
        "banking-finance": "Banking & Finance",
        "food-beverage": "Food & Beverage",
        "digital-marketing": "Digital Marketing"
    };
    const slug = slugMapping[params?.slug] || params?.slug || 'Software';
    let data: NewsResponseType | null = null;
    let page = 1
    if (searchParams && searchParams.page) {
        const isNum = +searchParams.page
        if (isNaN(isNum)) {
            redirect('/')
        }
        else {
            page = isNum
        }
    }

    try {
        const res = await fetch(getFullUrl(`${Endpoints.GetNews}/${"technology"}/${slug}?page=${page}`))
        data = await res.json()
        if (!data || !data.data) {
            redirect('/')
        }
    } catch (error) {
        console.log(error)
    }
    return (
        <Suspense fallback={<Loading />}>
            <div className='container'>
                <div className='flex flex-col gap-4'>
                    {
                        data?.data.data.map((item) => (
                            <NewsCard item={item} key={item.id} url={`/${item.cat_slug.replace(/\s+/g, "-").toLowerCase()}/${item?.url}`} />
                        ))
                    }
                </div>
                <Pagination link={data?.data.links} url={`/${"technology"}/${slug}?`} />
                <RelatedNews />
            </div>
        </Suspense>
    )
}

export default Technology