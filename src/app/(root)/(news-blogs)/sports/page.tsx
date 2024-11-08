import React from 'react'
import NewsBlogs from '../_components/NewsBlog'
import { SearchParams } from '@/types'

const Sports = ({ searchParams }: { searchParams: SearchParams }) => {
    return (
        <><NewsBlogs pageTitle='Sports' url='/sports' page={+(searchParams.page ?? 1)} /></>
    )
}

export default Sports