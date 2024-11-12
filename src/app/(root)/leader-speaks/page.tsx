import Pagination from '@/components/shared/Pagination'
import RelatedNews from '@/components/shared/RelatedNews'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { ClientResponseType, SearchParams } from '@/types'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const LeaderSpeaksPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  let leaderSpeaks: ClientResponseType | null = null
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
    const res = await fetch(getFullUrl(`${Endpoints.GetClientspeak}?page=${page}`))
    leaderSpeaks = await res.json()
  } catch (error) {
    console.log(error)
  }
  if (!leaderSpeaks || !leaderSpeaks.data) {
    redirect('/')
  }
  return (
    <section className='container'>
      <h1 className='text-3xl md:text-5xl text-center font-semibold mb-6 tracking-wider text-red-500'><span className='text-[#052C45]'>
        Leaders</span> Speak
      </h1>
      <div className=' grid gird-cols-1 md:grid-cols-3 pt-20 p-4 gap-6 gap-y-28  '>
        {
          leaderSpeaks.data.data.map((item) => (
            <article key={item.id} className='p-5 gap-8   bg-neutral-200 text-black rounded-xl'>
              <div className='w-[200px] relative h-[200px] border-4 border-white rounded-full flex justify-center bg-red-500  left-1/2 -translate-x-1/2 -top-1/3'>
                <Image src={Endpoints.ImageUrl + item.image} alt={item.company_name} fill className='object-center rounded-full' />
              </div>
              <div className='-mt-16'>
                <q className='line-clamp-4 '>{item.message}</q>
                <div className='text-gray-800 font-semibold'>
                  <p className='mt-2'>{item.client_name}</p>
                  <span>Position - {item?.client_position}</span>
                  <p>
                    Company Name - {item?.company_name}
                  </p>
                </div>
              </div>
            </article>
          ))
        }

      </div>
      <Pagination link={leaderSpeaks.data.links} url='/leader-speaks?' />
      <RelatedNews />
    </section>
  )
}

export default LeaderSpeaksPage