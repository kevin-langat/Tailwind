function Scale() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        scale
      </h2>
      <h2 className='flex w-1/5 text-justify text-vsm'>
        Utilities for scaling elements.
      </h2>
      {/* Basic Example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use scale-{'<number>'} utilities like 'scale-75' and 'scale-150' to
        scale an element by a percentage of its original size
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>scale-75</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full scale-75'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>scale-100</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full scale-100'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>scale-125</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full scale-125'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Scaling on the x-axis */}
      <h2 className='underline'>Scaling on the x-axis</h2>
      <h2 className='text-vsm w-1/2'>
        Use the scale-x-{'<number>'} utilities like scale-x-75 and -scale-x-150
        to scale an element on the x-axis by a percentage of its original width:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>scale-x-75</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full scale-x-75'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>scale-x-125</h2>
          <div className='w-24 h-24 border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className=' h-full w-full scale-x-125'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-scale-x-75</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full scale-x-75'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Scaling on the y-axis */}
      <h2 className='underline'>Scaling on the y-axis</h2>
      <h2 className='text-vsm w-1/2'>
        Use the scale-y-{'<number>'} utilities like scale-y-75 and scale-y-150
        to scale an element on the y-axis by a percentage of its original
        height:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>scale-y-75</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full scale-y-75'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>scale-y-100</h2>
          <div className='w-24 h-24 border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className=' h-full w-full scale-y-100'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>scale-y-125</h2>
          <div className='w-24 h-24 border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className=' h-full w-full scale-y-125'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Using negative values */}
      <h2 className='underline'>Using negative values</h2>
      <h2 className='text-vsm w-1/2'>
        Use -scale-{'<number>'}, -scale-x-{'<number>'} or -scale-y-{'<number> '}
        utilities like -scale-x-75 and -scale-125 to mirror and scale down an
        element by a percentage of its original size:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>scale-y-75</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -scale-x-75'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-scale-100</h2>
          <div className='w-24 h-24 border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className=' h-full w-full -scale-100'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-scale-y-125</h2>
          <div className='w-24 h-24 border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className=' h-full w-full -scale-y-125'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Using custom value */}
      <h2 className='underline'>Using custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use -scale-{'<number>'}, -scale-x-{'<number>'} or -scale-y-{'<number> '}
        Use the scale-{'[<value>]'} syntax to set the scale based on a
        completely custom value:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-between gap-10   text-gray-300 py-6 '>
        <h2 className='text-vsm'>scale-[1.45]</h2>
        <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
          <img
            src='/public/Images/mountain.jpg'
            className='rounded-[0.3em] h-full w-full scale-[1.45]'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Scale;
