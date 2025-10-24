function BackgroundClip() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        background-clip
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the bounding box of an element's background.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className=' w-1/2 text-vsm'>
        Use the 'bg-clip-border', 'bg-clip-padding' and 'bg-clip-content'
        utilities to control the bounding box of an element's background:
      </h2>
      <h2 className='underline text-vsm'>bg-clip-border</h2>
      <div className=' w-20 h-20 border-dashed rounded-[0.3em] border-4 bg-clip-border bg-sky-500 p-3'></div>

      <h2 className='underline text-vsm'>bg-clip-padding</h2>
      <div className=' w-20 h-20 border-dashed rounded-[0.3em] border-4 bg-clip-padding bg-sky-500 p-3'></div>

      <h2 className='underline text-vsm'>bg-clip-padding</h2>
      <div className=' w-20 h-20 border-dashed rounded-[0.3em] border-4 bg-clip-content bg-sky-500 p-3'></div>

      <h2 className='underline'>Cropping to text</h2>

      <div className=' w-60 h-20 text-4xl border-dashed text-transparent rounded-[0.3em] border-4 bg-clip-text bg-linear-to-r from-pink-500 to via-violet-600 p-3'>
        Hello world
      </div>
    </div>
  );
}

export default BackgroundClip;
