import React from 'react';

function FlexDirection() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        flex-direction
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the direction of flex-items
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>flex-row</h2>
        <h2>flex-direction:row;</h2>
        <h2>flex-row-reverse</h2>
        <h2>flex-direction:row-reverse;</h2>
        <h2>flex-col</h2>
        <h2>flex-direction:column;</h2>
        <h2>flex-col-reverse</h2>
        <h2>flex-direction: column-reverse;</h2>
      </div>
      {/* Example */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">row</h2>
        <h2 className="text-vsm">
          Use 'flex-row' to position the flex items horizontally in the same
          direction as text:
        </h2>
        <div
          className="flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em] *:w-1/3 bg-gray-800"
        >
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
      {/* Row reversed */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">row reversed</h2>
        <h2 className="text-vsm">
          Use 'flex-row-reverse' to position the flex items horizontally in the
          opposite direction:
        </h2>
        <div
          className="flex px-1 flex-row-reverse items-center py-2 gap-2 w-1/2
        rounded-[0.4em] *:w-1/3 bg-gray-800"
        >
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
      {/* col */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">column</h2>
        <h2 className="text-vsm">
          Use 'flex-col' to position items vertically:
        </h2>
        <div
          className="flex px-1 flex-col items-center py-2 gap-2 w-1/2
        rounded-[0.4em] *:w-1/2 bg-gray-800"
        >
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
      {/* col-reversed */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">column reversed</h2>
        <h2 className="text-vsm">
          Use 'flex-col-reverse' to position items vertically in the opposite
          direction:
        </h2>
        <div
          className="flex px-1 flex-col-reverse items-center py-2 gap-2 w-1/2
        rounded-[0.4em] *:w-1/2 bg-gray-800"
        >
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexDirection;
