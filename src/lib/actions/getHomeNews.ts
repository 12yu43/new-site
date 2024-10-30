"use server";
import { Endpoints } from "@/constants/endpoints";
import { getFullUrl } from "../utils";
import { ApiResponse } from "@/types";

export async function getHomeNews(): Promise<ApiResponse | null> {
  try {
    const data = await fetch(getFullUrl(Endpoints.GetHome), {
      cache: "no-store",
    });
    const res: ApiResponse = await data.json();
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}
