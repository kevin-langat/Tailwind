function ResponsiveDesign() {
  return (
    <div className="w-full mb-5 flex flex-col items-center justify-center gap-8">
      {/* One */}
      <div className="  flex flex-col w-full items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Example of a responsive design
        </h2>
        <div className="w-11/12 py-3 px-2 bg-gray-900 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            01
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            02
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            03
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            04
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            05
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            06
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            07
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            08
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            09
          </span>

          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            10
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            11
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            12
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            13
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            14
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            15
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            16
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            17
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            18
          </span>
        </div>
      </div>
      {/* Two */}
      <div className="w-full gap-2 items-center flex flex-col">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          2 :Targeting a breakpoint range
        </h2>
        <div className="w-1/2 *:text-gray-300 bg-gray-800 outline-1 md:max-lg:outline-black md:max-lg:bg-gray-600 flex flex-col items-center rounded-[0.4em]">
          <h2>Tailwind css</h2>
          <h3>Welcome to tailwind css documentation course</h3>
        </div>
      </div>
      {/* Three */}
      <div className="w-full gap-2 items-center flex flex-col">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          3 :Customized theme
        </h2>
        <h2 className=" w-1/2 p-3.5 bg-gray-900 text-gray-200 rounded-[0.4em] sm:text-sky-500 sm:bg-sky-600/30 md:bg-gray-800 xm:bg-orange-500 xm:text-black lg:bg-green-500">
          The theme added here is 'xm'(extra medium) which is a custom break
          point between md and lg{' '}
        </h2>
        <h2 className="hidden w-1/2 bg-orange-500 rounded-[0.4em] p-3 xm:max-lg:block">
          This text appears between the custom breakpoint 'xm' which is between
          53rem and lg breakpoint at 64rem
        </h2>
      </div>

      {/* four */}
      <div className="w-full gap-2 items-center flex flex-col">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          4 :Container Queries
        </h2>
        <div className=" @container rounded-[0.5em] bg-gray-400  flex flex-col items-center h-full gap-2 w-1/2">
          <div className=" p-1 w-full grid grid-cols-2 @sm:grid-cols-3 @md:grid-cols-4 @lg:grid-cols-6">
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              01
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              02
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              03
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              04
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              05
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              06
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              07
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              01
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              08
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              08
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              09
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              10
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              01
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              11
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              12
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              13
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              14
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              15
            </button>
            <button className=" py-2 px-4 rounded-[0.3em] bg-gray-800 text-gray-500 outline-1 outline-gray-400 focus:bg-orange-500 active:bg-gray-500">
              16
            </button>
          </div>
        </div>
      </div>

      {/* five */}
      <div className="w-full gap-2 items-center flex flex-col">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          4 :Max-width container queries
        </h2>
      </div>
    </div>
  );
}

export default ResponsiveDesign;
