export const siteConfig = {
  name: "LiNk ?",
  url: "#",
  ogImage: "#",
  description: "Automate DMs and comments on instagram",
  links: {
    twitter: "#",
    discord: "#",
    github: "#",
    instagram: "#",
  },
  keywords: ["Automation", "Instagram", "whatsApp", "LinkedIN"],
  createrID: "@spranjal3301",
  creater: "Pranjal",
};

export const footer = [
  {
    title: "Pages",
    itmes: [
      {
        name: "Pricing",
        herf: "#pricing",
      },
      {
        name: "Contact",
        herf: "#",
      },
      {
        name: "Blog",
        herf: "#",
      },
    ],
  },
  {
    title: "Legal",
    itmes: [
      {
        name: "Privacy Policy",
        herf: "#pricing",
      },
      {
        name: "Terms of Service",
        herf: "#",
      },
      {
        name: "About Us",
        herf: "#",
      },
    ],
  },
  {
    title: "Socials",
    itmes: [
      {
        name: "Twitter",
        herf: "#pricing",
      },
      {
        name: "Discord",
        herf: "#",
      },
      {
        name: "Github",
        herf: "#",
      },
    ],
  },
];

export const productPrices = [
  {
    id: 'price_1',
    name: 'Free Plan',
    description: 'A basic plan for startups and individual users',
    features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
    ],
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Get Started",
    isMostPopular: false
  },
  {
    id: 'price_2',
    name: 'Smart AI Plan',
    description: 'A premium plan for growing businesses',
    features: [
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
    ],
    monthlyPrice: 900,
    yearlyPrice: 9900,
    cta: "Upgrade Now",
    isMostPopular: true
  },
];

export const BLUR_FADE_DELAY = 0.04;

export type SiteConfig = typeof siteConfig;
