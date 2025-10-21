function TextUnderlineOffset() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        text-decoration-offset
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the offset of a text underline.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'underline-offset-{'<number>'} utilities like 'underline-offset-2'
        and 'underline-offset-4' to change the offset of a text underline.
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">underline-offset-1</h2>
          <h2 className=" text-base underline underline-offset-1  decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">underline-offset-2</h2>
          <h2 className=" text-base underline underline-offset-2 decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">underline-offset-4</h2>
          <h2 className=" text-base underline underline-offset-4 decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">underline-offset-8</h2>
          <h2 className=" text-base underline underline-offset-8 decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Use a custom value */}
      <h2 className="underline">Use a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use Utilities like 'underline-offset-[{'<value>'}]' syntax to set the
        text underline offset based on completely custom value
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">undrline-offset-[3px]</h2>
          <h2 className=" text-base underline underline-offset-[3px] decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">underline-offset-[7px] </h2>
          <h2 className=" text-base underline underline-offset-[7px]  decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">underline-offset-[10px] </h2>
          <h2 className=" text-base underline underline-offset-[10px] decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextUnderlineOffset;
