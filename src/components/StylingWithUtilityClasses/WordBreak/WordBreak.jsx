function WordBreak() {
  return (
    <div className='  w-full flex flex-col items-center justify-center gap-4 mb-4'>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        word-break
      </h2>
      <h2 className=' w-1/2 flex flex-col items-center text-vsm'>
        Utilities for controlling word breaks in an element.
      </h2>
      {/* Normal */}
      <h2 className='underline'>Normal</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'break-normal' utility to only add line breaks at normal word
        break points:
      </h2>
      <div className=' w-1/3 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>break-normal</h2>
          <h2 className=' break-normal overflow-hidden font-sans'>
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* Break All */}
      <h2 className='underline'>Break All</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'break-all' utility to only add line breaks whenever necessary,
        without trying to preserve whole words:
      </h2>
      <div className=' w-1/4 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>break-all</h2>
          <h2 className=' break-all overflow-hidden font-sans'>
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

export default WordBreak;
