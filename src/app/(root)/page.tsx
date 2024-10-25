import React, { Suspense } from 'react'
import { Testimonials } from '../section/Testimonials'
import { NewsSection } from '../section/NewsSection'
import HeroSection from '../section/HeroSection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <NewsSection />
            <Testimonials />
        </div>
    )
}

export default Home