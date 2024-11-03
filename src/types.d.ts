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
type NewsDetailResponse = {
  data: {
    id: number;
    title: string;
    cat_slug: string;
    images: string;
    content_details: string;
    status: string;
    meta_description: string;
    meta_title: string;
    meta_keywords: string;
    image_alt: string;
    url: string;
    created_at: string;
    updated_at: string;
  };
};

type NewsDetailType = {
  id: number;
  title: string;
  cat_slug: string;
  images: string;
  content_details: string;
  status: string;
  meta_description: string;
  meta_title: string;
  meta_keywords: string;
  image_alt: string;
  url: string;
  created_at: string;
  updated_at: string;
};

type PaginationLink = {
  url: string | null;
  label: string;
  active: boolean;
};
type DataObject = {
  id: number;
  title: string;
  cat_slug: string;
  images: string;
  content_details: string;
  status: string;
  meta_description: string;
  meta_title: string;
  meta_keywords: string;
  image_alt: string;
  url: string;
};
type NewsResponseType = {
  status: boolean;
  data: {
    current_page: number;
    data: DataObject[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
};
type MagazineType = {
  id: number;
  issue_title: string;
  issue_month: string;
  issue_year: number;
  issue_logo: string;
  magazine_cover_image: string;
  slug: string;
  status: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  image_alt: string;
  url: string;
  digi_link: string | null;
  created_at: string;
  updated_at?: string;
};
type ClientTestimonial = {
  id: number;
  client_name: string;
  image: string;
  client_position: string;
  company_name: string;
  message: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
};
type ClientResponseType = {
  status: boolean;
  data: {
    data: ClientTestimonial[];
  };
};
type SearchParams = { [key: string]: string | string[] | undefined };
