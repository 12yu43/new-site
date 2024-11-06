import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Endpoints } from '@/constants/endpoints';
import { redirect } from 'next/navigation';

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
    if (!item) {
        redirect('/')
    }
    return (
        <article key={item.id} className='border p-4 rounded-lg flex flex-col md:flex-row gap-4 group'>
            <Image src={Endpoints.ImageUrl + item?.images} alt={item.image_alt} width={250} height={100} className='h-[150px]' />
            <div>
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
