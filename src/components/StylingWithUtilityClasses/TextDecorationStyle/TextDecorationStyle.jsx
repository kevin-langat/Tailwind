function TextDecorationStyle() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        text-decoration-style
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the style of the text decorations.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use Utilities like 'decoration-dotted' and 'decoration-dashed' to change
        the text decoration style of an element.
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-solid</h2>
          <h2 className=" text-base underline  decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-double</h2>
          <h2 className=" text-base underline  decoration-sky-500  decoration-double font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-dashed</h2>
          <h2 className=" text-base underline  decoration-sky-500  decoration-dashed font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">decoration-dotted</h2>
          <h2 className=" decoration-dotted  decoration-sky-500  text-base underline font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-wavy</h2>
          <h2 className=" text-base underline decoration-sky-500 decoration-wavy font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextDecorationStyle;
