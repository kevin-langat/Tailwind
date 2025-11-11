function OutlineWidth() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        outline-width{' '}
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the width of an element's outline.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'outline' or 'outline-{'<number>'}' utlities like 'outline-2' and
        'outline-4' to set the width of an element's outline:
      </h2>
      <div className='grid grid-cols-3 place-items-center w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline</h2>
          <button className='bg-pink-500 border-green-500 outline outline-indigo-500 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-2</h2>
          <button className='bg-pink-500 border-green-500 outline-2 outline-indigo-500  text-vsm px-3 py-1 rounded-[0.5em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-4</h2>
          <button className='bg-pink-500 border-green-500 outline-4 outline-indigo-500 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button C
          </button>
        </div>
      </div>
      {/* Applying on focus*/}
      <h2 className='underline'>Applying on focus</h2>
      <h2 className='text-vsm w-1/2'>
        Prefix an 'outline-width' utlity with a variant like 'focus:*' to only
        apply the utlity in that state:
      </h2>
      <div className=' flex flex-col items-center justify-center w-1/5 gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-2 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm mb-2 text-gray-400 font-sans'>
            focus:outline-2
          </h2>
          <button className='bg-indigo-500 outline-0 outline-fuchsia-500 outline-offset-2 focus:outline-2 text-vsm px-3 py-1 rounded-[0.5em]'>
            Save Changes
          </button>
        </div>
      </div>
      {/*Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'outline-[{'<value>'}]' syntax to set the outline width based on
        a completely custom value:
      </h2>
      <div className=' flex flex-col items-center justify-center w-1/5 gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-2 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm mb-2 text-gray-400 font-sans'>
            outline-[0.2em]
          </h2>
          <button className='bg-indigo-500 outline-teal-500 outline-offset-2 outline-[0.2em] text-vsm px-3 py-1 rounded-full'>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default OutlineWidth;
