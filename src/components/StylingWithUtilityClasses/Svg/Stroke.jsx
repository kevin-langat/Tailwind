import { Bell, Crown } from 'lucide-react';

function Stroke() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        stroke
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Utilities for styling the stroke of SVG elements
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like stroke-indigo-500 and stroke-lime-600 to change the
        stroke color of an SVG:
      </h2>
      <div className='flex flex-col items-center bg-gray-800 justify-center rounded-[0.2em] py-4 w-1/3'>
        <Crown className='stroke-green-500' />{' '}
      </div>
      {/*Using the current color*/}
      <h2 className='underline'>Using the current color</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'stroke-current' utility to set the stroke color to the current
        text color:
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
            class='lucide lucide-upload-icon stroke-current lucide-upload'
          >
            <path d='M12 3v12' />
            <path d='m17 8-5-5-5 5' />
            <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
          </svg>
          Upload Photo
        </button>{' '}
      </div>
      {/*Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the stroke-{'[<value>]'} syntax to set the stroke color based on a
        completely custom value:
      </h2>
      <div className='flex flex-col  items-center bg-gray-800 justify-center rounded-[0.2em] py-4 w-1/3'>
        <h2 className='text-white  text-vsm'>stroke-[#6a00ff]</h2>
        <Bell size={50} className=' stroke-[#6a00ff]' />
      </div>
    </div>
  );
}

export default Stroke;
