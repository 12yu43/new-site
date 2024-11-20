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
      { label: "Big Data", path: "/technology/big-data" },
      { label: "Security", path: "/technology/Security" },
      { label: "Data Analytics", path: "/technology/data-analytics" },
      { label: "Cyber Security", path: "/technology/cyber-security" },
      { label: "IoT", path: "/technology/iot" },
      { label: "Networking", path: "/technology/networking" },
      { label: "IT Services", path: "/technology/it-services" },
      { label: "Storage", path: "/technology/storage" },
    ],
  },
  {
    label: "Industry",
    subMenu: [
      { label: "Healthcare", path: "/industry/healthcare" },
      { label: "Retail", path: "/industry/retail" },
      { label: "Telecom", path: "/industry/telecom" },
      { label: "Banking & Finance", path: "/industry/banking-finance" },
      { label: "Education", path: "/industry/education" },
      { label: "Legal", path: "/industry/legal" },
      { label: "Media & Entertainment", path: "/industry/media-entertainment" },
      { label: "Food & Beverage", path: "/industry/food-beverage" },
      { label: "ERP", path: "/industry/erp" },
      { label: "Digital Marketing", path: "/industry/digital-marketing" },
      { label: "Business", path: "/industry/business" },
    ],
  },
  { label: "Magazines", path: "/magazines", subMenu: [] },
  { label: "Our Clients", path: "/featured-vendors", subMenu: [] },
  { label: "Startup Insights", path: "/startup-insights", subMenu: [] },
  { label: "CXOs", path: "/cxos", subMenu: [] },
  { label: "Leaders Speak", path: "/leader-speaks", subMenu: [] },
  { label: "Videos", path: "/videos", subMenu: [] },
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
