import { NewsDetail } from '@/components/NewsDetail'
import { getNewsDetail } from '@/lib/actions/getNews'
import { redirect } from 'next/navigation'
import React from 'react'

const LifeStyle = async ({ params }: { params: { slug: string } }) => {
    let Lifestyle = null
    const data = await getNewsDetail('new-category', params.slug)
    Lifestyle = data?.data
    if (!data || !Lifestyle) {
        redirect('/entrepreneur')
    }
    return (
        <>
            <NewsDetail data={Lifestyle} />
        </>
    )
}

export default LifeStyle