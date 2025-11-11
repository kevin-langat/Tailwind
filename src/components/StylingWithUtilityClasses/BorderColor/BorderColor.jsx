function BorderColor() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        border-color
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the color of an element's borders.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'border-rose-500' and 'border-line-100' to control
        the border color of an element:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-indigo-600 w-15
          </h2>
          <button className='bg-transparent px-3 border border-indigo-600 w-15 h-15 py-1 '></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-purple-500
          </h2>
          <button className=' bg-transparent border-purple-500 px-3 w-15 h-15 py-1 border-2'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-sky-500 </h2>
          <button className='bg-transparent border-4 border-sky-500 px-3 w-15 h-15 py-1'></button>
        </div>
      </div>
      {/* changing the opacity */}
      <h2 className='underline'>Changing the opacity</h2>
      <h2 className='text-vsm w-1/2'>
        Use the color opacity modifier to controll the opacity of an element's
        border.
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-indigo-400/100
          </h2>
          <button className='bg-transparent px-3 border border-indigo-400/100 w-15 h-15 py-1 '></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-purple-500/75
          </h2>
          <button className=' bg-transparent border-purple-500/75 px-3 w-15 h-15 py-1 border-2'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-sky-500/50
          </h2>
          <button className='bg-transparent border-4 border-sky-500/50 px-3 w-15 h-15 py-1'></button>
        </div>
      </div>
      <h2 className='underline'>Individual sides</h2>
      <h2 className='text-vsm w-1/2'>
        Use utlities like 'border-r-orange-500' and 'border-t-lime-500' to set
        the border color for one side of an element:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-t-orange-500
          </h2>
          <button className='border bg-transparent border-t-4 border-t-orange-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-r-orange-500
          </h2>
          <button className='border bg-transparent border-r-4 border-r-orange-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-b-orange-500
          </h2>
          <button className='border bg-transparent border-b-4 border-b-orange-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-l-orange-500
          </h2>
          <button className='border bg-transparent border-l-4 border-l-orange-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
      </div>
      <h2 className='underline'>Horizontal and vertical sides</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'border-x-indigo-500' and 'border-y-lime-200' to set
        the border color on two sides of an element at the same time:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-x-fuchsia-500
          </h2>
          <button className='border bg-transparent border-x-4 border-x-fuchsia-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>
            border-y-teal-500
          </h2>
          <button className='border bg-transparent border-y-4 border-y-teal-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
      </div>
      <h2 className='underline'>Using logical properties</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'border-s-indigo-500' and 'border-e-lime-100' to set
        the 'border-inline-start-color' and 'border-inline-end-color' logical
        properties which map to either the left or the right border based on the
        text dfirection:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div dir='ltr'>
          <h2 className='text-vsm text-gray-400 font-sans'>Right to left</h2>
          <button className='border bg-transparent border-s-4 border-s-pink-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div dir='rtl'>
          <h2 className='text-vsm text-gray-400 font-sans'>Right to left</h2>
          <button className='border bg-transparent border-s-4 border-s-pink-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
      </div>

      {/* Between children */}
      <h2 className='underline'>Between children</h2>
      <h2 className='text-vsm'>
        Use utilities like 'divide-x' and 'divide-x-4' to add borders between
        children{' '}
      </h2>
      <div className='grid grid-cols-3 w-1/2  gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 place-items-center divide-fuchsia-500 divide-x-4 justify-center'>
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
      {/* Applying on focus */}
      <h2 className='underline'>Applying on focus</h2>
      <h2 className='text-vsm'>
        Use utilities like 'divide-x' and 'divide-x-4' to add borders between
        children{' '}
      </h2>
      <div className='w-1/2 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex flex-col items-center justify-center'>
        <h2 className='text-sm font-extrabold flex flex-col items-center justify-center text-gray-400 font-sans'>
          Email Address
        </h2>
        <input
          type='email'
          placeholder='enter email'
          className='focus:border-green-500 placeholder:text-gray-400 border-1 pl-2 text-gray-300 py-0.5 text-vsm  outline-1 outline-gray-600 bg-gray-700/20 rounded-[0.4em]'
        />
      </div>
    </div>
  );
}

export default BorderColor;
