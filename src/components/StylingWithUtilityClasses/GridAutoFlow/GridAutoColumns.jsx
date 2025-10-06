function GridAutoColumns() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        grid-auto-columns
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the size of implicity-created grid columns.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>auto-cols-auto</h2>
        <h2>grid-auto-columns: auto;</h2>
        <h2>auto-cols-min</h2>
        <h2>grid-auto-columns: min-content;</h2>
        <h2>auto-cols-max</h2>
        <h2>grid-auto-columns: max-content;</h2>
        <h2>auto-cols-fr</h2>
        <h2>grid-auto-columns: minmax(0,1fr);</h2>
      </div>

      <h2 className="underline">Basic Example</h2>
      <h2 className="text-vsm w-1/2">
        Use utilities like 'auto-cols-min' and 'auto-cols-max' to control the
        size of implicity-created grid columns:
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 grid grid-flow-col auto-cols-max  grid-cols-3  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center justify-center">
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

      <h2 className="underline">Using a custom value</h2>
      <h2 className="text-vsm w-1/2">
        Use 'auto-cols-{'<value>'}' syntax to set the size of implicity created
        grid columns based on custom values
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 grid grid-flow-col auto-cols-[minmax(0,3fr)] grid-cols-3  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center justify-center">
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

export default GridAutoColumns;
