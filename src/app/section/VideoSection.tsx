"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ytBtnImage from '../../public/assets/images/ytbtn.png'
import HeadingTitle from '@/components/shared/HeadingTitle';
import { getVideoId, videos } from '@/constants/videos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
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
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{ delay: 3000 }}
                    className='mt-8 video-swiper'
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3
                        }

                    }}

                >
                    {videos.map((videoUrl) => {
                        const videoId = getVideoId(videoUrl);
                        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                        return (
                            <SwiperSlide key={videoId}>
                                <Link href={videoUrl} target="_blank" rel="noopener noreferrer" className="relative">
                                    <Image
                                        src={thumbnailUrl}
                                        alt="Video Thumbnail"
                                        width={500}
                                        height={400}
                                        className="border-4  max-lg:min-h-[250px]  border-red-500"
                                    />
                                    <Image
                                        src={ytBtnImage}
                                        alt="YouTube Video"
                                        width={100}
                                        height={100}
                                        className="absolute  max-md:w-[70px] z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
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