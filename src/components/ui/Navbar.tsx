import { buttonVariants } from "./button";

// To do: add actual hrefs
const items = [
  { label: "About", href: "#" },
  { label: "Skills", href: "#" },
  { label: "Work", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="text-primary px-8 py-3">
      <ul className="flex gap-8">
        {items.map((item, index) => (
          <a
            href={item.href}
            className={buttonVariants({ variant: "ghost", className:"focus:bg-primary focus:text-white" })}
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
