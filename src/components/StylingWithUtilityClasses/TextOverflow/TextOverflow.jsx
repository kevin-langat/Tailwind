function TextOverflow() {
  return (
    <div className='  w-full flex flex-col items-center justify-center gap-4 mb-4'>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        text-overflow
      </h2>
      <h2 className=' w-1/2 flex flex-col items-center text-vsm'>
        Utilities for controlling how the text of an element overflows.
      </h2>
      {/* Truncating text */}
      <h2 className='underline'>Truncating text</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'truncate' utility to prevent text from wrapping and truncate
        overflowing text with ellipsis (...) if needed:
      </h2>
      <div className=' w-120 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>truncate</h2>
          <h2 className=' truncate text-base  decoration-1     font-sans'>
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word.
          </h2>
        </div>
      </div>
      {/* Text ellipsis */}
      <h2 className='underline'>Text ellipsis</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'text-ellipsis' utility to truncate overflowing text with an
        ellipsis (...) if needed.
      </h2>
      <div className=' w-70 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>text-ellipsis</h2>
          <h2 className=' overflow-hidden text-ellipsis  text-base  decoration-1  font-sans'>
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* Clipping text */}
      <h2 className='underline'>Clipping text</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'text-clip' utility to truncate the text at the limit of the
        content area:
      </h2>
      <div className=' w-70 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>text-clip</h2>
          <h2 className=' overflow-hidden text-clip  text-base  decoration-1     font-sans'>
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextOverflow;
