function MaskComposite() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        mask-composite
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling how multiple masks are combined together.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mask-add','mask-intersect' to control how an
        element's masks are combined together:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-2 gap-3 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-add</h2>
          <div className='mask-add w-30 h-30  p-1.5 bg-gray-300 bg-cover  mask-[url(/Images/scribble.png),url(/Images/scribble.png)] mask-[position:30%_50%,70%_50%]  bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-subtract</h2>
          <div className=' mask-subtract w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-intersect</h2>
          <div className=' mask-intersect w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-exclude</h2>
          <div className=' mask-exclude w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] mask-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
    </div>
  );
}

export default MaskComposite;
