import { Link } from 'react-router-dom';
import image from '../../assets/react.svg';

function NavBar() {
  return (
    <div className=" w-full shadow px-4 h-12 flex flex-row items-center justify-between">
      <img src={image} alt="react" />
      <div className=" hidden group md:flex lg:w-1/2 sm:w-3/4 font-light h-1/2 rounded-full px-3 bg-gray-200 text-[0.77em]  flex-row  items-center justify-around">
        <Link to="/hover-state">Hover</Link>
        <Link
          className=" focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 focus:outline-sky-500"
          to="/responsive-design"
        >
          Responsive Design
        </Link>
        <Link to="">Focus</Link>
        <Link to="">Dark Mode</Link>
        <Link to="">Theme Variables</Link>
      </div>
      <button className=" bg-orange-700 h-3/5  py-4 flex flex-col items-center justify-center px-2 text-white outline-gray-200 shadow-gray-500 rounded-full">
        All Documentation
      </button>
    </div>
  );
}

export default NavBar;
