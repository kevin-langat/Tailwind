function ScrollSnapAlign() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        scroll-snap-align
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling the scroll snap alignment of an element.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Snapping to the center</h2>
      <h2 className='text-vsm w-1/2'>
        Use the snap-center utility to snap an element to its center when being
        scrolled inside a snap container:
      </h2>
      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 snap-mandatory scroll-smooth'>
        <div className='flex space-x-4 px-4'>
          <img
            src='https://picsum.photos/200/200?1'
            className='snap-center w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?7'
            className='snap-center w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?8'
            classNameName='snap-center w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?9'
            className='snap-center  w48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />

          <img
            src='https://picsum.photos/200/200?2'
            className='snap-center w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 2'
          />

          <img
            src='https://picsum.photos/200/200?3'
            classNameName='snap-center w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 3'
          />

          <img
            src='https://picsum.photos/200/200?4'
            classNameName='snap-center scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />

          <img
            src='https://picsum.photos/200/200?5'
            className='snap-center scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
      {/*Snap to the start*/}
      <h2 className='underline'>Snapping to the start</h2>
      <h2 className='text-vsm w-1/2'>
        Use the snap-start utility to snap an element to its start when being
        scrolled inside a snap container:
      </h2>
      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 snap-mandatory scroll-smooth'>
        <div className='flex space-x-4 px-4'>
          <img
            src='https://picsum.photos/200/200?1'
            className='snap-start w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?7'
            className='snap-start w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?8'
            className='snap-start w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?9'
            className='snap-start  w48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />

          <img
            src='https://picsum.photos/200/200?2'
            className='snap-start w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 2'
          />

          <img
            src='https://picsum.photos/200/200?3'
            className='snap-start w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 3'
          />

          <img
            src='https://picsum.photos/200/200?4'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />

          <img
            src='https://picsum.photos/200/200?5'
            className='snap-center scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
      {/*Snap to the end*/}
      <h2 className='underline'>Snapping to the end</h2>
      <h2 className='text-vsm w-1/2'>
        Use the snap-end utility to snap an element to its end when being
        scrolled inside a snap container:
      </h2>
      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 snap-mandatory scroll-smooth'>
        <div className='flex space-x-4 px-4'>
          <img
            src='https://picsum.photos/200/200?1'
            className='snap-end w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?7'
            className='snap-end w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?8'
            className='snap-end w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?9'
            className='snap-end  w48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />

          <img
            src='https://picsum.photos/200/200?2'
            className='snap-end w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 2'
          />

          <img
            src='https://picsum.photos/200/200?3'
            className='snap-end w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 3'
          />

          <img
            src='https://picsum.photos/200/200?4'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />

          <img
            src='https://picsum.photos/200/200?5'
            className='snap-center scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollSnapAlign;
