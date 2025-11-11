function OutlineOffset() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        outline-offset
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the offset of an element's outline.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'outline-offset-2' and 'outline-offset-4' to change
        the offset of an element's outline:
      </h2>
      <div className='grid grid-cols-3 place-items-center w-1/2 justify-center gap-15 bg-gray-800 outline-1 py-4 outline-gray-500 px-3 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-offset-0</h2>
          <button className='bg-gray-500 mt-2 outline-green-500 outline-2 outline-offset-0 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-offset-2</h2>
          <button className='bg-gray-500 mt-2 outline-green-500 outline-2 outline-offset-2 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-offset-4</h2>
          <button className='bg-gray-500 mt-2 outline-green-500 outline-2 outline-offset-4 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button C
          </button>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'outline-offset-{'[<value>]'}' syntax to set the outline based
        on a completely custom value:
      </h2>
      <div className=' w-1/5 flex flex-col items-center justify-center  bg-gray-800 outline-1 py-2 outline-gray-500 px-3'>
        <h2 className='text-vsm text-gray-400 font-sans'>
          outline-offset-[0.3em]
        </h2>
        <button className='bg-gray-500 mt-2 outline-green-500 outline-2 outline-offset-[0.3em] text-vsm px-3 py-1 rounded-[0.5em]'>
          Button A
        </button>
      </div>
    </div>
  );
}

export default OutlineOffset;
