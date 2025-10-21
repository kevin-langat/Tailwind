function TextIndent() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        text-indent
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the amount of empty space shown before text in
        a block.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'indent-{'<number>'} utilities like 'indent-2' and 'indent-8' to
        ste the amount of empty space (indentation) that's shown before text in
        a block:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">indent-8</h2>
          <h2 className=" indent-8 font-sans">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* Using negative values */}
      <h2 className="underline">Using negative values</h2>
      <h2 className="w-1/2 text-vsm">
        To use a negative text indent value, prefix the class name with a dash
        to convert it to a negative value:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex  flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">indent-8</h2>
          <h2 className=" pl-8 text-justify -indent-8 font-sans">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanocona word a word that refers
            to a lung diseases contracted from the inhalation of very fine
            silica particles, specifically from a volcano.
          </h2>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'indent-{'<value>'} syntax to set the text indentation based on
        a completely custom value:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex  flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">indent-[20%]</h2>
          <h2 className=" text-justify indent-[20%] font-sans">
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

export default TextIndent;
