import { Link } from 'react-router-dom';
import image from '../../assets/Tailwind.png';
import { ArrowLeft, ArrowUpRight, PanelLeft, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  function handleOnScroll(e) {}

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('sideBar')) {
    } else {
      setSideBar(false);
    }
  });
  useEffect(() => {
    console.log();
    if (sideBar) {
      document.documentElement.style.overflow = 'hidden';
    } else if (sideBar === false) {
      document.documentElement.style.overflow = 'scroll';
    }
  }, [sideBar]);

  return (
    <div className="relative flex flex-row h-full  w-full">
      <div className=" z-50 bg-white w-full shadow px-4 h-12 flex flex-row items-center justify-between">
        <img src={image} className=" w-10 h-1/2 animate-bounce" alt="react" />
        <div className=" hidden group md:flex lg:w-1/2 sm:w-3/4 font-light h-3/4 rounded-full px-3  bg-gray-200 *:py-0.5 text-[0.77em]  flex-row  items-center justify-around *:hover:underline decoration-1 decoration-blue-500 *:hover:text-blue-600">
          <Link
            className={` ${
              location.pathname.endsWith('hover-state')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to="/hover-state"
          >
            Hover & states
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
            className={` ${
              location.pathname.endsWith('theme-variables')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to="theme-variables"
          >
            Theme Variables
          </Link>
          <Link
            className={` ${
              location.pathname.endsWith('colors')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to="colors"
          >
            Colors
          </Link>
        </div>
        <button
          onClick={() => setSideBar(true)}
          className="sideBar group cursor-pointer bg-orange-700 h-3/5  py-4 flex flex-row items-center justify-center px-2 gap-2 text-white  outline-gray-200 shadow-8xl rounded-full shadow-black"
        >
          <h2 className="sideBar text-sm"> All Documentation</h2>
          <h2>
            <PanelLeft className="sideBar outline-1 outline-gray-400 rounded-full text-black p-1  bg-gray-200 w-6 h-6" />
          </h2>
        </button>
      </div>
      <div
        className={` ${
          sideBar ? 'flex' : 'hidden'
        } sideBar z-50 flex-col gap-1 pl-4 py-3  absolute bg-gray-900 outline-1 rounded-tl-[0.5em] rounded-bl-[0.5em] outline-gray-400 w-3/5 sm:w-1/2 md:w-1/3 lg:1/4 right-0 h-[100vh] max-sm:text-vsm`}
      >
        <div className=" w-[96%] h-6 flex flex-col items-end justify-end ">
          {' '}
          <X
            onClick={() => setSideBar(false)}
            className="cursor-pointer  h-5 hover:outline-1 hover:outline-gray-600 hover:bg-gray-700/30 rounded-full text-gray-200"
          />
        </div>

        <div
          onScroll={handleOnScroll}
          className="custom-scroll flex flex-col gap-1 overflow-y-auto "
        >
          <h2 className="sideBar  text-orange-500 rounded-full underline">
            Core Concepts{' '}
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/custom-styles'}
          >
            Adding custom styles
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/detecting-classes'}
          >
            Detecting Classes In Source Files
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/functions-directives'}
          >
            Functions and Directives{' '}
          </Link>
          <hr className=" w-full text-gray-500" />
          <h2 className=" sideBar text-orange-500 rounded-full underline">
            Layout
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/aspect-ratio'}
          >
            Aspect Ratio
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/columns'}
          >
            Columns
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/break-after'}
          >
            Break After
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/break-before'}
          >
            Break Before
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/box-decoration-break'}
          >
            Box Decoration Break
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/box-sizing'}
          >
            Box Sizing
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/display'}
          >
            Display
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/float'}
          >
            Float
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/clear'}
          >
            Clear
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/isolate'}
          >
            Isolation
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/object-fit'}
          >
            Object Fit
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/object-position'}
          >
            Object Position
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/overflow'}
          >
            Overflow
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/overscroll-behaviour'}
          >
            Overscroll Behaviour
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/position'}
          >
            Position
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/top-right-bottom-left'}
          >
            Top/Right/Bottom/Left
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/visibility'}
          >
            Visibility{' '}
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/z-index'}
          >
            Z-Index{' '}
          </Link>

          <h2 className="sideBar  text-orange-500 rounded-full underline">
            FlexBox & Grid{' '}
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/flex-basis'}
          >
            Flex-Basis{' '}
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/flex-direction'}
          >
            Flex-Direction
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/flex-wrap'}
          >
            Flex-Wrap
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/flex'}
          >
            Flex
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/flex-grow'}
          >
            Flex-Grow
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/flex-shrink'}
          >
            Flex-Shrink
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/order'}
          >
            Order
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/grid-template-columns'}
          >
            Grid Template Columns
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/grid-columns'}
          >
            Grid Columns
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/grid-template-rows'}
          >
            Grid Template Rows
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/grid-rows'}
          >
            Grid Rows
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/grid-auto-flow'}
          >
            Grid Auto Flow
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/grid-auto-columns'}
          >
            Grid Auto Columns
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/gap'}
          >
            Gap
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/justify-content'}
          >
            Justify Content
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/justify-items'}
          >
            Justify Items
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/justify-self'}
          >
            Justify self
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/align-content'}
          >
            Align Content
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/align-items'}
          >
            Align Items
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/align-self'}
          >
            Align Self
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/place-content'}
          >
            Place Content
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/place-items'}
          >
            Place Items
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/place-self'}
          >
            Place Self
          </Link>

          {/* header */}
          <h2 className="sideBar  text-orange-500 rounded-full underline">
            Spacing
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/padding'}
          >
            Padding
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/margin'}
          >
            Margin
          </Link>

          {/* header */}
          <h2 className="sideBar  text-orange-500 rounded-full underline">
            Sizing
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/width'}
          >
            Width
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className="hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400"
            to={'/min-width'}
          >
            Min-Width
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
