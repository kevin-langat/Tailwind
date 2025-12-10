function ForcedColorAdjust() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        forced-color-adjust
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Utilities for styling the stroke width of SVG elements.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Opting out of forced colors</h2>
      <h2 className='text-vsm w-1/2'>
        Use the forced-color-adjust-none utility to opt an element out of the
        colors enforced by forced colors mode. This is useful in situations
        where enforcing a limited color palette will degrade usability.
      </h2>
      <div
        className='flex text-gray-300 gap-6 *:even:-mt-5
       flex-col items-center bg-gray-800 justify-center rounded-[0.2em] py-4 w-1/3'
      >
        <div className='w-3/5 items-center flex flex-col h-70 shadow shadow-gray-500 gap-2 py-0.5 bg-gray-700 rounded-[0.3em] outline-1 outline-gray-600'>
          <img
            src='/Images/t-shirt.webp'
            className='w-[98%] rounded-[0.3em] '
            alt=''
          />
          <div className=' text-vsm h-10 bg-gray-800 p-4 rounded-[1em] flex flex-row justify-between items-center w-[96%]'>
            <div className=' flex flex-col items-center justify-center'>
              <h2 className=''>Basic Tee</h2>
              <h2 className=''>$25</h2>
            </div>
            <div className='flex forced-color-adjust-none flex-row items-center justify-around w-1/2'>
              <div className='bg-gray-300 w-4 h-4 rounded-full ring-1 ring-gray-300 ring-offset-2'></div>
              <div className='bg-amber-900 w-4 h-4 rounded-full ring-1 ring-gray-300 ring-offset-2'></div>
              <div className='bg-gray-700 w-4 h-4 rounded-full ring-1 ring-gray-300 ring-offset-2'></div>
            </div>
          </div>
        </div>
      </div>
      {/*Restoring forced colors*/}
      <h2 className='underline'>Restoring forced colors</h2>
      <h2 className='text-vsm w-1/2'>
        Use the forced-color-adjust-auto utility to make an element adhere to
        colors enforced by forced colors mode.This can be useful if you want to
        undo the forced-color-adjust-none utility, for example on a larger
        screen size.
      </h2>
      <div
        className='flex text-gray-300 gap-6 *:even:-mt-5
       flex-col items-center bg-gray-800 justify-center rounded-[0.2em] py-4 w-1/3'
      >
        <div className='w-3/5 items-center flex flex-col h-70 shadow shadow-gray-500 gap-2 py-0.5 bg-gray-700 rounded-[0.3em] outline-1 outline-gray-600'>
          <img
            src='/Images/t-shirt.webp'
            className='w-[98%] rounded-[0.3em] '
            alt=''
          />
          <div className=' text-vsm h-10 bg-gray-800 p-4 rounded-[1em] flex flex-row justify-between items-center w-[96%]'>
            <div className=' flex flex-col items-center justify-center'>
              <h2 className=''>Basic Tee</h2>
              <h2 className=''>$25</h2>
            </div>
            <div className='flex forced-color-adjust-auto flex-row items-center justify-around w-1/2'>
              <div className='bg-gray-300 w-4 h-4 rounded-full ring-1 ring-gray-300 ring-offset-2'></div>
              <div className='bg-amber-900 w-4 h-4 rounded-full ring-1 ring-gray-300 ring-offset-2'></div>
              <div className='bg-gray-700 w-4 h-4 rounded-full ring-1 ring-gray-300 ring-offset-2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForcedColorAdjust;
