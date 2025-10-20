import { Github, SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { PROJECTS } from "../config";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";

// Component for fade in/fade out carousel
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    let intervalId: NodeJS.Timeout;

    if (!isHovered) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [images.length, isHovered]);

  return (
    <div
      className="relative overflow-hidden h-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project image ${index + 1}`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "web-dev" | "w3d">("all");

  const filteredProjects = activeCategory === "all" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <div
      id="projects"
      className="w-full bg-white flex flex-col items-center gap-7 pt-14 md:px-6 lg:px-8 pb-16"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          My Projects
        </h1>
        <div className="h-1 w-12 md:w-16 lg:w-24 mx-auto bg-gradient-to-r from-secondary via-primary to-secondary mb-6" />
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-3 md:gap-4 mb-4">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 cursor-pointer",
            activeCategory === "all"
              ? "bg-primary text-white shadow-lg"
              : "bg-secondary text-primary hover:bg-secondary/50"
          )}
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory("web-dev")}
          className={cn(
            "px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 cursor-pointer",
            activeCategory === "web-dev"
              ? "bg-primary text-white shadow-lg"
              : "bg-secondary text-primary hover:bg-secondary/50"
          )}
        >
          Web Dev
        </button>
        <button
          onClick={() => setActiveCategory("w3d")}
          className={cn(
            "px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 cursor-pointer",
            activeCategory === "w3d"
              ? "bg-primary text-white shadow-lg"
              : "bg-secondary text-primary hover:bg-secondary/50"
          )}
        >
          W3D
        </button>
      </div>

      <div className="w-full max-w-7xl px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
            >
              <ImageCarousel images={project.images} />

              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-primary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants()}
                    >
                      <SquareArrowOutUpRight className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "outline" })}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
