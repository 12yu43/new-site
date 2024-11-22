import AnimatedNewsColumn from '@/components/AnimatedNewsColumn';
import { BentoGridItem } from '@/components/ui/bento-grid';
import { Endpoints } from '@/constants/endpoints';
import { getHomeNews } from '@/lib/actions/getHomeNews';
import { getNewsDetail } from '@/lib/actions/getNews';
import { ApiResponse, News, SearchParams } from '@/types';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'
import parse from 'html-react-parser'
import RelatedNews from '@/components/shared/RelatedNews';
import Loading from '@/app/loading';
const CoverStory = async ({ params, searchParams }: { params: { slug: string }, searchParams: SearchParams }) => {
  let coverStory: any | null = null
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
    coverStory = await getNewsDetail('cover-story', params.slug);
  } catch (error) {
    console.log(error);
  }
  if (!coverStory) {
    redirect('/')
  }
  return (
    <div className='container'>
      <div className=' flex flex-col lg:flex-row gap-4'>
        <div className='flex-1'>
          <h1 className='font-semibold text-2xl'>{coverStory.data.CoverStory?.title}</h1>
          <h4 className='text-red-500 pt-4 text-xl italic'>{coverStory.data.CoverStory?.issue_title}</h4>
          <div className='py-8'>
            <Image src={Endpoints.ImageUrl + coverStory.data.CoverStory.images} alt={coverStory.data.CoverStory.images_alt} width={600} height={600} className='mx-auto' />
          </div>
          <div
            className='[&>h3]:text-xl [&>h2]:py-1  [&>h2]:text-xl [&>p>strong]:text-xl 
          [&>p>em]:text-xl  [&>p>strong]:py-2 space-y-2 !font-sans'
          >
            {parse(coverStory.data.CoverStory?.content_details || "")}
          </div>
        </div>
        <div>
          <RelatedStories id={coverStory.id} />
        </div>

      </div>
      <RelatedNews />
    </div>
  )
}
const RelatedStories = async ({ id }: { id: number }) => {
  let stories: News[] | null = null
  try {
    const data: ApiResponse | null = await getHomeNews();
    if (!data) {
      redirect('/')
    }
    stories = data.data.cover_story || []
    if (stories.length === 0) {
      redirect('/')
    }
    stories = stories.filter((item) => item.id !== id)
  } catch (error) {

  }
  return (
    <Suspense fallback={<Loading />}>
      <div className='lg:w-[400px] lg:border-x-2  px-4  lg:block lg:sticky top-20 right-0'>
        <h2 className='sub-heading text-lg font-semibold'>Related Stories</h2>
        <div className='mt-4 '>
          <AnimatedNewsColumn url={'/cover-story/'} data={stories ?? []} className='lg:h-[570px] p-2 w-full hidden lg:block' />
        </div>
        <div className=' mx-auto grid grid-cols-2 sm:grid-cols-2 lg:hidden gap-4 '>
          {stories?.map((item) => <BentoGridItem images={item.images} image_alt={item.image_alt} url={'/cover-story/' + item.url} title={item.title} key={item.id} className='' />)
          }
        </div>

      </div>
    </Suspense>
  )
}

export default CoverStory