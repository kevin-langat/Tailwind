function Hyphens() {
  return (
    <div className='  w-full flex flex-col items-center justify-center gap-4 mb-4'>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        hyphens
      </h2>
      <h2 className=' w-1/2 flex flex-col items-center text-vsm'>
        Utilities for controlling how the words should be hyphenated
      </h2>
      {/* preventing hyphenation */}
      <h2 className='underline'>preventing hyphenation</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'hyphens-none' utility to prevent words from being hyphenated
        even if the line break suggestion '&shy' is used:
      </h2>
      <div className=' w-1/5 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>hyphens-none</h2>
          <h2 className=' hyphens-none font-sans'>
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopi&shy;csilicovolcanocona word a word that
            refers to a lung diseases contracted from the inhalation of very
            fine silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* Manual hyphenation*/}
      <h2 className='underline'>Manual hyphenation</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'hyphens-manual' utility to only set hyphenation points where
        the line break suggestion {"'&shy;'"} is used:
      </h2>
      <div className=' w-1/5 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>hyphens-manual</h2>
          <h2 className=' hyphens-manual font-sans'>
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopic&shy;silicovolcanocona word a word that
            refers to a lung diseases contracted from the inhalation of very
            fine silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* Automatic hyphenation */}
      <h2 className='underline'>Automatic hyphenation</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'hyphens-auto' utility to allow the browser to automatically
        choose hyphenation points based on the language:
      </h2>
      <div className=' w-1/5 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>hyphens-none</h2>
          <h2 lang='en' className=' hyphens-auto font-sans'>
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

export default Hyphens;
