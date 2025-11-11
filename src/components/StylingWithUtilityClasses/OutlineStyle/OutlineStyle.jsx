function OutlineStyle() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        outline-style
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the style of an element's outline.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'outline-solid' and 'outline-dashed' to set the style
        of an element's outline:
      </h2>
      <div className='grid grid-cols-2 place-items-center w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-solid</h2>
          <button className='bg-gray-500 outline-green-500 outline-2 outline-solid text-vsm px-3 py-1 rounded-[0.5em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-dashed</h2>
          <button className='bg-gray-500 outline-green-500 outline-2 outline-dashed text-vsm px-3 py-1 rounded-[0.5em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-dotted</h2>
          <button className='bg-gray-500 outline-green-500 outline-2 outline-dotted text-vsm px-3 py-1 rounded-[0.5em]'>
            Button C
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-double</h2>
          <button className='bg-gray-500 outline-green-500 outline-2 outline-double text-vsm px-3 py-1 rounded-[0.5em]'>
            Button D
          </button>
        </div>
      </div>
      {/* Hiding an outline */}
      <h2 className='underline'>Hiding an outline</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'outline-hidden' utlitiy to hide the default browser outline on
        focused elements, while still preserving the outline in forced colors
        mode:
      </h2>
      <div className='w-1/2 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex flex-col items-center justify-center'>
        <h2 className='text-sm font-extrabold flex flex-col items-center justify-center text-gray-400 font-sans'>
          Email Address
        </h2>
        <input
          type='email'
          placeholder='enter email'
          className=' focus:outline-hidden placeholder:text-gray-400 pl-2 text-gray-300 py-0.5 text-vsm bg-gray-600/40 rounded-[0.4em]'
        />
      </div>
      {/* Removing  outlines */}
      <h2 className='underline'> Removing outlines</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'outline-none' utility to completely remove the default browser
        outline on focused elements:
      </h2>
      <div className='w-1/2 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex flex-col items-center justify-center'>
        <h2 className='text-sm font-extrabold flex flex-col items-center justify-center text-gray-400 font-sans'>
          Leave a comment
        </h2>
        <div className=' outline-1 focus-within:outline-indigo-500 rounded-[0.4em] bg-gray-600/50 w-1/3 p-1 flex flex-col justify-center gap-1 items-end'>
          <textarea
            placeholder='leave a comment'
            className=' focus-within:outline-none resize-none  h-20 placeholder:text-gray-400 pl-2 min-h-10 text-gray-300 py-0.5 text-vsm rounded-[0.4em] '
          />
          <button className=' text-vsm px-4 py-1 rounded-[0.4em] bg-blue-500 text-white'>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default OutlineStyle;
