"use server";
import { Endpoints } from "@/constants/endpoints";
import { getFullUrl } from "../utils";
import { HomeNewsResponse } from "@/types";

export async function getHomeNews(): Promise<HomeNewsResponse | null> {
  try {
    const data = await fetch(getFullUrl(Endpoints.GetHome), {
      cache: "no-store",
    });
    const res: HomeNewsResponse = await data.json();
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}
