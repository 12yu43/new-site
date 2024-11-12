import Image from 'next/image';
import Link from 'next/link';
import ytBtnImage from '../../../../public/assets/images/ytbtn.png';
import { getVideoId, videos } from '@/constants/videos';
import RelatedNews from '@/components/shared/RelatedNews';

const VideosPage = () => (
    <div className="container">
        <div className="flex flex-wrap items-center justify-evenly gap-6 gap-y-10">
            {videos.map((videoUrl) => {
                const videoId = getVideoId(videoUrl);

                return (
                    <Link
                        href={videoUrl}
                        key={videoId}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-[300px] h-[250px] border-4 border-red-500"
                    >
                        <Image
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt="Video Thumbnail"
                            fill
                            className="object-cover"
                        />
                        <Image
                            src={ytBtnImage}
                            alt="Play Video"
                            width={100}
                            height={100}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                        />
                    </Link>
                );
            })}
        </div>
        <RelatedNews />
    </div>
);

export default VideosPage;
