function BackDropHueRotate() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        backdrop-filter: hue-rotate()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying backdrop hue-rotate filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic Example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like backdrop-hue-rotate-90 and backdrop-hue-rotate-180 to
        rotate the hue of an element's backdrop:
      </h2>
      <div className='w-3/5 outline-1 outline-gray-400/40  bg-gray-100 h-40 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-hue-rotate-90</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 backdrop-hue-rotate-90 bg-white/30 absolute h-16'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-hue-rotate-180</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 backdrop-hue-rotate-180 bg-white/30 absolute h-16'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-hue-rotate-270</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 backdrop-hue-rotate-270 bg-white/30 absolute h-16'></div>
          </div>
        </div>
      </div>
      {/*Using negative values */}
      <h2 className='underline'>Using negative values</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like -backdrop-hue-rotate-90 and -backdrop-hue-rotate-180
        to set a negative backdrop hue rotation value;
      </h2>
      <div className='w-3/5 outline-1 outline-gray-400/40  bg-gray-100 h-40 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>-backdrop-hue-rotate-15</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 -backdrop-hue-rotate-15 bg-white/30 absolute h-16'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>-backdrop-hue-rotate-45</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 -backdrop-hue-rotate-45 bg-white/30 absolute h-16'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-hue-rotate-90</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 -backdrop-hue-rotate-90 bg-white/30 absolute h-16'></div>
          </div>
        </div>
      </div>
      {/*Using custom value */}
      <h2 className='underline'>Using custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the backdrop-hue-rotate-{'[<value>]'} syntax to set the backdrop hue
        rotation based on a completely custom value:
      </h2>
      <div className='w-3/5 outline-1 outline-gray-400/40  bg-gray-100 h-40 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-hue-rotate-[3.142rad]</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-45 h-30 rounded-[0.2em]'
            />
            <div className='w-3/4 backdrop-hue-rotate-[3.142rad] bg-white/30 absolute h-16'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackDropHueRotate;
