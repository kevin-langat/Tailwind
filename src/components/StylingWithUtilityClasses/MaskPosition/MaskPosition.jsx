import React from 'react';

function MaskPosition() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        mask-position
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the position of an element's mask image.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utlities like 'mask-center', 'mask-right', and 'mask-left-top', to
        control the position os an element's mask image:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-3 gap-3 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-top-left</h2>
          <div className=' mask-top-left  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-top</h2>
          <div className=' mask-top  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-top-right</h2>
          <div className=' mask-top-right  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-left</h2>
          <div className=' mask-left  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-center</h2>
          <div className=' mask-center  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-right</h2>
          <div className=' mask-right  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-bottom-left</h2>
          <div className=' mask-bottom-left  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-bottom</h2>
          <div className=' mask-bottom  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-bottom-right</h2>
          <div className=' mask-bottom-right  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/*Use a custom value */}
      <h2 className='underline'>Use a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        use the 'mask-position-{'<value>'}' syntax to set the mask position
        based on a completely custom value:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-1 place-items-center gap-3 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>
            mask-position-[center_top_1rem]
          </h2>
          <div className=' mask-position-[center_top_10rem]  w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] border-dotted border-indigo-500 mask-size-[50%] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
    </div>
  );
}

export default MaskPosition;
