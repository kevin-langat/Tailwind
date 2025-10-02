function FlexWrap() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        flex-wrap
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how the flex-items wrap:
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>flex-nowrap</h2>
        <h2>flex-wrap:nowrap;</h2>
        <h2>flex-wrap</h2>
        <h2>flex-wrap:wrap;</h2>
        <h2>flex-wrap-reverse</h2>
        <h2>flex-wrap:wrap-reverse;</h2>
      </div>

      {/* Don't Wrap */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">nowrap</h2>
        <h2 className="text-vsm">
          Use 'flex-nowrap' to prevent flex-items from wrapping, causing
          inflexible items to overflow the container necessary
        </h2>
        <div
          className="relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  overflow-x-auto bg-gray-800"
        >
          <div className=" flex flex-row flex-nowrap items-center *:w-[20vw] gap-2">
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              01
            </div>
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              02
            </div>
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              03
            </div>
          </div>
        </div>
      </div>

      {/*  Wrap */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">wrap</h2>
        <h2 className="text-vsm">
          Use 'flex-wrap' to allow flex items to wrap:
        </h2>
        <div
          className="relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  overflow-x-auto bg-gray-800"
        >
          <div className=" flex flex-row w-full justify-center flex-wrap items-center *:w-[10vw] gap-2">
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              01
            </div>
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              02
            </div>
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              03
            </div>
          </div>
        </div>
      </div>
      {/*  Wrap reversed */}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">wrap reversed</h2>
        <h2 className="text-vsm">
          Use 'flex-wrap' to wrap items in the reverse direction
        </h2>
        <div
          className="relative  flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  overflow-x-auto bg-gray-800"
        >
          <div className=" flex flex-row w-full justify-center flex-wrap-reverse items-center *:w-[10vw] gap-2">
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              01
            </div>
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              02
            </div>
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              03
            </div>
            <div className=" flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
              04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexWrap;
