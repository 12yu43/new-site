'use client'
import { Search } from 'lucide-react'
import React, { useRef } from 'react'

const CustomSearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className='relative transition-all w-[50px] h-[50px] shadow-xl ease-in-out z-[4000] bg-gray-50 border-4 border-white rounded-full  p-1 hover:w-[260px] flex items-center cursor-pointer group duration-1000'
            onMouseEnter={handleFocus}
        >
            <input
                ref={inputRef}
                type="text"
                className='left-0 w-full max-w-[245px] bg-gray-50 outline-none border-0 rounded-2xl px-4 hidden  group-hover:block'
                placeholder='Search here...'
            />
            <Search className='box-border absolute right-1 top-1.5 duration-500  group-hover:bg-[#8c52ff] size-8 p-1 rounded-full  group-hover:text-white' />
        </div>
    )
}

export default CustomSearchBar;
