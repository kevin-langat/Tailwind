import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/Tailwind.png';
import { ArrowLeft, ArrowRight, PanelLeft, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavBarHelper from '../../Config/NavBarHelper';
import { navigationPaths } from '../../Config/config';

function NavBar() {
  const [sideBar, setSideBar] = useState(false);
  const [prevBtnState, setPrevBtnState] = useState(Boolean);
  const [nextBtnState, setNextBtnState] = useState(Boolean);

  const navigateTo = useNavigate();
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
  let currentLocation = navigationPaths.indexOf(location.pathname) + 1;
  let currentLocationPrev = navigationPaths.indexOf(location.pathname) - 1;

  function navigateNextPage() {
    if (currentLocation < navigationPaths.length) {
      setPrevBtnState(false);
      navigateTo(navigationPaths[currentLocation + 1]);
    } else {
      setNextBtnState(true);
    }
  }
  function navigatePreviousPage() {
    if (currentLocationPrev <= navigationPaths.length) {
      navigateTo(navigationPaths[currentLocationPrev - 1]);
      setNextBtnState(false);
      console.log('stel', currentLocation, navigationPaths.length);
    } else {
      setPrevBtnState(true);
    }
  }

  return (
    <div className='relative transition duration-1000 ease-in flex flex-row h-full  w-full'>
      <div className=' z-50 bg-white w-full shadow px-4 h-12 flex flex-row items-center justify-between'>
        <img
          src={image}
          onClick={() => navigateTo('/hover-state')}
          className=' w-8 hover:scale-110 transition duration-300 ease-in-out h-[40%] '
          alt='react'
        />
        <div className=' hidden group md:flex lg:w-1/2 sm:w-3/4 font-light h-3/4 px-3  bg-gray-100 *:py-0.5 text-[0.77em] mask-r-from-95% mask-r-to-100% mask-l-from-95% mask-l-to-100%  flex-row  items-center justify-around *:hover:underline decoration-1 decoration-blue-500 *:hover:text-blue-600'>
          <Link
            className={` ${
              location.pathname.endsWith('hover-state')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='/hover-state'
          >
            Hover & states
          </Link>
          <Link
            className={` ${
              location.pathname.endsWith('responsive-design')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='/responsive-design'
          >
            Responsive Design
          </Link>

          <Link
            className={` ${
              location.pathname.endsWith('dark-mode')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='/dark-mode'
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
            to='theme-variables'
          >
            Theme Variables
          </Link>
          <Link
            className={` ${
              location.pathname.endsWith('colors')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='colors'
          >
            Colors
          </Link>
        </div>
        <button
          onClick={navigatePreviousPage}
          disabled={prevBtnState}
          className=' hidden disabled:bg-gray-400  disabled:opacity-40 shadow shadow-gray-800 px-2 outline-1 cursor-pointer group outline-gray-400/90 bg-orange-600 top-[90vh]  flex-row items-center justify-center gap-4 z-50 left-20 fixed rounded-full h-7'
        >
          <ArrowLeft className='bg-gray-800 rounded-full ease-in-out duration-300 group-hover:-translate-x-1 h-6 w-6 text-gray-100 p-0.5' />
          <h2 className='text-vsm group-hover:text-blue-600'>Hover State</h2>
        </button>
        <button
          onClick={navigateNextPage}
          disabled={nextBtnState}
          className=' hidden group disabled:bg-gray-400 disabled:opacity-40 shadow shadow-gray-800 px-2 outline-1 cursor-pointer group outline-gray-400/90 bg-orange-600 top-[90vh]  flex-row items-center justify-center gap-4 z-50 right-20 fixed rounded-full h-7'
        >
          <h2 className='text-vsm group-hover:text-blue-600'>Hue Rotate</h2>
          <ArrowRight className='bg-gray-800 group-disabled:hover:translate-x-0 rounded-full ease-in-out duration-300 group-hover:translate-x-1 h-6 w-6 text-gray-100 p-0.5' />
        </button>

        <button
          onClick={() => setSideBar(true)}
          className='sideBar group cursor-pointer bg-orange-700 h-3/5  py-4 flex flex-row items-center justify-center px-2 gap-2 text-white  outline-gray-200 shadow-8xl rounded-full shadow-black'
        >
          <h2 className='sideBar text-sm'> All Docs</h2>
          <h2>
            <PanelLeft className='sideBar outline-1 outline-gray-400 rounded-full text-black p-1  bg-gray-200 w-6 h-6' />
          </h2>
        </button>
      </div>
      <div
        className={` ${
          sideBar ? 'mr-0.5 flex' : '-mr-[26%] hidden'
        } duration-200 transition ease-in sideBar z-50 flex-col gap-1 pl-4  py-3  absolute shadow-2xl shadow-black bg-gray-950 outline-1 rounded-[0.5em] outline-gray-400 w-3/5 sm:w-1/2 md:w-[24%] lg:1/5 right-2 h-[100vh] max-sm:text-vsm`}
      >
        <div className=' bg-linear-to-br from-sky-400/50 to-green-500/70 w-[73.5] rounded-t-[0.5em]  -ml-4 -mt-3  h-6 flex flex-col items-end justify-end '>
          {' '}
          <X
            onClick={() => setSideBar(false)}
            className='cursor-pointer  h-5 hover:outline-1 hover:outline-gray-600 hover:bg-gray-700/30 rounded-full text-gray-200'
          />
        </div>

        <div className='custom-scroll flex flex-col gap-1 overflow-y-auto '>
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Core Concepts{' '}
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/custom-styles'}
          >
            Adding custom styles
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/detecting-classes'}
          >
            Detecting Classes In Source Files
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/functions-directives'}
          >
            Functions and Directives{' '}
          </Link>
          <hr className=' w-full text-gray-500' />
          <h2 className=' sideBar text-orange-500 rounded-full underline'>
            Layout
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/aspect-ratio'}
          >
            Aspect Ratio
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/columns'}
          >
            Columns
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/break-after'}
          >
            Break After
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/break-before'}
          >
            Break Before
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/box-decoration-break'}
          >
            Box Decoration Break
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/box-sizing'}
          >
            Box Sizing
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/display'}
          >
            Display
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/float'}
          >
            Float
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/clear'}
          >
            Clear
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/isolate'}
          >
            Isolation
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/object-fit'}
          >
            Object Fit
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/object-position'}
          >
            Object Position
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/overflow'}
          >
            Overflow
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/overscroll-behaviour'}
          >
            Overscroll Behaviour
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/position'}
          >
            Position
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/top-right-bottom-left'}
          >
            Top/Right/Bottom/Left
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/visibility'}
          >
            Visibility{' '}
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/z-index'}
          >
            Z-Index{' '}
          </Link>

          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            FlexBox & Grid{' '}
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/flex-basis'}
          >
            Flex-Basis{' '}
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/flex-direction'}
          >
            Flex-Direction
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/flex-wrap'}
          >
            Flex-Wrap
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/flex'}
          >
            Flex
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/flex-grow'}
          >
            Flex-Grow
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/flex-shrink'}
          >
            Flex-Shrink
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/order'}
          >
            Order
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/grid-template-columns'}
          >
            Grid Template Columns
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/grid-columns'}
          >
            Grid Columns
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/grid-template-rows'}
          >
            Grid Template Rows
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/grid-rows'}
          >
            Grid Rows
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/grid-auto-flow'}
          >
            Grid Auto Flow
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/grid-auto-columns'}
          >
            Grid Auto Columns
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/gap'}
          >
            Gap
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/justify-content'}
          >
            Justify Content
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/justify-items'}
          >
            Justify Items
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/justify-self'}
          >
            Justify self
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/align-content'}
          >
            Align Content
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/align-items'}
          >
            Align Items
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/align-self'}
          >
            Align Self
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/place-content'}
          >
            Place Content
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/place-items'}
          >
            Place Items
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/place-self'}
          >
            Place Self
          </Link>

          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Spacing
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/padding'}
          >
            Padding
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/margin'}
          >
            Margin
          </Link>

          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Sizing
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/width'}
          >
            Width
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/min-width'}
          >
            Min-Width
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/max-width'}
          >
            Max-Width
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/height'}
          >
            Height
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/min-height'}
          >
            Min-Height
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/max-height'}
          >
            Max-Height
          </Link>
          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Typography
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/font-family'}
          >
            font-family
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/font-size'}
          >
            font-size
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/font-smoothing'}
          >
            Font Smoothing
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/font-style'}
          >
            Font Style
          </Link>

          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/font-weigth'}
          >
            Font Weight
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/font-stretch'}
          >
            Font Stretch
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/font-variant-numeric'}
          >
            Font Variant Numeric
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/letter-spacing'}
          >
            Letter Spacing
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/line-clamp'}
          >
            Line Clamp
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/line-height'}
          >
            Line Height
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/line-style-image'}
          >
            List Style Image
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/line-style-position'}
          >
            List Style Position
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/line-style-type'}
          >
            List Style Type
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-align'}
          >
            Text Align
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/color'}
          >
            Color
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-decoration-line'}
          >
            Text Decoration Line
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-decoration-color'}
          >
            Text Decoration Color
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-decoration-style'}
          >
            Text Decoration Style
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-decoration-thickness'}
          >
            Text Decoration Thickness
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-underline-offset'}
          >
            Text Decoration Offset
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-transform'}
          >
            Text Transform
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-overflow'}
          >
            Text Overflow
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-wrap'}
          >
            Text Wrap
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/text-indent'}
          >
            Text Indent
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/vertical-align'}
          >
            Vertical Align
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/white-space'}
          >
            White Space
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/word-break'}
          >
            Word Break
          </Link>
          <NavBarHelper
            topicURL={'/overflow-wrap'}
            topicName={'Overflow Wrap'}
          />
          <NavBarHelper topicURL={'/hyphens'} topicName={'Hyphens'} />
          <NavBarHelper topicURL={'/content'} topicName={'Content'} />
          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Backgrounds
          </h2>
          <NavBarHelper
            topicURL={'/background-attachment'}
            topicName={'Background Attachment'}
          />
          <NavBarHelper
            topicURL={'/background-clip'}
            topicName={'Background Clip'}
          />
          <NavBarHelper
            topicURL={'/background-color'}
            topicName={'Background Color'}
          />
          <NavBarHelper
            topicURL={'/background-image'}
            topicName={'Background Image'}
          />
          <NavBarHelper
            topicURL={'/background-origin'}
            topicName={'Background Origin'}
          />
          <NavBarHelper
            topicURL={'/background-position'}
            topicName={'Background Position'}
          />
          <NavBarHelper
            topicURL={'/background-repeat'}
            topicName={'Background Repeat'}
          />
          <NavBarHelper
            topicURL={'/background-size'}
            topicName={'Background Size'}
          />
          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Borders
          </h2>
          <NavBarHelper
            topicURL={'/border-radius'}
            topicName={'Border Radius'}
          />
          <NavBarHelper topicURL={'/border-width'} topicName={'Border Width'} />
          <NavBarHelper topicURL={'/border-color'} topicName={'Border Color'} />
          <NavBarHelper topicURL={'/border-style'} topicName={'Border Style'} />
          <NavBarHelper
            topicURL={'/outline-width'}
            topicName={'Outline Width'}
          />
          <NavBarHelper
            topicURL={'/outline-color'}
            topicName={'Outline Color'}
          />
          <NavBarHelper
            topicURL={'/outline-style'}
            topicName={'Outline Style'}
          />
          <NavBarHelper
            topicURL={'/outline-offset'}
            topicName={'Outline Offset'}
          />
          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Effects
          </h2>
          <NavBarHelper topicURL={'/box-shadow'} topicName={'Box Shadow'} />
          <NavBarHelper topicURL={'/text-shadow'} topicName={'Text Shadow'} />
          <NavBarHelper topicURL={'/opacity'} topicName={'Opacity'} />
          <NavBarHelper
            topicURL={'/mix-blend-mode'}
            topicName={'Mix Blend Mode'}
          />
          <NavBarHelper
            topicURL={'/background-blend-mode'}
            topicName={'Background Blend Mode'}
          />
          <NavBarHelper topicURL={'/mask-clip'} topicName={'Mask Clip'} />
          <NavBarHelper
            topicURL={'/mask-composite'}
            topicName={'Mask Composite'}
          />
          <NavBarHelper topicURL={'/mask-image'} topicName={'Mask Image'} />
          <NavBarHelper topicURL={'/mask-mode'} topicName={'Mask Mode'} />
          <NavBarHelper topicURL={'/mask-origin'} topicName={'Mask Origin'} />
          <NavBarHelper
            topicURL={'/mask-position'}
            topicName={'Mask Position'}
          />
          <NavBarHelper topicURL={'/mask-repeat'} topicName={'Mask Repeat'} />
          <NavBarHelper topicURL={'/mask-size'} topicName={'Mask Size'} />
          <NavBarHelper topicURL={'/mask-type'} topicName={'Mask Type'} />
          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Filters{' '}
          </h2>
          <NavBarHelper topicURL={'/filter'} topicName={'Filter'} />
          <NavBarHelper
            topicURL={'/filter-brightness'}
            topicName={'Filter: Brightness'}
          />
          <NavBarHelper
            topicURL={'/filter-contrast'}
            topicName={'Filter: Contrast'}
          />
          <NavBarHelper
            topicURL={'/filter-drop-shadow'}
            topicName={'Filter: Drop-Shadow'}
          />
          <NavBarHelper
            topicURL={'/filter-grayscale'}
            topicName={'Filter: Grayscale'}
          />
          <NavBarHelper
            topicURL={'/hue-rotate'}
            topicName={'Filter: Hue-Rotate'}
          />
          <NavBarHelper topicURL={'/invert'} topicName={'Filter: Invert'} />
          <NavBarHelper topicURL={'/saturate'} topicName={'Filter: Saturate'} />
          <NavBarHelper topicURL={'/sepia'} topicName={'Filter: Sepia'} />
          <NavBarHelper
            topicURL={'/backdrop-filter'}
            topicName={'Backdrop-Filter'}
          />
          <NavBarHelper
            topicURL={'/backdrop-blur'}
            topicName={'Backdrop-Blur'}
          />
          <NavBarHelper
            topicURL={'/backdrop-brightness'}
            topicName={'Backdrop-Brightness'}
          />
          <NavBarHelper
            topicURL={'/backdrop-contrast'}
            topicName={'Backdrop-Contrast'}
          />
          <NavBarHelper
            topicURL={'/backdrop-grayscale'}
            topicName={'Backdrop-GrayScale'}
          />

          <NavBarHelper
            topicURL={'/backdrop-hue-rotate'}
            topicName={'Backdrop-Hue Rotate'}
          />
          <NavBarHelper
            topicURL={'/backdrop-invert'}
            topicName={'Backdrop Invert'}
          />
          <NavBarHelper
            topicURL={'/backdrop-opacity'}
            topicName={'Backdrop Opacity'}
          />
          <NavBarHelper
            topicURL={'/backdrop-saturate'}
            topicName={'Backdrop Saturate'}
          />
          <NavBarHelper
            topicURL={'/backdrop-sepia'}
            topicName={'Backdrop Sepia'}
          />
          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Tables
          </h2>
          <NavBarHelper
            topicURL={'/border-collapse'}
            topicName={'Border Collapse'}
          />
          <NavBarHelper
            topicURL={'/border-spacing'}
            topicName={'Border Spacing'}
          />
          <NavBarHelper topicURL={'/table-layout'} topicName={'Table Layout'} />
          <NavBarHelper topicURL={'/caption-side'} topicName={'Caption Side'} />
          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Transistions & Animation
          </h2>
          <NavBarHelper
            topicURL={'/transition-property'}
            topicName={'Transition Property'}
          />
          <NavBarHelper
            topicURL={'/transition-behavior'}
            topicName={'Transition Behavior'}
          />
          <NavBarHelper
            topicURL={'/transition-duration'}
            topicName={'Transition Duration'}
          />
          <NavBarHelper
            topicURL={'/transition-timing-function'}
            topicName={'Transition Timing Function'}
          />
          <NavBarHelper
            topicURL={'/transition-delay'}
            topicName={'Transition Delay'}
          />
          <NavBarHelper topicURL={'/animation'} topicName={'Animation'} />

          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Transforms
          </h2>
          <NavBarHelper
            topicURL={'/backface-visibility'}
            topicName={'Backface Visibility'}
          />
          <NavBarHelper topicURL={'/perspective'} topicName={'Perspective'} />
          <NavBarHelper
            topicURL={'/perspective-origin'}
            topicName={'Perspective Origin'}
          />
          <NavBarHelper topicURL={'/rotate'} topicName={'Rotate'} />
          <NavBarHelper topicURL={'/scale'} topicName={'Scale'} />
          <NavBarHelper topicURL={'/skew'} topicName={'Skew'} />
          <NavBarHelper topicURL={'/transform'} topicName={'Transform'} />
          <NavBarHelper
            topicURL={'/transform-origin'}
            topicName={'Tranform Origin'}
          />
          <NavBarHelper
            topicURL={'/transform-style'}
            topicName={'Tranform Style'}
          />
          <NavBarHelper topicURL={'/translate'} topicName={'Translate'} />

          {/* header */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Interactivity
          </h2>
          <NavBarHelper topicURL={'/accent-color'} topicName={'Accent Color'} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
