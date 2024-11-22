"use client"
import React, { useRef } from 'react'
import { ShinyButton } from './ui/shiny-button';
import toast from 'react-hot-toast';
import { Mail } from 'lucide-react';

const SubscribeNewsLetter = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleSubscribeNewsLetter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!inputRef.current || !inputRef.current.value) {
            return;
        }
        try {
            const res = await fetch(
                `https://headlines.executiveheadlines.com/admin/api/news-letter`,
                {
                    method: "POST",
                    body: JSON.stringify({ email: inputRef.current.value }),
                }
            );
            if (res.ok) {

                toast.success("Subscribed successfully")
                inputRef.current.value = ""
            }
            else {
                toast.error("Unable to subscribe")
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <form className='space-y-4' onSubmit={handleSubscribeNewsLetter}>
                <p className='text-xl md:text-2xl font-semibold'>
                    Subscribe to Our Newsletter
                </p>
                <div className='h-12 w-full px-4 text-base shadow-xl rounded-md border border-black flex items-center gap-4'>
                    <Mail className='size-4' />
                    <input ref={inputRef} name='email' required type='email' placeholder='Email address' className='placeholder:text-gray-500 outline-none bg-transparent' />
                </div>
                <ShinyButton type='submit' className="relative z-10 h-14 w-full bg-red-500 text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    Subscribe
                </ShinyButton>
            </form>
        </>
    )
}

export default SubscribeNewsLetter