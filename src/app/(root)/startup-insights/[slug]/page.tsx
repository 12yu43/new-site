import Loading from '@/app/loading'
import { NewsDetail } from '@/components/NewsDetail'
import { getNewsDetail } from '@/lib/actions/getNews'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

const StartUpInsights = async ({ params }: { params: { slug: string } }) => {
    const data = await getNewsDetail('startup-insight', params.slug)
    if (!data || !data.data) {
        redirect('/')
    }
    return (
        <Suspense fallback={<Loading />}>
            <NewsDetail data={data.data} />
        </Suspense>
    )
}

export default StartUpInsights