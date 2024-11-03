import { Endpoints } from "@/constants/endpoints"
import { NewsDetailType } from "@/types"
import Image from "next/image"

export const NewsDetail = ({ data }: { data: NewsDetailType }) => {
    return (
        <div className='container'>
            <div className='flex gap-4'>
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
                <div className='w-[260px] sticky top-20 h-[calc(100vh-85px)]'>
                    <h1>
                        Featured News
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium nobis a alias quo, eius est ipsa distinctio provident facilis. Eos unde amet, reprehenderit doloribus optio quasi illo quaerat perferendis officiis saepe dignissimos aliquam delectus, enim assumenda pariatur in sit.
                    </h1>
                </div>
            </div>
        </div>
    )
}
