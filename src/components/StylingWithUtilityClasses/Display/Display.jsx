function Display() {
  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        display
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the display box type of an element.
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>inline</h2>
        <h2>diplay:inline;</h2>
        <h2>block</h2>
        <h2>diplay:block;</h2>
        <h2>inline-block</h2>
        <h2>display:inline-block;</h2>
        <h2>flow-root</h2>
        <h2>display:flow-root;</h2>
        <h2>flex</h2>
        <h2>display:flex;</h2>
        <h2>inline-flex</h2>
        <h2>display:inline-flex;</h2>
        <h2>grid</h2>
        <h2>display:grid;</h2>
      </div>
    </div>
  );
}

export default Display;
