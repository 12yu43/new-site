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

interface ApiResponse {
  data: {
    technology?: News[];
    industry?: News[];
    business?: News[];
    magazine?: {
      data: News[];
    };
    cover_story?: News[];
    featured_people?: {
      data: News[];
    };
    startup_insight?: News[];
    banner?: News[];
    video?: News[];
    client_speak?: {
      data: News[];
    };
    news?: {
      sports?: {
      data: News[];
      };
      life_style?: {
        data: News[];
      };
      entrepreneurs?: {
        data: News[];
      };
      entertainment_media?: {
        data: News[];
      };
      awards_events?: {
        data: News[];
      };
    };
  };
}
