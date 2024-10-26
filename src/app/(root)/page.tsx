import React from 'react'
import { Testimonials } from '../section/Testimonials'
import { NewsSection } from '../section/NewsSection'
import HeroSection from '../section/HeroSection'
import { getHomeNews } from '@/lib/actions/getHomeNews'
import LeaderShipProfileSection from '../section/LeaderShipProfileSection'
import StartupInsightsSections from '../section/StartupInsightsSections'

const Home = async () => {
    const data = await getHomeNews()

    if (!data) {
        return <>Unable to fetch data</>
    }
    return (
        <div>
            <HeroSection data={data} />
            <NewsSection data={data} />
            <LeaderShipProfileSection data={data} />
            <StartupInsightsSections data={data} />
            <Testimonials />
        </div>
    )
}

export default Home