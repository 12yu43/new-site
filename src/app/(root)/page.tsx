import React, { Suspense } from 'react'
import { Testimonials } from '../section/Testimonials'
import HeroSection from '../section/HeroSection'
import { getHomeNews } from '@/lib/actions/getHomeNews'
import LeaderShipProfileSection from '../section/LeaderShipProfileSection'
import StartupInsightsSections from '../section/StartupInsightsSections'
import CombineNewsSection from '../section/CombineNewsSection'
import { CoverFeature } from '../section/CoverFeature'
import VideoSection from '../section/VideoSection'
import BusinessMagazine from '../section/BusinessMagazine'
import FeaturedCompanies from '../section/FeaturedCompanies'
import Loading from '../loading'

export const dynamic = "force-dynamic";

const Home = async () => {
    const data = await getHomeNews()
    if (!data) {
        return <>Unable to fetch data</>
    }
    return (
        // <Suspense fallback={<Loading />}>
        <>
            <HeroSection data={data} />
            <BusinessMagazine data={data} />
            <CoverFeature data={data} />
            <VideoSection />
            <LeaderShipProfileSection data={data} />
            <CombineNewsSection data={data} />
            <StartupInsightsSections data={data} />
            <Testimonials data={data} />
            <FeaturedCompanies /></>
        // </Suspense >
    )
}

export default Home