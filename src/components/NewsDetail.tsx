import { Endpoints } from "@/constants/endpoints"
import { NewsDetailType } from "@/types"
import Image from "next/image"
import CopyLink from "./CopyLink"

export const NewsDetail = ({ data }: { data: NewsDetailType }) => {
    return (
        <div className='container'>
            <div className='flex gap-6'>
                <div className='flex-1 w-full'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>
                        {data.title}
                    </h1>
                    <div className='my-10'>
                        <Image src={Endpoints.ImageUrl + data.images} alt={data.image_alt} width={1000} height={800} className='mx-auto lg:max-w-[700px] max-h-[500px] object-cover' />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data?.content_details || "",
                        }}
                        className='[&>p]:text-gray-800 [&>ul]:text-gray-800 [&>ol]:text-gray-800 [&>h2]:text-2xl [&>p]:pt-4'
                    />
                </div>
                <div className='w-[300px] sticky top-20 h-[calc(100vh-85px)]'>
                    <CopyLink />
                    <div className="border-2  p-2">
                        <h1 className="sub-heading text-2xl font-semibold">Featured News</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}
