function GridRow() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        grid-row
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how the elements are sized and placed across
        grid rows.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>row-span-{'<number>'}</h2>
        <h2>
          grid-row: span{'<number>'}/ span-{'<number>'};
        </h2>
        <h2>row-span-full</h2>
        <h2>grid-row:1 / -1;</h2>
        <h2>row-span-{'<custom-prop'}</h2>
        <h2>grid-row:span var({'<custom prop>'});</h2>
        <h2>row-span-{'<value>'}</h2>
        <h2>grid-row:span {'<value>'}</h2>
        <h2>row-start-{'<number>'}</h2>
        <h2>grid-row-start: {'<number>'}</h2>
      </div>

      {/*  Spanning  rows */}
      <h2 className="underline">Spanning rows</h2>
      <h2 className="text-vsm w-1/2">
        Use 'row-span-{'<number>'} utilities like 'row-span-2'and 'row-span-4'
        to make an element span an columns:
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 grid grid-rows-4 grid-flow-col gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600 row-span-3 rounded-[0.3em] w-full flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-pink-600 row-span-3 justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
        <span className=" bg-pink-600 justify-center row-span-3 rounded-[0.3em] w-full flex flex-col items-center">
          06
        </span>
      </div>

      {/* starring or ending lines */}
      <h2 className="underline">Starting and ending lines</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'row-start-{'<number>'}' or 'row-end-{'<number>'}'utilities like
        'row-start-2' and 'row-end-2' to make an elelement start or end at the
        nth grid line:
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 grid grid-flow-col grid-rows-4 gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600 justify-center row-span-3 row-start-3 rounded-[0.3em] w-full flex flex-col items-center">
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

        <span className="bg-pink-600 justify-center row-span-4  rounded-[0.3em] w-full flex flex-col row-start-2 items-center">
          08
        </span>
      </div>

      {/* using a custom value */}
      <h2 className="undeline">Using a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use utilities like 'row-{'[<value>]'}', 'row-span-{'[<value>]'}
        ','row-start-{'[<value>]'}' and 'row-end-{'[<value>]'}' to set the grid
        column size and location based on a completely custom value:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-rows-4 grid-flow-col gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
        <span className="bg-pink-600 justify-center row-[1_/_span_3] rounded-[0.3em] w-full flex flex-col items-center">
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
    </div>
  );
}

export default GridRow;
