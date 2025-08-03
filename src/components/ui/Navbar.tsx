import { LINKS } from "@/config";
import { buttonVariants } from "./button";

const Navbar = () => {
  return (
    <nav className="text-primary px-8 py-3">
      <ul className="flex gap-8">
        {LINKS.map((item, index) => (
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
