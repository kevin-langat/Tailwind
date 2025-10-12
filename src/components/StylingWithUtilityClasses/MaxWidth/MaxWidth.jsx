function MaxWidth() {
  return (
    <div>
      <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          max-width
        </h2>
        <h2 className=" w-1/2 text-vsm">
          Utilities for setting up the maximum width of an element.
        </h2>
        <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
          <h2>Class</h2>
          <h2>Styles</h2>
          <h2>max-w-{'<number>'}</h2>
          <h2>max-width:calc(var(--spacing)*{'<number>'});</h2>
          <h2>max-w-{'<fraction>'}</h2>
          <h2>max-width: calc({'<fraction>'}*100%);</h2>
          <h2>max-w-3xs</h2>
          <h2>max-width: var(--container-3xs)</h2>
          <h2>max-w-2xs</h2>
          <h2>max-width: var(--container-2xs)</h2>
          <h2>max-w-xs</h2>
          <h2>max-width: var(--container-xs)</h2>
        </div>
        {/* Basic example */}
        <h2 className="underline">Basic example</h2>
        <h2 className="text-vsm">
          Use 'max-w-{'<number'}' utilities like 'max-w-24' and 'max-w-64' to
          set an element to a fixed maximum width based on the spacing scale:
        </h2>
        <div
          className=" resizableVid max-w-3/5 min-w-24 flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
        >
          <span className=" max-w-80 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-80
          </span>
          <span className=" max-w-64 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-64
          </span>

          <span className=" max-w-48 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-48
          </span>
          <span className=" max-w-40 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-40
          </span>
          <span className=" max-w-32 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-32
          </span>
          <span className=" max-w-24 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-24
          </span>
          <span className=" max-w-18 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-18
          </span>
        </div>

        {/* using a percentage */}
        <h2 className="underline">Using a percentage</h2>
        <h2 className="text-vsm">
          Use 'max-w-full' or 'max-w-{'<fraction>'}' utilities like 'max-w-1/2'
          and 'max-w-2/5' to give an element a percentage based maximum width:
        </h2>

        <div
          className=" resizableVid **:text-vsm max-w-3/5 min-w-1/3 flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
        >
          <span className=" max-w-9/10 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-9/10
          </span>
          <span className=" max-w-3/4 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-3/4{' '}
          </span>

          <span className=" max-w-1/2 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-1/2{' '}
          </span>
          <span className=" max-w-1/3 bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-1/3{' '}
          </span>
        </div>

        {/* using the container scale */}
        <h2 className="underline">Using the container scale </h2>
        <h2 className="text-vsm">
          Use 'max-w-full' or 'max-w-{'<fraction>'}' utilities like 'max-w-xs'
          and 'max-w-xl' to give an element to a fixed maximum width based on
          the container scale:
        </h2>

        <div
          className=" resizableVid **:text-vsm max-w-3/5 min-w-1/3 flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
        >
          <span className=" max-w-xs bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-xs
          </span>
        </div>
        {/* using a custom value */}
        <h2 className="underline">Using cusstom value </h2>
        <h2 className="text-vsm">
          Use 'max-w-[{'<value>'}] syntax to set the maximum width based on a
          completely custom value:
        </h2>

        <div
          className=" resizableVid **:text-vsm max-w-3/5 min-w-1/3 flex flex-col rounded-[0.4em]
       gap-1 justify-center w-3/5 items-start p-2 bg-gray-800 "
        >
          <span className=" max-w-[400px] bg-sky-500 w-full h-8 rounded-[0.4em] flex flex-row items-center justify-start">
            max-w-400px
          </span>
        </div>
      </div>
    </div>
  );
}

export default MaxWidth;
