function GridAutoFlow() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        grid-auto-flow
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how the elements in a grid are auto-placed.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>grid-flow-row</h2>
        <h2>grid-auto-flow: row;</h2>
        <h2>grid-flow-col</h2>
        <h2>grid-auto-flow: column;</h2>
        <h2>grid-flow-dense</h2>
        <h2>grid-auto-flow: dense;</h2>
        <h2>grid-flow-row-dense</h2>
        <h2>grid-auto-flow: row dense;</h2>
        <h2>grid-flow-col-dense</h2>
        <h2>grid-auto-flow: column dense;</h2>
      </div>

      {/*  Spanning  rows */}
      <h2 className="underline">Basic Example</h2>
      <h2 className="text-vsm w-1/2">
        Use utilities like 'grid-flow-col'and 'grid-flow-row-dense' to control
        the auto placement algorithm for a grid layout:
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 col-span-2 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 col-span-2 rounded-[0.3em] w-full flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
      </div>
    </div>
  );
}

export default GridAutoFlow;
