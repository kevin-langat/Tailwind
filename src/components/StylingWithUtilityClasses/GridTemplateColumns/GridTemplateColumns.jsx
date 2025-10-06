function GridTemplateColumns() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        grid-template-columns
      </h2>
      <h2 className=" text-vsm">
        Utilities for specifying the columns in a grid layout.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>grid-cols-{'<number>'}</h2>
        <h2>grid-template-columns: repeat({'<number>'}, minmax(0,1fr));</h2>
        <h2>grid-cols-none</h2>
        <h2>grid-template-columns:none;</h2>
        <h2>grid-cols-subgrid</h2>
        <h2>grid-template-columns:subgrid;</h2>
        <h2>grid-cols-{'<value>'}</h2>
        <h2>grid-template-columns:{'<value>'}</h2>
      </div>
      {/* specifying the grid columns */}
      <h2 className="underline">Specifying the grid columns</h2>
      <h2 className="text-vsm w-1/2">
        Use 'grid-cols-{'<number>'} utilities like 'grid-cols-2' and
        'grid-cols-4' to create grids with n equallly sized columns :
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-4 gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          02
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          06
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          07
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          08
        </span>
      </div>
      {/* implementing the subgrid */}
      <h2 className="underline">Implementing the subgrid</h2>
      <h2 className="text-vsm w-1/2">
        Use 'grid-cols-subgrid' utility to adapt the column tracks defined by
        the items parent:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-4 gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          02
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
        <div className="col-span-3 grid grid-cols-subgrid gap-4">
          <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center col-start-2">
            06
          </span>
        </div>
      </div>
      {/* Using a custom  value */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="text-vsm w-1/2">
        Use 'grid-cols-{'[<value>]'}' syntax to set the columns based on a
        completely custom value:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-[100px_minmax(90px,_1fr)_100px] gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          02
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
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

export default GridTemplateColumns;
