import Loading from '@/app/loading'
import NewsCard from '@/components/NewsCard'
import Pagination from '@/components/shared/Pagination'
import RelatedNews from '@/components/shared/RelatedNews'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { SearchParams } from '@/types'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

export const dynamic = "force-dynamic";

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
    const res = await fetch(getFullUrl(`${Endpoints.GetCxo}?page=${page}`), {
      cache: "no-store"
    })
    cxos = await res.json()
    if (!cxos || !cxos.data) {
      redirect('/')
    }
  } catch (error) {
    console.log(error)
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className='container space-y-4'>
        {
          cxos.data.data?.map((item: any) => (
            <NewsCard item={item} key={item.id} url={`/cxo/${item.url.replace(/&/g, '')
              .replace(/\s+/g, "-")
              .toLowerCase()}`} />
          ))
        }
        <Pagination url={'/cxos/?'} link={cxos.data.links} />
        <RelatedNews />
      </div>
    </Suspense>
  )
}

export default CxoPage