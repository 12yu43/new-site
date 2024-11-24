import MobileFeatureCompanies from '@/components/MobileFeatureCompanies'
import { TestimonialsColumn } from '@/components/TestimonialColumn'
import HeadingTitle from '@/components/shared/HeadingTitle'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'


const FeaturedCompanies = async () => {
    let logos: any | null = null
    try {
        const res = await fetch(getFullUrl(`${Endpoints.GetCompanyLogo}`))
        logos = await res.json()
    } catch (error) {
        console.log(error)
    }
    if (!logos || !logos.data) {
        redirect('/')
    }
    return (
        <section className='bg-white py-6'>
            <div className='container '>
                <HeadingTitle>
                    Featured Companies
                </HeadingTitle>
                <div className='md:flex justify-center gap-14  mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[739px] overflow-hidden hidden'>
                    <TestimonialsColumn className='hidden md:block' duration={15} directionY='up'>
                        {
                            logos.data.data.slice(0, 5).map((item: any, i: number) => (
                                <Link href={"/feature/" + item?.url.replace(/&/g, '')
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()}
                                    className='card' key={i}>
                                    <Image src={Endpoints.ImageUrl + item.featured_company_logo} alt={item.image_alt} width={100} height={100} className='w-[120px] h-[70px]' />
                                </Link>
                            ))
                        }
                    </TestimonialsColumn>
                    <TestimonialsColumn className='hidden md:block' duration={18} directionY='down'>
                        {
                            logos.data.data.slice(5, 10).map((item: any, i: number) => (
                                <Link href={"/feature/" + item?.url.replace(/&/g, '')
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()}
                                    className='card' key={i}>
                                    <Image src={Endpoints.ImageUrl + item.featured_company_logo} alt={item.image_alt} width={100} height={100} className='w-[120px] h-[70px]' />
                                </Link>
                            ))
                        }
                    </TestimonialsColumn>
                    <TestimonialsColumn className='hidden md:block' duration={20} directionY='up'>
                        {
                            logos.data.data.slice(10, 15).map((item: any, i: number) => (
                                <Link href={"/feature/" + item?.url.replace(/&/g, '')
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()}
                                    className='card' key={i}>
                                    <Image src={Endpoints.ImageUrl + item.featured_company_logo} alt={item.image_alt} width={100} height={100} className='w-[120px] h-[70px]' />
                                </Link>
                            ))
                        }
                    </TestimonialsColumn>
                    <TestimonialsColumn className='hidden md:block' duration={14} directionY='down'>
                        {
                            logos.data.data.slice(15, 20).map((item: any, i: number) => (
                                <Link
                                    href={"/feature/" + item?.url} className='card' key={i}>
                                    <Image src={Endpoints.ImageUrl + item.featured_company_logo} alt={item.image_alt} width={100} height={100} className='w-[120px] h-[70px]' />
                                </Link>
                            ))
                        }
                    </TestimonialsColumn>
                </div>
                <MobileFeatureCompanies logos={logos} />
            </div>
        </section>
    )
}

export default FeaturedCompanies