import HeadingTitle from "@/components/shared/HeadingTitle";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ApiResponse } from "@/types";
import Link from "next/link";
import React from "react";


export function NewsSection({ data }: { data: ApiResponse }) {
    return (
        <section className='bg-white py-6'>
            <div className='container '>
                <HeadingTitle>Cover Features</HeadingTitle>
                <BentoGrid className="pt-8">
                    {data.data.cover_story?.slice(0, 6).map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            image_alt={item.image_alt}
                            url={item?.cat_slug
                                .replace(/\s+/g, "-")
                                .toLowerCase() + "/" + item?.url}
                            images={item.images}

                        // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
                <div className='flex items-center justify-center mt-8'>
                    <Link className="tag" href={'/'}>
                        View more
                    </Link>
                </div>
            </div>
        </section>
    );
}

