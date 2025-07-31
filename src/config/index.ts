interface SkillsProps {
  title: string;
  tools: {
    name: string;
    icon: string;
    percentage: number;
  }[];
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
