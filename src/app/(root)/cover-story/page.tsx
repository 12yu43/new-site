import NewsCard from '@/components/NewsCard'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { NewsResponseType } from '@/types'
import { redirect } from 'next/navigation'
import React from 'react'

const CoverStoryPage = async () => {

    
    return (
        <div className='container space-y-4'>
            {/* {
                coverStories.data.data.map((item) => (
                    <NewsCard item={item} key={item.id} url={'/cover-story' + "/" + item.url} />
                ))

            } */}
        </div>
    )
}

export default CoverStoryPage