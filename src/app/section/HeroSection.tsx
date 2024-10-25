import DisplayNewsCard from '@/components/DisplayNewsCard'
import RightSideBar from '@/components/shared/RightSideBar'
import { Endpoints } from '@/constants/endpoints'
import { getHomeNews } from '@/lib/actions/getHomeNews'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = async () => {

    const data = await getHomeNews()
    console.log(data)
    if (!data) {
        return <>Error while fetching api</>
    }
    // getData()
    return (
        <section className=' bg-white'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-6 py-6 border-y-2'>
                    <div className='col-span-6 bg-gray-50  '>
                        {
                            data.data.technology.slice(0, 1).map((item) => (
                                <div key={item.id} className='relative overflow-hidden rounded-lg cursor-pointer'>
                                    <Image src={Endpoints.ImageUrl + item.images} alt={"Dsad"} width={600} height={600} className=' z-10 hover:scale-105 duration-300 ease-in-out' />
                                    <p className='text-2xl text-white font-bold absolute z-20 bottom-6 left-4 '>
                                        {item.title}
                                    </p>
                                </div>
                            ))
                        }

                        <div className='grid grid-cols-2 gap-4 my-4 font-semibold'>
                            <div>
                                <h1 className='sub-heading'>Technology News</h1>
                                {
                                    data.data.technology.slice(1, 9).map((item) => (
                                        <Link href={item.url} key={item.id}>
                                            <article className='border-b py-3 flex items-center justify-between gap-4'>
                                                <p className='text-xs line-clamp-3 hover:text-opacity-5'>
                                                    {item.title}
                                                </p>
                                                <Image src={Endpoints.ImageUrl + item.images} alt={item.image_alt} width={100} height={100} className='rounded-lg image-effect' />
                                            </article>
                                        </Link>
                                    ))
                                }
                            </div>
                            <div>
                                <h1 className='sub-heading'>Industry News</h1>
                                {
                                    data.data.industry.slice(0, 8).map((item) => (
                                        <Link href={item.url} key={item.id}>
                                            <article className='border-b py-3 flex items-center justify-between gap-4'>
                                                <p className='text-xs line-clamp-3'>
                                                    {item.title}
                                                </p>
                                                <Image src={Endpoints.ImageUrl + item.images} alt={item.image_alt} width={100} height={100} className='rounded-lg image-effect' />
                                            </article>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    <div className='col-span-3 border-x px-2 border-dashed space-y-5 text-sm'>
                        {
                            data.data.business.slice(0, 5).map((item) => (
                                <DisplayNewsCard key={item.id} href={item.url} image_alt={item.image_alt} image_url={item.images} title={item.title} />
                            ))
                        }
                    </div>

                    <div className='col-span-3'>
                        <RightSideBar />
                    </div>
                </div>
            </div>


        </section >
    )
}

export default HeroSection