import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ytBtnImage from '../../../../public/assets/images/ytbtn.png'
import { getVideoId, videos } from '@/constants/videos';


const VideosPage = () => {
    return (
        <div className="container">
            <div className=' flex items-center justify-evenly gap-6 gap-y-10 flex-wrap'>
                {videos.map((videoUrl) => {
                    const videoId = getVideoId(videoUrl);
                    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                    return (
                        <Link href={videoUrl} key={videoId} target="_blank" rel="noopener noreferrer" className="relative w-[300px] h-[250px]">
                            <Image
                                src={thumbnailUrl}
                                alt="Video Thumbnail"
                                width={500}
                                height={400}
                                className='border-4 border-red-500 '
                            />
                            <Image src={ytBtnImage} alt='youtube video' width={100} height={100}  className='absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'/>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default VideosPage;
