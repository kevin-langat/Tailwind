function MaskRepeat() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        mask-repeat
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the repetition of an element's mask image.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mask-repeat' utility to repeat the mask image both
        vertically and horizontally.
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' w-full flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-repeat</h2>
          <div className=' mask-repeat  w-11/12 h-30  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] mask-size-[50px_50px] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Repeating horizontally */}
      <h2 className='underline'>Repeating horizontally</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-repeat-x' utility to only repeat the mask image
        horizontally.
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' w-full flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-repeat-x</h2>
          <div className=' mask-repeat-x  w-11/12 h-15  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] mask-size-[50px_50px] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Repeating vertically */}
      <h2 className='underline'>Repeating vertically</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-repeat-y' utility to only repeat the mask image
        vertically.
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' w-full flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-repeat-y</h2>
          <div className=' mask-repeat-y  w-15 h-30  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] mask-size-[50px_50px] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Preventing clipping */}
      <h2 className='underline'>Preventing clipping</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-repeat-space' utility to repeat the mask image without
        clipping.
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' w-full flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-repeat-space</h2>
          <div className=' mask-repeat-space  w-11/12 h-30  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] mask-size-[50px_50px] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Preventing clipping ands gaps */}
      <h2 className='underline'>Preventing clipping and gaps</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-repeat-round' utility to repeat the mask image without
        clipping, stretching if needed to avoid gaps:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' w-full flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-repeat-round</h2>
          <div className=' mask-repeat-round  w-11/12 h-30  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] mask-size-[50px_50px] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Disabling repeating */}
      <h2 className='underline'>Disabling repeating </h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-no-repeat' utility to prevent a mask image from repeating:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' w-full flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-repeat-round</h2>
          <div className=' mask-no-repeat  w-15 h-15  p-1.5 bg-gray-300 bg-cover mask-[url(/Images/cr.png)] mask-size-[50px_50px] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
    </div>
  );
}

export default MaskRepeat;
