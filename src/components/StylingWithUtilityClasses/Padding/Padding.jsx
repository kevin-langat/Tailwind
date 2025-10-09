function Padding() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        padding
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for controlling an element's padding.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>p-{'<number>'}</h2>
        <h2>padding: calc(var(--spacing)*{'<number>'})</h2>
        <h2>p-px</h2>
        <h2>padding:1px</h2>
        <h2>p-({'<custom-property>'})</h2>
        <h2>padding:var({'<custom-property>'});</h2>
        <h2>p-{'<value>'}</h2>
        <h2>padding:{'<value>'};</h2>
        <h2>px-{'<px>'}</h2>
        <h2>padding-inline: 1px;</h2>
      </div>
      {/* paddding */}
      <h2 className="text-vsm w-1/2">
        Use 'p-{'<number>'}' utlities like 'p-4' and 'p-8' to control the
        padding on all the sides of an element.
      </h2>

      <div className=" h-40 p-8 flex flex-col items-center justify-center content-center w-60 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
        <h2 className=" w-full h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
          p-8
        </h2>
      </div>

      {/* adding padding to one side */}
      <div className=" w-full flex flex-col items-center justify-center gap-2 ">
        <h2 className="underline">Adding padding to one side</h2>
        <h2 className=" text-vsm w-1/2">
          Use 'pt-{'<number>'}', 'pr-{'<number>'}', 'pb-{'<number>'}','pl-
          {'<number>'}' utlities like 'pt-6' and 'pr-4' to control the padding
          on one side of an element:
        </h2>

        <div className=" flex gap-4 flex-row justify-center items-center outline-1 outline-gray-300 rounded-[0.4em] w-1/2">
          <div className=" h-20 pt-4 flex flex-col items-center justify-center content-center w-24 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
            <h2 className=" w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
              pt-4
            </h2>
          </div>
          <div className=" h-20 pr-6 flex flex-col items-center justify-center content-center w-24 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
            <h2 className=" rounded-[0.4em] w-full h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
              pr-6
            </h2>
          </div>
          <div className=" h-20 pb-8 flex flex-col items-center justify-center content-center w-24 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
            <h2 className=" w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
              pb-8
            </h2>
          </div>
          <div className=" h-20 pl-2 flex flex-col items-center justify-center content-center w-24 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
            <h2 className=" w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
              p-8
            </h2>
          </div>
        </div>
      </div>

      {/* adding horizontal padding */}
      <div className=" w-full flex flex-col items-center justify-center gap-2 ">
        <h2 className="underline">Adding horizontal padding</h2>
        <h2 className=" text-vsm w-1/2">
          Use 'px-{'<number>'}' utlities like 'px-4' and 'px-8' to control the
          horizontal padding of an element:
        </h2>
        <div className=" h-12 px-8 flex flex-col items-center justify-center content-center w-28 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
          <h2 className=" w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
            px-8
          </h2>
        </div>
      </div>
      {/* adding vertical padding */}
      <div className=" w-full flex flex-col items-center justify-center gap-2 ">
        <h2 className="underline">Adding vertical padding</h2>
        <h2 className=" text-vsm w-1/2">
          Use 'py-{'<number>'}' utlities like 'py-4' and 'py-8' to control the
          vertical padding of an element:
        </h2>
        <div className=" h-24 py-4 flex flex-col items-center justify-center content-center w-14 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
          <h2 className=" w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
            py-4
          </h2>
        </div>
      </div>
      {/* Using a custom value */}
      <div className=" w-full flex flex-col items-center justify-center gap-2 ">
        <h2 className="underline">Using a custom value</h2>
        <h2 className=" text-vsm w-1/2">
          Use 'py-{'<value>'}','p-{'<value>'}' and 'pb-{'<value>'}' to set
          padding based on a completely custom value:
        </h2>
        <div className=" h-24 pb-[20px] flex flex-col items-center justify-center content-center w-18 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
          <h2 className=" text-vsm w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
            pb-[20px]
          </h2>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center justify-center gap-2 ">
        <h2 className="underline">Using logical properties</h2>
        <h2 className=" text-vsm w-1/2">
          Use 'ps-{'<number>'}' or 'pe-{'<number>'}' like 'ps-4' and 'pe-8' to
          set the 'padding-inline-start' and 'padding-inline-end' logical
          properties, which map to either the left or right side based on the
          text direction:
        </h2>
        <div className=" flex flex-row gap-8">
          <div dir="ltr" className=" flex flex-col items-center gap-4">
            <h2 className=" text-vsm">left to right</h2>
            <div className=" pe-8 h-10 flex flex-col items-center justify-center content-center w-30 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
              <h2 className=" w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
                pe-8
              </h2>
            </div>
            <div className=" ps-8 h-10 flex flex-col items-center justify-center content-center w-30 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
              <h2 className=" w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
                ps-8
              </h2>
            </div>
          </div>
          <div dir="rtl" className=" flex flex-col items-center gap-4">
            <h2 className=" text-vsm">right to left</h2>
            <div className=" pe-8 h-10 flex flex-col items-center justify-center content-center w-30 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
              <h2 className=" w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
                pe-8
              </h2>
            </div>
            <div className=" ps-8 h-10 flex flex-col items-center justify-center content-center w-30 bg-gray-700 outline-1 outline-green-500 rounded-[0.4em]">
              <h2 className=" w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
                ps-8
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Padding;
