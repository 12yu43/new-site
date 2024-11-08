import React from 'react'
import NewsBlogs from '../_components/NewsBlog'
import { SearchParams } from '@/types'

const Entrepreneurs = ({ searchParams }: { searchParams: SearchParams }) => {
    return (
        <><NewsBlogs pageTitle='Entrepreneurs' url='/entrepreneurs' page={+(searchParams.page ?? 1)} /></>
    )
}

export default Entrepreneurs