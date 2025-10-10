import { products } from '../../../Config/config';

function Width() {
  const searchStr = 'Spinach';
  const searchStrSplit = searchStr.toLowerCase().split('');

  // products.forEach((product) => {
  //   let prevI = 0;
  //   const nameChars = product.name.split('');
  //   for (let i = 0; i < searchStrSplit.length; i++) {
  //     if (
  //       nameChars.includes(searchStrSplit[i]) &&
  //       nameChars.includes(searchStrSplit[prevI])
  //     ) {
  //     }
  //     prevI = i;
  //   }
  // });

  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Width
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for setting up the width of an element.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>w-{'<number>'}</h2>
        <h2>width:{'<number>'};</h2>
        <h2>w-{'<fraction>'}</h2>
        <h2>width: calc({'<fraction>'}*100%);</h2>
        <h2>w-3xs</h2>
        <h2>width: var(--container-3xs)</h2>
        <h2>w-2xs</h2>
        <h2>width: var(--container-2xs)</h2>
        <h2>w-xs</h2>
        <h2>width: var(--container-xs)</h2>
      </div>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="text-vsm">
        Use 'w-{'<number'}' utilities like 'w-24' and 'w-64' to set an element
        to a fixed width based on the spacing scale:
      </h2>
      <div
        className=" flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
      >
        <span className=" w-96 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-96
        </span>
        <span className=" w-80 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-80
        </span>
        <span className=" w-64 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-64
        </span>
        <span className=" w-48 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-48
        </span>
        <span className=" w-40 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-40
        </span>
        <span className=" w-32 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-32
        </span>
        <span className=" w-24 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-24
        </span>
        <span className=" w-14 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-14
        </span>
      </div>
      {/* using a percentage */}
      <h2 className="underline">Using a percentage</h2>
      <h2 className="text-vsm">
        Use 'w-full' or 'w-{'<fraction>'}' utilities like 'w-1/2' and 'w-2/5' to
        give an element a percentage based width:
      </h2>
      <div
        className=" flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
      >
        <div className=" w-full flex gap-1 flex-row items-center justify-start">
          <span className=" w-1/2 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-1/2
          </span>
          <span className=" w-1/2 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-1/2
          </span>
        </div>
        <div className=" w-full flex gap-1 flex-row items-center justify-start">
          <span className=" w-2/5 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-2/5
          </span>
          <span className=" w-3/5 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-3/5
          </span>
        </div>
        <div className=" w-full flex gap-1 flex-row items-center justify-start">
          <span className=" w-1/4 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-1/4
          </span>
          <span className=" w-3/4 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-3/4
          </span>
        </div>
        <div className=" w-full flex gap-1 flex-row items-center justify-start">
          <span className=" w-1/5 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-1/5
          </span>
          <span className=" w-4/5 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-4/5
          </span>
        </div>
        <div className=" w-full flex gap-1 flex-row items-center justify-start">
          <span className=" w-1/6 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-1/6
          </span>
          <span className=" w-5/6 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-5/6
          </span>
        </div>
        <div className=" w-full flex gap-1 flex-row items-center justify-start">
          <span className=" w-full bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-full
          </span>
        </div>
      </div>

      {/* Using a container scale */}
      <h2 className="underline">Using a container scale</h2>
      <h2 className="text-vsm">
        Use utilities like 'w-sm' and 'w-xl' to set an element to fixed width
        based on the container scale:
      </h2>
      <div
        className=" flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
      >
        <span className=" w-xl bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-xl
        </span>
        <span className=" w-lg bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-lg
        </span>
        <span className=" w-md bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-md
        </span>
        <span className=" w-sm bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-sm
        </span>
        <span className=" w-xs bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-xs
        </span>
        <span className=" w-2xs bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-2xs
        </span>

        <span className=" w-3xs bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-3xs
        </span>
      </div>
      {/* Matching the view port*/}
      <h2 className="underline">Matching the view port</h2>
      <h2 className="text-vsm">
        Use utilities like 'w-screen' utility to make an element span the entire
        width of the view port:
      </h2>

      {/* <span className=" w-screen bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
        w-3xs
      </span> */}
      {/* Resetting the width*/}
      <h2 className="underline">Resetting the width</h2>
      <h2 className="text-vsm">
        Use utilities like 'w-auto' utility to remove an element's assigned with
        under aspecific condition like a particular break point:
      </h2>
      <div
        className=" flex flex-col rounded-[0.4em]
       gap-1 justify-center w-1/4 items-start p-2 bg-gray-800 "
      >
        <span className=" w-full lg:w-auto bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          w-xl
        </span>
      </div>
      {/* Setting both width and height*/}
      <h2 className="underline"> Setting both width and height</h2>
      <h2 className="text-vsm">
        Use 'size-px','size-4' and 'size-full' to set both the width and heigth
        of an element at the same time
      </h2>
      <div
        className=" grid grid-rows-1 grid-flow-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
      >
        <span className=" size-16 bg-sky-500 rounded-[0.4em] flex flex-row items-start justify-center">
          size-16
        </span>
        <span className=" size-20 bg-sky-500 rounded-[0.4em] flex flex-row items-start justify-center">
          size-20
        </span>
        <span className=" size-24 bg-sky-500 rounded-[0.4em] flex flex-row items-start justify-center">
          size-24
        </span>
        <span className=" size-32 bg-sky-500 rounded-[0.4em] flex flex-row items-start justify-center">
          size-32
        </span>
        <span className=" size-40 bg-sky-500 rounded-[0.4em] flex flex-row items-start justify-center">
          size-40
        </span>
      </div>
    </div>
  );
}

export default Width;
