import { buttonVariants } from "./button";

// To do: add actual hrefs
const items = [
  { label: "About", href: "#" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="text-primary px-8 py-3">
      <ul className="flex gap-8">
        {items.map((item, index) => (
          <a
            href={item.href}
            className={buttonVariants({ variant: "ghost", className:"active:bg-primary active:text-white"})}
            // className="px-4 py-2 rounded-lg hover:bg-secondary focus:bg-primary focus:text-secondary transition-colors"
            key={index}
          >
            <li>{item.label}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
