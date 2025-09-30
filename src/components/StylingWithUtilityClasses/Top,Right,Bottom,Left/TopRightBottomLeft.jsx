function TopRightBottomLeft() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        top/right/bottom/left
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the placement of positioned elements
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>inset-px</h2>
        <h2>inset: 1px;</h2>
        <h2>-inset-px</h2>
        <h2>inset: -1px;</h2>
        <h2>inset-full</h2>
        <h2>inset: 100%;</h2>
        <h2>-inset-full</h2>
        <h2>inset: -100%;</h2>
        <h2>inset-auto</h2>
        <h2>inset: auto;</h2>
      </div>
      {/* Example */}
      <div className="flex gap-1 flex-col items-center place-self-center w-full ">
        <h2 className="underline">Basic Example</h2>
        <h2 className="text-vsm">
          Use 'top-number', 'right-no', 'bottom-no' ... and utilities like
          'top-0' and 'bottom-0' to set horizontal and vetical position of a
          positioned element:
        </h2>
        <div className="w-11/12 md:w-1/2 rounded-[0.4em] py-3 px-2 bg-gray-900 grid grid-cols-3 h-40  gap-2">
          {/* pin to the left corner */}
          <span className="text-gray-300 relative font-bold text-[medium] outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 ">
            <p className="absolute top-0 left-0 px-2.5 py-1 bg-orange-500 rounded-[0.2em]">
              01
            </p>
          </span>
          {/* span the top edge */}
          <span className="text-gray-300 relative font-bold text-[medium] outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 ">
            <p className="absolute top-0 inset-x-0 px-2.5 py-1 bg-orange-500 rounded-[0.2em] flex flex-col items-center justify-center">
              02
            </p>
          </span>
          {/* pin to the top right corner */}
          <span className="text-gray-300 relative font-bold text-[medium] outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 ">
            <p className="absolute top-0 right-0 px-2.5 py-1 bg-orange-500 rounded-[0.2em]">
              03
            </p>
          </span>
          {/* span the left edge */}
          <span className="text-gray-300 relative font-bold text-[medium] outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 ">
            <p className="absolute top-0 inset-y-0 left-0 px-2.5 py-1 bg-orange-500 rounded-[0.2em]">
              04
            </p>
          </span>
          {/* fill the entire parent */}
          <span className="text-gray-300 relative font-bold text-[medium] outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 ">
            <p className="absolute inset-0 px-2.5 py-1 bg-orange-500 rounded-[0.2em]">
              05
            </p>
          </span>
          {/* span the right edge  */}
          <span className="text-gray-300 relative font-bold text-[medium] outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 ">
            <p className="absolute inset-y-0 right-0 px-2.5 py-1 bg-orange-500 rounded-[0.2em]">
              06
            </p>
          </span>
          {/* pin to the bottom left corner  */}
          <span className="text-gray-300 relative font-bold text-[medium] outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 ">
            <p className="absolute bottom-0 left-0 px-2.5 py-1 bg-orange-500 rounded-[0.2em]">
              07
            </p>
          </span>
          {/* span the bottom edge  */}
          <span className="text-gray-300 relative font-bold text-[medium] outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 ">
            <p className="absolute inset-x-0 bottom-0 px-2.5 py-1 bg-orange-500 rounded-[0.2em]">
              08
            </p>
          </span>
          {/* pin to bottom right corner */}
          <span className="text-gray-300 relative font-bold text-[medium] outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 ">
            <p className="absolute bottom-0 right-0 px-2.5 py-1 bg-orange-500 rounded-[0.2em]">
              09
            </p>
          </span>
        </div>
      </div>

      {/* use negative values */}
      <div className=" flex gap-4 flex-col items-center justify-center w-full">
        <h2 className="underline">Use negative values</h2>
        <h2 className="w-1/2 text-vsm">
          To use the neagtive values, prefix the class with a dash to convert it
          to a neagtive value
        </h2>

        <div className=" relative w-35  h-30 bg-gray-800 rounded-[0.4em]">
          <div className=" absolute w-8 h-8 bg-linear-to-r from-indigo-500 to-emerald-500 rounded-[0.2em] -top-4 -left-4"></div>
        </div>
      </div>
    </div>
  );
}

export default TopRightBottomLeft;
