function FilterBrightness() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        filter: brightness()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying brightness filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'brightness-50' and 'brightness-100' to control an
        element's brightness:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>brightness-50</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' brightness-50 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>brightness-100</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' brightness-100 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>brightness-150</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className='brightness-150  w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>brightness-200</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' brightness-200 w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>

      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'brightness-[{'<value>'}]' syntax to set the brightness based on
        a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>brightness-[1.55]</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' brightness-[1.55] w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
    </div>
  );
}

export default FilterBrightness;
