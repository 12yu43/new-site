import Pagination from '@/components/shared/Pagination'
import { BentoGrid } from '@/components/ui/bento-grid'
import { Endpoints } from '@/constants/endpoints'
import { getFullUrl } from '@/lib/utils'
import { SearchParams } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const FeaturedVendorPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  let logos: any | null = null
  let page = 1
  if (searchParams && searchParams.page) {
    const isNum = +searchParams.page
    if (isNaN(isNum)) {
      redirect('/featured-vendors')
    }
    else {
      page = isNum
    }
  }
  try {
    const res = await fetch(getFullUrl(`${Endpoints.GetCompanyLogo}?page=${page || 1}`))
    logos = await res.json()
  } catch (error) {
    console.log(error)
  }
  if (!logos || !logos.data || logos.data.data.length === 0) {
    redirect('/')
  }
  return (
    <section className='bg-white py-6'>
      <div className='container '>
        <BentoGrid className='grid md:auto-rows-[8rem]  grid-cols-1 md:grid-cols-4 justify-items-center'>
          {
            logos.data.data.map((item: any) => (
              <Link key={item.id} className='shadow-xl p-6  self-center hover:scale-110 ease-in-out duration-200' href={'/feature/' + item.url}>
                <Image src={Endpoints.ImageUrl + item.featured_company_logo} alt={item.featured_company_logo} width={150} height={150} className='aspect-[20/8] ' />
              </Link>
            ))
          }
        </BentoGrid>
        <Pagination link={logos.data.links} url={'/featured-vendors?'} />
      </div>
    </section>
  )
}

export default FeaturedVendorPage