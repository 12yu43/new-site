"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ytBtnImage from '../../public/assets/images/ytbtn.png'
import HeadingTitle from '@/components/shared/HeadingTitle';
import { getVideoId, videos } from '@/constants/videos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const VideoSection = () => {

    return (
        <div className='pt-10'>
            <div className="container">
                <HeadingTitle>Featured Videos</HeadingTitle>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    autoplay={{ delay: 3000 }}
                    className='mt-8 video-swiper'
                    pagination={{ clickable: true }}
                    draggable={true}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 }
                    }}
                >
                    {videos.map((videoUrl) => {
                        const videoId = getVideoId(videoUrl);

                        return (
                            <SwiperSlide key={videoId}>
                                <Link href={videoUrl} target="_blank" rel="noopener noreferrer" className="block relative w-full min-w-20 max-w-md mx-auto border-4 border-red-500 overflow-hidden rounded-lg">
                                    <Image
                                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                        alt="Video Thumbnail"
                                        width={500}
                                        height={300}
                                        className="w-full h-auto object-cover"
                                    />
                                    <Image
                                        src={ytBtnImage}
                                        alt="YouTube Play Button"
                                        width={100}
                                        height={100}
                                        className="absolute max-md:w-[70px] z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    />
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default VideoSection


