import { ArrowDown } from 'lucide-react';

function Animation() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        transition-delay
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Utilities that allows elements to gradually change their style
        configuration over time without requiring user interaction or
        JavaScript.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Adding a spin animation</h2>
      <h2 className='text-vsm w-1/2'>
        Use the animate-spin utility to add a linear spin animation to elements
        like loading indicators:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-3  text-gray-300  '>
        <label htmlFor='check1'>animate-spin</label>
        <button className='bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 flex justify-around items-center flex-row gap-1 w-36 h-10 py-1 text-gray-300 '>
          <span className='w-5 h-5 animate-spin border-t-gray-200 border-r-gray-200 rounded-full border-3 border-gray-500 bg-transparent'></span>
          Processing
        </button>
      </div>
      {/* Adding a ping animation */}
      <h2 className='underline'>Adding a ping animation</h2>
      <h2 className='text-vsm w-1/2'>
        Use the animate-ping utility to make an element scale and fade like a
        radar ping or ripple of water—useful for things like notification
        badges:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-700 rounded-[0.3em] flex flex-col justify-center gap-4 text-gray-300  '>
        <label htmlFor='check1'>animate-ping</label>
        <button className=' relative font-bold tracking-1 bg-gray-800 px-3 rounded-[0.3em]  flex justify-around items-center outline-1 outline-gray-600 flex-row gap-1 w-20 text-red-500 h-8 py-1  '>
          <span className=' -top-1 -right-1 absolute w-4 h-4 rounded-full animate-ping  bg-red-500/80'></span>
          <span className=' -top-0.5 -right-0.5 absolute w-3 h-3 rounded-full  bg-red-500/80'></span>
          Live
        </button>
      </div>
      {/* Adding a pulse animation */}
      <h2 className='underline'>Adding a pulse animation</h2>
      <h2 className='text-vsm w-1/2'>
        Use the animate-pulse utility to make an element gently fade in and
        out—useful for things like skeleton loaders:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-900 rounded-[0.3em] flex flex-col justify-center gap-4  text-gray-300  '>
        <label htmlFor='check1'>animate-pulse</label>
        <div className=' relative font-bold tracking-1 bg-gray-800 px-3 rounded-[0.3em]  flex flex-row justify-between items-center outline-1 outline-gray-600  gap-1 w-1/2 text-red-500 h-30 py-1  '>
          <div className=' w-14 h-14 animate-pulse bg-gray-700 rounded-full'></div>
          <div className='w-3/4 flex flex-col items-center justify-around p-3  h-full '>
            <div className=' flex justify-between w-full flex-row'>
              <div className=' w-3/5 animate-pulse h-2 bg-gray-700 rounded-[0.4em]'></div>
              <div className=' w-1/3 animate-pulse h-2 bg-gray-700 rounded-[0.4em]'></div>
            </div>
            <div className=' flex justify-between w-full flex-row'>
              <div className=' w-1/3 animate-pulse h-2 bg-gray-700 rounded-[0.4em]'></div>
              <div className=' w-3/5 animate-pulse h-2 bg-gray-700 rounded-[0.4em]'></div>
            </div>
            <div className=' w-3/4 animate-pulse h-2 bg-gray-700 rounded-[0.4em]'></div>
            <div className=' flex justify-between w-full flex-row'>
              <div className=' w-1/3 animate-pulse h-2 bg-gray-700 rounded-[0.4em]'></div>
              <div className=' w-3/5 animate-pulse h-2 bg-gray-700 rounded-[0.4em]'></div>
            </div>
          </div>
        </div>
      </div>
      {/* Adding a bounce animation */}
      <h2 className='underline'>Adding a ping animation</h2>
      <h2 className='text-vsm w-1/2'>
        Use the animate-bounce utility to make an element bounce up and
        down—useful for things like "scroll down" indicators:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-900 rounded-[0.3em] flex flex-col justify-center gap-4  text-gray-300  '>
        <label htmlFor='check1'>animate-bounce</label>
        <ArrowDown className=' bg-gray-800/70 rounded-full outline-1 outline-gray-600 animate-bounce w-8 h-8 p-0.5 text-indigo-600 ' />
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the animate-{'[<value>]'} syntax to set the animation based on a
        completely custom value:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-700 rounded-[0.3em] flex flex-col justify-center gap-4 text-gray-300  '>
        <label htmlFor='check1'>animate-[wiggle_1s_ease_in_out_infinite]</label>
        <button className=' font-bold tracking-1 bg-gray-800 px-3 rounded-[0.3em] animate-[wiggle_1s_ease-in-out_infinite]   outline-1 outline-gray-600 flex-row gap-1 w-20 text-red-500 h-8 py-1  '>
          Live
        </button>
      </div>
    </div>
  );
}

export default Animation;
