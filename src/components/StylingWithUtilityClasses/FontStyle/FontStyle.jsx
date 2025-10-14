function FontStyle() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        font-style
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the style of the text
      </h2>
      {/* Italicizing text*/}
      <h2 className="underline">Italicizing text</h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Use the 'italic' utility to make text italic:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <h2 className=" italic font-sans">
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
      {/* Displaying text normally*/}
      <h2 className="underline">Displaying text normally</h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Use the 'not-italic' utility to display text normally:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <h2 className=" not-italic font-sans">
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
    </div>
  );
}

export default FontStyle;
