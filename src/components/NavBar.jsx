/* eslint-disable react/prop-types */
function NavBar({ onNavigate }) {
  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md">
      <ul className="flex justify-around py-4">
        <li>About us</li>
        <li>
          <button
            onClick={() => onNavigate("orderForm")}
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Order now
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
