import React from 'react';

function MaxHeight() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        max-height
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for setting up the maximum height of an element.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>max-h-{'<number>'}</h2>
        <h2>max-height:calc(var(--spacing)*{'<number>'});</h2>
        <h2>max-h-{'<fraction>'}</h2>
        <h2>max-height: calc({'<fraction>'}*100%);</h2>
        <h2>max-h-px</h2>
        <h2>max-height: 1px;</h2>
        <h2>max-h-none</h2>
        <h2>max-height: none;</h2>
        <h2>max-h-full</h2>
        <h2>max-height: 100%;</h2>
        <h2>max-h-screen</h2>
        <h2>max-height: 100vh;</h2>
      </div>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'max-h-{'<number'}' utilities like 'max-h-24' and 'max-h-64' to set
        an element to a fixed maximum height based on the spacing scale:
      </h2>
      <div
        className=" flex flex-row-reverse rounded-[0.4em]
       gap-1 h-100 text-vsm justify-center w-1/2 items-end p-2 bg-gray-800 "
      >
        <span className=" max-h-96 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-full
        </span>
        <span className=" max-h-80 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-80
        </span>
        <span className=" max-h-64 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-64
        </span>
        <span className=" max-h-48 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-48
        </span>
        <span className=" max-h-40 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-40
        </span>
        <span className=" max-h-32 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-32
        </span>
        <span className=" max-h-24 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-24
        </span>
      </div>
      {/* Using a percentage */}
      <h2 className="underline"> Using a percentage</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'max-h-full' or 'max-h-{'<fraction'}' utilities like 'max-h-1/2' and
        'max-h-2/5' to give an element to a percentage-based maximum height.
      </h2>
      <div
        className=" flex flex-row rounded-[0.4em]
       gap-1 h-100 text-vsm justify-center w-1/2 items-end p-2 bg-gray-800 "
      >
        <span className=" max-h-96 h-9/10 bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-9/10
        </span>
        <span className=" max-h-3/4 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-3/4
        </span>
        <span className=" max-h-1/2 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-1/2
        </span>
        <span className=" max-h-1/4 h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-1/4
        </span>
        <span className=" max-h-full h-full bg-sky-500 w-18 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-full
        </span>
      </div>
      {/* Using a custom value */}
      <h2 className="underline"> Using a custom alue</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'max-h-{'<value'}' syntax to set the maximum height based on a
        completelycustom value:
      </h2>
      <div
        className=" flex flex-row rounded-[0.4em]
       gap-1 h-100 text-vsm justify-center w-1/2 items-end p-2 bg-gray-800 "
      >
        <span className=" max-h-[340px] h-9/10 bg-sky-500 w-24 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-340
        </span>
        <span className=" max-h-[280px] h-full bg-sky-500 w-24 rounded-[0.4em] flex flex-row items-start justify-center">
          max-h-280px
        </span>
      </div>
    </div>
  );
}

export default MaxHeight;
