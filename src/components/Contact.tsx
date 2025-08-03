import { CONTACTS } from "@/config";

const Contact = () => {

  return (
    <div
      id="contact"
      className="w-full bg-secondary/25 flex flex-col items-center gap-7 py-10 px-10 md:pt-13 md:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Contact Me
          </h1>
          <div className="h-1 w-12 md:w-16 lg:w-24 mx-auto bg-gradient-to-r from-secondary via-primary to-secondary mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CONTACTS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">

                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary group-hover:text-primary/80 transition-colors duration-300">
                    {link.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">
                    {link.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {link.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
