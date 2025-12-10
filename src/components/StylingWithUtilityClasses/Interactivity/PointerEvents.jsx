import { Search } from 'lucide-react';

function PointerEvents() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        pointer-events
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling wether an element responds to pointer events.
      </h2>
      {/*Ignoring pointer events */}
      <h2 className='underline'>Ignoring pointer events</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'pointer-events-none' utility to make an element ignore pointer
        events like ':hover' and 'click' events:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center items-center gap-5  text-gray-300 py-4 '>
        <div className='flex w-3/4 gap-6 *:even:-mt-5 flex-col justify-around items-center '>
          <label htmlFor='seltwo' className='text-vsm'>
            pointer-events-auto
          </label>
          <div className=' flex gap-4 flex-row items-center justify-center relative'>
            <input
              type='text'
              placeholder='search anything'
              className='outline-1 pl-4 py-1 placeholder:italic text-vsm text-gray-300 placeholder:text-gray-400 rounded-[0.2em] outline-gray-600 focus:outline-1'
            />
            <Search className='size-4 hover:stroke-green-400 z-50 pointer-events-auto cursor-pointer bg-gray-500 h-6 w-6 p-0.5 rounded-[0.3em] absolute right-0.5 text-gray-300 ' />
          </div>

          <label htmlFor='seltwo' className='text-vsm'>
            pointer-events-none
          </label>
          <div className=' flex gap-4 flex-row items-center justify-center relative'>
            <input
              type='text'
              placeholder='search anything'
              className='outline-1 pl-4 py-1 placeholder:italic text-vsm text-gray-300 placeholder:text-gray-400 rounded-[0.2em] outline-gray-600 focus:outline-1'
            />
            <Search className='size-4 hover:stroke-green-400 z-50 pointer-events-none cursor-pointer bg-gray-500 h-6 w-6 p-0.5 rounded-[0.3em] absolute right-0.5 text-gray-300 ' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointerEvents;
