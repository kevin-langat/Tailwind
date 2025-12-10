function TouchAction() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        touch-action
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Utilities for controlling how an element can be scrolled and zoomed on
        touchscreens.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like touch-pan-y and touch-pinch-zoom to control how an
        element can be scrolled (panned) and zoomed (pinched) on touchscreens:
      </h2>
      <div className='bg-gray-800 gap-6 *:even:-mt-4 py-5 flex flex-col items-center justify-center w-3/5 rounded-[0.2em] text-gray-300'>
        <h2 className='text-vsm'>touch-auto</h2>
        <div className='relative py-4 rounded-[0.3em] w-1/2 custom-scrollbar overflow-auto h-48 snap-x bg-gray-500 scroll-smooth'>
          <div className='flex space-x-4 touch-auto h-80 w-150 px-4'>
            <img
              src='/Images/mountain.jpg'
              className='snap-center snap-always w-150 h-90 object-cover rounded-lg shadow-lg'
              alt='Image 1'
            />
          </div>
        </div>
        <h2 className='text-vsm'>touch-none</h2>
        <div className='relative py-4 rounded-[0.3em] w-1/2 custom-scrollbar overflow-auto h-48 snap-x bg-gray-500 scroll-smooth'>
          <div className='flex space-x-4 touch-none h-80 w-150 px-4'>
            <img
              src='/Images/mountain.jpg'
              className='snap-center snap-always w-150 h-90 object-cover rounded-lg shadow-lg'
              alt='Image 1'
            />
          </div>
        </div>
        <h2 className='text-vsm'>touch-pan-x</h2>
        <div className='relative py-4 rounded-[0.3em] w-1/2 custom-scrollbar overflow-auto h-48 snap-x bg-gray-500 scroll-smooth'>
          <div className='flex space-x-4 touch-pan-x h-80 w-150 px-4'>
            <img
              src='/Images/mountain.jpg'
              className='snap-center snap-always w-150 h-90 object-cover rounded-lg shadow-lg'
              alt='Image 1'
            />
          </div>
        </div>

        <h2 className='text-vsm'>touch-pan-y</h2>
        <div className='relative py-4 rounded-[0.3em] w-1/2 custom-scrollbar overflow-auto h-48 snap-x bg-gray-500 scroll-smooth'>
          <div className='flex space-x-4 touch-pan-y h-80 w-150 px-4'>
            <img
              src='/Images/mountain.jpg'
              className='snap-center snap-always w-150 h-90 object-cover rounded-lg shadow-lg'
              alt='Image 1'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouchAction;
