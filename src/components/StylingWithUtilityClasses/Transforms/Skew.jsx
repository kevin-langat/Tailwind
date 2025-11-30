function Skew() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        skew
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for skewing elements with transform.
      </h2>
      {/* Basic Example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use skew-{'<number>'} utilities like 'skew-4' and 'skew-10' to skew an
        element on both axes:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>skew-3</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full skew-3'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>skew-6</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full skew-6'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>skew-12</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full skew-12'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Using negative values */}
      <h2 className='underline'>Using negative values</h2>
      <h2 className='text-vsm w-1/2'>
        Use -skew-{'<number>'} utilities like '-skew-4' and '-skew-10' to skew
        an element on both axes:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-skew-3</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -skew-3'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-skew-6</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -skew-6'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-skew-12</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -skew-12'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Skewing on the x-axis */}
      <h2 className='underline'>Skewing on the x-axis</h2>
      <h2 className='text-vsm w-1/2'>
        Use skew-x-{'<number>'} utilities like skew-x-4 and -skew-x-10 to skew
        an element on the x-axis:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-skew-x-12</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -skew-x-12'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>skew-x-6</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full skew-x-6'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>skew-x-12</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full skew-x-12'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Skewing on the y-axis */}
      <h2 className='underline'>Skewing on the y-axis</h2>
      <h2 className='text-vsm w-1/2'>
        Use skew-y-{'<number>'} utilities like skew-y-4 and -skew-y-10 to skew
        an element on the y-axis:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-skew-y-12</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -skew-y-12'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>skew-y-6</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full skew-y-6'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>skew-y-12</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full skew-y-12'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the skew-{'[<value>]'} syntax to set the skew based on a completely
        custom value
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-between gap-4   text-gray-300 py-3 '>
        <h2 className='text-vsm'>skew-[3rad]</h2>
        <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
          <img
            src='/public/Images/mountain.jpg'
            className='rounded-[0.3em] h-full w-full skew-[3rad]'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Skew;
