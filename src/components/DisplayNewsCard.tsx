import { Endpoints } from '@/constants/endpoints'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DisplayNewsCard = ({ href, image_url, title, image_alt }: { href: string, title: string, image_url: string, image_alt?: string }) => {
    return (
        <article>
            <Link href={href}>
                <div className='w-[210px] h-[120px] overflow-hidden rounded-lg relative mx-auto mb-2'>
                    {!!image_url && <Image src={Endpoints.ImageUrl + image_url} alt={image_alt || title} fill className='image-effect' />}
                </div>
                <p className='mx-auto w-[200px] line-clamp-3 font-semibold text-xs text-slate-800'>{title}</p>
            </Link>
        </article>
    )
}

export default DisplayNewsCard