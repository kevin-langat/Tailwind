import React from 'react';

function MinHeight() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        min-height
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for setting up the minimum height of an element.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>min-h-{'<number>'}</h2>
        <h2>min-height:calc(var(--spacing)*{'<number>'});</h2>
        <h2>min-h-{'<fraction>'}</h2>
        <h2>min-height: calc({'<fraction>'}*100%);</h2>
        <h2>min-h-px</h2>
        <h2>min-height: 1px;</h2>
        <h2>min-h-full</h2>
        <h2>min-height: 100%;</h2>
        <h2>min-h-screen</h2>
        <h2>min-height: 100vh;</h2>
      </div>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'min-h-{'<number'}' utilities like 'min-h-24' and 'min-h-64' to set
        an element to a fixed minimum height based on the spacing scale:
      </h2>
      <div
        className=" flex flex-row-reverse rounded-[0.4em]
       gap-1 justify-center w-1/2 items-end p-2 bg-gray-800 "
      >
        <span className=" min-h-96 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-96
        </span>
        <span className=" min-h-80 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-80
        </span>
        <span className=" min-h-64 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-64
        </span>
        <span className=" min-h-48 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-48
        </span>
        <span className=" min-h-40 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-40
        </span>
        <span className=" min-h-32 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-32
        </span>
        <span className=" min-h-24 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-24
        </span>
      </div>
      {/* Using a percentage */}
      <h2 className="underline">Using a percentage</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'h-full', or 'min-h-{'<fraction>'}' utilities like 'min-h-1/2' and
        'min-h-2/5' to give an element a percentage-based minimum height:
      </h2>
      <div
        className=" *:text-vsm flex flex-row-reverse rounded-[0.4em]
       gap-1 justify-center w-1/2 h-72 items-end p-2 bg-gray-800 "
      >
        <span className=" min-h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-full
        </span>
        <span className=" min-h-9/10 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-9/10
        </span>
        <span className=" min-h-3/4 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-3/4
        </span>
        <span className=" min-h-1/2 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-1/2
        </span>
        <span className=" min-h-1/3 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-1/3
        </span>
      </div>
      {/* Using a custom value */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'min-h-{'<value>'}' syntax to set the minimum-height based on a
        completely custom value:
      </h2>
      <div
        className=" *:text-vsm flex flex-row-reverse rounded-[0.4em]
       gap-1 justify-center w-1/2 h-72 items-end p-2 bg-gray-800 "
      >
        <span className=" min-h-[220px] bg-sky-500 w-24 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-[220px]
        </span>
        <span className=" min-h-[180px] bg-sky-500 w-24 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-[180px]
        </span>
        <span className=" min-h-[120px] bg-sky-500 w-24 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-[120px]
        </span>
        <span className=" min-h-[80px] bg-sky-500 w-24 rounded-[0.4em] flex flex-row items-start justify-center">
          min-h-[80px]
        </span>
      </div>
    </div>
  );
}

export default MinHeight;
