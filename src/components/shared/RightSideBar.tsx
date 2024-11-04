import React from 'react'
import AnimatedNewsColumn from '../AnimatedNewsColumn'
import { ApiResponse, News } from '@/types'

const RightSideBar = ({ data }: { data?: ApiResponse }) => {
    if (!data) {
        return <>No data found</>
    }
    return (
        <div className=' bg-white'
        >
            <div className=' border-2 border-x-gray-100 border-y-black p-3 border-y-2'>
                <h1 className='sub-heading md:text-2xl font-semibold'>Sports News</h1>
                <div className='mt-4'>
                    <AnimatedNewsColumn url='/sports' data={data.data.news?.sports?.data ?? []} className='lg:h-[500px] p-2 w-full' />
                </div>
            </div>
            <div className='mt-8  border-2 border-x-gray-100 p-3  border-y-black  border-y-2'>
                <h1 className='sub-heading md:text-2xl font-semibold'>Life Style </h1>
                <div className='mt-4'>
                    <AnimatedNewsColumn data={data.data.news?.life_style?.data ?? []} url='/lifestyle' className='lg:h-[410px] p-2' />
                </div>
            </div>
        </div>
    )
}

export default RightSideBar