import React from 'react'
import NewsBlogs from '../_components/NewsBlog'
import { SearchParams } from '@/types'

const LifeStyle = ({ searchParams }: { searchParams: SearchParams }) => {
    return (
        <><NewsBlogs pageTitle='Lifestyle' url='/lifestyle' page={+(searchParams.page ?? 1)} /></>
    )
}

export default LifeStyle