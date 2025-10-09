function PlaceItems() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        place-items
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for controlling how items is justified and aligned at the same
        time.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>place-items-center</h2>
        <h2>place-items:center;</h2>
        <h2>place-items-start</h2>
        <h2>place-items:start;</h2>
        <h2>place-items-end</h2>
        <h2>place-items:end;</h2>
        <h2>place-items-end-safe</h2>
        <h2>place-items:safe end;</h2>
      </div>

      {/* start */}
      <h2 className="underline">start</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-content-start' to pack grid items in the start of their
        grid areas on both axes:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid *:w-20 grid-cols-2 h-60 *:px-10 *:h-16  place-items-start *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
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
        Use the 'place-content-end' to place grid items on the end of their
        areas on both axes:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid *:w-20 grid-cols-2 h-60 *:px-10 *:h-16  place-items-end *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
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

      {/* center */}
      <h2 className="underline">center</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-content-center' to place grid items on on the center of
        their grid areas on both axes:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid *:w-20 grid-cols-2 h-60 *:px-10 *:h-16  place-items-center *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
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
        Use the 'place-content-stretch' to stretch items along their grid areas
        on both axes:
      </h2>
      <div
        className=" w-1/2 place-items-stretch
      bg-gray-900 grid *:w-20 grid-cols-2 h-60 *:px-10   *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
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

export default PlaceItems;
