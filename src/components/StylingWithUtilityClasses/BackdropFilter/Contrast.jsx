function Contrast() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        backdrop-filter: contrast()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying backdrop contrast filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like backdrop-contrast-50 and backdrop-contrast-100 to
        control an element's backdrop contrast:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-contrast-50</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4  backdrop-blur-sm absolute h-16 backdrop-contrast-50'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-contrast-200</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4 backdrop-blur-sm absolute h-16 backdrop-contrast-200'></div>
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the backdrop-contrast-{'[<value>]'} syntax to set the backdrop
        contrast based on a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-contrast-[.25]</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4  backdrop-blur-sm absolute h-16 backdrop-contrast-[.25]'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contrast;
