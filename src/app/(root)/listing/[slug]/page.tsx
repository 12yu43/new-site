import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { Link2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation'
import React from 'react'

const Listing = async ({ params }: { params: { slug: string } }) => {
    if (!params.slug) {
        redirect('/')
    }
    let listings;
    try {
        const res = await fetch(getFullUrl(Endpoints.GetListing + "/" + params?.slug))
        listings = await res.json()
    } catch (error) {
        console.log(error)
    }
    console.log(listings.data.featuredpeople)

    return (
        <section>

            <div className='border-b-2 border-dashed pb-10 border-black'>
                <Image src={Endpoints.ImageUrl + listings.data.magazin.issue_logo} alt={listings.data.magazin.issue_title} width={400} height={400} className='mx-auto' />
            </div>
            <div className='container'>

                <header className='grid grid-cols-1 md:grid-cols-4 gap-6 text-xl mt-6 font-semibold max-md:pb-6 max-md:border-b-2 border-black'>
                    <div className='md:border-b-2 border-black col-span-1 md:py-4'>Company</div>
                    <div className='md:border-b-2 border-black col-span-1 md:py-4'>Management</div>
                    <div className='md:border-b-2 border-black md:col-span-2 md:py-4'>Description</div>
                </header>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 py-6 '>
                    {
                        listings.data.featuredpeople.map((item: any, i: number) => (
                            <React.Fragment key={i}>
                                <Link
                                    target={"_blank"}
                                    
                                    href={"http://" + item?.featured_company_website}
                                >
                                    <Image src={Endpoints.ImageUrl + item.featured_company_logo} alt={item.image_alt} width={200} height={200} className='w-[150px] h-[100px] place-self-start' />
                                </Link>

                                <div className=''>
                                    <p className='font-semibold'>
                                        {item.featured_people_name}
                                    </p>
                                    <p>
                                        {item.featured_people_position}
                                    </p>
                                    <Link className="text-blue-500 text-xs underline flex items-center" href={item.url ? `/feature/${item.url}` : "#"} >
                                        <span className='flex items-center gap-2 font-semibold'>
                                            Know more <Link2Icon className='size-4' />
                                        </span>
                                    </Link>
                                </div>
                                <div className='md:col-span-2'>
                                    {item?.featured_people_description}
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>


            </div>

        </section>
    )
}

export default Listing