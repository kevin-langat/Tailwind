function FilterDropShadow() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        filter: drop-shadow()
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for applying drop-shadow filters to an element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'drop-shadow-sm' and 'drop-shadow-xl' to add a drop
        shadow to an element:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex items-center flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>drop-shadow-md</h2>
          <div class='filter drop-shadow-md/50'>
            <svg
              class='h-16 w-16 text-sky-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 000 2h10a1 1 0 100-2H5z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>

        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>drop-shadow-lg</h2>
          <div class='filter drop-shadow-lg/50'>
            <svg
              class='h-16 w-16 text-sky-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 000 2h10a1 1 0 100-2H5z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>drop-shadow-xl</h2>
          <div class='filter drop-shadow-xl/50'>
            <svg
              class='h-16 w-16 text-sky-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 000 2h10a1 1 0 100-2H5z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Changing the opacity  */}
      <h2 className='underline'>Changing the opacity</h2>
      <h2 className='text-vsm'>
        Use the opacity modifier to adjust the opacity of the drop shadow:
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20  bg-gray-50 h-30 rounded-[0.3em] flex items-center flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>drop-shadow-xl</h2>
          <div class='filter drop-shadow-xl'>
            <svg
              class='h-16 w-16 text-sky-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 000 2h10a1 1 0 100-2H5z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>

        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>drop-shadow-xl/25</h2>
          <div class='filter drop-shadow-xl/25'>
            <svg
              class='h-16 w-16 text-sky-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 000 2h10a1 1 0 100-2H5z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>drop-shadow-xl/50</h2>
          <div class='filter drop-shadow-xl/50'>
            <svg
              class='h-16 w-16 text-sky-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 000 2h10a1 1 0 100-2H5z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <h2 className=' w-1/2 text-vsm bg-clip-text text-transparent bg-linear-to-br from-orange-400 to-green-600 '>
        The default drop shadow opacities are quite low (15% or less), so
        increasing the opacity (to like 50%) will make the drop shadows more
        pronounced.
      </h2>
      <h2 className='underline'>Setting the shadow color</h2>
      <h2 className='w-1/2 text-vsm'>
        Use utilities like drop-shadow-indigo-500 and drop-shadow-cyan-500/50 to
        change the color of a drop shadow
      </h2>
      <div className='w-1/2 outline-1 outline-gray-400/20 text-gray-100  bg-gray-800 h-30 rounded-[0.3em] flex items-center flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>drop-shadow-green-500</h2>
          <div class='filter drop-shadow-xl drop-shadow-green-500'>
            <svg
              class='h-16 w-16 text-sky-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 000 2h10a1 1 0 100-2H5z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>

        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm'>drop-shadow-fuchsia-500</h2>
          <div class='filter drop-shadow-xl/25 drop-shadow-fuchsia-500'>
            <svg
              class='h-16 w-16 text-sky-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 000 2h10a1 1 0 100-2H5z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <h2 className='underline'>Removing the drop-shadow</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the drop-shadow-none utility to remove an existing drop shadow from
        an element:
      </h2>
      <div className='w-1/2 @container/parent resizableVid outline-1 outline-gray-400/20 text-gray-100  bg-gray-800 h-30 rounded-[0.3em] flex items-center flex-row justify-around'>
        <div className=' flex  flex-col items-center justify-around'>
          <h2 className='text-vsm @md/parent:after:content-["-none"] after:content-["-xl"]'>
            drop-shadow
          </h2>
          <div class='filter drop-shadow-xl @md/parent:drop-shadow-none drop-shadow-green-500'>
            <svg
              class='h-16 w-16 text-sky-600'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 000 2h10a1 1 0 100-2H5z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterDropShadow;
