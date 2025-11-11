export default function OutlineColor() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        outline-color
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the color of an element's outline.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'outline-rose-500' and 'outline-lime-100' to control
        the color of an element's outline
      </h2>
      <div className='grid grid-cols-3 place-items-center w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            outline-orange-500
          </h2>
          <button className='bg-gray-500 border-green-500 outline outline-orange-500 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>outline-cyan-500</h2>
          <button className='bg-gray-400 border-green-500 outline-2 outline-cyan-500  text-vsm px-3 py-1 rounded-[0.5em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            outline-indigo-500
          </h2>
          <button className='bg-gray-400 border-green-500 outline-2 outline-indigo-500 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button C
          </button>
        </div>
      </div>
      {/* Changing the opacity */}
      <h2 className='underline'>Changing the opacity</h2>
      <h2 className='text-vsm w-1/2'>
        Use the color opacity modifier to control the opacity of an element's
        outline color:
      </h2>
      <div className='grid grid-cols-3 place-items-center w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            outline-orange-500/90
          </h2>
          <button className='bg-gray-500 border-green-500 outline-2 outline-orange-500/90 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            outline-orange-500/75
          </h2>
          <button className='bg-gray-400 border-green-500 outline-2 outline-orange-500/75  text-vsm px-3 py-1 rounded-[0.5em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            outline-orange-500/50
          </h2>
          <button className='bg-gray-400 border-green-500 outline-2 outline-orange-500/50 text-vsm px-3 py-1 rounded-[0.5em]'>
            Button C
          </button>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'outline-[{'<value>'}]' syntax to set the outline color based on
        completely custom value:
      </h2>
      <div className=' flex flex-col items-center justify-center w-1/5  gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            outline-[#00ffea]
          </h2>
          <button className='bg-gray-500 mt-2 outline-offset-2 border-green-500 outline-2 outline-[#00ffea] text-vsm px-3 py-1 rounded-[0.5em]'>
            Button A
          </button>
        </div>
      </div>
    </div>
  );
}
