function PlaceContent() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        place-content
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for controlling how content is justified and aligned at the
        same time.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>place-content-center</h2>
        <h2>place-content:center;</h2>
        <h2>place-content-start</h2>
        <h2>place-content:start;</h2>
        <h2>place-content-end</h2>
        <h2>place-content:end;</h2>
        <h2>place-content-end-safe</h2>
        <h2>place-content:safe end;</h2>
        <h2>place-content-between</h2>
        <h2>place-content:space-between;</h2>
        <h2>place-content-around</h2>
        <h2>place-content:space-around;</h2>
      </div>

      {/* center */}
      <h2 className="underline">center</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-content-center' to pack items in the center of the inline
        and block axes:
      </h2>

      <div
        className=" 
      bg-gray-900 grid grid-cols-2 h-60 *:px-10 *:h-16  place-content-center *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-11/12  rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          04
        </span>
      </div>
      {/* start */}
      <h2 className="underline">start</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-content-start' to pack items against the start of the
        inline and block axes:
      </h2>

      <div
        className="  px-2
      bg-gray-900 grid grid-cols-2 h-60 *:px-6 *:h-12  place-content-start *:justify-center gap-0.5 py-2   rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-11/12  rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          04
        </span>
      </div>
      {/* end */}
      <h2 className="underline">end</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-content-end' to pack items against the end of the inline
        and block axes:
      </h2>

      <div
        className="  px-2
      bg-gray-900 grid grid-cols-2 h-60 *:px-6 *:h-12  place-content-end *:justify-center gap-0.5 py-2   rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-11/12  rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          04
        </span>
      </div>
      {/* between */}
      <h2 className="underline">between</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-content-between' to distrubute grid items along the
        inline and block axes so that there is an equal amount of space between
        each row and column on each axis respectively:
      </h2>

      <div
        className="  px-2
      bg-gray-900 grid grid-cols-2 h-60 *:px-6 *:h-12  place-content-between *:justify-center gap-0.5 py-2   rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-11/12  rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          04
        </span>
      </div>
      {/* around */}
      <h2 className="underline">around</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-content-around' to distribute grid items along inline and
        block axes so that there is an equal amount of space around each row and
        colun on each axis respectively:
      </h2>

      <div
        className="  px-2
      bg-gray-900 grid grid-cols-2 h-60 *:px-6 *:h-12  place-content-around *:justify-center gap-0.5 py-2   rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-11/12  rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          04
        </span>
      </div>
      {/* evenly */}
      <h2 className="underline">evenly</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-content-evenly' to distribute grid items such that they
        are evenly spaced on the inline and block axes:
      </h2>

      <div
        className="  px-2
      bg-gray-900 grid grid-cols-2 h-60 *:px-6 *:h-12  place-content-evenly *:justify-center gap-0.5 py-2   rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-11/12  rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          04
        </span>
      </div>
      {/* stretch */}
      <h2 className="underline">stretch</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-content-stretch' to stretch along there areas on the
        inline and block axes:
      </h2>

      <div
        className="  px-2
      bg-gray-900 grid grid-cols-2 h-60 *:px-6 place-content-stretch *:justify-center gap-0.5 py-2   rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-11/12  rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  rounded-[0.3em] w-11/12 flex flex-col items-center">
          04
        </span>
      </div>
    </div>
  );
}

export default PlaceContent;
