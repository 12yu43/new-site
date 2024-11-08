import NewsCard from '@/components/NewsCard';
import Pagination from '@/components/shared/Pagination';
import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { NewsResponseType } from '@/types';
import { redirect } from 'next/navigation';
import React from 'react'

type PageTitle = "Sports" | "Lifestyle" | "Entrepreneurs" | "Entertainment & Media" | "Awards & Events"

const NewsBlogs = async ({ pageTitle, url, page }: { pageTitle: PageTitle, url: string, page: number }) => {

    let news: NewsResponseType | null = null

    if (isNaN(page)) {
        redirect('/')
    }
    try {
        const res = await fetch(getFullUrl(Endpoints.GetNewNews + '/' + pageTitle + `?page=${page}`))
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
    console.log({ url })
    return (
        <div className='container'>
            <h1 className='text-center text-3xl md:text-5xl font-semibold mb-8'>
                {pageTitle}
            </h1>
            <div className='space-y-4'>
                {news.data.data.map((item) =>
                (<NewsCard item={item} key={item.id} url={url + '/' + item.url} />
                ))}
            </div>
            <Pagination link={news.data.links} url={`${url}?`} />
        </div>
    )
}

export default NewsBlogs