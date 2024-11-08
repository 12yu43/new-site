import NewsCard from '@/components/NewsCard'
import Pagination from '@/components/shared/Pagination'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { NewsResponseType, SearchParams } from '@/types'
import { redirect } from 'next/navigation'
import React from 'react'

const StartupInsightsPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  let startupInsights: NewsResponseType | null = null
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
    const res = await fetch(getFullUrl(`${Endpoints.GetStartupInsight}?page=${page}`))
    startupInsights = await res.json()
  } catch (error) {
    console.log(error)
  }
  if (!startupInsights || !startupInsights.data) {
    redirect('/')
  }
  return (
    <div className='container space-y-4'>
      {
        startupInsights.data.data.map((item) => (
          <NewsCard item={item} key={item.id} url={'/startup-insights' + "/" + item.url} />
        ))

      }
      <Pagination url={'/startup-insights?'} link={startupInsights.data.links} />
    </div>
  )
}

export default StartupInsightsPage