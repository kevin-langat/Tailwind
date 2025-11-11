import { useState } from 'react';

function Opacity() {
  const [status, setStatus] = useState(false);
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        box-shadow
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the opacity of an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'opacity-{'[<number>]'}' utilities like 'opacity-25' and
        'opacity-100' to set the opacity of an element:
      </h2>

      <div className='grid grid-cols-4 place-items-center w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>opacity-100</h2>
          <button className='bg-indigo-500 opacity-100 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>opacity-75</h2>
          <button className='bg-indigo-500 opacity-75 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>opacity-50</h2>
          <button className='bg-indigo-500 opacity-50 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button C
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>opacity-25</h2>
          <button className='bg-indigo-500 opacity-25 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button D
          </button>
        </div>
      </div>

      {/*Applying conditionally */}
      <h2 className='underline'>Applying conditionally</h2>
      <h2 className='text-vsm w-1/2'>
        Prefix an 'opacity' utility with a variant like 'disabled:*' to only
        apply the utility in that state:
      </h2>
      <div className='flex flex-col items-center place-items-center w-1/2 justify-center bg-gray-800 outline-1 outline-gray-500 p-4 r'>
        <h2 className='text-vsm text-gray-400 font-sans'>
          disabled:opacity-25
        </h2>
        <button
          disabled={status}
          onClick={() => setStatus(true)}
          className='bg-indigo-500 mt-2 disabled:opacity-50 text-vsm px-3 disabled:text-white py-1 rounded-[0.5em]'
        >
          {status ? 'Disabled' : 'Disable'}
        </button>
      </div>
      {/*Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'opacity-{'[<value>]'}' syntax to ste the opacity based on a
        completely custom value:
      </h2>
      <div className='flex flex-col items-center place-items-center w-1/2 justify-center bg-gray-800 outline-1 outline-gray-500 p-4 r'>
        <h2 className='text-vsm text-gray-400 font-sans'>opacity-[.55]</h2>
        <button className='bg-indigo-500 text-white mt-2 px-5 opacity-[.55] py-1 rounded-[0.5em]'>
          Book
        </button>
      </div>
    </div>
  );
}

export default Opacity;
