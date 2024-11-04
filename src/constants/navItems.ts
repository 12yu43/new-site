interface SubMenuItem {
  label: string;
  path: string;
}

export interface MenuItem {
  label: string;
  path?: string;
  subMenu?: SubMenuItem[];
}
export const navItems: MenuItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Technology",
    subMenu: [
      { label: "Software", path: "/technology/software" },
      { label: "Big Data", path: "/technology/Big-data" },
      { label: "Security", path: "/technology/Security" },
      { label: "Data Analytics", path: "/technology/Data-analytics" },
      { label: "Cyber Security", path: "/technology/Cyber-security" },
      { label: "IoT", path: "/technology/Iot" },
      { label: "Networking", path: "/technology/Networking" },
      { label: "IT Services", path: "/technology/IT-services" },
      { label: "Storage", path: "/technology/Storage" },
    ],
  },
  {
    label: "Industry",
    subMenu: [
      { label: "Healthcare", path: "/industry/Healthcare" },
      { label: "Retail", path: "/industry/Retail" },
      { label: "Telecom", path: "/industry/Telecom" },
      { label: "Banking & Finance", path: "/industry/banking-finance" },
      { label: "Education", path: "/industry/education" },
      { label: "Legal", path: "/industry/legal" },
      { label: "Media & Entertainment", path: "/industry/media-entertainment" },
      { label: "Food & Beverage", path: "/industry/food-beverage" },
      { label: "ERP", path: "/industry/ERP" },
      { label: "Digital Marketing", path: "/industry/digital-marketing" },
      { label: "Business", path: "/industry/Business" },
    ],
  },
  { label: "Magazines", path: "/magazines", subMenu: [] },
  { label: "Our Clients", path: "/featured-vendors", subMenu: [] },
  { label: "Startup Insights", path: "/startup-insights", subMenu: [] },
  { label: "CXOs", path: "/cxo", subMenu: [] },
  { label: "Leaders Speak", path: "/leader-speaks", subMenu: [] },
  { label: "Videos", path: "/video", subMenu: [] },
  {
    label: "News/Blogs",
    subMenu: [
      { label: "Sports", path: "/sports" },
      { label: "Life Style", path: "/lifestyle" },
      { label: "Entrepreneurs", path: "/entrepreneurs" },
      {
        label: "Entertainment & Media",
        path: "/entertainment-media",
      },
      { label: "Awards & Events", path: "/awards-events" },
    ],
  },
];
