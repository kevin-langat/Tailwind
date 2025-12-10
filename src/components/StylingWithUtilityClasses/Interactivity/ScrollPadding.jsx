function ScrollPadding() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        scroll-padding
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling an element's scroll offset within a snap
        container.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'scroll-pt-{'<number>'}', 'scroll-pr-{'<number>'}', 'scroll-pb-
        {'<number>'}' and 'scroll-pl-{'<number>'}' utilities like 'scroll-pl-4'
        and 'scroll-pt-6' to set the scroll offset of an element within a snap
        container:
      </h2>

      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto  bg-gray-800 snap-x scroll-px-5 snap-mandatory scroll-smooth'>
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
            classNameName='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
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
        Use the scroll-ps-{'<number>'} and scroll-pe-{'<number>'} utilities to
        set the scroll-padding-inline-start and scroll-padding-inline-end
        logical properties, which map to either the left or right side based on
        the text direction:
      </h2>
      <div className='w-1/2 py-5 text-gray-300 *:even:-mt-4 bg-gray-700 flex flex-col gap-6 items-center rounded-[0.3em]'>
        <h2 className='text-vsm'>Right To Left (rtl)</h2>
        <div
          dir='rtl'
          className='relative py-4 rounded-[0.3em] w-1/2 custom-scrollbar overflow-x-auto snap-x  
            scroll-pis-8 scroll-pie-8  scroll-ps-6 bg-gray-800 snap-mandatory scroll-smooth'
        >
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
              className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 5'
            />
          </div>
        </div>
        <h2 className='text-vsm'>Left To Right (ltr)</h2>
        <div
          dir='ltr'
          className='relative py-4 rounded-[0.3em] w-1/2 custom-scrollbar overflow-x-auto snap-x  
            scroll-pis-8 scroll-pie-8  scroll-ps-6 bg-gray-800 snap-mandatory scroll-smooth'
        >
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
              classNameName='snap-start w-48 h-48 object-cover rounded-lg shadow-lg'
              alt='Image 2'
            />

            <img
              src='https://picsum.photos/200/200?3'
              classNameName='snap-start w-48 h-48 object-cover rounded-lg shadow-lg'
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
      {/*Basic example*/}
      <h2 className='underline'>Using a negative values</h2>
      <h2 className='text-vsm w-1/2'>
        To use a negative scroll padding value, prefix the class name with a
        dash to convert it to a negative value:
      </h2>

      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x -scroll-pl-6 bg-gray-800 snap-mandatory scroll-smooth'>
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
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
      {/*Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like scroll-pl-{'[<value>]'} and scroll-pe-{'[<value>]'}{' '}
        to set the scroll padding based on a completely custom value:
      </h2>
      <h2 className='text-vsm'>scroll-pl-[24rem]</h2>
      <div className='relative py-4 rounded-[0.3em] w-1/5 custom-scrollbar overflow-x-auto snap-x scroll-pl-[24rem] bg-gray-800 snap-mandatory scroll-smooth'>
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
            className='snap-start scroll-mx-4 w-48 h-48 object-cover rounded-lg shadow-lg'
            alt='Image 5'
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollPadding;
