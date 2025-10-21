function TextTransform() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        text-transform
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the capitalization of text.
      </h2>
      {/* Uppercasing text */}
      <h2 className="underline">Uppercasing text</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'uppercase' utility to uppercase the text of an element:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">uppercase</h2>
          <h2 className=" text-base uppercase  decoration-1     font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Lowercasing text */}
      <h2 className="underline">Lowercasing text</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'lowercase' utility to lowercase the text of an element:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">lowercase</h2>
          <h2 className=" text-base lowercase  decoration-1     font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Capitalizing text */}
      <h2 className="underline">Capitalizing text</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'capitalize' utility to capitalize the text of an element:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">capitalize</h2>
          <h2 className=" text-base capitalize  decoration-1     font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Resetting text casing */}
      <h2 className="underline">Resetting text casing</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'normal-case' to preserve the original text casing of an
        element-typically used to reset capitalization at different breakpoints.
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">normal-case</h2>
          <h2 className=" text-base normal-case  decoration-1     font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextTransform;
