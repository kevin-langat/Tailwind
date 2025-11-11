function BorderStyle() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        border-style
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the style of an element's borders.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'border-solid' and 'border-dotted' to control an
        element's border style:
      </h2>
      <div className='grid grid-cols-2 place-items-center w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-solid</h2>
          <button className='bg-pink-500 border-green-500 border-2 border-solid text-vsm px-3 py-1 rounded-[0.5em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-dashed</h2>
          <button className='bg-pink-500 border-green-500 border-2 border-dashed text-vsm px-3 py-1 rounded-[0.5em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-dotted</h2>
          <button className='bg-pink-500 border-green-500 border-2 border-dotted text-vsm px-3 py-1 rounded-[0.5em]'>
            Button C
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-dashed</h2>
          <button className='bg-pink-500 border-green-500 border-2 border-double text-vsm px-3 py-1 rounded-[0.5em]'>
            Button D
          </button>
        </div>
      </div>
      {/* Removing a border */}
      <h2 className='underline'>Removing a border</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'border-none' utlity to remove an existing border from an
        element:
      </h2>
      <div className=' flex flex-col items-center justify-center w-1/5 gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-none</h2>
          <button className='bg-pink-500 border-green-500 border-2 border-none text-vsm px-3 py-1 rounded-[0.5em]'>
            Button A
          </button>
        </div>
      </div>
      {/* Setting the divide style */}
      <h2 className='underline'>Setting the divide style</h2>
      <h2 className='text-vsm'>
        Use utilities like 'divide-dashed' and 'divide-dotted' to control the
        border style between child elements:
      </h2>
      <div className='grid grid-cols-3 w-1/2  gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 place-items-center divide-fuchsia-500 divide-x-2 divide-dashed justify-center'>
        <h2 className='text-lg flex flex-col items-center justify-center bg-gray-700 w-full text-gray-400 font-sans'>
          01
        </h2>

        <h2 className='text-lg flex flex-col items-center justify-center bg-gray-700 w-full text-gray-400 font-sans'>
          02
        </h2>

        <h2 className='text-lg flex flex-col items-center justify-center bg-gray-700 w-full text-gray-400 font-sans'>
          03
        </h2>
      </div>
    </div>
  );
}

export default BorderStyle;
