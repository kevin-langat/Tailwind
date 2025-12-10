import { Search } from 'lucide-react';

function Resize() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        resize
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling how an element can be resized.
      </h2>
      {/*Resizing in all directions*/}
      <h2 className='underline'>Resizing in all directions</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'resize' to make an element horizontally and vertically resizable:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center items-center gap-5  text-gray-300 py-4 '>
        <div className='flex w-3/4 gap-6 *:even:-mt-5 flex-col justify-around items-center '>
          <label htmlFor='seltwo' className='text-vsm'>
            resize
          </label>
          <div className=' flex gap-4 flex-row items-center justify-center relative'>
            <textarea
              name='txt1'
              className='resize min-h-20 max-h-32 min-w-20 max-w-100 outline-1 outline-gray-500 rounded-[0.3em]'
            ></textarea>
          </div>
        </div>
      </div>
      {/*Resizing vertically*/}
      <h2 className='underline'>Resizing vertically</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'resize-y' to make an element vertically resizable:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center items-center gap-5  text-gray-300 py-4 '>
        <div className='flex w-3/4 gap-6 *:even:-mt-5 flex-col justify-around items-center '>
          <label htmlFor='seltwo' className='text-vsm'>
            resize-y
          </label>
          <div className=' flex gap-4 flex-row items-center justify-center relative'>
            <textarea
              name='txt1'
              className='resize-y min-h-10 max-h-32 min-w-20 max-w-100 outline-1 outline-gray-500 rounded-[0.3em]'
            ></textarea>
          </div>
        </div>
      </div>
      {/*Resizing horizontally*/}
      <h2 className='underline'>Resizing horizontally</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'resize-x' to make an element horizontally resizable:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center items-center gap-5  text-gray-300 py-4 '>
        <div className='flex w-3/4 gap-6 *:even:-mt-5 flex-col justify-around items-center '>
          <label htmlFor='seltwo' className='text-vsm'>
            resize-x
          </label>
          <div className=' flex gap-4 flex-row items-center justify-center relative'>
            <textarea
              name='txt1'
              className='resize-x min-h-10 max-h-32 min-w-20 max-w-100 outline-1 outline-gray-500 rounded-[0.3em]'
            ></textarea>
          </div>
        </div>
      </div>
      {/*Preventing resizing*/}
      <h2 className='underline'>Preventing resizing</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'resize-none' to prevent an element from being resizable:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center items-center gap-5  text-gray-300 py-4 '>
        <div className='flex w-3/4 gap-6 *:even:-mt-5 flex-col justify-around items-center '>
          <label htmlFor='seltwo' className='text-vsm'>
            resize-none
          </label>
          <div className=' flex gap-4 flex-row items-center justify-center relative'>
            <textarea
              name='txt1'
              className='resize-none min-h-10 max-h-32 min-w-20 max-w-100 outline-1 outline-gray-500 rounded-[0.3em]'
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resize;
