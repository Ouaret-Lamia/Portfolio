interface SkillsProps {
  title: string;
  tools: {
    name: string;
    icon: string;
    percentage: number;
  }[];
}

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const SKILLS: SkillsProps[] = [
  {
    title: "Fronted Developement",
    tools: [
      {
        name: "React",
        icon: "/icons/react-logo.svg",
        percentage: 96,
      },
      {
        name: "JavaScript",
        icon: "/icons/js-logo.svg",
        percentage: 90,
      },
      {
        name: "TypeScript",
        icon: "/icons/ts-logo.svg",
        percentage: 93,
      },
      {
        name: "TailwindCSS",
        icon: "/icons/tailwind-logo.svg",
        percentage: 93,
      },
    ],
  },
  {
    title: "UI/UX Design",
    tools: [
      {
        name: "Figma",
        icon: "/icons/figma-logo.svg",
        percentage: 85,
      },
      {
        name: "Adobe XD",
        icon: "/icons/xd-logo.svg",
        percentage: 80,
      },
    ],
  },
  {
    title: "Other Tools",
    tools: [
      {
        name: "Wordpress",
        icon: "/icons/wordpress-logo.svg",
        percentage: 93,
      },
      {
        name: "Git/GitHub",
        icon: "/icons/git-logo.svg",
        percentage: 85,
      },
      {
        name: "Postman",
        icon: "/icons/postman-logo.svg",
        percentage: 80,
      },
    ],
  },
];

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    title: "Suit Rental App",
    description:
      "A suit rental platform where stores manage sellers, inventory, orders, and payments—all in one place.",
    images: [
      "LocationCostume/Dashboard.png",
      "LocationCostume/Suits.png",
      "LocationCostume/Stores.png",
      "LocationCostume/AddOrder.png",
    ],
    technologies: ["React", "TailwindCSS", "JavaScript", "elstar"],
    githubUrl: "https://github.com/BenyahiaImad/Gestion-des-Location-des-Costume/tree/Frontend-New",
  },
  {
    id: 2,
    title: "3P Industrie website",
    description:
      "A landing page for 3P Industrie showcasing their scotch products, clients, about section, and a contact form for inquiries.",
    images: [
      "3PIndustrie/Home.png",
      "3PIndustrie/About.png",
      "3PIndustrie/Products.png",
      "3PIndustrie/Testimonials.png",
      "3PIndustrie/Clients.png",
      "3PIndustrie/Contact.png",
    ],
    technologies: ["WordPress", "Elementor", "OceanWP"],
    liveUrl: "https://3pindustrie.com",
  },
  {
    id: 3,
    title: "Booking App",
    description:
      "A hotel booking website where users can browse available rooms, view details and prices, and easily make reservations online.",
    images: [
      "BookingApp/Login.png",
      "BookingApp/Home.png",
      "BookingApp/Home2.png",
      "BookingApp/Search.png",
      "BookingApp/Room.png",
      "BookingApp/Room2.png",
    ],
    technologies: ["React", "JavaScript", "TailwindCSS"],
    githubUrl: "https://github.com/NMA19/Booking_app.git",
  },
  {
    id: 4,
    title: "Messaging App",
    description:
      "A full stack responsive messaging app with Google authentication, real-time chat, friend requests, and private conversations.",
    images: [
      "/Messaging_app/Login.png",
      "/Messaging_app/Dashboard.png",
      "/Messaging_app/Chat.png",
      "/Messaging_app/Add.png",
      "/Messaging_app/Requests.png",
    ],
    technologies: ["NextJs", "TailwindCSS", "TypeScript", "Redis", "Pusher", "Upstash"],
    liveUrl: "https://messaging-app-next-js.vercel.app",
    githubUrl: "https://github.com/Ouaret-Lamia/Messaging-app-next.js.git",
    // featured: true,
  }
];
