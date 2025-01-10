/* eslint-disable react/prop-types */
function NavBar({ onNavigate }) {
  return (
    <nav className="sticky backdrop-filter backdrop-blur-[10px] absolute-top-[0] left-[0] w-full h-screen translate-x-full flex items-center justify-center [transition:all_0.5s_ease-in]">
      <ul className="flex items-center gap-[4.8rem]">
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
