import { Link } from 'react-router-dom';
import image from '../../assets/react.svg';
import { useState } from 'react';

function NavBar() {
  const [activeNavbar, setActiveNavbar] = useState(1);

  return (
    <div className=" w-full shadow px-4 h-12 flex flex-row items-center justify-between">
      <img src={image} alt="react" />
      <div className=" hidden group md:flex lg:w-1/2 sm:w-3/4 font-light h-3/4 rounded-full px-3 bg-gray-200 *:py-0.5 text-[0.77em]  flex-row  items-center justify-around">
        <Link
          className={` ${
            location.pathname.endsWith('hover-state')
              ? 'bg-sky-800/20 outline-1 outline-gray-400 '
              : ''
          } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
          to="/hover-state"
        >
          Hover and Other states
        </Link>
        <Link
          className={` ${
            location.pathname.endsWith('responsive-design')
              ? 'bg-sky-800/20 outline-1 outline-gray-400 '
              : ''
          } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
          to="/responsive-design"
        >
          Responsive Design
        </Link>

        <Link
          className={` ${
            location.pathname.endsWith('dark-mode')
              ? 'bg-sky-800/20 outline-1 outline-gray-400 '
              : ''
          } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
          to="/dark-mode"
        >
          Dark Mode
        </Link>
        {/* <Link to="">Focus</Link> */}
        <Link
          onClick={() => setActiveNavbar(4)}
          className={` ${
            location.pathname.endsWith('theme-variables')
              ? 'bg-sky-800/20 outline-1 outline-gray-400 '
              : ''
          } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
          to="theme-variables"
        >
          Theme Variables
        </Link>
      </div>
      <button className=" bg-orange-700 h-3/5  py-4 flex flex-col items-center justify-center px-2 text-white outline-gray-200 shadow-gray-500 rounded-full">
        All Documentation
      </button>
    </div>
  );
}

export default NavBar;
