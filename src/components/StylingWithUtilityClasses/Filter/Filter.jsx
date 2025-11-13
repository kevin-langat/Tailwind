function Filter() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        filter
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'blur-xs' and 'grayscale' to apply filters to an
        element:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>blur-xs</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' blur-xs w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>grayscale</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' grayscale w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>blur-xs grayscale </h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' blur-xs grayscale w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
      {/*Removing filters */}
      <h2 className='underline'>Removing filters</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'filter-none' utility to remove all the filters applied to an
        element:
      </h2>
      <div className=' min-w-1/5 max-w-1/2 resizableVid @container w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className="text-vsm @max-md:after:content-['invert'] @md:after:content-['filter-none'] "></h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' @md:filter-none invert w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
      {/*Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'filter-{['<value>']}' syntax to set the filter based on a
        completely custom value:
      </h2>
      <div className=' min-w-1/5 max-w-1/2 @container w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>filter-[url(filters.svg#filter-id)]</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' filter-[url(filters.svg#filter-id)] w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
