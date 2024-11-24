import HeadingTitle from "@/components/shared/HeadingTitle";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ApiResponse } from "@/types";
import Link from "next/link";
import React from "react";


export function CoverFeature({ data }: { data: ApiResponse }) {
    return (
        <section className='bg-white py-6'>
            <div className='container'>
                <HeadingTitle>Cover Features</HeadingTitle>
                <BentoGrid className="pt-8 md:auto-rows-[17rem]">
                    {data.data.cover_story?.slice(0, 8).map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            image_alt={item.image_alt}
                            url={'/cover-story/' + item?.url.replace(/&/g, '')
                                .replace(/\s+/g, "-")
                                .toLowerCase()}
                            images={item.images}

                        // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
                <div className='flex items-center justify-center mt-8'>
                    <Link className="tag" href={'/magazines'}>
                        View more
                    </Link>
                </div>
            </div>
        </section>
    );
}

