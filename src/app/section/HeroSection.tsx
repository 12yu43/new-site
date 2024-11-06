import DisplayNewsCard from '@/components/DisplayNewsCard'
import RightSideBar from '@/components/shared/RightSideBar'
import { Endpoints } from '@/constants/endpoints'
import { ApiResponse } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = async ({ data }: { data: ApiResponse }) => {
    return (
        <section className='bg-white'>
            <div className='max-md:px-4 md:container'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 xl:grid-cols-12 gap-6 py-6 border-y-2'>
                    <div className='col-span-1 md:col-span-2 lg:col-span-6 bg-gray-50'>
                        {data.data.technology?.slice(0, 1).map((item) => (
                            <Link href={'/' + item?.cat_slug
                                .replace(/\s+/g, "-")
                                .toLowerCase() + "/" + item?.url}
                                key={item.id}
                                className='overflow-hidden relative rounded-lg cursor-pointer z-10'>
                                <Image src={Endpoints.ImageUrl + item.images} alt={item.image_alt} width={800} height={600} className='z-10 hover:scale-105 duration-300 ease-in-out' />
                                <p className='text-2xl text-white line-clamp-3 font-bold absolute z-30 bottom-6 left-4'>
                                    {item.title.substring(0, 100) + "" + (item.title.length > 100 && "...")}
                                </p>
                                <div className='absolute bg-black/20 w-full h-full z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                            </Link>
                        ))}

                        {/* Technology and Industry News */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 font-semibold px-2'>
                            {/* Technology News */}
                            <div className='h-full'>
                                <h1 className='sub-heading'>Technology News</h1>
                                <div className='flex flex-col gap-4 mt-2 justify-between h-full'>
                                    {data.data.technology?.slice(1, 8).map((item) => (
                                        <Link href={
                                            item?.cat_slug
                                                .replace(/\s+/g, "-")
                                                .toLowerCase() + "/" + item?.url
                                        } key={item.id} className='hover:underline'>
                                            <article className='border-b flex items-center justify-between gap-2 h-20'>
                                                <p className='text-xs line-clamp-3 hover:text-opacity-5'>
                                                    {item.title}
                                                </p>
                                                <Image src={Endpoints.ImageUrl + item.images} alt={item.image_alt} width={100} height={80} className='rounded-lg image-effect' />
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Industry News */}
                            <div className='h-full'>
                                <h1 className='sub-heading'>Industry News</h1>
                                <div className='flex flex-col gap-2 mt-2 justify-between h-full'>
                                    {data.data.industry?.slice(0, 7).map((item) => (
                                        <Link href={'/' + item?.cat_slug
                                            .replace(/\s+/g, "-")
                                            .toLowerCase() + "/" + item?.url} key={item.id} className='hover:underline'>
                                            <article className='border-b flex items-center justify-between gap-4 h-20'>
                                                <p className='text-xs line-clamp-3'>
                                                    {item.title}
                                                </p>
                                                <Image src={Endpoints.ImageUrl + item.images} alt={item.image_alt} width={100} height={80} className='rounded-lg image-effect' />
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Section */}

                    <div className='col-span-1 lg:col-span-3 md:border-x px-2 max-md:pt-4'>
                        <h1 className='sub-heading font-semibold md:hidden mb-2'>Business News</h1>
                        <div className='flex flex-row max-md:overflow-x-scroll items-center md:flex-col border-dashed gap-5 text-sm'>
                            {data.data.business?.slice(0, 6).map((item) => (
                                <DisplayNewsCard key={item.id} href={"/cxo/" + item?.url} image_alt={item.image_alt} image_url={item.images} title={item.title} />
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar for Larger Screens */}
                    <div className='lg:col-span-3 hidden xl:block'>
                        <RightSideBar data={data} />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection