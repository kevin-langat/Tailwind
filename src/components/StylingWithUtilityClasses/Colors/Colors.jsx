import { Bell } from 'lucide-react';

function Colors() {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <h2 className=" text-[medium] font-bold rounded-full text-pink-500 bg-pink-600/20 outline-1 outline-gray-400 px-4">
        Colors
      </h2>
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Using color utilities
        </h2>
        <div className=" py-4 gap-2 justify-center flex flex-row items-center w-2/5 bg-gray-800 outline-1 outline-gray-300 rounded-[0.4em]">
          <Bell className=" p-0.5 text-pink-500 bg-pink-500/20 outline-1 outline-gray-500 rounded-full" />
          <h2 className="first-letter:text-green-500 text-gray-300">
            You have a new friend suggestion
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          All the utilities that uses color palette
        </h2>
        <div className=" py-2 px-2 gap-2 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-2/5 bg-gray-800 outline-1 outline-gray-300 rounded-[0.4em] *:text-gray-300 *:bg-gray-700 *:outline-gray-300 *:w-[96%] *:rounded-full *:text-sm *:flex *:flex-col *:justify-center *:items-center *:odd:bg-gray-500">
          <span>'bg-*'</span>
          <span>'text-*'</span>
          <span>'decoration-*'</span>
          <span>border-*</span>
          <span>'outline-*'</span>
          <span>'shadow-*'</span>
          <span>'inset-shadow-*'</span>
          <span>'ring-*'</span>
          <span>'inset-ring-*'</span>
          <span>'accent-*'</span>
          <span>'caret-*'</span>
          <span>'fill-*'</span>
          <span>'stroke-*'</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Customizing you colors
        </h2>
        <div className=" py-4 px-4 gap-2 justify-center flex flex-col items-center w-2/5 bg-gray-800 outline-1 outline-gray-300 rounded-[0.4em]">
          <h2 className=" text-gray-100">
            use '@theme' to add custom colors to your project under the
            --color-*' theme namespace
          </h2>
          <h2 className=" text-gray-100">
            To override default colors define the new theme variables with the
            same name e.g.
            {'  @theme{ --color-gray-50:oklch(0.984 0.003 247.858)}'}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Colors;
