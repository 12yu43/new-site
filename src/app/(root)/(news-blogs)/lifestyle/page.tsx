import React from 'react'
import NewsBlogs from '../_components/NewsBlog'
import { SearchParams } from '@/types'
import RelatedNews from '@/components/shared/RelatedNews'

const LifeStyle = ({ searchParams }: { searchParams: SearchParams }) => {
    return (
        <><NewsBlogs pageTitle='Lifestyle' url='/lifestyle' page={+(searchParams.page ?? 1)} />
        <RelatedNews/></>
    )
}

export default LifeStyle