"use server";

import {Endpoints} from "@/constants/endpoints";
import {getFullUrl} from "../utils";
import {ApiResponse} from "@/types";

export async function getHomeNews(page?: number): Promise<ApiResponse | null> {
  try {
    const data = await fetch(getFullUrl(Endpoints.GetHome));
    return await data.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
