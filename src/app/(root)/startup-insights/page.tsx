import NewsCard from '@/components/NewsCard'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { NewsResponseType } from '@/types'
import { redirect } from 'next/navigation'
import React from 'react'

const StartupInsightsPage = async () => {
  let startupInsights: NewsResponseType | null = null
  try {
    const res = await fetch(getFullUrl(`${Endpoints.GetStartupInsight}`))
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
    </div>
  )
}

export default StartupInsightsPage