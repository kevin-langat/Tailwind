function Order() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        order
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how the order of flex items and grids items
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>

        <h2>order-{'<number>'}</h2>
        <h2>order:{'<number>'};</h2>
        <h2>-order-{'<number>'}</h2>
        <h2>-order:{'calc(<number>*-1)'};</h2>
        <h2>order-first</h2>
        <h2>order:-9999;</h2>
        <h2>order-last</h2>
        <h2>order:9999;</h2>
        <h2>order-none</h2>
        <h2>order:0;</h2>
      </div>

      {/* Basic example*/}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Explicitly setting a sort order</h2>
        <h2 className="text-vsm">
          Use 'order:{'<number>'}' utilities like 'order-1' and 'order-3' to
          render flex and grid items in differebt order than they appear in the
          document
        </h2>

        <div
          className=" relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  bg-gray-800"
        >
          <div className=" w-1/3 shrink-0 flex flex-col items-center justify-center text-gray-300 order-3 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" w-1/3  flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" w-1/3 order-1 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
      {/* ordering items first or last*/}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Ordering items first or last</h2>
        <h2 className="text-vsm">
          Use 'order-first' or 'order-last' utilities to render flex and grid
          items first or last:
        </h2>

        <div
          className=" relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  bg-gray-800"
        >
          <div className=" w-1/3 shrink-0 flex flex-col items-center justify-center text-gray-300  order-last bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" w-1/3  order-first  flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" w-1/3 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
      {/* Using a negative value*/}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Using a negative value</h2>
        <h2 className="text-vsm">
          To use a neagtive value, prefix the class name with a dash to convert
          it to a negative:
        </h2>

        <div
          className=" relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  bg-gray-800"
        >
          <div className=" w-1/3 flex flex-col items-center justify-center text-gray-300  bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" w-1/3  order-1  flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" w-1/3 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
          <div className=" w-1/3 flex flex-col -order-1 items-center justify-center text-gray-300 bg-pink-500 rounded-[0.4em] z-40">
            04
          </div>
        </div>
      </div>
      {/* Using a custom value*/}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Using a custom value</h2>
        <h2 className="text-vsm">
          Use the 'order-{'[< value >]'}' syntax to set the order based on a
          completely custom value
        </h2>

        <div
          className=" relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  bg-gray-800"
        >
          <div className=" w-1/3 flex flex-col items-center justify-center text-gray-300  bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" w-1/3  flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" w-1/3 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
          <div className=" w-1/3 flex flex-col order-[min(var(--total-items),2)] items-center justify-center text-gray-300 bg-pink-500 rounded-[0.4em] z-40">
            04
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
