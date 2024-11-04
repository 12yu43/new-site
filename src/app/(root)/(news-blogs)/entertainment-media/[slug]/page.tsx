import { NewsDetail } from '@/components/NewsDetail'
import { getNewsDetail } from '@/lib/actions/getNews'
import { redirect } from 'next/navigation'
import React from 'react'

const Entertainment = async ({ params }: { params: { slug: string } }) => {
    let Entertainment = null
    const data = await getNewsDetail('new-category', params.slug)
    Entertainment = data?.data
    if (!data || !Entertainment) {
        redirect('/entertainment-media')
    }
    return (
        <>
            <NewsDetail data={Entertainment} />
        </>
    )
}

export default Entertainment