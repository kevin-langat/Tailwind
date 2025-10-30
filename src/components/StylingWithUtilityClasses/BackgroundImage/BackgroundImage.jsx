import image from '../../../assets/Houses/OIG1.jpg';

function BackgroundImage() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        background-image
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling an element's background image.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm'>
        Use the 'bg-[{'<value>'}]' to set the background image of an element:
      </h2>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`w-1/3 h-60  shadow shadow-gray-700/20   bg-gray-800 bg-center bg-cover rounded-[0.4em] `}
      ></div>
      {/*Adding a linear gradient*/}
      <h2 className='underline'>Adding a linear gradient</h2>
      <h2 className='text-vsm'>
        Use the 'bg-linear-to-r' and 'bg-linear-[{'<angle>'}]' with the color
        stop utilities to add a linear gradient to an element.
      </h2>
      <div
        className={`w-1/3 h-50 gap-2 flex flex-col  shadow shadow-gray-700/20   bg-gray-800 bg-center bg-cover py-2 px-1 rounded-[0.4em] `}
      >
        <div className='w-full rounded-[0.3em]  h-10 bg-linear-to-br from-indigo-500 to-pink-600'></div>
        <div className='w-full rounded-[0.3em]  h-10 bg-linear-to-r from-sky-500 to-fuchsia-600'></div>
        <div className='w-full rounded-[0.3em]  h-10 bg-linear-to-l from-green-500 to-blue-600'></div>
        <div className='w-full rounded-[0.3em]  h-10 bg-linear-to-tl from-orange-500 to-teal-600'></div>
      </div>
      {/*Adding a radial gradient*/}
      <h2 className='underline'>Adding a radial gradient</h2>
      <h2 className='text-vsm'>
        Use the 'bg-radial' and 'bg-radial-[{'<position>'}]' utilities with the
        color stop utilities to add a radial gradient to an element:
      </h2>
      <div
        className={`w-1/3 h-22 gap-2 flex flex-row justify-center items-center  shadow shadow-gray-700/20   bg-gray-800 bg-center bg-cover py-2 px-1 rounded-[0.4em] `}
      >
        <div className='w-20 rounded-full  h-20 bg-radial from-indigo-500 from-30% to-green-400 '></div>
        <div className='w-20 rounded-full  h-20 bg-radial-[at_30%_65%] from-sky-400  to-fuchsia-600'></div>
        <div className='w-20 scale-90 rounded-full animate-  h-20 bg-radial-[at_30%_65%]  from-white to-zinc-900 flex flex-col items-center justify-center'>
          <div className='w-18 animate-none h-18  skew-y-[24deg] skew-x-12 -rotate-[190deg] bg-transparent border-7  border-l-0  border-b-0 border-orange-500 rounded-full'></div>
        </div>
      </div>
      {/*Adding a conic gradient*/}
      <h2 className='underline'>Adding a conic gradient</h2>
      <h2 className='text-vsm'>
        Use the 'bg-conic' and 'bg-conic-[{'<position>'}]' utilities with the
        color stop utilities to add a conic gradient to an element:
      </h2>
      <div
        className={`w-1/3 h-22 gap-2 flex flex-row justify-center items-center  shadow shadow-gray-700/20   bg-gray-800 bg-center bg-cover py-2 px-1 rounded-[0.4em] `}
      >
        <div className='w-20 rounded-full  h-20 bg-conic from-indigo-500 to-green-400 to-70%'></div>
        <div className='w-20 rounded-full  h-20 bg-conic-180 from-indigo-600 via-indigo-400 to-fuchsia-500'></div>
        <div className='w-20 rounded-full  h-20 bg-conic/decreasing from-violet-700 via-50% to-indigo-300'></div>
      </div>
      {/*Setting a gradient color stops*/}
      <h2 className='underline'>Setting a gradient color stops</h2>
      <h2 className='text-vsm'>
        Use utilities like 'from-indigo-500', 'via-purple-500', and
        'to-pink-500' to set the colors of the gradient stops:
      </h2>
      <div
        className={`w-1/3 h-20 gap-2 flex flex-col justify-center  shadow shadow-gray-700/20   bg-gray-800 bg-center bg-cover py-2 px-1 rounded-[0.4em] `}
      >
        <div className='w-full rounded-[0.3em]  h-10 bg-linear-to-r from-indigo-500 via-orange-600 to-green-600'></div>
      </div>
      {/*Setting a gradient stops positions*/}
      <h2 className='underline'>Setting a gradient stops positions</h2>
      <h2 className='text-vsm'>
        Use utilities like 'from-10%', 'via-30%', and 'to-90%' to set more
        precise positions for the gradient color stops:
      </h2>
      <div
        className={`w-1/3 h-20 gap-2 flex flex-col justify-center  shadow shadow-gray-700/20   bg-gray-800 bg-center bg-cover py-2 px-1 rounded-[0.4em] `}
      >
        <div className='w-full rounded-[0.3em]  h-10 bg-linear-to-r from-indigo-500 from-10% via-orange-600 via-40%  to-green-600 to-90% '></div>
      </div>
      {/*Changing interpolation mode*/}
      <h2 className='underline'>Changing interpolation mode</h2>
      <h2 className='text-vsm'>
        Use the interpolation modifier to control the interpolation mode of a
        gradient:
      </h2>
      <div
        className={`w-3/4 h-100 gap-2 flex flex-col justify-center items-center  shadow shadow-gray-700/20   bg-gray-800 bg-center bg-cover py-2 px-1 rounded-[0.4em] `}
      >
        <div className=' justify-between w-full flex flex-row items-center'>
          <h2 className='text-vsm text-orange-500'>srgb</h2>
          <div className='w-11/12 rounded-[0.3em]  h-10 bg-linear-to-r/srgb from-indigo-500 to-teal-600'></div>
        </div>
        <div className=' justify-between w-full flex flex-row items-center'>
          <h2 className='text-vsm text-orange-500'>hsl</h2>
          <div className='w-11/12 rounded-[0.3em]  h-10 bg-linear-to-r/hsl from-indigo-500 to-teal-600'></div>
        </div>
        <div className=' justify-between w-full flex flex-row items-center'>
          <h2 className='text-vsm text-orange-500'>oklab</h2>
          <div className='w-11/12 rounded-[0.3em]  h-10 bg-linear-to-r/oklab from-indigo-500 to-teal-600'></div>
        </div>
        <div className=' justify-between w-full flex flex-row items-center'>
          <h2 className='text-vsm text-orange-500'>oklch</h2>
          <div className='w-11/12 rounded-[0.3em]  h-10 bg-linear-to-r/oklch from-indigo-500 to-teal-600'></div>
        </div>
        <div className=' justify-between w-full flex flex-row items-center'>
          <h2 className='text-vsm text-orange-500'>longer</h2>
          <div className='w-11/12 rounded-[0.3em]  h-10 bg-linear-to-r/longer from-indigo-500 to-teal-600'></div>
        </div>
        <div className=' justify-between w-full flex flex-row items-center'>
          <h2 className='text-vsm text-orange-500'>shorter</h2>
          <div className='w-11/12 rounded-[0.3em]  h-10 bg-linear-to-r/shorter from-indigo-500 to-teal-600'></div>
        </div>
        <div className=' justify-between w-full flex flex-row items-center'>
          <h2 className='text-vsm text-orange-500'>increasing</h2>
          <div className='w-11/12 rounded-[0.3em]  h-10 bg-linear-to-r/increasing from-indigo-500 to-teal-600'></div>
        </div>
        <div className=' justify-between w-full flex flex-row items-center'>
          <h2 className='text-vsm text-orange-500'>decreasing</h2>
          <div className='w-11/12 rounded-[0.3em]  h-10 bg-linear-to-r/decreasing from-indigo-500 to-teal-600'></div>
        </div>
      </div>
      {/*Removing background images*/}
      <h2 className='underline'>Removing background images</h2>
      <h2 className='text-vsm'>
        Use the 'bg-none' utlity to remove an existing background image from an
        element:
      </h2>
      {/*Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm'>
        Use utilities like 'bg-linear-[{'<value>'}]' and 'from-[{'<value>'}]' to
        set the gradient based on a completely custom value:
      </h2>
      <div
        className={`w-1/3 h-14 gap-2 flex flex-col justify-center items-center  shadow shadow-gray-700/20   bg-gray-800 bg-center bg-cover py-2 px-1 rounded-[0.4em] `}
      >
        <div className='w-11/12 rounded-[0.3em]  h-10 bg-linear-[170deg,red_5%,yellow_60%,lime_90%,teal]'></div>
      </div>
    </div>
  );
}

export default BackgroundImage;
