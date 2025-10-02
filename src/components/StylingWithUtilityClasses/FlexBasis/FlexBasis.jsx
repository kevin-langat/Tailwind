function FlexBasis() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        flex-basis
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the initial size of the items
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>basis-{'<number>'}</h2>
        <h2>flex-basis: calc(var(--spacing)*{'<number>'})</h2>
        <h2>basis-{'<fraction>'}</h2>
        <h2>flex-basis: calc({'<fraction>'}*100%);</h2>
        <h2>basis-full</h2>
        <h2>flex-basis: 100%;</h2>
        <h2>basis-auto</h2>
        <h2>flex-basis: auto;</h2>
        <h2>basis-3xs:</h2>
        <h2> flex-basis:var(--container-3xs)</h2>
      </div>
      {/* Example */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Using the spacing scale</h2>
        <h2 className="text-vsm">
          Use the 'basis-{'<number>'}' utilities like 'basis-64' and 'basis-128'
          to set the initial size of the flex items based on the spacing scale:
        </h2>
        <div className="flex px-1 flex-ro items-center py-2 gap-2 w-1/2 rounded-[0.4em] bg-gray-800">
          <div className="basis-64 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className="basis-64 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className="basis-128 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
      {/* Using the container scale */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Using the container scale</h2>
        <h2 className="text-vsm">
          Use utilities like 'basis-xs' and 'basis-sm' to set the initial size
          of the flex items based on the container scale
        </h2>
        <div className="flex px-1 flex-ro items-center py-2 gap-2 w-1/2 rounded-[0.4em] bg-gray-800">
          <div className="basis-3xs flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className="basis-3xl flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>

          <div className="basis-xs flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            04
          </div>
        </div>
      </div>
      {/* Using the percentages  */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Using percentages</h2>
        <h2 className="text-vsm">
          Use 'basis{'<fraction>'}' utilities like 'basis-1/2' and 'basis-2/3'
          to set the initial size of the flex items:
        </h2>
        <div className="flex px-1 flex-row items-center py-2 gap-2 w-1/2 rounded-[0.4em] bg-gray-800">
          <div className="basis-1/4 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className="basis-3/4 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
        </div>
      </div>
      {/* Using the custom value  */}
      <div className="flex gap-1 flex-col items-center place-self-center w-3/4  ">
        <h2 className="underline">Using a custom value</h2>
        <h2 className="text-vsm">
          Use 'basis{'<value>'}'syntax to set the basis based on a custom value:
        </h2>
        <div className="flex px-1 flex-row items-center py-2 gap-2 w-[30vw]  rounded-[0.4em] bg-gray-800">
          <div className="basis-[25vw] flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className="basis-[5vw] flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
        </div>
      </div>
      {/* Responsive Design */}
      <div className="flex gap-1 flex-col items-center place-self-center w-3/4  ">
        <h2 className="underline">Responsive design</h2>
        <h2 className="text-vsm">
          prefix the 'flex-basis' utility with a breakpoint variant like 'md:'
          to only apply the utility at medium screen sizes and above:
        </h2>
        <div
          style={{ transition: '0.1s' }}
          className="@container resizableVid flex px-1 flex-row items-center py-2 gap-2 w-1/2  rounded-[0.4em] bg-gray-800"
        >
          <div className=" basis-[10%] @sm:basis-[15%] @md:basis-[40%] flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className="basis-[20%] @sm:basis-[25%] @md:basis-[30%]  flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className="basis-[30%] @sm:basis-[25%] @md:basis-[20%]  flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
          <div className="basis-[40%] @sm:basis-[35%] @md:basis-[10%]  flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            04
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexBasis;
