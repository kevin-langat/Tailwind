function BackgroundPosition() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        background-position
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the position of an element's background image.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm'>
        Use ustilities like 'bg-center', 'bg-right' and 'bg-top-left' to control
        the position of an element's background image:
      </h2>
      <div className=' grid grid-cols-3 gap-2 place-items-center w-1/2 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em]'>
        <div
          className='bg-[url(../../public/images/abstract.png)] bg-cover bg-top-left w-30  h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className='  bg-[url(../../public/images/abstract.png)] bg-cover bg-top w-30  h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className=' bg-[url(../../public/images/abstract.png)] bg-cover bg-top-right  w-30 h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className='bg-[url(../../public/images/abstract.png)] bg-cover bg-left w-30  h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className='  bg-[url(../../public/images/abstract.png)] bg-cover bg-center w-30  h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className=' bg-[url(../../public/images/abstract.png)] bg-cover bg-right  w-30 h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className='bg-[url(../../public/images/abstract.png)] bg-cover bg-bottom-left w-30  h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className='  bg-[url(../../public/images/abstract.png)] bg-cover bg-bottom w-30  h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className=' bg-[url(../../public/images/abstract.png)] bg-cover bg-bottom-right  w-30 h-20 rounded-[0.3em]'
          alt=''
        ></div>
      </div>

      {/*Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm'>
        Use the 'bg-position-['{'<value>'}']' syntax to set the background based
        on a completely custom value
      </h2>
      <div className=' h-60 grid  grid-cols-3 gap-2 place-items-center w-1/2 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em]'>
        <div
          className='bg-[url(../../public/images/abstract.png)] bg-cover bg-position-[center_top_1rem] w-30  h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className='bg-[url(../../public/images/abstract.png)] bg-cover bg-position-[center_top_1rem] w-30  h-20 rounded-[0.3em]'
          alt=''
        ></div>
        <div
          className='bg-[url(../../public/images/abstract.png)] bg-cover bg-position-[center_bottom_1rem] w-30  h-20 rounded-[0.3em]'
          alt=''
        ></div>
      </div>
    </div>
  );
}

export default BackgroundPosition;
