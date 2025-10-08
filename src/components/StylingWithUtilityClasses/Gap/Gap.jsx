function Gap() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        gap
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the gutters between grid and flexbox items.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>gap-{'<number>'}</h2>
        <h2>gap: calc(var(--spacing)*{'<value>'})</h2>
        <h2>gap-{'<custom-property>'}</h2>
        <h2>gap: var({'<custom-property>'})</h2>
        <h2>gap-{'[<value>]'}</h2>
        <h2>gap: {'<value>'}</h2>
      </div>

      <h2 className="underline">Basic Example</h2>
      <h2 className="w-1/2 text-vsm">
        Use gap-{'<number>'} utilities like 'gap-2' and 'gap-4' to change the
        gap between both rows and columns in grid and flexbox layouts:{' '}
      </h2>

      <div
        className=" w-1/3
      bg-gray-900 grid grid-cols-2 *:h-8  gap-2 py-2 px-2.5 rounded-[0.4em]"
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
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
      </div>

      {/* changing the gap of the rows and columns independently */}
      <h2 className="underline">
        Changing the gap of the rows and columns independently{' '}
      </h2>
      <h2 className="text-vsm w-1/2">
        Use 'gap-x-{'<number>'}' or gap-y-{'<number>'}' utilities like 'gap-x-8'
        and 'gap-y-4' to change the gap between columns and the rows
        independently:
      </h2>

      <div
        className=" w-1/3
      bg-gray-900 grid grid-cols-2 *:h-8  gap-x-4 gap-y-1 py-2 px-2.5 rounded-[0.4em]"
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
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
      </div>
      {/* Using a custom value */}
      <h2 className="underline">Using a custom value </h2>
      <h2 className="text-vsm w-1/2">
        Use 'gap-x-{'<value>'}' or gap-y-{'<value>'}' utilities like
        'gap-x-[10vw]' to set the gap based on a completely custom value:
      </h2>

      <div
        className=" w-1/3
      bg-gray-900 grid grid-cols-2 *:h-8 gap-[2vw]  py-2 px-2.5 rounded-[0.4em]"
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
        <span className="bg-indigo-600 rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
      </div>
    </div>
  );
}

export default Gap;
