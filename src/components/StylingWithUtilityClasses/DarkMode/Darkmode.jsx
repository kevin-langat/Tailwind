import { PenBoxIcon } from 'lucide-react';
import { globalState } from '../../../Global/GlobalContext';
import { useContext } from 'react';

function Darkmode() {
  const { moveToNextTopic } = useContext(globalState);

  return (
    <div className=" flex flex-col items-center justify-center gap-8 w-full">
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
      <h2 className="text-vsm max-md:w-11/12  w-1/2">
        To use data attribute instead of class make sure you override the dark
        variant with attribute selector:
        <br />{' '}
        <span className="rounded-full bg-sky-500/30 text-sky-800 py-0.5 px-2">
          @custom-variant dark (&:where([data-theme=dark], [data-theme=dark]
          *));
        </span>
      </h2>
      <button
        onClick={moveToNextTopic}
        className="bg-gray-800 px-4 rounded-full text-gray-300"
      >
        Next
      </button>
    </div>
  );
}

export default Darkmode;
