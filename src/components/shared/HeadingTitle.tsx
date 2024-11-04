import React from 'react'

const HeadingTitle = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className='border-b-[4px] border-black  overflow-hidden relative w-full h-[60px] leading-[50px]'>
            <span className='inline-block lg:text-[22px]  uppercase py-[5px] px-5 bg-[#001045] text-white'>
                {children}
            </span>
            <span className='bg-[#001045] w-[85px] h-[32px] rotate-[75deg] inline-block -ml-[40px]'></span>
        </div>
    )
}

export default HeadingTitle