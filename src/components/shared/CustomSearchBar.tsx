'use client';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

const CustomSearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const query = inputRef.current?.value.trim(); 
        if (!query) {
            return;
        }
        router.push('/search/' + query);
    };

    return (
        <div
            className='relative transition-all w-[50px] h-[50px] shadow-xl ease-in-out z-[2000] bg-gray-50 border-4 border-white rounded-full p-1 hover:w-[260px] flex items-center cursor-pointer group duration-1000'
            onMouseEnter={handleFocus}
        >
            <form onSubmit={handleSearch}>
                <input
                    ref={inputRef}
                    type="text"
                    className='left-0 w-full max-w-[245px] bg-gray-50 outline-none border-0 rounded-2xl px-4 hidden group-hover:block'
                    placeholder='Search here...'
                    aria-label="Search"
                    maxLength={50}
                />
                <button type="submit" className='box-border absolute right-1 top-1.5 duration-500 group-hover:bg-[#8c52ff] size-8 p-1 rounded-full group-hover:text-white'>
                    <Search />
                </button>
            </form>
        </div>
    );
};

export default CustomSearchBar;
