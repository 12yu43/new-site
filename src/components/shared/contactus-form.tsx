'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { ShinyButton } from '../ui/shiny-button';

const ContactUsForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            service_id: "service_2f9u39e",
            template_id: "template_ck3l8ob",
            user_id: "VMb3SEnvRjmbHhT_J",
            template_params: {
                email: email,
                name: name,
                message: message,
            },
        };
        try {
            const response = await fetch(
                "https://api.emailjs.com/api/v1.0/email/send",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                setEmail("");
                toast.success(
                    "Email sent successfully!",
                );
            } else {
                toast.error("Failed to send email.")
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An unexpected error occurred")
        }
    };
    return (
        <div className='contactus shadow-xl'>
            <h1 className='font-semibold text-2xl pt-4'>Contact us for our upcoming <span className='text-red-500'>Awards</span></h1>
            <form className='space-y-4 pt-8 px-6' onSubmit={handleSubmit}>
                <input
                    className="contactField"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Your email address"
                    required
                />
                <input
                    className="contactField"
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Your name"
                    required
                />
                <div className="mb-4">
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-4 outline-none resize-none border border-gray-500 min-h-28
  }"
                        placeholder="Your Message"
                        name=""
                        id=""

                    ></textarea>
                </div>
                <ShinyButton type='submit' className='bg-red-500 w-full h-16'>
                    Submit
                </ShinyButton>
            </form>
        </div>
    )
}

export default ContactUsForm