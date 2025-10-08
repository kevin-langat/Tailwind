function JustifyItems() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        justify-items
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how grid items are aligned along their inline
        axis.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>Justify-items-start</h2>
        <h2>justify-items: start;</h2>
        <h2>Justify-items-end</h2>
        <h2>justify-items: end;</h2>
        <h2>Justify-items-end-safe</h2>
        <h2>justify-items: safe end;</h2>
        <h2>Justify-items-center</h2>
        <h2>justify-items: center;</h2>
        <h2>Justify-items-center-safe</h2>
        <h2>justify-items: safe center;</h2>
        <h2>Justify-items-stretch</h2>
        <h2>justify-items: stretch;</h2>
        <h2>Justify-items-normal</h2>
        <h2>justify-items: normal;</h2>
      </div>
      {/* start */}
      <h2 className="underline">start</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'justify-items-start' utility to justify grids items against the
        start of their inline axis:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3 justify-items-start *:h-8 *:w-25  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          06
        </span>
      </div>
      {/* end */}
      <h2 className="underline">end</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'justify-items-end' or 'justify-items-end-safe' utilities to justify
        grids items against the end of their inline axis:
      </h2>
      <div className="resizableVid w-1/2 bg-gray-300/80 p-3 rounded-[0.4em] flex flex-col items-center justify-center gap-1">
        <div
          className=" w-full
      bg-gray-900 grid grid-cols-3 justify-items-end *:h-8 *:w-25  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            04
          </span>
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            05
          </span>
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            06
          </span>
        </div>{' '}
        <h2 className="text-vsm text-gray-500">justify-items-end-safe</h2>
        <div
          className=" w-full
      bg-gray-900 grid grid-cols-3 justify-items-end-safe *:h-8 *:w-25  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            04
          </span>
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            05
          </span>
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            06
          </span>
        </div>
      </div>
      <h2 className="text-vsm w-1/2">
        Whe there is no space availale, the 'justify-items-end-safe' utility
        will align items to the start of the container instead of the end.
      </h2>

      {/* center */}
      <h2 className="underline">center</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'justify-items-center' or 'justify-items-center-safe' utilities to
        justify grids items in the center of their inline axis:
      </h2>
      <div className="resizableVid w-1/2 bg-gray-300/80 p-3 rounded-[0.4em] flex flex-col items-center justify-center gap-1">
        <div
          className=" w-full
      bg-gray-900 grid grid-cols-3 justify-items-center *:h-8 *:w-25  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            04
          </span>
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            05
          </span>
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            06
          </span>
        </div>{' '}
        <h2 className="text-vsm text-gray-500">justify-items-center-safe</h2>
        <div
          className=" w-full
      bg-gray-900 grid grid-cols-3 justify-items-center-safe *:h-8 *:w-25  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
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
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            04
          </span>
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            05
          </span>
          <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
            06
          </span>
        </div>
      </div>

      {/* stretch */}
      <h2 className="underline">stretch</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'justify-items-stretch' utility to stretch items along their inline
        axis.
      </h2>
      <div
        className=" resizableVid w-1/2
      bg-gray-900 grid grid-cols-3 justify-items-stretch *:h-8  gap-1 py-2 px-2.5 rounded-[0.4em]"
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
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          06
        </span>
      </div>
    </div>
  );
}

export default JustifyItems;
