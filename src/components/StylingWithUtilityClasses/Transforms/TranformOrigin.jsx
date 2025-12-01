function TranformOrigin() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        transform-origin
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        The transform-origin property in CSS defines the position around which a
        transformation (such as a rotate, scale, skew, or 3D transform) is
        applied. By default, the transform origin is always the exact center of
        the element (50% 50%).
      </h2>
      {/* Basic Example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'origin-top' and 'orgin-bottom-left' to set an
        element's transform origin:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>origin-center</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full rotate-12 origin-center'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>origin-bottom-right</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full origin-bottom-right rotate-12'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>origin-top-left</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full origin-top-left rotate-12 animate-wiggle'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the origin-{'[<value>]'} syntax to set the transform origin based on
        a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 px-2 place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-start py-4 items-center gap-4   text-gray-300 h-70 '>
        <h2 className='text-vsm'>origin-[1%_100%]</h2>
        <div className='w-40 h-30 rounded-[0.3em] border-2 border-dotted border-gray-500'>
          <img
            src='/public/Images/mountain.jpg'
            className='rounded-[0.3em] h-full w-full rotate-45 origin-[1%_100%]'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default TranformOrigin;
