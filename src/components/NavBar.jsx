const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-xl font-bold">
          MyApp
        </a>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
        <button className="md:hidden text-white hover:text-gray-300">
          {/* Add hamburger menu icon here */}☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
