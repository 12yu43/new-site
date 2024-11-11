import { NewsDetail } from '@/components/NewsDetail';
import { getNewsDetail } from '@/lib/actions/getNews'
import { redirect } from 'next/navigation';
import React from 'react'

const CategoryPage = async ({ params }: { params: { category: string, slug: string } }) => {
    let data: any | null = null
    let type: string;
    switch (params.category) {
        case "technology":
            type = "technology";
            break;
        case "healthcare":
        case "media-&-entertainment":
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

    const res = await getNewsDetail(type, params.slug)
    if (!res || !res.data) {
        redirect('/')
        // return null
    }
    if (res.data.people) {
        data = res.data.people
    }
    else if (res.data.magazine) {
        data = res.data.magazine
    }
    else {
        data = res.data
    }
    console.log(data)
    return (
        <>
            <NewsDetail data={data} />
        </>
    )
}

export default CategoryPage