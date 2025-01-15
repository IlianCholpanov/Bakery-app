import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-tintFirstSection h-28 py-0 px-16">
      <a className="h-9" href="#">
        <img alt="Bakery Logo" src="img/./logo/bakery-logo.png" />
      </a>
      <nav className="backdrop-blur-[10px] bg-white bg-opacity-50 absolute top-0 left-0 w-full h-screen translate-x-full flex items-center justify-center transition-all duration-500 ease-in opacity-0 pointer-events-none invisible">
        <ul className="list-none flex items-center gap-16">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-block text-gray-800 font-medium text-xl transition-all duration-300 hover:text-darkOrange"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-block text-gray-800 font-medium text-xl transition-all duration-300 hover:text-darkOrange"
            >
              Order Now
            </Link>
          </li>
        </ul>
        <button className="border-none bg-none cursor-pointer hidden">
          <HiMenu className="inline-block text-gray-800 font-medium text-xl transition-all duration-300 hover:text-darkOrange" />
          <HiX className="inline-block text-gray-800 font-medium text-xl transition-all duration-300 hover:text-darkOrange" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
