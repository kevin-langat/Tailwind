function Height() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        height
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for setting up the height of an element.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>h-{'<number>'}</h2>
        <h2>height:calc(var(--spacing)*{'<number>'});</h2>
        <h2>h-{'<fraction>'}</h2>
        <h2>height: calc({'<fraction>'}*100%);</h2>
        <h2>h-auto</h2>
        <h2>height: auto;</h2>
        <h2>h-px</h2>
        <h2>height: 1px;</h2>
        <h2>h-full</h2>
        <h2>height: 100%;</h2>
        <h2>h-screen</h2>
        <h2>height: 100vh;</h2>
      </div>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="text-vsm">
        Use 'h-{'<number'}' utilities like 'h-24' and 'h-64' to set an element
        to a fixed height based on the spacing scale:
      </h2>
      <div
        className=" flex flex-row-reverse rounded-[0.4em]
       gap-1 justify-center w-1/2 items-end p-2 bg-gray-800 "
      >
        <span className=" h-96 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-96
        </span>
        <span className=" h-80 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-80
        </span>
        <span className=" h-64 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-64
        </span>
        <span className=" h-48 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-48
        </span>
        <span className=" h-40 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-40
        </span>
        <span className=" h-32 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-32
        </span>
        <span className=" h-24 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-24
        </span>
      </div>
      {/* Using percentages */}
      <h2 className="underline">Using percentages</h2>
      <h2 className="text-vsm">
        Use 'h-{'<fraction>'}' of 'h-full' utilities like 'h-1/2' and 'h-2/5' to
        set an element to a fixed height based on the spacing scale:
      </h2>
      <div
        className=" flex flex-row-reverse rounded-[0.4em]
       gap-1 justify-center w-1/2 h-100 items-end p-2 bg-gray-800 "
      >
        <span className=" h-full bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-full
        </span>
        <span className=" h-9/10 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-9/10
        </span>
        <span className=" h-3/4 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-3/4
        </span>
        <span className=" h-1/2 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-1/2
        </span>
        <span className=" h-1/3 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-1/3
        </span>
        <span className=" h-1/4 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          h-1/4
        </span>
      </div>
      {/* Matching viewport */}
      <h2 className="underline">Matching viewport</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'h-screen' utility to make an element span the entire height of the
        viewport.
      </h2>
      {/* Matching dynamic viewport */}
      <h2 className="underline">Matching dynamic viewport</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'h-dvh' utility to make an element span the entire height of the
        viewport, which change as the browser UI expands or contracts
      </h2>
      {/* Matching large viewport */}
      <h2 className="underline">Matching large viewport</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'h-lvh' to set an element's height to the largest possible height of
        the viewport:
      </h2>
      {/* Matching small viewport */}
      <h2 className="underline">Matching small viewport</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'h-svh' to set an element's height to the smallest possible height
        of the viewport:
      </h2>
      {/* setting both height and width*/}
      <h2 className="underline">Setting both height and width</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'size-px', 'size-4' and 'size-full' to set both the width and height
        of an element at the same time:
      </h2>
      <div
        className=" flex flex-row-reverse rounded-[0.4em]
       gap-1 justify-center w-1/2 h-46 items-end p-2 bg-gray-800 "
      >
        <span className="  bg-sky-500 size-40 rounded-[0.4em] flex flex-row items-start justify-center">
          size-40
        </span>
        <span className=" size-32 bg-sky-500 rounded-[0.4em] flex flex-row items-start justify-center">
          size-34
        </span>
        <span className=" size-24 bg-sky-500  rounded-[0.4em] flex flex-row items-start justify-center">
          size-24
        </span>
        <span className=" size-20 bg-sky-500 rounded-[0.4em] flex flex-row items-start justify-center">
          size-20
        </span>
        <span className=" size-16 bg-sky-500 w-14 rounded-[0.4em] flex flex-row items-start justify-center">
          size-16
        </span>
      </div>
      {/*Using a custom value  */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'h-[{'<Value>'}]' syntax to set the height based on a completely
        custom value:
      </h2>
      <div
        className=" flex flex-row-reverse rounded-[0.4em]
       gap-1 justify-center w-1/2 h-52 items-end p-2 bg-gray-800 "
      >
        <span className="  bg-sky-500 w-24 h-[12rem] rounded-[0.4em] flex flex-row items-start justify-center">
          h-[12rem]
        </span>
      </div>
    </div>
  );
}

export default Height;
