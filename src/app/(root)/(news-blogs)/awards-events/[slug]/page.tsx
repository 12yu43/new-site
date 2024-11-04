import { NewsDetail } from '@/components/NewsDetail'
import { getNewsDetail } from '@/lib/actions/getNews'
import { redirect } from 'next/navigation'
import React from 'react'

const AwardsEvents = async ({ params }: { params: { slug: string } }) => {
    let AwardsEvents = null
    const data = await getNewsDetail('new-category', params.slug)
    AwardsEvents = data?.data
    if (!data || !AwardsEvents) {
        redirect('/awards-events')
    }
    return (
        <>
            <NewsDetail data={AwardsEvents} />
        </>
    )
}

export default AwardsEvents