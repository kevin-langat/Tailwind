function BackDropSaturate() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        backdrop-filter: saturate()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying backdrop saturation filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic Example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like backdrop-saturate-50 and backdrop-saturate-100
        utilities to control the saturation of an element's backdrop:
      </h2>
      <div className='w-3/5 outline-1 outline-gray-400/40  bg-gray-100 h-40 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-saturate-50</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 backdrop-saturate-50 bg-white/30 absolute h-16'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-saturate-125</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 backdrop-saturate-125 bg-white/30 absolute h-16'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-saturate-200</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 backdrop-saturate-200 bg-white/30 absolute h-16'></div>
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the backdrop-saturate{'-[<value>]'} syntax to set the backdrop
        saturation based on a completely custom value:
      </h2>
      <div className='w-3/5 outline-1 outline-gray-400/40  bg-gray-100 h-40 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-saturate-[.85]</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 backdrop-saturate-[.85] bg-white/30 absolute h-16'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackDropSaturate;
