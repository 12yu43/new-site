import RightSideBar from '@/components/shared/RightSideBar'
import { Endpoints } from '@/constants/endpoints'
import React from 'react'

const HeroSection = () => {
    // const getData = async () => {
    //     'use server'
    //     try {
    //         const data = await fetch("https://executiveheadlines.com/admin/api" + Endpoints.GetHome,)
    //         const res = await data.json()
    //         console.log(res)
    //     } catch (error) {
    //         console.log(error)

    //     }
    // }
    // getData()
    return (
        <section className=' bg-white pb-24'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-8 border border-black bg-gray-50 '>

                    </div>

                    <div className='col-span-4'>
                        <RightSideBar />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default HeroSection