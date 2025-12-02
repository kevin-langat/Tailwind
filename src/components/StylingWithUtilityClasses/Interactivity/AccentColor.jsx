import { useState } from 'react';

function AccentColor() {
  const [termsStatus, setTermsStatus] = useState(false);
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        acent-color
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling the accented color of a form control.
      </h2>
      {/* Setting the accent color */}
      <h2 className='underline'>Setting the accent color</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like accent-rose-500 and accent-lime-600 to change the
        accent color of an element:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-center gap-5  text-gray-300 py-4 '>
        <div className='flex gap-2'>
          <input id='check1' type='checkbox' />
          <label htmlFor='check1'>Browser Default</label>
        </div>
        <div className='flex gap-2'>
          <input id='check2' className='accent-fuchsia-600' type='checkbox' />
          <label htmlFor='check2'>Customized</label>
        </div>
      </div>
      <h2 className='text-vsm w-1/2'>
        This is helpful for styling elements like checkboxes and radio groups by
        overriding the browser's default color.
      </h2>
      {/* Changing the opacity*/}
      <h2 className='underline'>Changing the opacity</h2>
      <h2 className='text-vsm w-1/2'>
        Use the color opacity modifier to control the opacity of an element's
        accent color:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-center gap-5  text-gray-300 py-4 '>
        <div className='flex gap-2'>
          <input id='check3' className='accent-green-500/25' type='checkbox' />
          <label htmlFor='check3'>accent-green-500/25</label>
        </div>
        <div className='flex gap-2'>
          <input id='check4' className='accent-green-500/75' type='checkbox' />
          <label htmlFor='check4'>accent-green-500/75</label>
        </div>
      </div>
      <h2 className='text-vsm w-1/2'>
        Setting the accent color opacity has limited browser-support and only
        works in Firefox at this time.
      </h2>
      {/* Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the color opacity modifier to control the opacity of an element's
        accent color:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-center gap-5  text-gray-300 py-4 '>
        <div className='flex gap-2'>
          <input id='check5' className='accent-[#00ffe5]' type='checkbox' />
          <label htmlFor='check5'>accent-green-[#00ffe5]</label>
        </div>
      </div>
      {/* Applying hover*/}
      <h2 className='underline'>Applying hover</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'accent-color' utility with a variant like 'hover:*' to only
        apply the utility in that state:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-center gap-5  text-gray-300 py-4 '>
        <div className='flex gap-2'>
          <input
            checked={termsStatus}
            onMouseOver={() => setTermsStatus(true)}
            onMouseLeave={() => setTermsStatus(false)}
            id='check6'
            className='hover:accent-orange-500'
            type='checkbox'
          />
          <label
            onMouseLeave={() => setTermsStatus(false)}
            onMouseOver={() => setTermsStatus(true)}
            htmlFor='check6'
          >
            hover:accent-orange-500
          </label>
        </div>
      </div>
    </div>
  );
}

export default AccentColor;
