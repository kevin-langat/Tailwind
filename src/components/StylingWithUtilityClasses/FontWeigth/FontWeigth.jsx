function FontWeigth() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        font-Weigth
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the font weight of an element.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use utilities like 'font-thin' and 'font-bold' to set the font weight of
        an element:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">font-thin</h2>
          <h2 className=" font-thin text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">font-light</h2>
          <h2 className=" font-light text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-normal</h2>
          <h2 className=" text-base font-normal font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-medium</h2>
          <h2 className=" text-base font-medium font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-semibold</h2>
          <h2 className=" text-base font-semibold font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-bold</h2>
          <h2 className=" text-base font-bold font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className="underline">Using a custom value </h2>
      <h2 className="w-1/2 text-vsm">
        Use 'font-{'[<value>]'}' syntax to set the font-weight based on a
        completely custom value:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">font-[1000]</h2>
          <h2 className=" font-[1000] text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>

      {/* Customizing your theme */}
      <h2 className="underline">Customizing your theme </h2>
      <h2 className="w-1/2 text-vsm">
        Use '--font-weight-*' theme variables to Customize the font weight
        utilities in your project:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className="text-orange-600 text-vsm font-sans ">
            @theme{'{'} <br />
            {' --font-weight-extrablack: 1000;'} <br />
            {'}'}
          </h2>
        </div>
      </div>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">font-extrablack</h2>
          <h2 className=" font-extrablack text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default FontWeigth;
