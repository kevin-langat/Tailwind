function BreakBefore() {
  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        break-before
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how a column or page should break before an
        element{' '}
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>break-before-auto</h2>
        <h2>break-before:auto;</h2>
        <h2>break-before-avoid</h2>
        <h2>break-before:avoid;</h2>
        <h2>break-before-all</h2>
        <h2>break-before:all;</h2>
        <h2>break-before-avoid-page</h2>
        <h2>break-before:avoid-page;</h2>
      </div>
    </div>
  );
}

export default BreakBefore;
