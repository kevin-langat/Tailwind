function FontStretch() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        font-stretch
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for selecting the width of a font face
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use utilities like 'font-stretch-condensed' and 'font-stretch-expanded'
        to set the width of a font face:
      </h2>

      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">
            {' '}
            font-stretch-extra-condensed
          </h2>
          <h2 className="  text-base font-stretch-extra-condensed font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">
            font-stretch-condensed
          </h2>
          <h2 className="  text-base font-stretch-condensed font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-stretch-normal</h2>
          <h2 className=" text-base font-stretch-normal font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-stretch-expanded</h2>
          <h2 className=" text-base font-stretch-expanded font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">
            font-stretch-extra-expanded
          </h2>
          <h2 className=" text-base font-stretch-extra-expanded font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/*Using percentages */}
      <h2 className="underline">Using percentages</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'font-stretch-{'<percentage>'}' utilities like 'font-stretch-50%'
        and 'font-stretch-125%' to set the width of the font-face using
        percentage
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm"> font-stretch-50%</h2>
          <h2 className="  text-base font-stretch-50% font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">font-stretch-100%</h2>
          <h2 className=" font-stretch-100%  text-base  font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>

        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-stretch- 150%</h2>
          <h2 className=" font-stretch-150% text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>

      {/*Using custom value */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'font-stretch-{'[<value>]'}' syntax to set the font-width based on a
        completely custom value:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm">font-stretch- 150%</h2>
        <h2 className=" font-stretch-150% text-gray-300 text-base font-sans">
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
    </div>
  );
}

export default FontStretch;
