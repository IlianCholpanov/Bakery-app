import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-xl font-bold">
          MyApp
        </a>
        <ul
          className={`md:flex md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <a href="/" className="block hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="block hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-gray-300"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
