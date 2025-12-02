import React from 'react';

function ColorScheme() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        color-scheme
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling the color scheme of an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'scheme-light' and 'scheme-light-dark' to control how
        an element should be rendered:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-100 dark:bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-5 *:even:-mt-4  text-gray-300 py-4 '>
        <h2 className='text-vsm'>scheme-light</h2>
        <div className=' w-11/12 flex flex-row justify-center  scheme-light'>
          <input
            type='date'
            className='py-0.5  outline-1 outline-gray-400 rounded-[0.2em] not-focus-within:outline-gray-600 pl-4'
          />
        </div>

        <h2 className='text-vsm'>scheme-dark</h2>
        <div className='scheme-dark w-1/2 flex flex-row justify-center '>
          <input
            type='date'
            className='caret-purple-500 py-0.5 outline-1 bg-gray-700 outline-gray-400 rounded-[0.2em] not-focus-within:outline-gray-600 pl-4'
          />
        </div>
        <h2 className='text-vsm'>scheme-light-dark</h2>
        <div className='scheme-light-dark w-1/2 flex flex-row justify-center '>
          <input
            type='date'
            className='caret-purple-500 py-0.5 outline-1 bg-gray-700 outline-gray-400 rounded-[0.2em] not-focus-within:outline-gray-600 pl-4'
          />
        </div>
      </div>
    </div>
  );
}

export default ColorScheme;
