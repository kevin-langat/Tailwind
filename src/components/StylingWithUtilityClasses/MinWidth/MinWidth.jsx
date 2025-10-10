function MinWidth() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        min-width
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for setting up the minimum width of an element.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>min-w-{'<number>'}</h2>
        <h2>min-width:calc(var(--spacing)*{'<number>'});</h2>
        <h2>min-w-{'<fraction>'}</h2>
        <h2>min-width: calc({'<fraction>'}*100%);</h2>
        <h2>min-w-3xs</h2>
        <h2>min-width: var(--container-3xs)</h2>
        <h2>min-w-2xs</h2>
        <h2>min-width: var(--container-2xs)</h2>
        <h2>min-w-xs</h2>
        <h2>min-width: var(--container-xs)</h2>
      </div>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="text-vsm">
        Use 'min-w-{'<number'}' utilities like 'min-w-24' and 'min-w-64' to set
        an element to a fixed minimum width based on the spacing scale:
      </h2>
      <div
        className=" flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
      >
        <span className=" min-w-80 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-80
        </span>
        <span className=" min-w-64 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-64
        </span>

        <span className=" min-w-48 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-48
        </span>
        <span className=" min-w-40 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-40
        </span>
        <span className=" min-w-32 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-32
        </span>
        <span className=" min-w-24 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-24
        </span>
        <span className=" min-w-16 bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-16
        </span>
      </div>

      {/* using a percentage */}
      <h2 className="underline">Using a percentage</h2>
      <h2 className="text-vsm">
        Use 'min-w-full' or 'min-w-{'<fraction>'}' utilities like 'min-w-1/2'
        and 'min-w-2/5' to give an element a percentage based minimum width:
      </h2>
      <div
        className=" flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
      >
        <div className=" w-full flex gap-1 flex-row items-center justify-start">
          <span className=" min-w-3/4 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            min-w-3/4
          </span>
          <span className=" min-w-1/4 bg-sky-500 h-6 rounded-[0.4em] flex flex-row items-center justify-start">
            w-full
          </span>
        </div>
      </div>

      {/* Using a container scale */}
      <h2 className="underline">Using a container scale</h2>
      <h2 className="text-vsm">
        Use utilities like 'min-w-sm' and 'min-w-xl' to set an element to fixed
        minimum width based on the container scale:
      </h2>
      <div
        className=" flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
      >
        <span className=" min-w-lg bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-lg
        </span>
        <span className=" min-w-md bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-md
        </span>
        <span className=" min-w-sm bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-sm
        </span>
        <span className=" min-w-xs bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-xs
        </span>
        <span className=" min-w-2xs bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-2xs
        </span>
        <span className=" min-w-3xs bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-3xs
        </span>
      </div>

      {/* Using a custom value */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="text-vsm">
        Use uthe 'min-w-{'[<value>]'}' syntax to set the minimum width based on
        a comletely custom value:
      </h2>
      <div
        className=" flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
      >
        <span className=" min-w-[220px] bg-sky-500 h-8 rounded-[0.4em] flex flex-row items-center justify-start">
          min-w-220px
        </span>
      </div>
    </div>
  );
}

export default MinWidth;
