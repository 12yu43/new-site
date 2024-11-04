import React from 'react'
import { getVideoId, videos } from '../(root)/(staticpages)/video/page';
import Link from 'next/link';
import Image from 'next/image';
import ytBtnImage from '../../public/assets/images/ytbtn.png'
import HeadingTitle from '@/components/shared/HeadingTitle';

const VideoSection = () => {
    return (
        <div className='py-10'>
            <div className="container">
                <HeadingTitle>Featured Videos</HeadingTitle>
                <div className='grid auto-rows-[18rem] md:grid-cols-3 pt-8 gap-6'>
                    {videos.sort(() => Math.random() - 0.5).slice(0, 3).map((videoUrl) => {
                        const videoId = getVideoId(videoUrl);
                        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                        return (
                            <Link href={videoUrl} key={videoId} target="_blank" rel="noopener noreferrer" className="relative h-[300px] ">
                                <Image
                                    src={thumbnailUrl}
                                    alt="Video Thumbnail"
                                    width={500}
                                    height={400}
                                    className='border-4 border-red-500 '
                                />
                                <Image src={ytBtnImage} alt='youtube video' width={100} height={100} className='absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default VideoSection