function MaskSize() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        mask-size
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the size of an element's mask image.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Filing the container</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mask-cover' utility to scale the mask image untill
        it fills the mask layer, cropping the image if needed:
      </h2>
      <div className=' w-1/3 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' bg-gray-600  w-11/12 flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-cover</h2>
          <div className='bg-gray-400 mask-cover w-full   h-30  p-1.5  bg-cover mask-[url(/Images/scribble.png)] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Filling without cropping */}
      <h2 className='underline'>Filling without cropping</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-contain' utility to scale the mask image to the outer
        edges without cropping or stretching:
      </h2>
      <div className=' w-1/3 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' bg-gray-600  w-11/12 flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-contain</h2>
          <div className='bg-gray-400 mask-contain w-full   h-30  p-1.5  bg-cover mask-[url(/Images/scribble.png)] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Using the default size */}
      <h2 className='underline'>Using the default size</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-auto' utility to display the mask image at its default
        size:
      </h2>
      <div className=' w-1/3 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' bg-gray-600  w-11/12 flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-auto</h2>
          <div className='bg-gray-400 mask-auto w-full   h-30  p-1.5  bg-cover mask-[url(/Images/scribble.png)] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Using the default size */}
      <h2 className='underline'>Using the default size</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-size-[auto_100px]' syntax to set the mask image size based
        on a completely custom value:
      </h2>
      <div className=' w-1/3 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-3 justify-center items-center'>
        <div className=' bg-gray-600  w-11/12 flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-[auto_40px]</h2>
          <div className='bg-gray-400 mask-[auto_40px] w-full   h-30  p-1.5  bg-cover mask-[url(/Images/scribble.png)] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
    </div>
  );
}

export default MaskSize;
