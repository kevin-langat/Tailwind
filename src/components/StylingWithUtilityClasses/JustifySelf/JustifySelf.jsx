import React from 'react';

function JustifySelf() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        justify-self
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how an individual grid item is aligned along
        its inline axis.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>Justify-self-auto</h2>
        <h2>justify-self: auto;</h2>
        <h2>Justify-self-start</h2>
        <h2>justify-self: start;</h2>
        <h2>Justify-self-end</h2>
        <h2>justify-self: end;</h2>
        <h2>Justify-self-end-safe</h2>
        <h2>justify-self: safe end;</h2>
        <h2>Justify-self-center</h2>
        <h2>justify-self: center;</h2>
        <h2>Justify-self-center-safe</h2>
        <h2>justify-self: safe center;</h2>
        <h2>Justify-self-stretch</h2>
        <h2>justify-self: stretch;</h2>
      </div>

      {/* Auto */}
      <h2 className="underline">auto</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'justify-self-auto' utility to align an item based on the value of
        the grid's 'justify-items' property:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3 justify-items-center *:h-8   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 justify-self-auto rounded-[0.3em] w-10 flex flex-col items-center justify-center">
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
      {/* Start */}
      <h2 className="underline">start</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'justify-self-start' utility to align a grid item to the start of
        its inline axis:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3 justify-items-center *:h-8   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600 justify-self-start rounded-[0.3em] w-10 flex flex-col items-center justify-center">
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
      {/* Center */}
      <h2 className="underline">center</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'justify-self-center' or 'justify-self-center-safe' utilities to
        align a grid item along the center of its inline axis:
      </h2>
      <div className=" bg-gray-300/70 rounded-[0.4em] resizableVid w-11/12 flex flex-col items-center justify-center gap-2">
        <div
          className="   w-3/4
      bg-gray-900 grid grid-cols-3 justify-items-center *:h-8   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
        >
          <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
            01
          </span>
          <span className="bg-pink-600 justify-self-center rounded-[0.3em] w-10 flex flex-col justify-center items-center ">
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
        <h2 className="text-vsm text-gray-400">justify-self-center-safe</h2>
        <div
          className=" w-3/4
      bg-gray-900 grid grid-cols-3 justify-items-center *:h-8   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
        >
          <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
            01
          </span>
          <span className="bg-pink-600 justify-self-center-safe rounded-[0.3em] w-10 flex flex-col items-center justify-center">
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
      {/* End */}
      <h2 className="underline">end</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'justify-self-end' or 'justify-self-end-safe' utilities to align a
        grid item to the end of its inline axis:
      </h2>
      <div className=" bg-gray-300/70 rounded-[0.4em] resizableVid w-11/12 flex flex-col items-center justify-center gap-2">
        <div
          className="   w-3/4
      bg-gray-900 grid grid-cols-3 justify-items-center *:h-8   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
        >
          <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
            01
          </span>
          <span className="bg-pink-600 justify-self-end rounded-[0.3em] w-10 flex flex-col justify-center items-center ">
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
        <h2 className="text-vsm text-gray-400">justify-self-end-safe</h2>
        <div
          className=" w-3/4
      bg-gray-900 grid grid-cols-3 justify-items-center *:h-8   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
        >
          <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
            01
          </span>
          <span className="bg-pink-600 justify-self-end-safe rounded-[0.3em] w-10 flex flex-col items-center justify-center">
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
        Use 'justify-self-stretch' utility to stretch a grid item to fill the
        grid area on its inline axis:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3 justify-items-center *:h-8   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600 justify-self-stretch rounded-[0.3em] flex flex-col items-center justify-center">
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

export default JustifySelf;
