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
            <div className=''>
                <HeadingTitle>Featured Companies</HeadingTitle>
                <div className='pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center place-items-center'>
                    {
                        logos.data.data.map((logo: any) => (
                            <Link className='inline-block' href={"/feature/" + logo?.url.replace(/&/g, '')
                                .replace(/\s+/g, "-")
                                .toLowerCase()} key={logo.id}>
                                <Image src={Endpoints.ImageUrl + logo.featured_company_logo} width={150} height={150} alt='logo' className='hover:scale-110 duration-200 ease-in-out  ' />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div>
                <ContactUsForm />
            </div>
        </div>
    )
}

export default RelatedNews
