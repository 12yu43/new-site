"use server";

import { NewsDetailResponse } from "@/types";
import { getFullUrl } from "../utils";
import { Endpoints } from "@/constants/endpoints";

export async function getNewsDetail(
  type: string,
  slug: string
): Promise<NewsDetailResponse | null> {
  console.log(getFullUrl(`${Endpoints.GetNewsDetail}/${type}/${slug}`));
  try {
    const res = await fetch(
      getFullUrl(`${Endpoints.GetNewsDetail}/${type}/${slug}`),
      {
        method: "GET",
      }
    );
    const data: NewsDetailResponse = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
