function HueRotate() {
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
          <h2 className='text-vsm'>hue-rotate-15</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' hue-rotate-15 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>hue-rotate-60</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' hue-rotate-60 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>hue-rotate-90</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className='hue-rotate-90 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>hue-rotate-180</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' hue-rotate-180 w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
      {/* Using negative values */}
      <h2 className='underline'>Using negative values</h2>
      <h2 className='text-vsm'>
        Use utilities like -hue-rotate-15 and -hue-rotate-45 to set a negative
        hue rotate value:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>-hue-rotate-15</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' -hue-rotate-15 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>hue-rotate-60</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' -hue-rotate-60 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>-hue-rotate-90</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className='-hue-rotate-90 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>-hue-rotate-180</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' -hue-rotate-180 w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm'>
        Use the hue-rotate-{'[<value>]'} syntax to set the hue rotation based on
        a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'> hue-rotate-[3.142rad]</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' hue-rotate-[3.142rad] w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>hue-rotate-[4.142rad]</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className=' hue-rotate-[4.142rad] w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
    </div>
  );
}

export default HueRotate;
