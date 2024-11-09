'use client'
import { CircleCheckBigIcon, Link } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const CopyLink = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false)
    function handleCopy() {
        const url = `${window.location.href}`;
        navigator.clipboard.writeText(url)
            .then(() => {
                setIsCopied(true)
                toast.success("link copied")
                setTimeout(() => {
                    setIsCopied(false)
                }, 5000);
            })
            .catch(err => {
                setIsCopied(false)
                console.error("Failed to copy: ", err);
            });

    }

    return (
        <button onClick={handleCopy} style={{ cursor: 'pointer' }} title='copy link' className='flex items-center justify-end w-full gap-2'>
            Share  {!isCopied ? <Link className='hover:opacity-80 bg-slate-100 rounded-full size-8 p-2' />
                : <CircleCheckBigIcon className='bg-slate-100 rounded-full size-8 p-2' />}
        </button>
    )
}

export default CopyLink;
