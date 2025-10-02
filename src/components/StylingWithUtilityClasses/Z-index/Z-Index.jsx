function ZIndex() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        z-index{' '}
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the stack order of an element.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-500/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>z-{'<number>'}</h2>
        <h2>z-index:{'<number>'}</h2>
        <h2>z-auto</h2>
        <h2>z-index: auto;</h2>
        <h2>z-{'[<value>]'}</h2>
        <h2>z-index:{'<value>'};</h2>
      </div>
      {/* Example */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Basic Example</h2>
        <h2 className="text-vsm">
          Use the 'z-{'<number>'} utilities like 'z-10' and 'z-50' to control
          the stack order (or three dimensional postioning) of an element,
          regardless of the order it has been displayed
        </h2>
        <div className=" py-2 flex flex-row items-center justify-center *:-ml-3 *:outline-2 *:first:outline-fuchsia-500 *:nth-2:outline-orange-500 *:nth-3:outline-green-500 *:nth-4:outline-blue-500 *:last:outline-red-500 w-1/2 bg-gray-900 rounded-[0.4em]">
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full z-50">
            05
          </div>
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full z-40">
            04
          </div>
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full z-30">
            03
          </div>
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full z-20">
            02
          </div>
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full z-10">
            01
          </div>
        </div>
      </div>
      {/* Using Neagtive Values */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Using negative values</h2>
        <h2 className="text-vsm">
          To use a negative z-index value, prefix the class name with a dash to
          convert it to a negative value:
        </h2>
        <div className=" py-2 flex flex-row items-center justify-center *:-ml-3 *:outline-2 *:first:outline-fuchsia-500 *:nth-2:outline-orange-500 *:nth-3:outline-green-500 *:nth-4:outline-blue-500 *:last:outline-red-500 w-1/2 bg-gray-900 rounded-[0.4em]">
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full z-50">
            05
          </div>
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full z-40">
            04
          </div>
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full -z-0">
            03
          </div>
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full z-20">
            02
          </div>
          <div className="w-14 h-14 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-full z-10">
            01
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="text-vsm w-1/2 before:content-['Note:'] before:mr-2 before:text-red-500">
        Use the 'z-{'<value>'}' syntax to set the stack based on a completely
        custom value
      </h2>
    </div>
  );
}

export default ZIndex;
