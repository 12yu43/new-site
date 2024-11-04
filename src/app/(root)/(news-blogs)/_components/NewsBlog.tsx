import NewsCard from '@/components/NewsCard';
import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { NewsResponseType } from '@/types';
import { redirect } from 'next/navigation';
import React from 'react'

type PageTitle = "Sports" | "Lifestyle" | "Entrepreneurs" | "Entertainment & Media" | "Awards & Events"

const NewsBlogs = async ({ pageTitle, url }: { pageTitle: PageTitle, url: string }) => {

    let news: NewsResponseType | null = null
    try {
        const res = await fetch(getFullUrl(Endpoints.GetNewNews + '/' + pageTitle))
        news = await res.json()
        console.log(news)
    } catch (error) {
        console.log(error)
    }
    if (!news || !news.data || !pageTitle) {
        redirect('/')
    }
    if (news.data.data.length === 0) {
        return <h1>No news found!</h1>
    }
    return (
        <div className='container'>
            <h1 className='text-center text-3xl md:text-5xl font-semibold mb-8'>
                {pageTitle}
            </h1>
            <div className='space-y-4'> {news.data.data.map((item) => (<NewsCard item={item} key={item.id} url={url + '/' + item.url} />))}</div>
        </div>
    )
}

export default NewsBlogs