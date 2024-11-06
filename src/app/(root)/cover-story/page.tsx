import NewsCard from '@/components/NewsCard'
import { Endpoints } from '@/constants/endpoints'
import { getHomeNews } from '@/lib/actions/getHomeNews'
import { getFullUrl } from '@/lib/utils'
import { ApiResponse, News, NewsResponseType } from '@/types'
import { redirect } from 'next/navigation'
import React from 'react'

const CoverStoryPage = async () => {
    let data: ApiResponse | null = null
    try {
        data = await getHomeNews()
    } catch (error) {

    }
    if (!data) {
        redirect('/')
    }
    const coverStory: News[] = data.data.cover_story || []
    return (
        <div className='container space-y-4'>
            {
                coverStory?.map((item) => (
                    <NewsCard item={item} key={item.id} url={'/cover-story' + "/" + item.url} />
                ))

            }
        </div>
    )
}

export default CoverStoryPage