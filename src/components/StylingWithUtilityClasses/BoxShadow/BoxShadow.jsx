function BoxShadow() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        box-shadow
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the box shadow of a text element
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'shadow-sm' and 'shadow-lg' to apply different sized
        box shadows to an element:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>shadow-md</h2>
          <div className=' bg-gray-100 shadow-md w-30 h-20 rounded-[0.4em]'></div>
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>shadow-lg</h2>
          <div className=' bg-gray-100 shadow-lg w-30 h-20 rounded-[0.4em]'></div>
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>shadow-xl</h2>
          <div className=' bg-gray-100 shadow-xl w-30 h-20 rounded-[0.4em]'></div>
        </div>
      </div>
      {/* Changing the opacity */}
      <h2 className='underline'>Changing the opacity</h2>
      <h2 className='text-vsm w-1/2'>
        Use the opacity modifier to adjust the opacity of the box shadow:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>shadow-xl/10</h2>
          <div className=' bg-gray-100 shadow-xl/10 w-30 h-20 rounded-[0.4em]'></div>
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>shadow-xl/20</h2>
          <div className=' bg-gray-100 shadow-xl/20 w-30 h-20 rounded-[0.4em]'></div>
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>shadow-xl/40</h2>
          <div className=' bg-gray-100 shadow-xl/40 w-30 h-20 rounded-[0.4em]'></div>
        </div>
      </div>
      <h2 className='text-vsm w-1/2 bg-clip-text text-transparent bg-radial from-orange-500 to-fuchsia-500'>
        The default shadow opacities are quite low (25% or less), so increasing
        the opacity will make the box shadows more pronounced.
      </h2>

      {/* Setting the shadow color */}
      <h2 className='underline'>Setting the shadow color</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'shadow-indigo-500' and 'shadow-cyan-500/50' to
        change the color of a box shadow:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-800 h-20 rounded-[0.3em] flex flex-row justify-around items-center'>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>shadow-cyan/50</h2>
          <button className=' bg-sky-500 shadow-lg shadow-cyan-500/50 w-18 h-8 rounded-[0.4em]'>
            Continue
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>shadow-blue-500/50</h2>
          <button className=' bg-sky-500 shadow-lg shadow-blue-500/50 w-18 h-8 rounded-[0.4em]'>
            Continue
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>shadow-indigo-500/50</h2>
          <button className=' bg-sky-500 shadow-lg shadow-indigo-500/50 w-18 h-8 rounded-[0.4em]'>
            Continue
          </button>
        </div>
      </div>

      {/* Adding an inset shadow */}
      <h2 className='underline'>Adding an inset shadow</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'inset-shadow-xs' and 'inset-shadow-sm' to apply an
        inset box shadow to an element:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>inset-shadow-2xs</h2>
          <div className=' bg-gray-100 inset-shadow-2xs   w-30 h-20 rounded-[0.4em]'></div>
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>inset-shadow-xs </h2>
          <div className=' bg-gray-100 inset-shadow-xs w-30 h-20 rounded-[0.4em]'></div>
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>inset-shadow-sm</h2>
          <div className=' bg-gray-100 inset-shadow-sm w-30 h-20 rounded-[0.4em]'></div>
        </div>
      </div>
      {/*Settting the inset shadow color */}
      <h2 className='underline'>Settting the inset shadow color</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'inset-shadow-indigo-500' and
        'inset-shadow-cyan-500/50' to change the color of an inset box shadow:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20 bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>inset-shadow-indigo-500</h2>
          <div className=' bg-gray-100 inset-shadow-sm inset-shadow-indigo-500   w-30 h-20 rounded-[0.4em]'></div>
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>inset-shadow-cyan-500/50 </h2>
          <div className=' bg-gray-100 inset-shadow-sm inset-shadow-cyan-500/50 w-30 h-20 rounded-[0.4em]'></div>
        </div>
      </div>
      <h2 className='text-vsm w-1/2 bg-clip-text text-transparent bg-radial from-orange-500 to-fuchsia-500'>
        By default colored shadows have an opacity of 100% but you can adjust
        this using the opacity modifier.
      </h2>
      {/*Adding a ring */}
      <h2 className='underline'>Adding a ring</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'ring' or 'ring-[{'<number>'}]' utilities like 'ring-2' and 'ring-4'
        to apply a solid box-shadow to an element:
      </h2>

      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-800 h-20 rounded-[0.3em] flex flex-row justify-around items-center'>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>ring</h2>
          <button className=' bg-sky-500 ring ring-gray-200 w-18 h-8 rounded-[0.4em]'>
            Modify
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>ring-2</h2>
          <button className=' bg-sky-500 ring-2 ring-gray-200 w-18 h-8 rounded-[0.4em]'>
            Modify
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>ring-4</h2>
          <button className=' bg-sky-500 ring-4 ring-gray-200 w-18 h-8 rounded-[0.4em]'>
            Modify
          </button>
        </div>
      </div>
      {/*Adding a ring color */}
      <h2 className='underline'>Adding a ring color</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'ring-indigo-500' and 'ring-cyan-500/50' to change
        the color of the ring:
      </h2>

      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-800 h-20 rounded-[0.3em] flex flex-row justify-around items-center'>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>ring-fuchsia-500</h2>
          <button className=' text-gray-200 ring-fuchsia-500 ring-2 bg-red-500 w-18 h-8 rounded-[0.4em]'>
            Delete
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>ring-indigo-500</h2>
          <button className=' text-gray-200 ring-indigo-500 ring-2 bg-red-500 w-18 h-8 rounded-[0.4em]'>
            Delete
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>ring-sky-500 </h2>
          <button className=' text-gray-200 ring-sky-500 ring-2 bg-red-500 w-18 h-8 rounded-[0.4em]'>
            Delete
          </button>
        </div>
      </div>
      <h2 className='text-vsm w-1/2 bg-clip-text text-transparent bg-radial from-orange-500 to-fuchsia-500'>
        By default ring also have 100% opacity but it can be adjusted by using
        color modifier
      </h2>
      {/*Adding an inset ring */}
      <h2 className='underline'>Adding an inset ring</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'inset-ring' or 'inset-ring-{'<number>'}' utilities like
        'inset-ring-2' and 'inset-ring-2' and 'inset-ring-4' to apply a solid
        inset box-shadow to an element:
      </h2>

      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-800 h-20 rounded-[0.3em] flex flex-row justify-around items-center'>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>inset-ring</h2>
          <button className=' text-gray-200 inset-ring bg-sky-500 w-18 h-8 rounded-[0.4em]'>
            Send
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>inset-ring-2</h2>
          <button className=' text-gray-200 ring-2 bg-sky-500 w-18 h-8 rounded-[0.4em]'>
            Send
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>inset-ring-4</h2>
          <button className=' text-gray-200 inset-ring-4 bg-sky-500 w-18 h-8 rounded-[0.4em]'>
            Delete
          </button>
        </div>
      </div>
      <h2 className='text-vsm w-1/2 bg-clip-text text-transparent bg-radial from-orange-500 to-fuchsia-500'>
        By default inset ring match the 'currehtColor' of an element they are
        applied to.
      </h2>
      {/*Setting the inset ring color */}
      <h2 className='underline'>Setting the inset ring color</h2>
      <h2 className='text-vsm w-1/2'>
        Use utlities like 'inset-ring-indigo-500' and 'inset-cyan-500/50' to
        change the color of an inset ring:
      </h2>

      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-800 h-20 rounded-[0.3em] flex flex-row justify-around items-center'>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>inset-ring-fuchsia-500</h2>
          <button className=' text-gray-200 inset-ring-2 inset-ring-fuchsia-500 bg-sky-500 w-18 h-8 rounded-[0.4em]'>
            Send
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>inset-ring-indigo-500</h2>
          <button className=' text-gray-200 ring-2 inset-ring-indigo-500 bg-sky-500 w-18 h-8 rounded-[0.4em]'>
            Send
          </button>
        </div>
        <div className=' flex  flex-col items-center justify-around gap-2'>
          <h2 className='text-vsm text-gray-300'>inset-ring-orange-500</h2>
          <button className=' text-gray-200 inset-ring-2 inset-ring-orange-500 bg-sky-500 w-18 h-8 rounded-[0.4em]'>
            Delete
          </button>
        </div>
      </div>
      {/* Removing a box shadow */}
      <h2 className='underline'> Removing a box shadow</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'shadow-none', 'inset-shadow-none', 'ring-0' and 'inset-ring-0'
        utlities to remove an existing box shadow from an element:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>shadow-none</h2>
          <div className=' bg-gray-100 shadow-none w-30 h-20 rounded-[0.4em]'></div>
        </div>
      </div>
      {/*Using a custom value*/}
      <h2 className='underline'> Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'shadow-[{'<value>'}]', 'inset-shadow-[{'<value>'}]',
        'ring-[{'<value>'}]', and 'inset-ring-{'[<value>]'}' to set the box
        shadow based on a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>shadow-[0_5px_15px_rgba(0,0,0,0.25)]</h2>
          <div className=' bg-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.25)] w-30 h-20 rounded-[0.4em]'></div>
        </div>
      </div>
      {/*Customing Shadows*/}
      <h2 className='underline'>Customing Shadows</h2>
      <h2 className='text-vsm w-1/2'>
        Use the '--shadow-*' and '--inset-shadow-*' theme variables to customize
        the box shadows utilities in your project
      </h2>
      <div className=' bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className='text-orange-600 text-vsm font-sans '>
            @theme{'{'} <br />
            {'--shadow-3xl: 0 35px 35px rgba(0, 0, 0, 0.25);'} <br />
            {'--inset-shadow-md: inset 0 3px 5px rgba(0, 0, 0, 0.25);'} <br />
            {'}'}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default BoxShadow;
