function BackgroundBlendMode() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        background-blend-mode
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling how an element's background image should blend
        with the background color.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic Example</h2>
      <h2 className='text-vsm'>
        Use utilities like 'bg-blend-difference' and 'bg-blend-saturation' to
        control how the background image and color are blended.
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-row justify-around items-center'>
        <div className=' flex flex-col items-center gap-2 '>
          <h2 className='text-vsm text-gray-300'>bg-blend-multiply</h2>
          <div className=' w-30 h-20 bg-gray-300 bg-cover bg-center bg-[url(/Images/abstract.png)] bg-blend-multiply'></div>
        </div>
        <div className=' flex flex-col items-center gap-2 '>
          <h2 className='text-vsm text-gray-300'>bg-blend-soft-light</h2>
          <div className=' w-30 h-20 bg-gray-300 bg-cover bg-center bg-[url(/Images/abstract.png)] bg-blend-soft-light'></div>
        </div>
        <div className=' flex flex-col items-center gap-2 '>
          <h2 className='text-vsm text-gray-300'>bg-blend-overlay</h2>
          <div className=' w-30 h-20 bg-gray-300 bg-cover bg-center bg-[url(/Images/abstract.png)] bg-blend-overlay'></div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundBlendMode;
