import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ytBtnImage from '../../../../public/assets/images/ytbtn.png'
export const videos = [
    "https://www.youtube.com/watch?v=4HYKLY7hXr4",
    "https://www.youtube.com/watch?v=Py4zrERAV8s",
    "https://www.youtube.com/watch?v=yh670QHDISw",
    "https://www.youtube.com/watch?v=EUEB1sx_RwM",
    "https://www.youtube.com/watch?v=IIW_DYprilc"
];

// Function to extract video ID from YouTube URL
export const getVideoId = (url: string) => {
    const urlParams = new URL(url).searchParams;
    return urlParams.get('v');
};

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
