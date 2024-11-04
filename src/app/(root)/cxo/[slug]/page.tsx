import { NewsDetail } from '@/components/NewsDetail'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { NewsDetailType } from '@/types'
import { redirect } from 'next/navigation'
import React from 'react'

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
    <div className='container'>
      <NewsDetail data={Cxos.data} />
    </div>
  )
}

export default Cxo