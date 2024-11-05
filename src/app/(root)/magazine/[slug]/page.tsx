import HeadingTitle from '@/components/shared/HeadingTitle'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { MagazineType } from '@/types'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Magazine = async ({ params }: { params: { slug: string } }) => {
  let data: {
    status: boolean, data: {
      magazine: MagazineType, coverstory: {
        content_details: string
        id: number,
        magazine_id: number,
        pre_link: string,
        title: string,
        images: string,
        issue_title: string,
        cat_slug: string,
        status: 1,
        meta_title: string,
        meta_description: string,
        meta_keywords: string,
        image_alt: string,
        url: string

      },
      featuredpeople: any[]
    }
  } | null = null
  try {
    const resp = await fetch(getFullUrl(`${Endpoints.GetNewsDetail}/magazine/${params.slug}`))
    data = await resp.json()
  } catch (error) {
    console.log(error);
  }
  if (!data || !data.data) {
    redirect('/magazines')
  }
  console.log(data);
  return (
    <div>
      <Image src={Endpoints.ImageUrl + data.data.magazine.issue_logo} alt='magazines' width={400} height={300} className='mx-auto ' />
      <div className='border-y-2 border-black py-8 border-dashed'>

        <div className='bgPattern px-4 sm:px-8 py-10 border-2 '>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-4 sm:p-8 justify-items-center'>
            <Image src={Endpoints.ImageUrl + data.data.magazine.magazine_cover_image} alt='Cover story' width={400} height={400} className='border-2 border-red-500' />
            <div className=''>
              <div className="p-2"
                dangerouslySetInnerHTML={{ __html: `${data.data.coverstory?.content_details.substring(0, 1300)}...` } || ""}
              >
              </div>
              <Link className='text-red-500 text-center mt-4 inline-block bg-black p-3 font-semibold' href={`/cover-story/${data.data.coverstory.url}`}>Read More {">>"}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-8'>
        <HeadingTitle>MEET THE LEADERS</HeadingTitle>
        <BentoGrid className="pt-8">
          {data.data.featuredpeople?.sort(() => Math.random() - 0.5).slice(0, 8).map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              image_alt={item.image_alt}
              url={'/feature' + "/" + item?.url}
              images={item.images}

            />
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}

export default Magazine