import React from 'react'

const HeadingTag = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className='border-b-[4px] border-black  overflow-hidden relative mx-auto max-w-[500px] h-[50px] leading-[50px] flex items-center'>
            <span className='inline-block text-[30px]  uppercase py-[2px] px-5 bg-[#001045] text-white'>
                {children}
            </span>
            <span className='bg-[#001045] w-[85px] h-[45px] rotate-[58deg] inline-block -ml-[30px]'></span>
        </div>
    )
}

export default HeadingTag