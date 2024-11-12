import React from 'react'
import NewsBlogs from '../_components/NewsBlog'
import { SearchParams } from '@/types'
import RelatedNews from '@/components/shared/RelatedNews'

const Entrepreneurs = ({ searchParams }: { searchParams: SearchParams }) => {
    return (
        <><NewsBlogs pageTitle='Entrepreneurs' url='/entrepreneurs' page={+(searchParams.page ?? 1)} />
        <RelatedNews/></>
    )
}

export default Entrepreneurs