"use client"
import React, { useRef } from 'react'
import { ShinyButton } from './ui/shiny-button';
import { getFullUrl } from '@/lib/utils';
import { Endpoints } from '@/constants/endpoints';
import toast from 'react-hot-toast';

const SubscribeNewsLetter = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleSubscribeNewsLetter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!inputRef.current || !inputRef.current.value) {
            return;
        }
        const res = await fetch(getFullUrl(Endpoints.NewsLatter), {
            method: "POST",
            body: JSON.stringify({ email: inputRef.current.value })
        })
        if (res.ok) {
            toast.success("Subscribed successfully")
        }
        else {
            toast.error("Unable to subscribe")
        }
    }
    return (
        <>
            <form className='space-y-4' onSubmit={handleSubscribeNewsLetter}>
                <p className='text-xl'>
                    Subscribe to Our <span className='font-semibold'>Newsletter</span>
                </p>
                <input ref={inputRef} name='email' required type='email' placeholder='Email address' className='placeholder:text-gray-500 h-12 w-full px-4 text-base shadow-xl rounded-md border border-black' />
                <ShinyButton type='submit' className="relative z-10 h-14 w-full bg-red-500 text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    Subscribe
                </ShinyButton>
            </form>
        </>
    )
}

export default SubscribeNewsLetter