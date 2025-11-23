function Brightness() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        backdrop-filter: brightness()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying backdrop brightness filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like backdrop-brightness-50 and backdrop-brightness-100 to
        control an element's backdrop brightness:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-brightness-50</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4  backdrop-blur-sm absolute h-16 backdrop-brightness-50'></div>
          </div>
        </div>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-blur-sm</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-30 h-20 rounded-[0.4em]'
            />
            <div className='w-3/4 backdrop-blur-sm absolute h-16 backdrop-brightness-150'></div>
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the backdrop-brightness-{'[<value>]'} syntax to set the backdrop
        brightness based on a completely custom value:
      </h2>
      <div className='w-1/3 outline-1 outline-gray-400/20  bg-gray-50 h-40 rounded-[0.3em] flex flex-row justify-around'>
        <div className='  flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>backdrop-brightness-[1.75]</h2>
          <div className='relative w-full flex flex-col justify-center items-center'>
            <img
              src='/Images/abstract.png'
              alt=''
              className='w-50 h-30 rounded-[0.4em]'
            />
            <div className='w-3/4  backdrop-blur-sm absolute h-26 backdrop-brightness-[1.75]'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brightness;
