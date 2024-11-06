import AnimatedNewsColumn from '@/components/AnimatedNewsColumn';
import { BentoGridItem } from '@/components/ui/bento-grid';
import { Endpoints } from '@/constants/endpoints';
import { getHomeNews } from '@/lib/actions/getHomeNews';
import { getNewsDetail } from '@/lib/actions/getNews';
import { ApiResponse, News } from '@/types';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const CoverStory = async ({ params }: { params: { slug: string } }) => {
  let coverStory: any | null = null
  try {
    coverStory = await getNewsDetail('cover-story', params.slug);
  } catch (error) {
    console.log(error);
  }
  if (!coverStory) {
    redirect('/')
  }
  return (
    <div className='container flex flex-col md:flex-row gap-4'>
      <div className='max-w-4xl flex-1'>
        <h1 className='text-3xl font-semibold md:text-4xl'>{coverStory.data.CoverStory?.title}</h1>
        <h4 className='text-red-500 pt-4 text-xl italic'>{coverStory.data.CoverStory?.issue_title}</h4>
        <div className='py-8'>
          <Image src={Endpoints.ImageUrl + coverStory.data.CoverStory.images} alt={coverStory.data.CoverStory.images_alt} width={600} height={600} />
        </div>
        <div dangerouslySetInnerHTML={{
          __html: coverStory.data.CoverStory?.content_details || "",
        }}
          className='[&>h3]:text-3xl [&>h3]:mb-4 font-sans [&>h4]:text-lg'
        >

        </div>
      </div>
      <div>
        <RelatedStories id={coverStory.id} />
      </div>

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
    <div className='lg:w-[400px] lg:border-x-2  px-4  lg:block lg:sticky top-20 right-0'>
      <h2 className='sub-heading text-lg font-semibold'>Related Stories</h2>
      <div className='mt-4 '>
        <AnimatedNewsColumn url={'/cover-story/'} data={stories ?? []} className='lg:h-[570px] p-2 w-full hidden lg:block' />
      </div>
      <div className='lg:hidden space-y-4'>
        {stories?.sort(() => Math.random() - 0.5).slice(0, 4).map((item) => <BentoGridItem images={item.images} image_alt={item.image_alt} url={'/cover-story/' + item.url} title={item.title} key={item.id} />)
        }
      </div>

    </div>
  )
}

export default CoverStory