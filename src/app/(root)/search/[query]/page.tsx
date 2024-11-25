import Loading from '@/app/loading';
import NewsCard from '@/components/NewsCard';
import RelatedNews from '@/components/shared/RelatedNews';
import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import React, { Suspense } from 'react'

const Search = async ({ params }: { params: { query: string } }) => {
    let technologyData;
    let industryData;
    let magazineData;
    let cxoData;
    let startupData;

    try {
        const res = await fetch(getFullUrl(`${Endpoints.GetSearch}/${params.query}`), {
            cache: "no-store"
        })
        const data = await res.json();
        technologyData = data.data?.technology || []
        industryData = data.data?.industry || []
        magazineData = data.data?.magazine || []
        cxoData = data.data?.cxo || []
        startupData = data.data.startup || []

    } catch (error) {
        console.log(error);
    }
    if (technologyData.length === 0 && industryData.length === 0 && magazineData.length === 0 && cxoData.length === 0 && startupData.length === 0) {
        return <div className='text-2xl md:text-3xl container'>No result found for the given search query : {params.query}</div>
    }
    return (
        <div className='container'>
            {renderPosts(technologyData, 'technology')}
            {renderPosts(industryData, 'industry')}
            {renderPosts(magazineData, 'magazine')}
            {renderPosts(cxoData, 'cxo')}
            {renderPosts(startupData, 'startup-insights')}
            <RelatedNews />
        </div>
    )
}
const renderPosts = (data: any, category: string) => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='space-y-4'>
                {
                    data?.map((item: any, i: number) => (
                        <NewsCard item={item} url={`/${category}/` + item.url.replace(/&/g, '')
                            .replace(/\s+/g, "-")
                            .toLowerCase()} key={i} />
                    ))
                }
            </div>
        </Suspense>
    )
}

export default Search