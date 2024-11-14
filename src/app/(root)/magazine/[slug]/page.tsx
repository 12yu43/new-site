import HeadingTitle from '@/components/shared/HeadingTitle'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { coverStories } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import parse from 'html-react-parser'
import RelatedNews from '@/components/shared/RelatedNews'

const Magazine = async ({ params }: { params: { slug: string } }) => {
  let data: coverStories | null = null
  try {
    const resp = await fetch(getFullUrl(`${Endpoints.GetNewsDetail}/magazine/${params.slug}`))
    data = await resp.json()
  } catch (error) {
    console.log(error);
  }
  if (!data || !data.data) {
    redirect('/magazines')
  }
  return (
    <div>
      <Link href={`/listing/${data.data.magazine.url}`}>
        <Image src={Endpoints.ImageUrl + data.data.magazine.issue_logo} alt='magazines' width={400} height={300} className='mx-auto mb-4'
          title='Know more' />
      </Link>
      <div className='border-y-2 border-black pb-8 border-dashed'>
        <h1 className='text-3xl md:text-4xl container font-semibold py-4 text-center'>On the <span className='text-red-500'>
          Cover</span></h1>

        <div className='bgPattern px-4 sm:px-8 py-10 border-2 '>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-4 sm:p-8 justify-items-center'>
            <Link href={`/cover-story/${data.data.coverstory.url}`}>
              <Image src={Endpoints.ImageUrl + data.data.magazine.magazine_cover_image} alt='Cover story' width={400} height={400} className='border-2 border-red-500' /></Link>
            <div>
              <div className="p-2"
              >
                {
                  parse(data.data.coverstory?.content_details.substring(0, 1300) + "..." || "")
                }
              </div>
              <Link className='text-red-500 text-center mt-4 inline-block bg-black p-3 font-semibold' href={`/cover-story/${data.data.coverstory.url}`}>Read More {">>"}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-8'>
        <HeadingTitle>MEET THE LEADERS</HeadingTitle>
        <BentoGrid className="pt-8 md:auto-rows-[16rem]">
          {data.data.featuredpeople?.reverse().map((item, i) => (
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
      <RelatedNews />
    </div>
  )
}

export default Magazine