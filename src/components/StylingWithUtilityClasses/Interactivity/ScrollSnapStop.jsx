function ScrollSnapStop() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        scroll-snap-stop
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        The scroll-snap-stop property controls whether a user can scroll past
        multiple snap points in a single, fast swipe or scroll gesture, or if
        the browser must stop at the very next snap point every time.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Forcing snap position stops</h2>
      <h2 className='text-vsm w-1/2'>
        Forces the scroll container to stop at this element's snap position,
        even if the user applies a high-velocity scroll gesture that would
        normally carry them much farther.Use the snap-always utility together
        with the snap-mandatory utility to force a snap container to always stop
        on an element before the user can continue scrolling to the next item:
      </h2>
      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 snap-mandatory scroll-smooth'>
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
      {/*Skipping snap position stops*/}
      <h2 className='underline'>Skipping snap position stops</h2>
      <h2 className='text-vsm w-1/2'>
        (Default) Allows the browser to potentially skip over snap points if the
        user scrolls very quickly (e.g., a fast swipe on a touchpad or
        touchscreen), settling on a snap point close to where the scroll would
        naturally end. Use the snap-normal utility to allow a snap container to
        skip past possible scroll snap positions.
      </h2>
      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 snap-mandatory scroll-smooth'>
        <div className='flex space-x-4 px-4'>
          <img
            src='https://picsum.photos/200/200?1'
            className='snap-center snap-normal w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?7'
            className='snap-center snap-normal w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?8'
            className='snap-center snap-normal w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?9'
            className='snap-center snap-normal  w48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />

          <img
            src='https://picsum.photos/200/200?2'
            className='snap-center snap-normal w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 2'
          />

          <img
            src='https://picsum.photos/200/200?3'
            className='snap-center snap-normal w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 3'
          />

          <img
            src='https://picsum.photos/200/200?4'
            className='snap-center snap-normal scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />

          <img
            src='https://picsum.photos/200/200?5'
            className='snap-center snap-normal scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollSnapStop;
