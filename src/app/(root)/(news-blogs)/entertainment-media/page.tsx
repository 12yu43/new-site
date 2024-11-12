import React from 'react'
import NewsBlogs from '../_components/NewsBlog'
import { SearchParams } from '@/types'
import RelatedNews from '@/components/shared/RelatedNews'

const EntertainmentMedia = ({ searchParams }: { searchParams: SearchParams }) => {
    return (
        <><NewsBlogs pageTitle='Entertainment & Media' url='/entertainment-media' page={+(searchParams.page ?? 1)} />
        <RelatedNews/></>
    )
}

export default EntertainmentMedia