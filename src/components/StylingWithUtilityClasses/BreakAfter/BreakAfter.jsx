function BreakAfter() {
  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        break-after
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how a column or page should break after an
        element{' '}
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>break-after-auto</h2>
        <h2>break-after:auto;</h2>
        <h2>break-after-avoid</h2>
        <h2>break-after:avoid;</h2>
        <h2>break-after-all</h2>
        <h2>break-after:all;</h2>
        <h2>break-after-avoid-page</h2>
        <h2>break-after:avoid-page;</h2>
      </div>

      <div className=" resizableVid w-1/2 rounded-[0.4em] py-2.5 flex flex-col items-center px-2 min-w-50  text-gray-300 columns-2 bg-gray-800">
        <p className="break-">
          Well let me tell you something <br /> Sure Go ahead, laugh
        </p>
      </div>
    </div>
  );
}

export default BreakAfter;
