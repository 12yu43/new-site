export type News = {
  id: number;
  title: string;
  cat_slug: string;
  images: string;
  content_details: string;
  home_show: 1;
  status: 1;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  image_alt: string;
  url: string;
  created_at: string;
  updated_at: string;
  news?: NewsSubcategories;
};
type NewsSubcategories = {
  sports?: { data: News[] };
  life_style?: { data: News[] };
  entrepreneurs?: { data: News[] };
  entertainment_media?: { data: News[] };
  awards_events?: { data: News[] };
  [key: string]: { data: News[] } | undefined; 
};

type HomeNewsCategories =
  | "technology"
  | "industry"
  | "business"
  | "magazine"
  | "cover_story"
  | "featured_people"
  | "startup_insight"
  | "banner"
  | "video"
  | "client_speak"
  | "sports"
  | "life_style"
  | "entrepreneurs"
  | "entertainment_media"
  | "awards_events";

export type HomeNewsResponse = {
  data: Record<HomeNewsCategories, News[]>;
  [key: string]: any;
};
