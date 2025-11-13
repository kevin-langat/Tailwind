function MaskType() {
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
          <svg>
            <mask id='blob1' className='mask-type-alpha fill-gray-700/70'>
              <path d='/Images/abstract.png'></path>
            </mask>
            <image
              href='Images/abstract.png'
              height='100%'
              width='100%'
              mask='url(#blob1)'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MaskType;
