import React from 'react';

function FieldSizing() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        field-sizing
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling the sizing of form controls.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Sizing based on content</h2>
      <h2 className='text-vsm w-1/2'>
        Use the field-sizing-content utility to allow a form control to adjust
        it's size based on the content:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-5  text-gray-300 py-4 '>
        <h2 className='text-vsm'>field-sizing-content</h2>

        <input
          type='text'
          className='caret-purple-500 field-sizing-content py-0.5 outline-1 bg-gray-700 min-w-20 outline-gray-400 rounded-[0.2em] not-focus-within:outline-gray-600 pl-4'
        />
      </div>
      {/* Using a fixed size */}
      <h2 className='underline'>Using a fixed size</h2>
      <h2 className='text-vsm w-1/2'>
        Use the field-sizing-fixed utility to make a form control use a fixed
        size:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-5  text-gray-300 py-4 '>
        <h2 className='text-vsm'>field-sizing-fixed</h2>

        <input
          type='text'
          className='caret-purple-500 field-sizing-fixed py-0.5 outline-1 bg-gray-700 w-30
           outline-gray-400 rounded-[0.2em] not-focus-within:outline-gray-600 pl-4'
        />
      </div>
    </div>
  );
}

export default FieldSizing;
