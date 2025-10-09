function JustifyContent() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        justify-content
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how flex and grid items are positioned along a
        container's main axis:
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>Justify-start</h2>
        <h2>justify-content:flex-start;</h2>
        <h2>Justify-end</h2>
        <h2>justify-content:flex-end;</h2>
        <h2>Justify-end-safe</h2>
        <h2>justify-content: safe flex-end;</h2>
        <h2>Justify-center</h2>
        <h2>justify-content: center;</h2>
        <h2>Justify-center-safe</h2>
        <h2>justify-content: safe center;</h2>
        <h2>Justify-between</h2>
        <h2>justify-content: space-bewteen;</h2>
        <h2>Justify-around</h2>
        <h2>justify-content: space-around;</h2>
        <h2>Justify-evenly</h2>
        <h2>justify-content: space-evenly;</h2>
        <h2>Justify-stretch</h2>
        <h2>justify-content: stretch;</h2>
      </div>
      {/* start */}
      <h2 className="underline">Start</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'Justify-start' utlity to justify items against the start of the
        container's main axis:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row justify-start *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
      </div>
      {/* center and center safe */}

      <h2 className="underline">Center</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'Justify-center' and 'Justify-center-safe' utlity to justify items
        along the center of the containers's main axis:
      </h2>
      <div className=" resizableVid bg-gray-400/30 rounded-[0.4em] w-[80%] flex flex-col items-center justify-center gap-1">
        <div
          className=" w-11/12
      bg-gray-900 flex flex-row justify-center *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
        </div>{' '}
        <h2 className="text-vsm text-gray-700">Center safe</h2>
        <div
          className=" w-11/12
      bg-gray-900 flex flex-row justify-center-safe *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
        </div>
      </div>
      <h2 className="text-vsm w-1/2">
        When there is no enough space available the 'justify-center-safe'
        utility will allign items to the start of the container instead of the
        center
      </h2>

      {/* end */}
      <h2 className="underline">End</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'Justify-end' utlity to justify items against the end of the
        container's main axis:
      </h2>
      <div className="resizableVid  bg-gray-400/30 rounded-[0.4em] w-[80%] flex flex-col items-center justify-center gap-1">
        <div
          className=" w-11/12
      bg-gray-900 flex flex-row justify-end *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
        </div>{' '}
        <h2 className=" text-vsm text-gray-700">End safe</h2>
        <div
          className=" w-11/12
      bg-gray-900 flex flex-row justify-end-safe *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
        </div>
      </div>
      <h2 className="w-1/2 text-vsm">
        When there is no enough space available the 'justify-end-safe' utility
        will allign items to te start of the container instead of the end
      </h2>

      {/* between */}
      <h2 className="underline">space between</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'Justify-between' utlity to justify items along the container's main
        axis such that there is an equal amount of space between each item.
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row justify-between *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
      </div>

      {/* space-around */}
      <h2 className="underline">space around</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'Justify-around' utlity to justify items along the container's main
        axis such that there is an equal amount of space each side of each item.
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row justify-around *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
      </div>
      {/* space-evenly */}
      <h2 className="underline">space evenly</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'Justify-evenly' utlity to justify items along the container's main
        axis such that there is an equal amount of space each around each item,
        but also accounting for the doubling of the space you would see between
        each item when using 'justify-around'
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row justify-evenly *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
      </div>
      {/* stretch */}
      <h2 className="underline">stretch</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'Justify-stretch' utility to allow auto sized content items to fill
        the available spacea along the container's main axis.
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-[6rem_auto_6rem] justify-stretch gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
      </div>
      {/* normal */}
      <h2 className="underline">normal</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'Justify-normal' utility to pack content items in their default
        position as if no 'justify-content' was set:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 flex flex-row *:w-20 *:h-10  justify-normal gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center justify-center">
          01
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
      </div>
    </div>
  );
}

export default JustifyContent;
