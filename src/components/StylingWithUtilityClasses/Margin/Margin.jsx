import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';

function Margin() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        margin
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for controlling an element's margin.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>m-{'<number>'}</h2>
        <h2>margin: calc(var(--spacing)*{'<number>'})</h2>
        <h2>-m-{'<number>'}</h2>
        <h2>margin: calc(var(--spacing)*{'-<number>'})</h2>
        <h2>m-px</h2>
        <h2>margin:1px</h2>
        <h2>-m-px</h2>
        <h2>margin:-1px</h2>
        <h2>m-({'<custom-property>'})</h2>
        <h2>margin:var({'<custom-property>'});</h2>
        <h2>m-{'<value>'}</h2>
        <h2>margin:{'<value>'};</h2>
      </div>

      {/* Basic example */}
      <h2 className="underline">Basic Example</h2>
      <h2 className="text-vsm w-1/2">
        Use 'm-{'<number>'}' utilities like 'm-4' and 'm-8' to control the
        margin on all the sides of an element.
      </h2>
      <div className="  bg-gray-800 rounded-[0.4em] ">
        {' '}
        <h2 className="  rounded-[0.2em] w-14 h-14 flex flex-col items-center justify-center bg-amber-600 m-10">
          m-10
        </h2>
      </div>
      {/* Adding margin to a single side */}
      <h2 className="underline">Adding margin to a single side</h2>
      <h2 className="text-vsm w-1/2">
        Use 'mt-{'<number>'}','mr-{'<number>'}','mb-{'<number>'}' and 'mb-
        {'<number>'}' utilities like 'ml-4' and 'mt-8' to control the margin on
        one side of an element:
      </h2>
      <div className=" grid h-54 grid-cols-2  w-1/2 bg-gray-800 rounded-[0.4em] ">
        {' '}
        <h2 className="rounded-[0.2em] ml-8  self-end w-14 h-14 flex flex-row items-center justify-center bg-amber-600">
          <ArrowRight className=" size-4" /> ml-8
        </h2>
        <h2 className="rounded-[0.2em] mt-2 w-14 h-14 flex flex-col items-center justify-center bg-amber-600">
          mt-2 <ArrowDown className="size-4" />
        </h2>
        <h2 className="rounded-[0.2em] place-self-end w-14 h-14 flex flex-col items-center justify-center bg-amber-600 mb-6">
          mb-6 <ArrowUp className=" size-4" />
        </h2>
        <h2 className="rounded-[0.2em] w-14 h-14 justify-self-end flex flex-row items-center justify-center mr-4 bg-amber-600">
          mr-4 <ArrowLeft className=" size-4" />
        </h2>
      </div>

      {/* Adding horizontal margin */}
      <h2 className="underline">Adding horizontal margin</h2>
      <h2 className="text-vsm w-1/2">
        Use 'mx-{'<number>'}' utilities like 'mx-4' and 'mx-8' to control the
        horizontal margin of an element:
      </h2>
      <div className="  bg-gray-800 rounded-[0.4em] ">
        {' '}
        <h2 className="  rounded-[0.2em] w-14 h-14 flex flex-col items-center justify-center bg-amber-600 mx-4">
          mx-4
        </h2>
      </div>

      {/* Adding verical margin */}
      <h2 className="underline">Adding vertical margin</h2>
      <h2 className="text-vsm w-1/2">
        Use 'my-{'<number>'}' utilities like 'my-4' and 'my-6' to control the
        vertical margin of an element:
      </h2>
      <div className="  bg-gray-800 rounded-[0.4em] ">
        {' '}
        <h2 className="  rounded-[0.2em] w-14 h-14 flex flex-col items-center justify-center bg-amber-600 my-6">
          my-6
        </h2>
      </div>
      {/* Using negative values */}
      <h2 className="underline">Using negative values</h2>
      <h2 className="text-vsm w-1/2">
        To use a negative value prefix the class name with a dash to connvert it
        to a negative value:
      </h2>
      <div className=" mt-10  bg-gray-800 w-30 flex flex-col items-center  h-14 rounded-[0.4em]  ">
        {' '}
        <h2 className="  rounded-[0.2em] w-14 h-14 flex flex-col items-center justify-center -mt-8 bg-amber-600 ">
          -mt-8
        </h2>
      </div>

      {/* Using logical props */}
      <div className=" w-full flex flex-col items-center justify-center gap-2 ">
        <h2 className="underline">Using logical properties</h2>
        <h2 className=" text-vsm w-1/2">
          Use 'ms-{'<number>'}' or 'me-{'<number>'}' like 'ms-4' and 'me-8' to
          set the 'margin-inline-start' and 'margin-inline-end' logical
          properties:
        </h2>
        <div className=" flex flex-row gap-14">
          <div dir="ltr" className=" flex flex-col items-center gap-4">
            <h2 className=" text-vsm">left to right</h2>
            <div className="  h-10 flex flex-col items-center justify-center content-center w-30 bg-gray-700  rounded-[0.4em]">
              <h2 className=" ms-8 w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
                ms-8
              </h2>
            </div>
            <div className=" h-10 flex flex-col items-center justify-center content-center w-30 bg-gray-700 rounded-[0.4em]">
              <h2 className="me-8 w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
                me-8
              </h2>
            </div>
          </div>
          <div dir="rtl" className=" flex flex-col items-center gap-4">
            <h2 className=" text-vsm">right to left</h2>
            <div className="  h-10 flex flex-col items-center justify-center content-center w-30 bg-gray-700  rounded-[0.4em]">
              <h2 className=" ms-8 w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
                ms-8
              </h2>
            </div>
            <div className=" h-10 flex flex-col items-center justify-center content-center w-30 bg-gray-700 rounded-[0.4em]">
              <h2 className="me-8 w-full rounded-[0.4em] h-full bg-indigo-500 items-center place-content-center content-center flex flex-col">
                me-8
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Adding space between children */}
      <h2 className="underline">Adding space between children</h2>
      <h2 className="text-vsm w-1/2">
        Use 'space-x-{'<number>'}' or 'space-y-{'<number>'}' utilities like
        'space-y-4' and 'space-x-8' to control the space between elements:
      </h2>
      <div
        className=" w-1/3
      bg-gray-900 flex flex-row justify-start space-x-8 *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
      </div>
      {/*Reversing children order*/}
      <h2 className="underline">Reversing children order</h2>
      <h2 className="text-vsm w-1/2">
        If your elements are in reverse order (using say 'flex-row-reverse' or
        'flex-col-reverse'), use the 'space-x-reverse' or 'space-y-reverse'
        utilities to ensure the space is added to the correct side of each
        element:
      </h2>
      <div
        className=" w-1/3
      bg-gray-900 flex space-x-reverse flex-row-reverse justify-start space-x-8 *:h-8 *:w-20  gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
      </div>

      {/* Adding a custom value */}
      <h2 className="underline">Adding a custom value</h2>
      <h2 className="text-vsm w-1/2">
        Use 'mx-{'<value>'}' and 'mb-{'<value>'}' utilities to set the margin
        based on a completely custom value:
      </h2>
      <div className="  bg-gray-800 rounded-[0.4em] ">
        {' '}
        <h2 className="  rounded-[0.4em] w-20 h-14 flex flex-col items-center justify-center bg-amber-600 mr-[30px]">
          mr-[30px]
        </h2>
      </div>
    </div>
  );
}

export default Margin;
