function LetterSpacing() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        letter-spacing{' '}
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the tacking, or letter spacing of an element.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use utilities like 'tracking-tight' and 'tracking-wide' to set the
        letter spacing of an element:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">tracking-tighter</h2>
          <h2 className=" tracking-tighter text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">tracking-tight</h2>
          <h2 className=" tracking-tight text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">tracking-normal</h2>
          <h2 className=" text-base tracking-normal font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">tracking-wide</h2>
          <h2 className=" text-base tracking-wide font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">tracking-wider</h2>
          <h2 className=" text-base tracking-wider font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Using negative values */}
      <h2 className="underline">Using negative values</h2>
      <h2 className="w-1/2 text-vsm">
        Using negative values does not make a ton of sense with the named letter
        spacing scale. Tailwind includes out of the box, but if you've
        customized your scale to use nummbers it can be useful:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">-tracking-1</h2>
          <h2 className=" -tracking-1 text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Using Custom Values */}
      <h2 className="underline">Using custom values</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'tracking-[{'<value>'}]' syntax to set the letter spacing based on a
        completely custom value:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">tracking-[.25em]</h2>
          <h2 className=" tracking-[.25em] text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Responsive design */}
      <h2 className="underline">Responsive design</h2>
      <h2 className="w-1/2 text-vsm">
        Prefix a 'letter-spacing' utility with a breakpoint variant like '@md:'
        to only appply the utility at medium container sizes and above
      </h2>
      <div className=" @container/responsive resizableVid w-100 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="   w-full  flex flex-col justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">tracking-[.25em]</h2>
          <h2 className=" @md/responsive:tracking-[.15em] text-wrap tracking-tight text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LetterSpacing;
