import { getNewsDetail } from '@/lib/actions/getNews'
import { redirect } from 'next/navigation'
import React from 'react'

const StartUpInsights = async ({ params }: { params: { slug: string } }) => {
    const data = await getNewsDetail('startup-insight', params.slug)
    if (!data || !data.data) {
        redirect('/')
    }

    return (
        <div>StartUpInsights</div>
    )
}

export default StartUpInsights