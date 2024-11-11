import { Endpoints } from "@/constants/endpoints"
import { NewsDetailType, NewsResponseType } from "@/types"
import Image from "next/image"
import CopyLink from "./CopyLink"
import { redirect } from "next/navigation"
import { getFullUrl } from "@/lib/utils"
import parse from 'html-react-parser';
import Link from "next/link"

export const NewsDetail = async ({ data }: { data: NewsDetailType }) => {
    if (!data) {
        redirect('/')
    }
    let businessNews: NewsResponseType | null = null;
    try {
        const res = await fetch(getFullUrl(`${Endpoints.GetNews}/${"industry"}/business`))
        businessNews = await res.json()
    } catch (error) {
        console.log(error)
    }
    if (!businessNews || !businessNews.data) {
        redirect('/')
    }
    return (
        <div className='container'>
            <div className='flex flex-col md:flex-row gap-6'>
                <div className='flex-1 w-full'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>
                        {data.title}
                    </h1>
                    {
                        data.cat_slug.length > 18 && <h2 className='text-red-500 pt-4 text-xl italic'>
                            {data.cat_slug}
                        </h2>
                    }
                    <div className='my-10'>
                        <Image src={Endpoints.ImageUrl + data.images} alt={data.image_alt} width={1000} height={800} className='mx-auto lg:max-w-[700px] max-h-[500px] object-cover' />
                    </div>
                    <div className="">
                        <div className='[&>p]:text-gray-800 [&>h4]:mt-4 [&>h3]:text-2xl [&>ul]:text-gray-800 [&>ol]:text-gray-800 [&>h2]:text-2xl [&>p]:pt-4 [&>h4]:text-2xl'>
                            {parse(data?.content_details || "")}
                        </div>
                    </div>
                </div>
                <div className='md:w-[300px] md:sticky top-20 md:h-[calc(100vh-100px)]'>
                    <CopyLink />
                    <div className="border-x-2  p-4 mt-2">
                        <h1 className="sub-heading text-2xl font-semibold">Business News</h1>

                        <div className='flex flex-col gap-8 mt-4'>
                            {
                                businessNews.data.data.map((item) => (
                                    <Link href={'/' + item?.cat_slug
                                        .replace(/\s+/g, "-")
                                        .toLowerCase() + "/" + item?.url}
                                        key={item.id}>
                                        <p className="font-semibold text-lg border-b-2  border-black hover:underline  line-clamp-2">
                                            {item.title}
                                        </p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
