function BorderRadius() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        border-radius
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the border radius of an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm'>
        Use utilities like 'rounded-sm' and 'rounded-md' to apply different
        border radius sizes to an element:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-sm</h2>
          <button className='bg-cyan-500 px-3 w-15 h-15 py-1 rounded-sm'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-md</h2>
          <button className='bg-cyan-500 px-3 w-15 h-15 py-1 rounded-md'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-lg</h2>
          <button className='bg-cyan-500 px-3 w-15 h-15 py-1 rounded-lg'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-xl</h2>
          <button className='bg-cyan-500 px-3 w-15 h-15 py-1 rounded-xl'></button>
        </div>
      </div>
      {/* Rounding sides separately */}
      <h2 className='underline'>Rounding sides separately</h2>
      <h2 className='text-vsm'>
        Use utilities like 'rounded-t-md' and 'rounded-r-lg' to only round one
        side of an element:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-t-2xl</h2>
          <button className='bg-cyan-500 px-3 w-15 h-15 py-1 rounded-t-2xl'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-r-2xl</h2>
          <button className='bg-cyan-500 px-3 w-15 h-15 py-1 rounded-r-2xl'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-b-2xl</h2>
          <button className='bg-cyan-500 px-3 w-15 h-15 py-1 rounded-b-2xl'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-l-2xl</h2>
          <button className='bg-cyan-500 px-3 w-15 h-15 py-1 rounded-l-2xl'></button>
        </div>
      </div>
      {/* Rounding corners separately */}
      <h2 className='underline'>Rounding corners separately</h2>
      <h2 className='text-vsm'>
        Use utilities like 'rounded-tr-md' and 'rounded-tl-lg' utilities to only
        round one corner of an element:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-tl-2xl</h2>
          <button className='bg-fuchsia-500 px-3 w-15 h-15 py-1 rounded-tl-2xl'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-tr-2xl</h2>
          <button className='bg-fuchsia-500 px-3 w-15 h-15 py-1 rounded-tr-2xl'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-br-2xl</h2>
          <button className='bg-fuchsia-500 px-3 w-15 h-15 py-1 rounded-br-2xl'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-bl-2xl</h2>
          <button className='bg-fuchsia-500 px-3 w-15 h-15 py-1 rounded-bl-2xl'></button>
        </div>
      </div>
      {/* Using logical properties */}
      <h2 className='underline'>Using logical properties</h2>
      <h2 className='text-vsm'>
        Use utilities like 'rounded-s-md' and 'rounded-se-lg' utilities to set
        the border radius using logical properties, which map to the appropriate
        corners based on the text direction:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div dir='ltr'>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-s-xl</h2>
          <button className='bg-blue-500 px-3 w-15 h-15 py-1 rounded-s-xl'>
            ltr
          </button>
        </div>
        <div dir='rtl'>
          <h2 className='text-vsm text-gray-400 font-sans'>rounded-s-xl</h2>
          <button className='bg-blue-500 px-3 w-15 h-15 py-1 rounded-s-xl'>
            rtl
          </button>
        </div>
      </div>
      {/*Creating pill buttons  */}
      <h2 className='underline'>Creating pill buttons</h2>
      <h2 className='text-vsm'>
        Use the 'rounded-full' utility to create pill buttons
      </h2>
      <div className=' w-[15%] bg-gray-800 outline-1 outline-gray-500 px-3 py-1'>
        <button className='bg-sky-400 px-3 text-vsm w-30 h-7 py-1 rounded-full'>
          Save Changes
        </button>
      </div>
      {/*Removing the border radius  */}
      <h2 className='underline'>Removing the border radius</h2>
      <h2 className='text-vsm'>
        Use the 'rounded-none' utility to remove an existing border radius from
        an element:
      </h2>
      <div className=' w-[15%] bg-gray-800 outline-1 outline-gray-500 px-3 py-1'>
        <button className='bg-sky-400 px-3 text-vsm w-30 h-7 py-1 rounded-none'>
          Save Changes
        </button>
      </div>
      {/*Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm'>
        Use the 'rounded-{'[<value>]'} syntax to set the border based on a
        completely custom value:
      </h2>
      <div className=' w-[15%] bg-gray-800 outline-1 outline-gray-500 px-3 py-1'>
        <button className='bg-sky-400 px-3 text-vsm w-30 h-7 py-1 rounded-[0.4em]'>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default BorderRadius;
