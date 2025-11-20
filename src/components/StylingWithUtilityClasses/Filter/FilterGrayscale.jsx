function FilterGrayscale() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        filter: grayscale()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying grayscale filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like grayscale and grayscale-75 to control the amount of
        grayscale effect applied to an element:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>grayscale-0</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' grayscale-0 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>grayscale-25</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' grayscale-25 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>grayscale-50</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className='grayscale-50 w-30 h-20 rounded-[0.4em]'
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
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the grayscale-{'[<value>]'} syntax to set the grayscale based on a
        completely custom value:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>gryascale-[0.6]</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' grayscale-[0.6] w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
    </div>
  );
}

export default FilterGrayscale;
