import imageOne from '../../../assets/Houses/img10.jpeg';
import imageTwo from '../../../assets/Houses/img52.jpeg';
import ImageThree from '../../../assets/Houses/img159.jpeg';

function Objectfit() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        object-fit
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how replaced element's content should be
        resized
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>object-contain</h2>
        <h2>object-fit:contain;</h2>
        <h2>object-cover</h2>
        <h2>object-fit-cover;</h2>
        <h2>object-fill</h2>
        <h2>object-fill:object-fit:fill;</h2>
        <h2>object-none</h2>
        <h2>object-fit-none</h2>
        <h2>object-scale-down</h2>
        <h2>object-fit-scale-down;</h2>
      </div>

      {/* object-cover */}
      <div className=" w-full items-center flex flex-col gap-2 justify-center">
        <h2 className="underline">Resizing to cover</h2>
        <h2 className="text-vsm">
          Use the 'object-cover' utility to resize an element's contents to
          cover the container:
        </h2>
        <div className=" outline-1 outline-blue-600 bg-gray-800">
          <img src={imageOne} className=" h-48 w-96 object-cover" alt="" />
        </div>
      </div>
      {/* object-contain */}
      <div className=" w-full items-center flex flex-col gap-2 justify-center">
        <h2 className="underline">Containing within</h2>
        <h2 className="text-vsm">
          Use the 'object-contain' utility to resize an elements content to stay
          contained within its container
        </h2>
        <div className=" outline-1 w-1/4 outline-blue-600 bg-gray-800">
          <img src={ImageThree} className="h-48 w-96 object-contain" alt="" />
        </div>
      </div>
      {/* object-fill */}
      <div className=" w-full items-center flex flex-col gap-2 justify-center">
        <h2 className="underline">Streching to fit</h2>
        <h2 className="text-vsm">
          Use the 'object-fill' utility to strech the element's content to fit
          its container
        </h2>
        <div className=" outline-1 outline-blue-600 bg-gray-800">
          <img src={imageTwo} className="h-48 w-100 object-fill" alt="" />
        </div>
      </div>
      {/* object-scale-down */}
      <div className=" w-full items-center flex flex-col gap-2 justify-center">
        <h2 className="underline">Scalling down</h2>
        <h2 className="w-1/2 text-vsm">
          Use the 'object-scale-down' utility to display and element's content
          at its original size but scale it down to fit its container if
          neccesary:
        </h2>
        <div className=" outline-1 w-[40%] outline-blue-600 bg-gray-800">
          <img
            src={ImageThree}
            className="h-48 w-96 object-scale-down"
            alt=""
          />
        </div>
      </div>
      {/* object-none */}
      <div className=" w-full items-center flex flex-col gap-2 justify-center">
        <h2 className="underline">Object-none</h2>
        <h2 className="w-1/2 text-vsm">
          Use the 'object-none' utility to display an elements content at its
          original size ignoring the container size:
        </h2>
        <div className=" outline-1 w-[40%] outline-blue-600 bg-gray-800">
          <img src={ImageThree} className=" object-none" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Objectfit;
