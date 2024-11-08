"use client";
import HeadingTitle from "@/components/shared/HeadingTitle";
import { ApiResponse } from "@/types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { Endpoints } from "@/constants/endpoints";
import Image from "next/image";

const BusinessMagazine = ({ data }: { data: ApiResponse }) => {
  return (
    <section className="pt-10">
      <div className="container">
        <HeadingTitle >Business Magazines</HeadingTitle>
      </div>
      <div className="max-md:px-8 md:container">
        <div className=" [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="swiper_container video-swiper mx-auto"
          >
            {data.data.magazine?.data.map((magazine, i) => (
              <SwiperSlide key={i}>
                <Link className="image" href={`/magazine/${magazine?.url}`}>
                  <Image
                    width={600}
                    height={600}
                    src={Endpoints.ImageUrl + magazine?.magazine_cover_image}
                    alt="post"
                    className="magazine-image object-cover aspect-[3/4]"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BusinessMagazine;
