import React from 'react';

function Appearance() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        appearance
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for suppressing native form control styling.
      </h2>
      {/* Removing default appearance */}
      <h2 className='underline'>Removing default appearance</h2>
      <h2 className='text-vsm w-1/2'>
        Use appearance-none to reset any browser specific styling on an element:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-5  text-gray-300 py-4 '>
        <div className='flex w-3/4 flex-row justify-around gap-2'>
          <select className='text-vsm' name='selone' id=''>
            <option value='no'>Male</option>
            <option value='no'>Female</option>
            <option value='no'>Prefer not to say</option>
          </select>
          <label htmlFor='selone' className='text-vsm'>
            Default browser styles applied
          </label>
        </div>
        <div className='flex w-3/4 flex-row justify-around gap-2'>
          <div className=' flex gap-4 flex-row items-center justify-center relative'>
            <select
              className='text-vsm not-focus-within:outline-orange-500 focus:outline-gray-500 outline-1 appearance-none rounded-[0.2em] py-1 pl-3 pr-8 bg-gray-700'
              name='seltwo'
              id=''
            >
              <option value='no'>Male</option>
              <option value='no'>Female</option>
              <option value='no'>Prefer not to say</option>
            </select>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='size-4 z-50 pointer-events-none absolute right-2 '
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='m19.5 8.25-7.5 7.5-7.5-7.5'
              />
            </svg>
          </div>

          <label htmlFor='seltwo' className='text-vsm'>
            Remove default browser styles
          </label>
        </div>
      </div>
      {/* Restoring default appearance */}
      <h2 className='underline'>Restoring default appearance</h2>
      <h2 className='text-vsm w-1/2'>
        Use appearance-auto to restore the default browser specific styling on
        an element:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-center gap-5 text-vsm text-gray-300 py-4 '>
        <div className='flex gap-2'>
          <input
            id='check1'
            className='accent-fuchsia-600 forced-colors:appearance-auto appearance-none'
            type='checkbox'
          />
          <label htmlFor='check1'>Falls back to default appearance</label>
        </div>
        <div className='flex gap-2'>
          <input
            id='check2'
            className='accent-fuchsia-600 forced-colors:appearance-auto appearance-none'
            type='checkbox'
          />
          <label htmlFor='check2'>Keeps the custom appearance</label>
        </div>
      </div>
    </div>
  );
}

export default Appearance;
