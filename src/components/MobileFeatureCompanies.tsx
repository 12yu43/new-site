"use client"
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import Link from 'next/link'
import { Endpoints } from '@/constants/endpoints'
import 'swiper/css';

const MobileFeatureCompanies = ({ logos }: { logos: any }) => {
    return (
        <div className="block md:hidden py-20">

            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                centeredSlides={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                loop={true}
                modules={[Autoplay]}
            >
                {
                    logos.data.data.map((item: any, i: number) => (
                        <SwiperSlide key={i}>
                            <div className="w-[150px] h-[150px] aspect-square mx-auto relative">
                                <Link href={"/feature/" + item?.url.replace(/&/g, '')
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()} className="block">
                                    <Image
                                        src={Endpoints.ImageUrl + item.featured_company_logo}
                                        alt={item.image_alt}
                                        fill
                                        className="border p-2 shadow-xl rounded-lg"
                                    />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default MobileFeatureCompanies
