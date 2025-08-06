const info = [
  {
    title: "Clean Code",
    description: "Writing maintainable and efficient code",
  },
  {
    title: "User-Focused",
    description: "Designing with users in mind",
  },
  {
    title: "Modern Tech",
    description: "Using the latest technologies",
  },
  {
    title: "Always Learning",
    description: "Continuously improving skills",
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center gap-6 md:gap-8 pt-14 pb-8 md:py-13 px-10 md:px-6 lg:px-8"
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
          About Me
        </h1>
        <div className="h-1 w-12 md:w-16 lg:w-24 mx-auto bg-gradient-to-r from-secondary via-primary to-secondary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Interactive Visual */}
        <div className="relative order-1 md:order-0">
          <div className="relative border border-border/50 rounded-xl p-8 md:p-10 shadow-md ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {info.map((info) => (
                <div className="bg-card/50 border border-border/60 rounded-xl p-4 hover:bg-card transition-colors duration-300">
                  <h4 className="font-semibold text-primary mb-2">
                    {info.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl rotate-12"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-secondary/70 to-secondary/80 rounded-3xl -rotate-12"></div>
        </div>

        {/* Right Side - Content */}
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg text-justify">
              <p>
                I'm a second-year Master's student at the University of Ferhat
                Abbas Sétif, specializing in <b>Data Science and Web Technologies</b>.
                With a strong passion for front-end development, I love creating
                clean, responsive, and intuitive user interfaces that balance
                aesthetics with functionality.
              </p>
              <p>
                During my internship at <b>Logika Box</b>, I had the chance to work on
                real-world projects that sharpened my skills and deepened my
                understanding of modern web development. I'm always driven to
                learn, grow, and take on exciting new challenges.
              </p>
            </div>
          </div>
          
    </div>
  );
};

export default About;
