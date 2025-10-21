function TextDecorationThickness() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        text-decoration-thickness
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the thickness of the text decorations.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use Utilities like 'decoration-1' and 'decoration-4' to change the text
        decoration thickness of an element.
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-1</h2>
          <h2 className=" text-base underline decoration-1  decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-2</h2>
          <h2 className=" text-base underline decoration-2  decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-4</h2>
          <h2 className=" text-base underline decoration-4 decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Use a custom value */}
      <h2 className="underline">Use a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use Utilities like 'decoration-[{'<value>'}]' syntax to set the text
        decoration based on completely custom value
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-0.15rem</h2>
          <h2 className=" text-base underline decoration-[0.15rem]  decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-0.25rem</h2>
          <h2 className=" text-base underline decoration-[0.25rem]  decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">decoration-0.35rem</h2>
          <h2 className=" text-base underline decoration-[0.35rem] decoration-sky-500  decoration-solid font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextDecorationThickness;
