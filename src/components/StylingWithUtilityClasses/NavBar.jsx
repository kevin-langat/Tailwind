import image from '../../assets/react.svg';

function NavBar() {
  return (
    <div className=" w-full shadow px-4 h-12 flex flex-row items-center justify-between">
      <img src={image} alt="react" />
      <div className=" hidden group md:flex lg:w-1/2 sm:w-3/4 font-light h-1/2 rounded-full px-3 bg-gray-200 text-[0.77em]  flex-row  items-center justify-around">
        <a href="/utility-classes">Utility Classes</a>
        <a href="/hover-state">Hover</a>
        <a href="">Focus</a>
        <a href="">Dark Mode</a>
        <a href="">Theme Variables</a>
        <a href="">Responsive Design</a>
      </div>
      <button className=" bg-orange-700 h-3/5  py-4 flex flex-col items-center justify-center px-2 text-white outline-gray-200 shadow-gray-500 rounded-full">
        All Docs
      </button>
    </div>
  );
}

export default NavBar;
