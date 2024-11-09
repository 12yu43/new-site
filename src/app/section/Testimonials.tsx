import React from 'react'
import HeadingTitle from '@/components/shared/HeadingTitle'
import { ApiResponse } from '@/types'
import { TestimonialsColumn } from '@/components/TestimonialColumn'
import Image from 'next/image'
import { Endpoints } from '@/constants/endpoints'

function TestimonialClientCard({ client }: { client: { message: string, client_name: string, position: string, company_name: string, image: string } }) {
    return (
        <article className="testimonialCard" >
            <div className="flex flex-col h-full justify-between pt-2">
                <q className="leading-5 tracking-tight line-clamp-6">{client.message}</q>
                <div className='flex items-center gap-2 mt-5 '>
                    <Image src={Endpoints.ImageUrl + client.image} alt={client.client_name} width={50} height={50} className='size-12 rounded-full' />
                    <div className='flex flex-col'>
                        <div className="font-medium tracking-tight leading-5">{client.client_name}</div>
                        <div className="leading-5 tracking-tight">{client.position}</div>
                        <div className="leading-5 tracking-tight">{client.company_name}</div>
                    </div>
                </div>

            </div>
        </article>
    )
}

export async function Testimonials({ data }: { data: ApiResponse }) {
    "use server"
    
    let totalClients: any[] = []
    try {
        const res = await fetch('https://executiveheadlines.com/admin/api/home?page=2')
        const clients = await res.json()
        totalClients = [...data.data.client_speak?.data as [], ...clients.data.client_speak.data]
    } catch (error) {
        console.log(error)
    }
    return (
        <section className='bg-white py-6'>
            <div className='container '>
                <HeadingTitle>Testimonials</HeadingTitle>
                <div className='max-w-[540px] mx-auto'>
                    <div className='flex items-center justify-center'>
                    </div>
                    <p className='section-description mt-5'>
                        Client success is our success
                    </p>
                </div>
                <div className="grid grid-rows-3 justify-center gap-6 mt-10  [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]  max-w-6xl mx-auto  overflow-hidden">
                    <TestimonialsColumn className="flex" duration={40} directionX="left">
                        {totalClients.slice(0, 6).map((client: any, i) => (
                            <TestimonialClientCard client={client} key={i} />
                        ))}
                    </TestimonialsColumn>
                    <TestimonialsColumn className="flex" duration={50} directionX="right">
                        {totalClients.slice(6, 12).map((client: any, i) => (
                            <TestimonialClientCard client={client} key={i} />
                        ))}
                    </TestimonialsColumn>

                    <TestimonialsColumn className="flex" duration={55} directionX="left">
                        {totalClients.slice(11, 16).map((client: any, i) => (
                            <TestimonialClientCard client={client} key={i} />
                        ))}
                    </TestimonialsColumn>
                </div>


            </div>
        </section>
    )
}