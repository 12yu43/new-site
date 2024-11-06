import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { MagazineType, NewsResponseType, SearchParams } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const Magazines = async () => {
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


  try {
    const res = await fetch(getFullUrl(`${Endpoints.GetMagazine}`))
    magazines = await res.json()
  } catch (error) {
    console.log(error)
  }
  if (!magazines || !magazines.data) {
    redirect('/')
  }
  return (
    <div className='container mb-8'>
      <h1 className='text-3xl md:text-5xl text-center font-semibold underline tracking-wider'><span className='text-red-500  italic'>
        Exclusive</span> Magazines
      </h1>
      <BentoGrid className="md:auto-rows-[22rem] mt-10">
        {magazines?.data.data.map((item, i) => (
          <article className="border-4 border-red-500 row-span-1 group relative rounded-sm group/bento hover:shadow-xl transition duration-200 shadow-input  bg-white  justify-between flex flex-col space-y-4 overflow-hidden hover:scale-105 cursor-pointer" key={i}>
            <Link href={"/magazine/" + item?.url} >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <Image src={Endpoints.ImageUrl + item.magazine_cover_image} alt={item.image_alt} width={300} height={500} className='object-cover h-[350px] overflow-hidden' />
              <div className="absolute -bottom-full left-4 group-hover:bottom-12 z-50 transition-all duration-700">
                <span className="text-white text-xl">{item.meta_title}</span>
              </div>
            </Link>
          </article>
        ))}
      </BentoGrid>
    </div>
  )
}

export default Magazines