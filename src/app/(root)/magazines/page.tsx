import Pagination from '@/components/shared/Pagination';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { MagazineType, SearchParams } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const Magazines = async ({ searchParams }: { searchParams: SearchParams }) => {
  let magazines: {
    status: boolean
    data: {
      data: MagazineType[],
      first_page_url: string,
      from: 1,
      last_page: 2,
      last_page_url: string,
      links: any[],
      next_page_url: string,
      path: string,
      per_page: 12,
      prev_page_url: null,
      to: 12,
      total: 22
    }

  } | null = null
  let page = 1
  if (searchParams && searchParams.page) {
    const isNum = +searchParams.page
    if (!isNaN(isNum)) {
      page = isNum
    }
    else {
      redirect('/magazines')
    }
  }
  try {
    const res = await fetch(getFullUrl(`${Endpoints.GetMagazine}?page=${page}`))
    magazines = await res.json()
  } catch (error) {
    console.log(error)
  }
  if (!magazines || !magazines.data) {
    redirect('/')
  }
  console.log(magazines)
  return (
    <div className='container mb-8'>
      <h1 className='text-3xl md:text-5xl text-center font-semibold  tracking-wider'>
        Best Online
        <span className='text-red-500 ml-2 italic'>
          Business</span> Magazines
      </h1>
      <BentoGrid className="md:auto-rows-[26rem] mt-10 gap-6">
        {magazines?.data.data.map((item, i) => (
          <Link href={"/magazine/" + item?.url} key={i} className='row-span-1 group relative rounded-sm group/bento hover:shadow-xl transition duration-200  overflow-hidden bg-white  hover:scale-105 cursor-pointer border-4 border-red-500 '>
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <Image src={Endpoints.ImageUrl + item.magazine_cover_image} alt={item.image_alt} width={600} height={600} className='object-cover  overflow-hidden h-full' />
            <div className="absolute -bottom-full left-4 group-hover:bottom-12 z-50 transition-all duration-700">
              <span className="text-white text-xl">{item.meta_title}</span>
            </div>
          </Link>
        ))}
      </BentoGrid>
      <Pagination link={magazines.data.links} url={'/magazines?'} />
    </div>
  )
}

export default Magazines