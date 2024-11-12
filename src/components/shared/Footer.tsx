import Image from 'next/image'
import logoImg from '../../public/assets/images/logo.png'
import validationImg from '../../public/assets/images/footer_validation.png'
import { quickLinks, socialMedia } from '@/constants/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import SubscribeNewsLetter from '../subscribe-newsletter'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { MagazineType } from '@/types'

const Footer = async () => {
    const year = new Date().getFullYear()
    let magazines: {
        status: boolean
        data: {
            data: MagazineType[],
            first_page_url: string,
            from: 1,
            last_page: 2,
            last_page_url: string,
            links: any[],
            next_page_url: string,
            path: string,
            per_page: 12,
            prev_page_url: null,
            to: 12,
            total: 22
        }

    } | null = null
    try {
        const res = await fetch(getFullUrl(`${Endpoints.GetMagazine}`))
        magazines = await res.json()
    } catch (error) {
        console.log(error)
    }


    return (
        <footer className='border-t-8 border-spacing-y-2 border-gray-300 border-double bg-slate-50'>
            <div className='md:pt-8 px-8'>
                <div className='flex items-center justify-between flex-wrap gap-4'>
                    <Image src={logoImg} width={500} height={500} alt='The executive headlines' />
                    <Image src={validationImg} width={100} height={100} alt='' />
                    <div className='flex items-center gap-2 justify-center'>
                        {socialMedia.map((item, i) => (
                            <Link href={item.href} key={i} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={item.icon} size='xl' className='cursor-pointer size-8' title={item.label} />
                            </Link>
                        ))}
                    </div>
                </div>

                <main className='grid md:grid-cols-3 md:lace-content-center md:justify-items-center gap-6 my-6'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl md:text-2xl font-semibold'>QuickLinks</h1>
                        {quickLinks.map((item, i) => (
                            <Link href={item.path} key={i} className='font-semibold text-sm md:text-base hover:text-gray-700 ease-in-out duration-200'>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    {
                        magazines && magazines?.data && magazines.data.data.length !== 0 && <div>
                            <h1 className='text-xl md:text-2xl font-semibold text-center'>
                                Latest  Magazines
                            </h1>
                            <div className='grid grid-cols-2  gap-4 place-items-center mt-4'>
                                {magazines?.data.data.slice(0,2).map((item, i) => (
                                    <Link
                                        href={"/magazine/" + item?.url}
                                        key={i}
                                        className="group relative rounded-sm hover:shadow-xl transition-transform duration-300 ease-in-out overflow-hidden bg-white hover:scale-105 block"
                                    >
                                        <Image
                                            src={Endpoints.ImageUrl + item.magazine_cover_image}
                                            alt={item.image_alt}
                                            width={300}
                                            height={300}
                                            className=" object-fill"
                                        />
                                        <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[140%] -top-[30px] z-10 h-[400px] w-8 rotate-[45deg] bg-white opacity-20 transition-all  duration-500 group-hover:left-[160%]" />
                                    </Link>
                                ))}

                            </div>
                        </div>
                    }
                    <SubscribeNewsLetter />
                </main>
            </div>
            <p className='border-t-2 border-black text-center py-4 mt-4'>
                &copy; {year} The Executive Headlines. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
