function GridTemplateRows() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        grid-template-rows
      </h2>
      <h2 className=" text-vsm">
        Utilities for specifying the rows in a grid layout
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>grid-rows-{'<number>'}</h2>
        <h2>grid-template-rows: repeat({'<number>'}, minmax(0,1fr));</h2>
        <h2>grid-rows-none</h2>
        <h2>grid-template-rows:none;</h2>
        <h2>grid-rows-subgrid</h2>
        <h2>grid-template-rows:subgrid;</h2>
        <h2>gird-rows-{'<value>'}</h2>
        <h2>grid-template-rows:{'<subgrid>'};</h2>
      </div>

      {/* specifying the grid rows */}
      <h2 className="underline">Specifying the grid rows</h2>
      <h2 className="text-vsm w-1/2">
        Use 'grid-rows-{'<number>'} utilities like 'grid-rows-2' and
        'grid-rows-4' to create grids with n equallly sized rows :
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid  grid-flow-col grid-rows-3  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
      {/* Implementing the subgrid*/}
      <h2 className="underline">Implementing the subgrid</h2>
      <h2 className="text-vsm w-1/2">
        Use 'grid-rows-subgrid' utility to adopt the row tracks defined by the
        item's parent:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-flow-col grid-rows-4 gap-1 py-2 px-2.5 rounded-[0.4em]"
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
        <div className="grid-rows-subgrid grid row-span-3 ">
          <span className="bg-pink-600 row-start-2 rounded-[0.3em] w-full flex flex-col items-center">
            06
          </span>
        </div>

        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          07
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          08
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          09
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          10
        </span>
      </div>

      {/* Using a custom value*/}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="text-vsm w-1/2">
        Use 'grid-rows-{'<value>'}' syntax to set rows based on a completely
        custom value:
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 grid   grid-flow-col grid-rows-[40px_minmax(30px,1fr)_40px] gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          09
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          10
        </span>
      </div>
    </div>
  );
}

export default GridTemplateRows;
