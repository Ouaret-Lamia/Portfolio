import CardSwap, { Card } from "./CardSwap";
import Progress from "./ui/Progress";

// To do: Make it responsive
interface SkillsProps {
  title: string;
  tools: {
    name: string;
    icon: string;
    percentage: number;
  }[];
}

const skills: SkillsProps[] = [
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

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 pt-5 md:pt-10 ">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">
          Skills
        </h1>
        <div className="h-1 w-15 md:w-24 mx-auto bg-gradient-to-r from-secondary via-primary to-secondary" />
      </div>

      {/* Skills : Frontend developement (React, typescript, javascript, tailwindcss), UI/UX Design (figma, adobe XD), Other tools (Postman, Git/GitHub, wordpress)*/}
      <div className="w-full grid md:grid-cols-2">
        <div className="w-full text-primary text-justify px-10 md:text-lg md:p-15 ">
          I've spent the past few years learning and perfecting my skills in
          frontend development, specializing in React, TypeScript, JavaScript,
          and Tailwind CSS to build fast, responsive, and user-friendly
          interfaces. I also have a strong interest in UI/UX design and
          regularly use tools like Figma and Adobe XD to bring ideas to life.
          Along the way, I’ve become comfortable with tools like Postman for
          testing APIs, Git/GitHub for version control, and WordPress for
          content management. I’m always learning, but everything I’ve picked up
          so far helps me build smooth, functional, and visually appealing
          experiences.
        </div>

        <div className="-z-10">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            {skills.map((skill) => (
              <Card className="flex flex-col gap-2">
                <h4 className="font-semibold text-center">{skill.title}</h4>
                <div className="w-full h-[.1px] bg-primary" />
                <div className="grid grid-cols-2 gap-5 p-5">
                  {skill.tools.map((tool) => (
                    <div className="p-2">
                      <div className="flex flex-col items-center gap-1 pb-2">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-8 h-8"
                        />
                        <span className="text-sm">{tool.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">
                          {tool.percentage}%
                        </span>
                        <Progress percentage={tool.percentage} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Skills;
