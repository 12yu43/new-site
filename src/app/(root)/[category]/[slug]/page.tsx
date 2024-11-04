import { NewsDetail } from '@/components/NewsDetail';
import { getNewsDetail } from '@/lib/actions/getNews'
import { redirect } from 'next/navigation';
import React from 'react'

const CategoryPage = async ({ params }: { params: { category: string, slug: string } }) => {

    let type: string = params.category;
    switch (type) {
        case "technology":
            type = "technology";
            break;
        case "healthcare":
        case "retail":
        case "telecom":
        case "banking-finance":
        case "education":
        case "legal":
        case "media-entertainment":
        case "erp":
        case "digital-marketing":
        case "business":
        case "food-beverage":
            type = "industry";
            break;
        case "cxo":
            type = "cxo";
            break;
        case "startup-insights":
            type = "startup-insight";
            break;
        case "feature":
            type = "featured-people";
            break;
        case "cover-story":
            type = "cover-story";
            break;
        case "news-detail":
        case "sports":
        case "lifestyle":
        case "entrepreneurs":
        case "entertainment-media":
        case "awards-events":
            type = "new-category";
            break;
        default:
            type = "technology";
    }

    const data = await getNewsDetail(type, params.slug)
    if (!data || !data.data) {
        redirect('/')
    }
    return (
        <div>
            <h1 className='text-center text-3xl md:text-5xl font-semibold mb-8 capitalize'>
                {params.category}
            </h1>
            <NewsDetail data={data.data} />
        </div>
    )
}

export default CategoryPage