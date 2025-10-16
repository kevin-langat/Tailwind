function TextDecorationLine() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        text-decoration-line
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the text color of an element.
      </h2>

      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] *:bg-gray-800 *:rounded-[0.3em] *:outline-1 *:outline-gray-500/70 *:p-1 flex flex-col text-gray-300 items-center justify-center gap-4 p-5">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">Underlining text</h2>
          <h2 className=" underline decoration-gray-200 text-sm">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">Overlining text</h2>
          <h2 className=" overline decoration-gray-200  text-sm">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">Adding line through</h2>
          <h2 className=" line-through decoration-gray-200  text-sm">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">Removing a line</h2>
          <h2 className=" no-underline text-sm">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/*Applying on hover */}
      <h2 className="underline">Applying on hover</h2>
      <h2 className="w-1/2 text-vsm">
        Prefix 'text-decoration-line' utility with a variant like 'hover-*' to
        only apply the utility in that state:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] *:bg-gray-800 *:rounded-[0.3em] *:outline-1 *:outline-gray-500/70 *:p-1 flex flex-col text-gray-300 items-center justify-center gap-4 p-5">
        <h2 className="  decoration-gray-200">
          The quick{' '}
          <a
            className=" text-sky-500 hover:text-sky-300 hover:underline"
            href="https://google.com/brown-fox"
          >
            brown fox
          </a>{' '}
          jumps over the lazy dog.
        </h2>
      </div>
    </div>
  );
}

export default TextDecorationLine;
