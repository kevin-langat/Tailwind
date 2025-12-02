function CaretColor() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        caret-color
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling the color of the text input cursor.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'caret-rose-500' and 'caret-green-700' to change the
        color of the text input cursor:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-5  text-gray-300 py-4 '>
        <h2 className='text-vsm'>caret-purple-500</h2>
        <input
          type='text'
          className='caret-purple-500 py-0.5 outline-1 w-1/3 bg-gray-700 outline-gray-400 rounded-[0.2em] not-focus-within:outline-gray-600 pl-4'
        />
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'caret-[{'<value>'}] syntax to set the caret color based on a
        completely custom value:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-3  text-gray-300 py-4 '>
        <h2 className='text-vsm'>caret-[#00ff62]</h2>
        <input
          type='text'
          className='caret-[#00ff62] py-0.5 outline-1 w-1/3 bg-gray-700 outline-gray-400 rounded-[0.2em] not-focus-within:outline-gray-600 pl-4'
        />
      </div>
    </div>
  );
}

export default CaretColor;
