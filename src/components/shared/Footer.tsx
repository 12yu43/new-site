import Image from 'next/image'
import React from 'react'
import logoImg from '../../public/assets/images/logo.png'
import validationImg from '../../public/assets/images/footer_validation.png'
import { quickLinks, socialMedia } from '@/constants/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='border-t-8 border-spacing-y-2 border-gray-300 border-double bg-slate-50'>

            <div className=' md:pt-8  px-8'>
                <div className='flex items-center justify-between flex-wrap gap-4'>
                    <Image src={logoImg} width={500} height={500} alt='The executive headlines' />
                    <Image src={validationImg} width={100} height={100} alt='' />

                    <div className='flex items-center gap-2 justify-center '>
                        {socialMedia.map((item, i) => (
                            <Link href={item.href} key={i} target={"_blank"}
                                rel="noreferrer"

                            >
                                <FontAwesomeIcon icon={item.icon} size='xl' className='cursor-pointer size-8' title={item.label} />
                            </Link>
                        ))}
                    </div>
                </div>

                <main className='grid md:grid-cols-3  md:lace-content-center md:justify-items-center gap-6 my-6'>


                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold'>QuickLinks</h1>
                        <>
                            {
                                quickLinks.map((item, i) => (
                                    <Link href={item.path} key={i} className='font-semibold hover:text-gray-700 ease-in-out duration-200'>{item.label}</Link>
                                ))
                            }
                        </>
                    </div>
                    <div>

                    </div>

                </main>
            </div>
            <p className='border-t-2 border-black text-center py-4 mt-4'>
                &copy; {year} The Executive Headlines. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer