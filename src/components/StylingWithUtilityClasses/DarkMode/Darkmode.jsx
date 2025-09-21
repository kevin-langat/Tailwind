import { PenBoxIcon } from 'lucide-react';

function Darkmode() {
  return (
    <div className=" flex flex-col items-center gap-8 w-full">
      <h2 className=" text-2xl underline font-bold">Dark Mode</h2>

      <div className=" flex w-3/5 flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Example of Dark Mode with prefers-color-scheme
        </h2>
        <div className="flex group py-3 px-3 rounded-[0.4em] w-3/4 bg-gray-400/20  dark:bg-gray-900 outline-1 outline-gray-400 flex-col items-center gap-1 *:text-gray-800">
          <PenBoxIcon className="dark:text-gray-300 stroke-2 dark:stroke-green-400 " />
          <h2 className="dark:text-gray-300">Write upside down</h2>
          <h2 className="dark:text-gray-400/90">
            The zero gravity pen can be used to write in any orientation,
            including upside down.Suprisingly it evens works in mars
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Darkmode;
