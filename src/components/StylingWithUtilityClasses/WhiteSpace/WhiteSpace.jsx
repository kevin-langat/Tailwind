function WhiteSpace() {
  return (
    <div className='  w-full flex flex-col items-center justify-center gap-4 mb-4'>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        white-space
      </h2>
      <h2 className=' w-1/2 flex flex-col items-center text-vsm'>
        Utilities for controlling an element's white space property.
      </h2>
      {/* Normal*/}
      <h2 className='underline'>Normal</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'whitespace-normal' utility to cause text to wrap normally
        within an element. Newlines and spaces will be occupied:
      </h2>

      <div className=' w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>whitespace-normal</h2>
          <h2 className='whitespace-normal font-sans'>
            {
              " Hey everyone! It's almost 2026 and we still don't know if there are aliens living among us, or do we? Maybe      the person writing this isan alien. You will                 never know."
            }
          </h2>
        </div>
      </div>
      {/* No wrap*/}
      <h2 className='underline'>No wrap</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'whitespace-nowrap' utility to prevent text from wraping within
        an element. New lines and spaces will be collapsed:
      </h2>

      <div className=' w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>whitespace-nowrap</h2>
          <h2 className='whitespace-nowrap overflow-auto font-sans'>
            {
              " Hey everyone! It's almost 2026 and we still don't know if there are aliens    living among us, or do we? Maybe      the person writing this isan alien. You will                 never know."
            }
          </h2>
        </div>
      </div>
      {/* pre*/}
      <h2 className='underline'>pre</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'whitespace-pre' utility to preserve newlines and spaces within
        an element. Text will not be wrapped:
      </h2>

      <div className=' w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>whitespace-pre</h2>
          <h2 className='whitespace-pre overflow-auto font-sans'>
            {
              " Hey everyone! It's almost 2026 and we still don't know if there are aliens    living among us, or do we? Maybe      the person writing this isan alien. You will                 never know."
            }
          </h2>
        </div>
      </div>
      {/* PreLine*/}
      <h2 className='underline'>PreLine</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'whitespace-pre-line' utility to prevent newlines but not the
        spaces within an element.Text will be wrapped normally:
      </h2>

      <div className=' w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>whitespace-pre-line</h2>
          <h2 className='whitespace-pre-line overflow-auto font-sans'>
            {
              " Hey everyone!                  It's almost 2026 and we still don't know if there are aliens    living among us, or do we? Maybe      the person writing this is an alien. You will                 never know."
            }
          </h2>
        </div>
      </div>
      {/* Pre Wrap*/}
      <h2 className='underline'>Pre Wrap</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'whitespace-pre-wrap' utility to preserve newlines and spaces
        within an element. Text will be wrapped normally:
      </h2>

      <div className=' w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>whitespace-pre-wrap</h2>
          <h2 className='whitespace-pre-wrap overflow-auto font-sans'>
            {
              " Hey everyone!                  It's almost 2026 and we still don't know if there are aliens    living among us, or do we? Maybe      the person writing this is an alien. You will                 never know.                                                                   "
            }
          </h2>
        </div>
      </div>
      {/* Break Spaces*/}
      <h2 className='underline'>Break Spaces</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'whitespace-break-spaces' utility to preserve newlines and
        spaces within an element. white space at the end of lines will not hang,
        but will wrap to the next line:
      </h2>

      <div className=' w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>whitespace-break-spaces</h2>
          <h2 className='whitespace-break-spaces overflow-auto font-sans'>
            {
              " Hey everyone!                  It's almost 2026 and we still don't know if there are aliens    living among us, or do we? Maybe      the person writing this is an alien.          You will                 never know.                                         "
            }
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WhiteSpace;
