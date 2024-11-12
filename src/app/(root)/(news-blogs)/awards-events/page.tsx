import React from 'react'
import NewsBlogs from '../_components/NewsBlog'
import { SearchParams } from '@/types'
import RelatedNews from '@/components/shared/RelatedNews'

const AwardsEventsPage = ({ searchParams }: { searchParams: SearchParams }) => {
    return (
        <><NewsBlogs pageTitle='Awards & Events' url='/awards-events' page={+(searchParams.page ?? 1)} />
            <RelatedNews /></>
    )
}

export default AwardsEventsPage