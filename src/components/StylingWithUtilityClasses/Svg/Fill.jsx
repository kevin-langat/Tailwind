import { Bell, RefreshCcwIcon } from 'lucide-react';

function Fill() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        will-change
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Utilities for styling the fill of SVG elements.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'fill-sky-500' and 'fill-lime-600' to change the fill
        color of an svg:
      </h2>
      <div className='flex flex-col items-center bg-gray-800 justify-center rounded-[0.2em] py-4 w-1/3'>
        <Bell size={50} className='fill-sky-600 stroke-sky-600' />
      </div>
      {/*Using the current color*/}
      <h2 className='underline'>Using the current color</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'fill-current' utility to set the fill color to the current text
        color:
      </h2>
      <div className='flex flex-col items-center bg-gray-800 justify-center rounded-[0.2em] py-4 w-1/3'>
        <button className='bg-gray-700 rounded-[0.3em] outline-1 outline-gray-600 flex flex-row items-center gap-2 justify-around text-sky-500 px-2 hover:bg-indigo-600 hover:text-gray-300 py-1 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-refresh-cw-icon fill-current lucide-refresh-cw'
          >
            <path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' />
            <path d='M21 3v5h-5' />
            <path d='M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' />
            <path d='M8 16H3v5' />
          </svg>
          Refresh
        </button>{' '}
      </div>
      {/*Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the fill-{'[<value>]'} syntax to set the fill color based on a
        completely custom value:
      </h2>
      <div className='flex flex-col  items-center bg-gray-800 justify-center rounded-[0.2em] py-4 w-1/3'>
        <h2 className='text-white  text-vsm'>fill-[#243c5a]</h2>
        <Bell size={50} className='fill-[#243c5a] stroke-[#243c5a]' />
      </div>
    </div>
  );
}

export default Fill;
