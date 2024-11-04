import { Endpoints } from '@/constants/endpoints';
import { getFullUrl } from '@/lib/utils';
import { redirect } from 'next/navigation';
import React from 'react'

type PageTitle = "Reprints and Permissions" | "about" | "reprint-permission" | "disclaimer" | "contact-us" | "advertise" | "privacy-policy"

const DisplayInfo = async ({ pageTitle }: { pageTitle: PageTitle }) => {
    let type = "About Us";
    if (pageTitle === "about") {
        type = "About Us";
    } else if (pageTitle === "reprint-permission") {
        type = "Reprints and Permissions";
    } else if (pageTitle === "disclaimer") {
        type = "Disclaimer";
    } else if (pageTitle === "contact-us") {
        type = "Contact Us";
    } else if (pageTitle === "advertise") {
        type = "Advertise";
    } else if (pageTitle === "privacy-policy") {
        type = "Privacy Policy";
    }
    let data = null
    try {
        const res = await fetch(getFullUrl(Endpoints.GetAbout + '/' + type))
        data = await res.json();
    } catch (error) {
        console.log(error);
    }
    if (!data) {
        redirect('/')
    }
    return (
        <div>
            <div className='container'>
                <h1 className='text-3xl md:text-4xl font-semibold mb-8 text-center'>{type}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.data?.content_details || "" }} className='border p-8 text-lg tracking-wider bg-white shadow-xl'>
                </div>
            </div>
        </div>
    )
}

export default DisplayInfo