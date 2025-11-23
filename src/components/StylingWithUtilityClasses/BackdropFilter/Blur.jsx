import React from 'react';

function Blur() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        backdrop-filter: blur()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying backdrop blur filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like backdrop-blur-sm and backdrop-blur-lg to control an
        element’s backdrop blur:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-blur-none</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4 absolute h-16 backdrop-blur-none'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-blur-sm</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4 absolute h-16 backdrop-blur-sm'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-blur-md</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-26 absolute h-16 backdrop-blur-md'></div>
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the backdrop-blur-{'[<value>]'} syntax to set the backdrop blur
        based on a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-blur-[3px]</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4 absolute h-16 backdrop-blur-[3px]'></div>
          </div>
        </div>
      </div>
      <h2 className='underline'>Customizing your theme </h2>
      <h2 className='text-vsm'>
        Use the --blur-* theme variables to customize the backdrop blur
        utilities in your project:
      </h2>
      <div className=' bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className='text-orange-600 text-vsm font-sans '>
            @theme{'{'} <br />
            {'--blur-2xs:4px;'} <br />
            {'}'}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Blur;
