function MaskOrigin() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        mask-mode
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling how an element's mask image is positioned
        relative to borders, padding and content.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utlities like 'mask-origin-border', 'mask-origin-padding', and
        'mask-origin-content' to control where an element's mask is rendered:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-3 gap-3 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-origin-border</h2>
          <div className=' mask-origin-border w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/scribble.png)] border-dotted border-indigo-500  bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-origin-padding</h2>
          <div className=' mask-origin-padding w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/scribble.png)] border-dotted border-indigo-500  bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-origin-content</h2>
          <div className=' mask-origin-content mask-[url(/Images/scribble.png)] w-30 h-30 border-3  p-1.5 bg-gray-300 bg-cover  border-dotted border-indigo-500  bg-[url(/Images/ocean.jpg)] '></div>
        </div>
      </div>
    </div>
  );
}

export default MaskOrigin;
