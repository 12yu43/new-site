import { NewsDetail } from '@/components/NewsDetail'
import { getNewsDetail } from '@/lib/actions/getNews'
import { redirect } from 'next/navigation'
import React from 'react'

const Sports = async ({ params }: { params: { slug: string } }) => {
    let Sports = null
    const data = await getNewsDetail('new-category', params.slug)
    Sports = data?.data
    if (!data || !Sports) {
        redirect('/entrepreneur')
    }
    return (
        <>
            <NewsDetail data={Sports} />
        </>
    )
}

export default Sports