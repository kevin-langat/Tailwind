function BackgroundColor() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        background-color
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the an element's background color.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm'>
        Use utilities like 'bg-white', 'bg-indigo-500', and 'bg-transparent' to
        control the background color of an element{' '}
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>bg-cyan-500</h2>
          <button className='bg-cyan-500 px-3 py-1 rounded-[0.3em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>bg-blue-500</h2>
          <button className=' bg-blue-500 px-3 py-1 rounded-[0.3em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>bg-pink-500</h2>
          <button className='bg-pink-500 px-3 py-1 rounded-[0.3em]'>
            Button C
          </button>
        </div>
      </div>
      {/* Changing the opacity */}
      <h2 className='underline'>Changing the opacity</h2>
      <h2 className='text-vsm'>
        Use the color opacity modifier to control the opacity of an element's
        background color:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>bg-green-500/100</h2>
          <button className='bg-green-500/100 px-3 py-1 rounded-[0.3em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>bg-green-500/75</h2>
          <button className=' bg-green-500/75 px-3 py-1 rounded-[0.3em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>bg-green-500/50</h2>
          <button className='bg-green-500/50 px-3 py-1 rounded-[0.3em]'>
            Button C
          </button>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm'>
        Use the bg-[{'<value>'}] syntax to set the background on a completely
        custom value:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>bg-[#0000ff]</h2>
          <button className='bg-[#0000ff] px-3 py-1 rounded-[0.3em]'>
            Button A
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>bg-[#d900ff]</h2>
          <button className=' bg-[#d900ff] px-3 py-1 rounded-[0.3em]'>
            Button B
          </button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>bg-[#ffc400]</h2>
          <button className='bg-[#ffc400] px-3 py-1 rounded-[0.3em]'>
            Button C
          </button>
        </div>
      </div>
      {/* Applying on hover */}
      <h2 className='underline'>Applying on hover</h2>
      <h2 className='text-vsm'>
        Prefix a 'background-color' utlity with the variant 'hover:' to only
        apply the utilty in that state:
      </h2>

      <button className='bg-[#0000ff] px-3 py-1 hover:bg-orange-500 rounded-[0.3em]'>
        Button A
      </button>

      {/* Customizing your theme */}
      <h2 className='underline'>Customizing your theme</h2>
      <h2 className='text-vsm'>
        Use the '--color-*' theme variables to customize the color utlities in
        your project:
      </h2>
      <div className=' bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className='text-orange-600 text-vsm font-sans '>
            @theme{'{'} <br />
            {'--color-dark-blue: #0004ff;'} <br />
            {'}'}
          </h2>
        </div>
      </div>
      <button className='bg-dark-blue px-3 py-1  rounded-[0.3em]'>
        Button A
      </button>
    </div>
  );
}

export default BackgroundColor;
