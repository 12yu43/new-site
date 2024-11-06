"use server";
import { NewsDetailResponse } from "@/types";
import { getFullUrl } from "../utils";
import { Endpoints } from "@/constants/endpoints";

export async function getNewsDetail(
  type: string,
  slug: string
): Promise<NewsDetailResponse | any | null> {
  const url = getFullUrl(`${Endpoints.GetNewsDetail}/${type}/${slug}`);
  try {
    const res = await fetch(url);
    const data: NewsDetailResponse = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
