function ALignItems() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        align-items
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how flex and grid items are positioned along a
        container's axis.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>items-start</h2>
        <h2>align-items: flex-start;</h2>
        <h2>items-end</h2>
        <h2>align-items: flex-end;</h2>
        <h2>items-end-safe</h2>
        <h2>align-items: safe flex-end;</h2>
        <h2>items-center</h2>
        <h2>align-items: center;</h2>
        <h2>items-center-safe</h2>
        <h2>align-items: safe center;</h2>
      </div>

      {/* start */}
      <h2 className="underline">start</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'items-start' utility to align items to the start of the container's
        cross axis:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row  h-26 items-start gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-8  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-11/12 h-20 rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600 h-12 justify-center rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
      </div>
      {/* center */}
      <h2 className="underline">center</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'items-center' utility to align items along the center of the
        container's crosss axis:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row h-26 items-center gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-8  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-full h-20 rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600 h-12 justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
      </div>
      {/* stretch */}
      <h2 className="underline">stretch</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'items-stretch' utility to stretch items to fill the container's
        cross axis:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row h-26 items-stretch gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 justify-center  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-full  rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
      </div>

      {/* end */}
      <h2 className="underline">end</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'items-end' utility to align items to the end of the container's
        cross axis:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row h-26 items-end gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-8  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-full h-20 rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600 h-12 justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
      </div>
      {/* baseline */}
      <h2 className="underline">baseline</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'items-baseline' utility to align items along the containers's cross
        axis such the all of their baseline align:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row h-26 items-baseline gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-14  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-full h-20 rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600 h-12 pt-5  rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
      </div>
    </div>
  );
}

export default ALignItems;
