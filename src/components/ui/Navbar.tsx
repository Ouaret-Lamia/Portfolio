import { LINKS } from "@/config";
import { buttonVariants } from "./button";

const Navbar = () => {
  return (
    <nav className="text-primary">
      <ul className="flex items-center gap-4 lg:gap-8">
        {LINKS.map((item, index) => (
          <a
            href={item.href}
            className={buttonVariants({ variant: "ghost", className:"active:bg-primary active:text-white hover:bg-gray-100 transition-colors"})}
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
