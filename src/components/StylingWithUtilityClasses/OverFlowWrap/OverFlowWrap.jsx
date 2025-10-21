function OverFlowWrap() {
  return (
    <div className='  w-full flex flex-col items-center justify-center gap-4 mb-4'>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        overflow-wrap
      </h2>
      <h2 className=' w-1/2 flex flex-col items-center text-vsm'>
        Utilities for controlling line breaks within words in an overflowing
        element.
      </h2>
      {/* wrapping mid-word */}
      <h2 className='underline'>wrapping mid-word</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'wrap-break-word' utility to allow line breaks between letters
        in word if needed:
      </h2>
      <div className=' w-1/5 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>wrap-break-word</h2>
          <h2 className=' wrap-break-word font-sans'>
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* wrapping anywhere */}
      <h2 className='underline'>wrapping anywhere</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'wrap-anywhere' utility behaves similarly to 'wrap-break-word',
        except that the browser factors in mid-word line breaks when calculating
        the intrinsic size of the element:
      </h2>
      <div className=' w-1/5 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>wrap-anywhere</h2>
          <h2 className=' wrap-anywhere font-sans'>
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* wrapping normally */}
      <h2 className='underline'>wrapping normally</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'wrap-normal' utility to only allow line breaks at natural
        wrapping points, like spaces, hyphens and punctuation:
      </h2>
      <div className=' w-1/4 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>wrap-normal</h2>
          <h2 className=' wrap-normal font-sans'>
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

export default OverFlowWrap;
