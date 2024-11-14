import NewsCard from '@/components/NewsCard'
import Pagination from '@/components/shared/Pagination'
import RelatedNews from '@/components/shared/RelatedNews'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { SearchParams } from '@/types'
import { redirect } from 'next/navigation'
import React from 'react'

const CxoPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  let cxos = null
  let page = 1
  if (searchParams && searchParams.page) {
    const isNum = +searchParams.page
    if (!isNaN(isNum)) {
      page = isNum
    }
    else {
      redirect('/')
    }
  }
  try {
    const res = await fetch(getFullUrl(`${Endpoints.GetCxo}?page=${page}`))
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
      <Pagination url={'/cxos/?'} link={cxos.data.links} />
      <RelatedNews />

    </div>
  )
}

export default CxoPage