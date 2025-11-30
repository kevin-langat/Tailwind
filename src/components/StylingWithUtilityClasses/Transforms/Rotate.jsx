function Rotate() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        rotate
      </h2>
      <h2 className='flex w-1/5 text-justify text-vsm'>
        Utilities for rotating elements.
      </h2>
      {/* Basic Example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use rotate-{'<number> '}utilities like rotate-45 and rotate-90 to rotate
        an element by degrees:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>rotate-45</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full rotate-45'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>rotate-90</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full rotate-90'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>rotate-210</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full rotate-210'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Using negative values */}
      <h2 className='underline'>Using negative values</h2>
      <h2 className='text-vsm w-1/2'>
        Use -rotate-{'<number>'} utilities like -rotate-45 and -rotate-90 to
        rotate an element counterclockwise by degrees:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-rotate-45</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -rotate-45'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-rotate-90</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -rotate-90'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-rotate-210</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -rotate-210'
              alt=''
            />
          </div>
        </div>
      </div>
      {/*Rotating in 3D space */}
      <h2 className='underline'>Rotating in 3D space</h2>
      <h2 className='text-vsm w-1/2'>
        Use rotate-x-{'<number>'}, rotate-y-{'<number>'}, and rotate-z-
        {'<number>'} utilities like rotate-x-50, -rotate-y-30, and rotate-z-45
        together to rotate an element in 3D space:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-10   text-gray-300 py-6 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>rotate-x-70</h2>
          <h2 className='text-vsm'>rotate-z-45</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full rotate-x-70 rotate-z-45'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>rotate-x-15</h2>
          <h2 className='text-vsm'>rotate-z-30</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full rotate-x-15 rotate-z-30'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>rotate-x-55</h2>
          <h2 className='text-vsm'>rotate-z-30</h2>
          <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full rotate-x-55 rotate-z-30'
              alt=''
            />
          </div>
        </div>
      </div>
      {/*Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the rotate-{'[<value>]'} syntax to set the rotation based on a
        completely custom value
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-between gap-4   text-gray-300 py-3 '>
        <h2 className='text-vsm'>rotate-[3.142rad]</h2>

        <div className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'>
          <img
            src='/public/Images/mountain.jpg'
            className='rounded-[0.3em] h-full w-full rotate-[3.142rad]'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Rotate;
