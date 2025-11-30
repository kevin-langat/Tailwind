function Transform() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        transform
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for transforming elements.
      </h2>
      {/* Hardware acceleration */}
      <h2 className='underline'>Hardware acceleration</h2>
      <h2 className='text-vsm w-1/2'>
        If your transition perorms better when rendered by the GPU instead of
        the CPU, you can force hardware acceleration by adding the
        'transform-gpu' utility:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-between gap-3 py-2 text-gray-300 transform-gpu '>
        <h2 className='text-vsm'>transform-gpu</h2>
        <div className='w-40 h-34 rounded-[0.3em] border-2 border-dotted border-gray-500'>
          <img
            src='/public/Images/mountain.jpg'
            className='rounded-[0.3em] h-full w-full'
            alt=''
          />
        </div>
      </div>
      <h2 className='text-vsm w-1/2'>
        Use the 'transform-cpu' utility to force things back to the CPU if you
        need to und this conditionally.
      </h2>

      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the transform-{'[<value>]'} syntax to set the transform based on a
        completely custom value:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-between gap-3 py-2 text-gray-300  '>
        <h2 className='text-vsm'>transform-[matrix(1,2,3,4,5,6)]</h2>
        <div className='w-40 h-34 rounded-[0.3em] border-2 border-dotted border-gray-500'>
          <img
            src='/public/Images/mountain.jpg'
            className='rounded-[0.3em] h-full w-full'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Transform;
