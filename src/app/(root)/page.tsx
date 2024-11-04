import React from 'react'
import { Testimonials } from '../section/Testimonials'
import HeroSection from '../section/HeroSection'
import { getHomeNews } from '@/lib/actions/getHomeNews'
import LeaderShipProfileSection from '../section/LeaderShipProfileSection'
import StartupInsightsSections from '../section/StartupInsightsSections'
import CombineNewsSection from '../section/CombineNewsSection'
import { CoverFeature } from '../section/CoverFeature'

const Home = async () => {
    const data = await getHomeNews()
    if (!data) {
        return <>Unable to fetch data</>
    }
    return (
        <>
            <HeroSection data={data} />
            <CoverFeature data={data} />
            <LeaderShipProfileSection data={data} />
            <CombineNewsSection data={data} />
            <StartupInsightsSections data={data} />
            <Testimonials data={data} />
        </>
    )
}

export default Home