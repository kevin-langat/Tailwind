function Cursor() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        cursor
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling the cursor style when hovering over an
        element.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like cursor-pointer and cursor-grab to control which
        cursor is displayed when hovering over an element:
      </h2>
      <div className='w-1/3 outline-1 px-2  place-items-center outline-gray-400 bg-gray-100 dark:bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-5 *:even:-mt-4 text-gray-300 py-4 '>
        <h2 className='text-vsm'>cursor-pointer</h2>
        <button className='w-1/2 shadow shadow-gray-400 py-0.5 cursor-pointer bg-indigo-500 outline-1 outline-gray-600 rounded-[0.3em] text-gray-300'>
          Make Payment
        </button>
        <h2 className='text-vsm'>cursor-progress</h2>
        <button className='w-1/2 shadow shadow-gray-400 py-0.5 cursor-progress bg-indigo-500 opacity-75 outline-1 outline-gray-600 rounded-[0.3em] text-gray-300'>
          Processing Payment
        </button>
        <h2 className='text-vsm'>cursor-not-allowed</h2>
        <button className='w-1/2 shadow shadow-gray-400 py-0.5 cursor-not-allowed bg-indigo-500  outline-1 outline-gray-600 rounded-[0.3em] text-gray-300'>
          Payment Sucessfull
        </button>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the cursor-{'[<value>]'} syntax to set the cursor based on a
        completely custom value:
      </h2>
      <div className='w-1/3 cursor-[url("/cursors/test.cur"),_pointer] outline-1 px-2  place-items-center outline-gray-400 bg-gray-100 dark:bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-5 *:even:-mt-4 text-gray-300 py-4 '>
        <h2 className='text-vsm'>cursor-[url(hand.cur),_pointer]</h2>
        <button className='w-1/2 shadow shadow-gray-400 py-0.5 cursor-[url("/cursors/test.cur"),_pointer] bg-indigo-500 outline-1 outline-gray-600 rounded-[0.3em] text-gray-300'>
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default Cursor;
