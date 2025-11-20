function Invert() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        filter: invert()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying invert filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like invert and invert-20 to control the color inversion
        of an element:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>invert-0</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className='invert-0 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>invert-25</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className='invert-25 w-30 h-20 rounded-[0.4em]'
          />
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>invert</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className='invert w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
      {/*Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the invert-{'[<value>]'} syntax to set the color inversion based on
        a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>invert-[.25]</h2>
          <img
            src='/Images/abstract.png'
            alt=''
            className='invert-[.25] w-30 h-20 rounded-[0.4em]'
          />
        </div>
      </div>
    </div>
  );
}

export default Invert;
