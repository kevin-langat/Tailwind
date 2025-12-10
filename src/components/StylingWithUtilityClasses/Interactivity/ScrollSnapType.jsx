function ScrollSnapType() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        scroll-snap-type
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        The scroll-snap-type property defines if a scroll container enables CSS
        scroll snapping and how strict that snapping behavior is along its axes.
        It's applied to the container element that you want to scroll, not the
        items within it.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Horizontal scroll snapping</h2>
      <h2 className='text-vsm w-1/2'>
        Use the snap-x utility to enable horizontal scroll snapping within an
        element:
      </h2>
      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 scroll-smooth'>
        <div className='flex space-x-4 px-4'>
          <img
            src='https://picsum.photos/200/200?1'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?7'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?8'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?9'
            className='snap-center snap-always  w48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />

          <img
            src='https://picsum.photos/200/200?2'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 2'
          />

          <img
            src='https://picsum.photos/200/200?3'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 3'
          />

          <img
            src='https://picsum.photos/200/200?4'
            className='snap-center snap-always scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />

          <img
            src='https://picsum.photos/200/200?5'
            classNameNameName='snap-center snap-always scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
      {/*Basic example*/}
      <h2 className='underline'>Mandatory scroll snapping</h2>
      <h2 className='text-vsm w-1/2'>
        Use the snap-mandatory utility to force a snap container to always come
        to rest on a snap point:
      </h2>
      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x snap-mandatory scroll-mr-6 bg-gray-800 scroll-smooth'>
        <div className='flex space-x-4 px-4'>
          <img
            src='https://picsum.photos/200/200?1'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?7'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?8'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?9'
            className='snap-center snap-always  w48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />

          <img
            src='https://picsum.photos/200/200?2'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 2'
          />

          <img
            src='https://picsum.photos/200/200?3'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 3'
          />

          <img
            src='https://picsum.photos/200/200?4'
            className='snap-center snap-always scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />
          <img
            src='https://picsum.photos/200/200?5'
            className='snap-center snap-always scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />
        </div>
      </div>
      {/*Proximity scroll snapping*/}
      <h2 className='underline'>Proximity scroll snapping</h2>
      <h2 className='text-vsm w-1/2'>
        Use the snap-proximity utility to make a snap container come to rest on
        snap points that are close in proximity:
      </h2>
      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 snap-proximity scroll-smooth'>
        <div className='flex space-x-4 px-4'>
          <img
            src='https://picsum.photos/200/200?1'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?7'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?8'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?9'
            className='snap-center snap-always  w48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />

          <img
            src='https://picsum.photos/200/200?2'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 2'
          />

          <img
            src='https://picsum.photos/200/200?3'
            className='snap-center snap-always w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 3'
          />

          <img
            src='https://picsum.photos/200/200?4'
            className='snap-center snap-always scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />

          <img
            src='https://picsum.photos/200/200?5'
            className='snap-center snap-always scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollSnapType;
