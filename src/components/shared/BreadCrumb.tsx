"use client";
import { cn } from '@/lib/cn';
import { ChevronRightIcon, HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const BreadCrumb = () => {
    const path = usePathname();

    if (path === '/') {
        return null;
    }

    const paths = path.split('/').splice(1);
    let currentPath = '';

    return (
        <nav className="flex container pt-4" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
                <li>
                    <div>
                        <Link href="/" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </div>
                </li>
                {paths.map((page, index) => {
                    currentPath += `/${page}`;
                    const isActive = index === paths.length - 1;
                    return (
                        <li key={index}>
                            <div className="flex items-center">
                                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <Link
                                    href={currentPath}
                                    className={cn(`ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 line-clamp-1  `, `${isActive && "text-black"}`)}
                                >
                                    {page}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default BreadCrumb;
