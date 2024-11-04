import NewsCard from '@/components/NewsCard'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { redirect } from 'next/navigation'
import React from 'react'

const CxoPage = async () => {
  let cxos = null
  try {
    const res = await fetch(getFullUrl(`${Endpoints.GetCxo}`))
    cxos = await res.json()
    if (!cxos || !cxos.data) {
      redirect('/')
    }
  } catch (error) {
    console.log(error)
  }
  return (
    <div className='container space-y-4'>
      {
        cxos.data.data?.map((item: any) => (
          <NewsCard item={item} key={item.id} url={`/cxo/${item.url}`} />
        ))
      }

    </div>
  )
}

export default CxoPage