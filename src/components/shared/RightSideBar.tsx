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
            <h1 className='sub-heading md:text-2xl font-semibold'>Sports News</h1>
            <div className='mt-4 border-t-2 border-black'>
                <AnimatedNewsColumn data={data.data.news?.sports?.data!} className='h-[500px]' />
            </div>
          <div className='mt-8'>
                <h1 className='sub-heading md:text-2xl font-semibold'>Life Style </h1>
                <div className='mt-4 border-t-2 border-black'>
                    <AnimatedNewsColumn data={data.data.news?.life_style?.data!} className='h-[440px]' />
                </div>
          </div>

        </div>
    )
}

export default RightSideBar