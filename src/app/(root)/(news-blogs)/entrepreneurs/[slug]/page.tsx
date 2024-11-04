import { NewsDetail } from '@/components/NewsDetail'
import { getNewsDetail } from '@/lib/actions/getNews'
import { redirect } from 'next/navigation'
import React from 'react'

const Entrepreneur = async ({ params }: { params: { slug: string } }) => {
    let Entrepreneur = null
    const data = await getNewsDetail('new-category', params.slug)
    Entrepreneur = data?.data
    if (!data || !Entrepreneur) {
        redirect('/entrepreneur')
    }
    return (
        <>
            <NewsDetail data={Entrepreneur} />
        </>
    )
}

export default Entrepreneur