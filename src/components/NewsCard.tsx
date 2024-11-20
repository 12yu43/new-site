import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Endpoints } from '@/constants/endpoints';

interface NewsCardProps {
    item: {
        id: number;
        title: string;
        url: string;
        images: string;
        image_alt: string;
        meta_description?: string;
    };
    url: string
}

const NewsCard: React.FC<NewsCardProps> = ({ item, url }) => {

    return (
        <article key={item.id} className='border p-4 rounded-lg grid grid-cols-1 gap-2 md:grid-cols-4 group'>
            <div className='col-span-1'>
                <div className='overflow-hidden rounded-lg w-fit'>
                    <Link href={url}>
                        <Image src={Endpoints.ImageUrl + item?.images} alt={item.image_alt} width={250} height={150} className='aspect-[3/2] image-effect' />
                    </Link>
                </div>
            </div>
            <div className='md:col-span-3'>
                <h3 className='text-2xl line-clamp-1 font-semibold group-hover:underline'>
                    <Link href={url}>
                        {item.title?.length > 50 ? `${item.title?.substring(0, 50)}...` : item.title}
                    </Link>
                </h3>
                <p className='line-clamp-2'>
                    {item?.meta_description}
                </p>
            </div>
        </article>
    );
};

export default NewsCard;
