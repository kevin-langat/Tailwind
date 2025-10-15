import IrynaImage from '../../../assets/faces/uifaces-popular-image (1).jpg';
import changpengZhao from '../../../assets/faces/uifaces-human-image (35).jpg';

function LineClamp() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        line-clamp
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for clamping text to a specific number of lines.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'line-clamp{'<number>'}' utilities like 'line-clamp-2' add
        'line-clamp-3' to truncate multi-line after a specific number of lines:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-indigo-500 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-1 p-3">
        <time datetime="10/10/2020" className="text-sm text-gray-400">
          October 14,2025
        </time>
        <div className="flex flex-row w-1/3 py-1 bg-gray-800 gap-1 outline-1 outline-gray-500/60 rounded-[0.4em] items-center justify-center">
          <img src={IrynaImage} className="size-10 rounded-full" alt="" />
          <h2 className="text-vsm text-gray-400">Iryna Zarutska</h2>
        </div>
        <h2 className=" text-[16px] underline font-extralight tracking-tight">
          Boost your conversion rate
        </h2>
        <h2 className="text-vsm line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
          cupiditate corrupti laboriosam praesentium, modi odit sed ipsum
          aperiam rem, assumenda iste alias obcaecati. Praesentium voluptas
          neque at necessitatibus nisi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Est iure sapiente tenetur corrupti officiis quae.
        </h2>
      </div>

      {/* Undoing line clamping */}
      <h2 className="underline">Undoing line clamping</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'line-clamp-none' to undo a previously applied line clamp utility:
      </h2>
      <div className=" @container/undoLineClamp resizableVid w-1/2 bg-gray-950 outline-1 outline-indigo-500 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-1 p-3">
        <time datetime="10/10/2020" className="text-sm text-gray-400">
          October 14,2025
        </time>
        <div className="flex flex-row w-1/3 py-1 bg-gray-800 gap-1 outline-1 outline-gray-500/60 overflow-hidden rounded-[0.4em] items-center justify-center">
          <img src={IrynaImage} className="size-10 rounded-full" alt="" />
          <h2 className="text-vsm text-gray-400 text-nowrap">Iryna Zarutska</h2>
        </div>
        <h2 className=" text-[16px] underline font-extralight tracking-tight">
          Boost your conversion rate
        </h2>
        <h2 className="text-vsm line-clamp-3 @md/undoLineClamp:line-clamp-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
          cupiditate corrupti laboriosam praesentium, modi odit sed ipsum
          aperiam rem, assumenda iste alias obcaecati. Praesentium voluptas
          neque at necessitatibus nisi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Est iure sapiente tenetur corrupti officiis quae.
        </h2>
      </div>

      {/* Using a custom value*/}
      <h2 className="underline"> Using a custom value </h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'line-clamp-[{'<value>'}]' synatx to set the number of lines
        based on a completely custom value
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-indigo-500 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-1 p-3">
        <time datetime="10/10/2020" className="text-sm text-gray-400">
          October 13,2025
        </time>
        <div className="flex flex-row w-1/3 py-1 bg-gray-800 gap-1 outline-1 outline-gray-500/60 rounded-[0.4em] items-center justify-center">
          <img src={changpengZhao} className="size-10 rounded-full" alt="" />
          <h2 className="text-vsm text-gray-400">Changpeng Zhao</h2>
        </div>
        <h2 className=" text-[16px] underline font-extralight tracking-tight">
          Boost your conversion rate
        </h2>
        <h2 className="text-vsm line-clamp-[calc(var(--characters)/100)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
          cupiditate corrupti laboriosam praesentium, modi odit sed ipsum
          aperiam rem, assumenda iste alias obcaecati. Praesentium voluptas
          neque at necessitatibus nisi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Est iure sapiente tenetur corrupti officiis quae.
        </h2>
      </div>
    </div>
  );
}

export default LineClamp;
