function UserSelect() {
  const text = window.navigator.clipboard.readText();
  console.log(text);
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        user-select
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Use the select-none utility to prevent selecting text in an element and
        its children.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Disabling text-selection</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'select-none' utility to prevent selecting textin an element and
        its children:
      </h2>
      <div className='bg-gray-800 gap-6 *:even:-mt-4 py-5 flex flex-col items-center justify-center w-3/5 rounded-[0.2em] text-gray-300'>
        <h2 className='text-vsm select-none bg-gray-700 rounded-[0.2em] px-4 py-2 w-1//2'>
          The quick brown fox jumps over the lazy dog
        </h2>
      </div>
      {/*Allowing text-selection*/}
      <h2 className='underline'>Allowing text selection</h2>
      <h2 className='text-vsm w-1/2'>
        Use the select-text utility to allow selecting text in an element and
        its children:
      </h2>
      <div className='bg-gray-800 gap-6 *:even:-mt-4 py-5 flex flex-col items-center justify-center w-3/5 rounded-[0.2em] text-gray-300'>
        <h2 className='text-vsm select-text bg-gray-700 rounded-[0.2em] px-4 py-2 w-1//2'>
          The quick brown fox jumps over the lazy dog
        </h2>
      </div>
      {/*Selecting all text in one click*/}
      <h2 className='underline'>Selecting all text in one click</h2>
      <h2 className='text-vsm w-1/2'>
        Use the select-all utility to automatically select all the text in an
        element when a user clicks:
      </h2>
      <div className='bg-gray-800 gap-6 *:even:-mt-4 py-5 flex flex-col items-center justify-center w-3/5 rounded-[0.2em] text-gray-300'>
        <h2 className='text-vsm select-all bg-gray-700 rounded-[0.2em] px-4 py-2 w-1//2'>
          The quick brown fox jumps over the lazy dog
        </h2>
      </div>
      {/*Using auto select behavior*/}
      <h2 className='underline'>Using auto select behavior</h2>
      <h2 className='text-vsm w-1/2'>
        Use the select-auto utility to use the default browser behavior for
        selecting text:
      </h2>
      <div className='bg-gray-800 gap-6 *:even:-mt-4 py-5 flex flex-col items-center justify-center w-3/5 rounded-[0.2em] text-gray-300'>
        <h2 className='text-vsm select-auto bg-gray-700 rounded-[0.2em] px-4 py-2 w-1//2'>
          The quick brown fox jumps over the lazy dog
        </h2>
      </div>
    </div>
  );
}

export default UserSelect;
