import NewsCard from '@/components/NewsCard';
import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { NewsResponseType } from '@/types';
import { redirect } from 'next/navigation';
import React from 'react'

const NewsBlogs = async ({ params }: { params: { slug: string } }) => {
    let pageTitle;
    if (!params || !params.slug) {
        redirect('/')
    }
    if (params.slug === "sports") {
        pageTitle = "Sports";
    } else if (params.slug === "lifestyle") {
        pageTitle = "Lifestyle";
    } else if (params.slug === "entrepreneurs") {
        pageTitle = "Entrepreneurs";
    } else if (params.slug === "entertainment-media") {
        pageTitle = "Entertainment & Media";
    } else if (params.slug === "awards-events") {
        pageTitle = "Awards & Events";
    }
    let news: NewsResponseType | null = null
    try {
        const res = await fetch(getFullUrl(Endpoints.GetNewNews + '/' + pageTitle))
        news = await res.json()
        console.log(news)
    } catch (error) {
        console.log(error)
    }
    if (!news || !news.data) {
        redirect('/')
    }
    if (news.data.data.length === 0) {
        return <h1>No news found!</h1>
    }
    return (
        <div className='container'>
            {news.data.data.map((item) => (<NewsCard item={item} key={item.id} url={params.slug + item.url} />))}
        </div>
    )
}

export default NewsBlogs