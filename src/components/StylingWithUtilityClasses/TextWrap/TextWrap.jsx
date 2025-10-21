function TextWrap() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        text-wrap
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling how the text wraps within an element.
      </h2>
      {/* Allowing text to wrap */}
      <h2 className="underline">Allowing text to wrap</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'text-wrap' utility to wrap text onto a multiple lines at
        logical points in the text:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-wrap</h2>
          <h2 className="text-wrap overflow-hidden font-sans">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* Preventing the text from wrapping */}
      <h2 className="underline">Preventing the text from wrapping </h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'text-nowrap' utility to prevent text from wrapping, allowing it
        to overflow if necessary:
      </h2>
      <div className=" w-1/2 bg-gray-800  outline-1 outline-gray-950    rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-nowrap</h2>
          <h2 className="text-nowrap overflow-hidden font-sans">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* Balanced text wrapping */}
      <h2 className="underline">Balanced text wrapping </h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'text-balance' utility to distribute the text evenly across each
        line:
      </h2>
      <div className=" w-1/2 bg-gray-800  outline-1 outline-gray-950    rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-balance</h2>
          <h2 className="text-balance overflow-hidden font-sans">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* Pretty text wrapping */}
      <h2 className="underline">Pretty text wrapping</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'text-pretty' utility to prefer better text wrapping and layout
        at the expense of speed. Behavior varies across browsers but often
        involves approaches like preventing orphans (a single word on its own
        line) at the end of a text block.
      </h2>
      <div className=" w-1/2 bg-gray-800  outline-1 outline-gray-950    rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-pretty</h2>
          <h2 className="text-pretty overflow-hidden font-sans">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextWrap;
