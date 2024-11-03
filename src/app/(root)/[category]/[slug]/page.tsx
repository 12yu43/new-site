import { NewsDetail } from '@/components/NewsDetail';
import { Endpoints } from '@/constants/endpoints';
import { getNewsDetail } from '@/lib/actions/getNews'
import { getFullUrl } from '@/lib/utils';
import { NewsDetailResponse } from '@/types';
import { redirect } from 'next/navigation';
import React from 'react'

const CategoryPage = async ({ params }: { params: { category: string, slug: string } }) => {

    let type: string = params.category;
    switch (type) {
        case "food-beverage":
            type = 'technology'
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
            <NewsDetail data={data.data} />
        </div>
    )
}

export default CategoryPage