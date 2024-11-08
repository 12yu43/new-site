import { cn } from '@/lib/cn';
import { PaginationLink } from '@/types';
import Link from 'next/link';
import React from 'react';

const Pagination = ({ link, url }: { link?: PaginationLink[], url: string }) => {

    if (!link || link.length === 0) {
        return null
    }
    console.log(link)
    return (
        <div className="text-center mb-10 mt-20">
            <div className='flex flex-wrap items-center gap-4 justify-center'>
                {link.map((item, index) => {
                    const isActive = item?.active
                    const labelIcon = item?.label === "&laquo; Previous"
                        ? <button className="">Prev</button>
                        : item?.label === "Next &raquo;"
                            ? <button className="">Next</button>
                            : item?.label;
                    const page = item?.url?.split('?')[1]
                    return (
                        <Link
                            key={index}
                            href={page ? (url).replace(/\s+/g, "-") + page : "#"}
                        >
                            <span className={cn("min-w-[40px] min-h-[40px] p-2 block rounded-full bg-neutral-100  ", isActive && "bg-neutral-400 ")} >
                                {labelIcon}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Pagination;
