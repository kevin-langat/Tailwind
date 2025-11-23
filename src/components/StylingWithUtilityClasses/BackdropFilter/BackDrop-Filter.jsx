function BackDropFilter() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        backdrop-filter()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying backdrop filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like backdrop-blur-xs and backdrop-grayscale to apply
        filters to an element's backdrop:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-blur-xs</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4 absolute h-16 backdrop-blur-xs'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-grayscale</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4 absolute h-16 backdrop-grayscale'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-blur-xs backdrop-grayscale</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-26 absolute h-16 backdrop-blur-xs backdrop-grayscale'></div>
          </div>
        </div>
      </div>
      {/* Removing filters */}
      <h2 className='underline'>Removing filters</h2>
      <h2 className='text-vsm w-1/2'>
        Use the backdrop-filter-none utility to remove all of the backdrop
        filters applied to an element:
      </h2>
      <div className='w-1/2 min-w-40 max-w-1/2 resizableVid @container/parent outline-1 outline-gray-400/20  bg-gray-50 h-40 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm after:content-["-blur-xs"] @md/parent:after:content-["-filter-none"] '>
            backdrop
          </h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-50 h-30 rounded-[0.4em]'
            />
            <div className='w-3/4 absolute @md/parent:backdrop-filter-none h-16 backdrop-blur-xs'></div>
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the backdrop-filter-{'[<value>]'} syntax to set the backdrop filter
        based on a completely custom value:
      </h2>
      <div className='w-1/2 min-w-40 max-w-1/2   outline-1 outline-gray-400/20  bg-gray-50 h-40 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-blur-[8px]</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-50 h-30 rounded-[0.4em]'
            />
            <div className='w-3/4 absolute h-24 backdrop-blur-[8px]'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackDropFilter;
