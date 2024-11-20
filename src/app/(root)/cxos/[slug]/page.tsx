import Loading from '@/app/loading'
import { NewsDetail } from '@/components/NewsDetail'
import RelatedNews from '@/components/shared/RelatedNews'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { NewsDetailType } from '@/types'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

const Cxo = async ({ params }: { params: { slug: string } }) => {

  let Cxos: { data: NewsDetailType } | null = null
  try {
    const res = await fetch(getFullUrl(`${Endpoints.GetNewsDetail}/cxo/${params.slug}`))
    Cxos = await res.json()
  } catch (error) {
    console.log(error)
  }
  if (!Cxos || !Cxos.data) {
    redirect('/')
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className='container'>
        <NewsDetail data={Cxos.data} />
        <RelatedNews />
      </div>
    </Suspense>
  )
}

export default Cxo