import { SKILLS } from "@/config";
import CardSwap, { Card } from "./CardSwap";
import Progress from "./ui/Progress";
import { useState, useEffect } from "react";

const Skills = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width < 1024;
  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-8 pt-5 md:pt-10 px-4 md:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
          Skills
        </h1>
        <div className="h-1 w-12 md:w-16 lg:w-24 mx-auto bg-gradient-to-r from-secondary via-primary to-secondary" />
      </div>

      {/* Skills : Frontend developement (React, typescript, javascript, tailwindcss), UI/UX Design (figma, adobe XD), Other tools (Postman, Git/GitHub, wordpress)*/}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="w-full text-primary text-justify px-6 md:px-10 lg:px-15 text-sm md:text-base lg:text-lg">
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

        <div className="-z-10 flex justify-center items-center order-1 lg:order-2">
          <CardSwap
            width={isMobile ? 280 : isTablet ? 380 : 500}
            height={isMobile ? 220 : isTablet ? 300 : 400}
            cardDistance={isMobile ? 30 : isTablet ? 45 : 60}
            verticalDistance={isMobile ? 35 : isTablet ? 50 : 70}
            delay={5000}
            pauseOnHover={true}
            skewAmount={isMobile ? 3 : isTablet ? 4 : 6}
          >
            {SKILLS.map((skill) => (
              <Card className="flex flex-col gap-2">
                <h4 className="font-semibold text-center text-sm md:text-base">{skill.title}</h4>
                <div className="w-full h-[.1px] bg-primary" />
                <div className="grid grid-cols-2 gap-2 md:gap-5 p-3 md:p-5">
                  {skill.tools.map((tool) => (
                    <div className="p-1 md:p-2">
                      <div className="flex flex-col items-center gap-1 pb-1 md:pb-2">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-6 h-6 md:w-8 md:h-8"
                        />
                        <span className="text-xs md:text-sm text-center">{tool.name}</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
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
