function AlignContent() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        align-content
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how rows are positioned in multi row flex and
        grid containers.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>content-normal</h2>
        <h2>align-content:normal;</h2>
        <h2>content-center</h2>
        <h2>align-content:center;</h2>
        <h2>content-start</h2>
        <h2>align-content:flex-start;</h2>
        <h2>content-end</h2>
        <h2>align-content:flex-end;</h2>
        <h2>content-between</h2>
        <h2>align-content: space-between;</h2>
        <h2>content-around</h2>
        <h2>align-content: space-around;</h2>
        <h2>content-evenly</h2>
        <h2>align-content: space-evenly;</h2>
        <h2>content-baseline</h2>
        <h2>align-content: baseline;</h2>
      </div>

      {/* start */}
      <h2 className="underline">start</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'content-start' to pack rows in a container against the start of the
        cross axis.
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3 *:h-8 h-36 content-start   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 justify-self-auto rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
      </div>

      {/* center */}
      <h2 className="underline">center</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'content-center' to pack rows in a container in the center of the
        cross axis{' '}
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid  grid-cols-3 *:h-8 h-36 content-center   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 justify-self-auto rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
      </div>
      {/* space-between */}
      <h2 className="underline">space between</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'content-between' to dstribute rows in a container such that there
        is an equal amount of space between each line:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3 *:h-8 h-36 content-between   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 justify-self-auto rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
      </div>
      {/* space-around */}
      <h2 className="underline">space around</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'content-around' to distribute rows in the container such that there
        is an equal amount of space around each line:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3 *:h-8 h-36 content-around   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 justify-self-auto rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
      </div>
      {/* space-evenly */}
      <h2 className="underline">space evenly</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'content-evenly' to distribute rows in a container such that there
        is an equal amount of space around each item, but also accounting for
        the doubling of the space you would normally see between each item when
        using 'content-around':
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3 *:h-8 h-36 content-evenly   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 justify-self-auto rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
      </div>

      {/* space-stretch */}
      <h2 className="underline">space stretch</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'content-stretch' to allow content items to fill the available space
        along the container's axis:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3 h-36 content-stretch   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 justify-center  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 justify-self-auto rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
      </div>
      {/* space-normal */}
      <h2 className="underline">space normal</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'content-normal' to pack content items in their default position as
        if no 'align-content' value was set:
      </h2>
      <div
        className=" w-1/2
      bg-gray-900 grid grid-cols-3  h-36 content-normal   gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600  rounded-[0.3em] w-full flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 justify-self-auto rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          03
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          04
        </span>
        <span className="bg-indigo-600  justify-center rounded-[0.3em] w-full flex flex-col items-center">
          05
        </span>
      </div>
    </div>
  );
}

export default AlignContent;
