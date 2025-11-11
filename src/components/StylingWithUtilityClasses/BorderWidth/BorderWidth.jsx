function BorderWidth() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        border-width
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the width of an element's borders.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm'>
        Use 'border' or 'border-['{'<number>'}']' utilities like 'border-2' and
        'border-4' to set the border width for all sides of an element.
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border</h2>
          <button className='bg-transparent px-3 border border-indigo-600 w-15 h-15 py-1 '></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-2</h2>
          <button className=' bg-transparent border-indigo-500 px-3 w-15 h-15 py-1 border-2'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-4</h2>
          <button className='bg-transparent border-4 border-indigo-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-8</h2>
          <button className='border-8 bg-transparent border-indigo-500 px-3 w-15 h-15 py-1'></button>
        </div>
      </div>
      <h2 className='underline'>Individual sides</h2>
      <h2 className='text-vsm'>
        Use utlities like 'border-r' and 'border-t-4' to set the border width
        for one side of an element:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-t-4</h2>
          <button className='border bg-transparent border-t-4 border-t-orange-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-r-4</h2>
          <button className='border bg-transparent border-r-4 border-r-orange-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-b-4</h2>
          <button className='border bg-transparent border-b-4 border-b-orange-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-l-4</h2>
          <button className='border bg-transparent border-l-4 border-l-orange-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
      </div>
      <h2 className='underline'>Horizontal and vertical sides</h2>
      <h2 className='text-vsm'>
        Use utilities like 'border-x' and 'border-y-4' to set the border width
        on two sides of an element at same time:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-x-4</h2>
          <button className='border bg-transparent border-x-4 border-x-green-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-y-4</h2>
          <button className='border bg-transparent border-y-4 border-y-green-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
      </div>
      <h2 className=' underline'>Using logical properties</h2>
      <h2 className='text-vsm'>
        Use utilities like 'border-s' and 'border-e-4' to set the
        'border-inline-start-width' and 'border-inline-end-width' logical
        properties,
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div dir='ltr'>
          <h2 className='text-vsm text-gray-400 font-sans'>left-to-right</h2>
          <button className='border bg-transparent border-s-4 border-s-green-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
        <div dir='rtl'>
          <h2 className='text-vsm text-gray-400 font-sans'>Right-to-left</h2>
          <button className='border bg-transparent border-s-4 border-s-green-500 border-gray-500 px-3 w-15 h-15 py-1'></button>
        </div>
      </div>
      {/* Beteween children */}
      <h2 className='underline'>Beteween children</h2>
      <h2 className='text-vsm'>
        Use utilities like 'divide-x' and 'divide-x-4' to add borders between
        children{' '}
      </h2>
      <div className='grid grid-cols-3 w-1/2  gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 place-items-center divide-dark-blue divide-x-4 justify-center'>
        <h2 className='text-lg flex flex-col items-center justify-center bg-gray-500 w-full text-gray-400 font-sans'>
          01
        </h2>

        <h2 className='text-lg flex flex-col items-center justify-center bg-gray-500 w-full text-gray-400 font-sans'>
          02
        </h2>

        <h2 className='text-lg flex flex-col items-center justify-center bg-gray-500 w-full text-gray-400 font-sans'>
          03
        </h2>
      </div>
      {/* Reversing children order */}
      <h2 className=' underline'>Reversing children order</h2>
      <h2 className='text-vsm w-1/2'>
        If your elements are in reverse order (using say 'flex-row-reverse') ,
        use the 'divide-x-reverse' or 'divide-y-reverse' utilities to ensure the
        border is added to the correct side of each element:
      </h2>
      <div className='flex flex-col-reverse w-1/2  bg-gray-800 outline-1 outline-gray-500 px-3 py-1 place-items-center gap-2  justify-center divide-y-reverse divide-y-4 divide-orange-500 '>
        <h2 className='text-lg flex flex-col items-center justify-center bg-gray-500 w-full text-gray-400 font-sans'>
          01
        </h2>
        <h2 className='text-lg flex flex-col items-center justify-center bg-gray-500 w-full text-gray-400 font-sans'>
          02
        </h2>
        <h2 className='text-lg flex flex-col items-center justify-center bg-gray-500 w-full text-gray-400 font-sans'>
          03
        </h2>
      </div>
      <h2 className=' underline'>Using a custom value</h2>
      <h2 className='text-vsm'>
        Use the 'border-{'[<value>]'} syntax to set the border width based on a
        completely custom value:
      </h2>
      <div className='flex w-1/2 justify-center gap-15 bg-gray-800 outline-1 outline-gray-500 px-3 py-1 flex-row-justify-center'>
        <div>
          <h2 className='text-vsm text-gray-400 font-sans'>border-[1vw]</h2>
          <button className=' bg-transparent border-[1vw] border-sky-500  px-3 w-15 h-15 py-1'></button>
        </div>
      </div>
    </div>
  );
}

export default BorderWidth;
