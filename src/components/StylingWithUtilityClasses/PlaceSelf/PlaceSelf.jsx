function PlaceSelf() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        place-self
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for controlling how individual item is justified and aligned
        at the same time.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>place-self-auto</h2>
        <h2>place-self:auto;</h2>
        <h2>place-self-start</h2>
        <h2>place-self:start;</h2>
        <h2>place-self-end</h2>
        <h2>place-self:end;</h2>
        <h2>place-self-end-safe</h2>
        <h2>place-self:safe end;</h2>
        <h2>place-self-center</h2>
        <h2>place-self:center;</h2>
      </div>

      {/* auto */}
      <h2 className="underline">auto</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-self-auto' to align an item based on the value of the
        container's 'place-items' property:
      </h2>
      <div
        className=" w-1/4
      bg-gray-900 grid  grid-cols-2 *:px-10 place-items-start h-48 *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-12   rounded-[0.3em] flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600  h-6 place-self-auto rounded-[0.3em] flex flex-col items-center w-10">
          02
        </span>
        <span className="bg-indigo-600 h-12   rounded-[0.3em]  flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600 h-12  rounded-[0.3em] flex flex-col items-center">
          04
        </span>
      </div>
      {/* start */}
      <h2 className="underline">start</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-self-start' to align an item to the start on both axes:
      </h2>
      <div
        className=" w-1/4
      bg-gray-900 grid  grid-cols-2 *:px-10 content-center  h-48 *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-12   rounded-[0.3em] flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600  h-6 place-self-start rounded-[0.3em] flex flex-col items-center w-10">
          02
        </span>
        <span className="bg-indigo-600 h-12   rounded-[0.3em]  flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600 h-12  rounded-[0.3em] flex flex-col items-center">
          04
        </span>
      </div>
      {/* center */}
      <h2 className="underline">center</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-self-center' to align an item at the center on bot axes:
      </h2>
      <div
        className=" w-1/4
      bg-gray-900 grid  grid-cols-2 *:px-10 content-center  h-48 *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-12   rounded-[0.3em] flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600  h-6 place-self-center rounded-[0.3em] flex flex-col items-center w-10">
          02
        </span>
        <span className="bg-indigo-600 h-12   rounded-[0.3em]  flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600 h-12  rounded-[0.3em] flex flex-col items-center">
          04
        </span>
      </div>
      {/* end */}
      <h2 className="underline">end</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-self-end' to align an item to the end on bot axes:
      </h2>
      <div
        className=" w-1/4
      bg-gray-900 grid  grid-cols-2 *:px-10 content-center h-48 *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-12   rounded-[0.3em] flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600  h-6 place-self-end rounded-[0.3em] flex flex-col items-center w-10">
          02
        </span>
        <span className="bg-indigo-600 h-12   rounded-[0.3em]  flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600 h-12  rounded-[0.3em] flex flex-col items-center">
          04
        </span>
      </div>
      {/* stretch */}
      <h2 className="underline">stretch</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'place-self-stretch' to stretch an item on both axes:
      </h2>
      <div
        className=" w-1/4
      bg-gray-900 grid  grid-cols-2 *:px-10 content-center h-48 *:justify-center gap-0.5 py-2 px-2  rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-12   rounded-[0.3em] flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600  place-self-stretch rounded-[0.3em] flex flex-col items-center">
          02
        </span>
        <span className="bg-indigo-600 h-12   rounded-[0.3em]  flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600 h-12  rounded-[0.3em] flex flex-col items-center">
          04
        </span>
      </div>
    </div>
  );
}

export default PlaceSelf;
