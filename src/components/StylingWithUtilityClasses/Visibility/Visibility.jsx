import React from 'react';

function Visibility() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Visibilty{' '}
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the visibility of an element.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>visible</h2>
        <h2>visibility: visible;</h2>
        <h2>invisible</h2>
        <h2>visibility: invisible;</h2>
        <h2>collapse</h2>
        <h2>visibility:collapse;</h2>
      </div>
      {/* Example */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Making the elements invisible</h2>
        <h2 className="text-vsm">
          Use the 'invisible' utility to hide the element, but still maintain
          its space in the document, affecting the layout of other elements:
        </h2>

        <div className="flex bg-gray-900 py-2 flex-row items-center *:w-16 justify-center gap-2 rounded-[0.4em] w-3/4">
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800  flex-row items-center  justify-center invisible">
            01
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            02
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800  flex-row items-center  justify-center invisible">
            03
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            04
          </span>
        </div>
      </div>

      {/* collapsing elements */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Collapsing elements</h2>
        <h2 className="text-vsm">
          Use the 'collapse' utility to hide table rows, row-groups, columns and
          columns gorups as if they were set to display:none, but without
          impacting the other rows
        </h2>

        <div className=" bg-gray-900 w-full rounded-[0.4em] py-3 px-2.5 table">
          <div className="table-header-group w-full bg-gray-800 py-4 rounded-[0.3em]">
            <div className="table-row text-gray-300">
              <h2 className="table-cell">Invoice #</h2>
              <h2 className=" table-cell">Client</h2>
              <h2 className=" table-cell">Amount</h2>
            </div>
          </div>
          <div className=" table-row-group">
            <h2 className=" table-cell text-gray-400 underline decoration-1 decoration-orange-400">
              01
            </h2>
            <h2 className=" table-cell text-gray-400">Allan Smith</h2>
            <h2 className=" table-cell text-gray-400">$ 500</h2>
          </div>
          <div className=" collapse table-row-group">
            <h2 className=" table-cell text-gray-400">02</h2>
            <h2 className=" table-cell text-gray-400">Mark Davidson</h2>
            <h2 className=" table-cell text-gray-400">$ 2345</h2>
          </div>
          <div className=" table-row-group">
            <h2 className=" table-cell text-gray-400 overline decoration-1 decoration-orange-400">
              03
            </h2>
            <h2 className=" table-cell text-gray-400">Jack Dorsey</h2>
            <h2 className=" table-cell text-gray-400">$ 17,500</h2>
          </div>
        </div>
        <h2 className="text-vsm">
          This makes it possible to toggle rows and columns without affecting
          the table layout
        </h2>
      </div>
      {/*  making eleements visible */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Making the elements visible</h2>
        <h2 className="text-vsm">
          Use the 'visible' utility to make an elemement visible:
        </h2>

        <div className="flex bg-gray-900 py-2 flex-row items-center *:w-16 justify-center gap-2 rounded-[0.4em] w-3/4">
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800  flex-row items-center  justify-center visible">
            01
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center  justify-center">
            02
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800  flex-row items-center  justify-center visible">
            03
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            04
          </span>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Visibility;
