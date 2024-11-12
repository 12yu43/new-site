import React from 'react'
import HeadingTitle from './HeadingTitle'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import 'swiper/css';
import Image from 'next/image'
import Link from 'next/link';
import ContactUsForm from './contactus-form';

const RelatedNews = async () => {
    let logos: any | null = null
    try {
        const res = await fetch(getFullUrl(`${Endpoints.GetCompanyLogo}`))
        logos = await res.json()
    } catch (error) {
        console.log(error)
    }
    if (!logos || !logos.data) {
        return null
    }


    return (
        <div className="py-10 container">
            <div className='grid lg:grid-cols-3 gap-8 justify-items-center place-items-center'>
                <div className='lg:col-span-2'>
                    <HeadingTitle>Featured Companies</HeadingTitle>
                    <div className=' flex items-center justify-between gap-4 flex-wrap pt-10 pr-6'>
                        {
                            logos.data.data.map((logo: any) => (
                                <Link className='inline-block' href={"/feature/" + logo?.url} key={logo.id}>
                                    <Image src={Endpoints.ImageUrl + logo.featured_company_logo} width={150} height={150} alt='logo' />
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:col-span-1'>
                    <ContactUsForm />
                </div>
            </div>
        </div>
    )
}

export default RelatedNews
