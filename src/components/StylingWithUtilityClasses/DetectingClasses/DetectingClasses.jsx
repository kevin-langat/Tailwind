function DetectingClasses() {
  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Detecting Classes In Source Files
      </h2>
      <div className=" w-1/2 flex flex-col items-center bg-gray-700 outline-1 outline-gray-300 rounded-[0.4em] py-2 px-2">
        <h2 className=" text-gray-300 hover:text-gray-400">
          Tailwind treats all of your source files as plain text, and does not
          attempt to actually parse your files as code in any way.
        </h2>
      </div>
    </div>
  );
}

export default DetectingClasses;
