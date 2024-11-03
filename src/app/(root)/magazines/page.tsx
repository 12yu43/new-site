import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { MagazineType, NewsResponseType, SearchParams } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const Magazines = async ({ searchParams, params }: { searchParams?: SearchParams, params: { slug: string } }) => {
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

  const slug = params.slug

  try {
    const res = await fetch(getFullUrl(`${Endpoints.GetMagazine}`))
    magazines = await res.json()
    if (!magazines || !magazines.data) {
      redirect('/')
    }
  } catch (error) {
    console.log(error)
  }

  return (
    <div className='container mb-8'>
      <h1 className='text-3xl md:text-5xl text-center font-semibold underline tracking-wider'><span className='text-red-500  italic'>
        Exclusive</span> Magazines
      </h1>
      <BentoGrid className="md:auto-rows-[22rem] mt-10">
        {magazines?.data.data.map((item, i) => (
          <article key={i} className="border-4 border-red-500 row-span-1 relative rounded-sm group/bento hover:shadow-xl transition duration-200 shadow-input  bg-white  justify-between flex flex-col space-y-4 overflow-hidden hover:scale-105 cursor-pointer">
            <Link href={"/magazine/" + item?.url}>
              <Image src={Endpoints.ImageUrl + item.magazine_cover_image} alt={item.image_alt} width={300} height={500} className='object-cover h-[350px] overflow-hidden' />
            </Link>

          </article>
        ))}
      </BentoGrid>
    </div>
  )
}

export default Magazines