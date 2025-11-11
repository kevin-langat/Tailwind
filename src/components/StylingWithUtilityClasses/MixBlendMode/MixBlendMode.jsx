function MixBlendMode() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        mix-blend-mode
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling how an element should blend with the
        background
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mix-blend-overlay' and 'mix-blend-soft-light' to
        vontrol how an element's content and background is blended with other
        content in the same stacking context:
      </h2>

      <div className='w-1/2 outline-1 outline-gray-500  bg-gray-400 h-32 rounded-[0.3em] flex flex-row items-center justify-center'>
        <div className=' bg-blue-500 mix-blend-multiply shadow-md w-30 h-30 rounded-full'></div>
        <div className=' bg-pink-500 mix-blend-multiply -ml-15 shadow-lg w-30 h-30 rounded-full'></div>
      </div>
      {/* Isolating blending */}
      <h2 className='underline'>Isolating blending</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'isolate' utility on the parent element to create a new stacking
        context and prevent blending with content behind it:
      </h2>

      <div className='w-1/2 outline-1 outline-gray-500  bg-gray-400 h-32 rounded-[0.3em] flex flex-row items-center justify-around'>
        <div className=' isolate w-1/2 flex flex-row items-center justify-center'>
          <div className=' bg-yellow-500 mix-blend-multiply shadow-md w-30 h-30 rounded-full'></div>
          <div className=' bg-green-500 mix-blend-multiply -ml-15 shadow-lg w-30 h-30 rounded-full'></div>
        </div>
        <div className=' w-1/2 flex flex-row items-center justify-center'>
          <div className=' bg-yellow-500 mix-blend-multiply shadow-md w-30 h-30 rounded-full'></div>
          <div className=' bg-green-500 mix-blend-multiply -ml-15 shadow-lg w-30 h-30 rounded-full'></div>
        </div>
      </div>
    </div>
  );
}

export default MixBlendMode;
