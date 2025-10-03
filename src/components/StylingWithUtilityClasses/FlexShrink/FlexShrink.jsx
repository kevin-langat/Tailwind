import React from 'react';

function FlexShrink() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        flex-shrink
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how the flex-items shrink
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>shrink</h2>
        <h2>flex-shrink: 1;</h2>
        <h2>shrink:{'<number>'}</h2>
        <h2>flex-shrink:{'<number>'};</h2>
        <h2>shrink:{'<value>'}</h2>
        <h2>flex-shrink:{'<value>'};</h2>
        <h2>shrink:{'(<custom-property>)'}</h2>
        <h2>flex-shrink:{'var(<custom-property>);'};</h2>
      </div>

      {/* Basic example*/}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Allowing the items to shrink </h2>
        <h2 className="text-vsm">
          Use 'shrink' to allow the items to shrink if needed:
        </h2>
        <div
          className="resizableVid relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  bg-gray-800"
        >
          <div className=" w-20 flex-none flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" w-20 shrink flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" w-20 flex-none flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>

      {/* preventing items from shrinking*/}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Preventing items from shrinking </h2>
        <h2 className="text-vsm">
          Use 'shrink-0' to prevent a flex item from shrinking:
        </h2>
        <div
          className="resizableVid relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  bg-gray-800"
        >
          <div className=" w-20 shrink flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" w-20 shrink-0 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" w-20 shrink flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
      {/* Using a custom value*/}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Using a custom value</h2>
        <h2 className="text-vsm">
          Use 'shrink-[value]' syntax to set the growth factor based on
          completely custom value
        </h2>
        <div
          className="resizableVid relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  bg-gray-800"
        >
          <div className=" w-20 shrink-0 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" w-20 shrink-[calc(100vw-var(--sidebar))] flex flex-col items-center justify-center text-gray-300 bg-pink-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" w-20 shrink-0 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexShrink;
