import imageOne from '../../../../public/Images/mountain.jpg';
import imageTwo from '../../../../public/Images/abstract.png';

function ScrollMargin() {
  function handleOnWheel(e) {
    e.preventDefault();
    e.target.scrollLeft += e.deltaY;
  }
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        scroll-margin
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling the scroll offset around items in a snap
        container.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'scroll-mt-{'<number>'}', 'scroll-mr-{'<number>'}', 'scroll-mb-
        {'<number>'}' and 'scroll-ml-{'<number>'}' utilities like 'scroll-ml-4'
        and 'scroll-mt-6' to set the scroll offset around items within a snap
        container
      </h2>

      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 snap-mandatory scroll-smooth'>
        <div className='flex space-x-4 px-4'>
          <img
            src='https://picsum.photos/200/200?1'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?7'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?8'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?9'
            className='snap-start scroll-mx-4 w48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />

          <img
            src='https://picsum.photos/200/200?2'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 2'
          />

          <img
            src='https://picsum.photos/200/200?3'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 3'
          />

          <img
            src='https://picsum.photos/200/200?4'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />

          <img
            src='https://picsum.photos/200/200?5'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
      {/*Using logical properties*/}
      <h2 className='underline'>Using logical properties</h2>
      <h2 className='text-vsm w-1/2'>
        Use the scroll-ms-{'<number>'} and scroll-me-{'<number>'} utilities to
        set the scroll-margin-inline-start and scroll-margin-inline-end logical
        properties, which map to either the left or right side based on the text
        direction:
      </h2>
      <div
        className='w-full flex flex-row items-center justify-center'
        dir='ltr'
      >
        <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 snap-mandatory scroll-smooth'>
          <div className='flex space-x-4 px-4'>
            <img
              src='https://picsum.photos/200/200?1'
              className='snap-start scroll-ms-6 w-48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 1'
            />
            <img
              src='https://picsum.photos/200/200?7'
              className='snap-start scroll-ms-6 w-48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 1'
            />
            <img
              src='https://picsum.photos/200/200?8'
              className='snap-start scroll-ms-6 w-48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 1'
            />
            <img
              src='https://picsum.photos/200/200?9'
              className='snap-start scroll-ms-6 w48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 1'
            />

            <img
              src='https://picsum.photos/200/200?2'
              className='snap-start scroll-ms-6 w-48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 2'
            />

            <img
              src='https://picsum.photos/200/200?3'
              className='snap-start scroll-ms-6 w-48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 3'
            />

            <img
              src='https://picsum.photos/200/200?4'
              className='snap-start scroll-ms-6 w-48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 4'
            />

            <img
              src='https://picsum.photos/200/200?5'
              className='snap-start scroll-ms-6 w-48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 5'
            />
          </div>
        </div>
      </div>
      {/*Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like scroll-ml-{'[<value>] '}and scroll-me-{'[<value>]'}{' '}
        to set the scroll margin based on a completely custom value:
      </h2>

      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x bg-gray-800 snap-mandatory scroll-smooth'>
        <div className='flex space-x-4 px-4'>
          <img
            src='https://picsum.photos/200/200?1'
            className='snap-start scroll-ml-48 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?7'
            className='snap-start scroll-ml-48 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?8'
            className='snap-start scroll-ml-48 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />
          <img
            src='https://picsum.photos/200/200?9'
            className='snap-start scroll-ml-48 w48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 1'
          />

          <img
            src='https://picsum.photos/200/200?2'
            className='snap-start scroll-ml-48 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 2'
          />

          <img
            src='https://picsum.photos/200/200?3'
            className='snap-start scroll-ml-48 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 3'
          />

          <img
            src='https://picsum.photos/200/200?4'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 4'
          />

          <img
            src='https://picsum.photos/200/200?5'
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollMargin;
