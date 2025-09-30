import imageOne from '../../../assets/faces/uifaces-popular-image (2).jpg';
import imageTwo from '../../../assets/faces/uifaces-human-image (38).jpg';
import imageThree from '../../../assets/faces/uifaces-human-image (40).jpg';
import imageFour from '../../../assets/faces/uifaces-human-image (41).jpg';
import imageFive from '../../../assets/faces/uifaces-human-image.jpg';
import imageSix from '../../../assets/faces/uifaces-human-image (46).jpg';

function Position() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        positon
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how an element element is positoned in the
        document.
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>static</h2>
        <h2>position:static;</h2>
        <h2>fixed</h2>
        <h2>position:fixed;</h2>
        <h2>absolute</h2>
        <h2>position:absolute;</h2>
        <h2>relative</h2>
        <h2>position:relative;</h2>
        <h2>sticky</h2>
        <h2>position:sticky;</h2>
      </div>
      {/* statically positioning elements */}
      <div className=" bg-gray-200 h-40 flex flex-col items-center w-1/2">
        <h2 className="underline">Statically positioning elements </h2>
        <h2 className="text-vsm">
          Use the 'static' utility to position elements according to the normal
          flow of the document:
        </h2>
        <div className="flex flex-col h-20 static items-center w-1/2 py-1.5 px-2 bg-gray-800 rounded-[0.4em] text-gray-300">
          <p>Static Parent</p>
          <div className=" absolute top-110 left-70 *:w-30 *:h-6 *:rounded-[0.4em] *:text-gray-300 *:flex *:flex-col *:items-center *:justify-center *:text-vsm *:bg-sky-400 ">
            <p>Absolute Child</p>
          </div>
        </div>
      </div>
      {/* Relatively positioning elements */}
      <div className=" bg-sky-400/30 h-40 flex flex-col items-center w-1/2">
        <h2 className="underline">Statically positioning elements </h2>
        <h2 className="text-vsm">
          Use the 'static' utility to position elements according to the normal
          flow of the document:
        </h2>
        <div className="flex flex-col relative h-20 items-center w-1/2 py-1.5 px-2 bg-gray-800 rounded-[0.4em] text-gray-300">
          <p>Relative Parent</p>
          <div className=" absolute bottom-0 left-0 *:w-30 *:h-6 *:rounded-[0.4em] *:text-gray-300 *:flex *:flex-col *:items-center *:justify-center *:text-vsm *:bg-sky-400 ">
            <p>Absolute Child</p>
          </div>
        </div>
      </div>
      {/* Absolute positioning elements */}
      <div className=" bg-sky-400/30 h-60 flex flex-col items-center w-1/2">
        <h2 className="underline">Absolute positioning elements </h2>
        <h2 className="text-vsm">
          Use the 'absolute' utility to position an element outside the normal
          flow of the document causing neighbouring elemensts to act as if the
          element doesnot exist:
        </h2>
        <div className="flex flex-col relative h-30 items-center w-11/12 py-1.5 px-2 bg-gray-800 rounded-[0.4em] text-gray-300">
          <p>Relative Parent</p>

          <div className="flex flex-col h-20 static items-center w-1/2 py-1.5 px-2 bg-sky-300/20 rounded-[0.4em] text-gray-300">
            <p>Static Parent</p>
            <div className=" absolute top-20 *:w-30 *:h-6 *:rounded-[0.4em] *:text-gray-300 *:flex *:flex-col *:items-center *:justify-center *:text-vsm *:bg-sky-400 ">
              <p>Static Child</p>
            </div>
          </div>
          <button className=" absolute top-0 right-0 bg-sky-400 text-gray-300 rounded-[0.3em] w-36 h-6">
            Absolute Child
          </button>
        </div>
      </div>

      {/* Fixed positioning elements */}

      <div className=" flex flex-col items-center w-full gap-1">
        <h2 className="underline">Fixed positioning elements</h2>
        <h2 className="text-vsm">
          Use 'fixed' utility to position an element relative to the browser
          window:
        </h2>

        <div className=" h-30 w-1/4 bg-gray-800 overflow-y-scroll flex flex-col items-center justify-center gap-2 rounded-[0.4em] outline-1 outline-sky-400">
          <h2 className="  fixed left-0 w-30 top-15 bg-sky-700 text-gray-200 h-15 ">
            Fixed Position
            <span className=" inline-block text-vsm rounded-full bg-sky-400/20 px-2 text-gray-300">
              for fixed demo
            </span>
          </h2>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageOne} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Jane White</h2>
          </div>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageOne} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Jane White</h2>
          </div>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageOne} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Jane White</h2>
          </div>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageOne} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Jane White</h2>
          </div>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageOne} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Jane White</h2>
          </div>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageOne} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Jane White</h2>
          </div>
        </div>
      </div>
      {/* Sticky positioning elements */}

      <div className=" flex flex-col items-center w-full gap-1">
        <h2 className="underline">Sticky positioning elements</h2>
        <h2 className="text-vsm">
          Use 'sticky' utility to position an element as 'relative' untill it
          crosses a specificied threshold , then threat it as 'fixed' untill its
          parent is off screen:
        </h2>

        <div className="h-30  w-1/4 bg-gray-800 overflow-y-scroll flex flex-col items-center justify-center gap-2 rounded-[0.4em] outline-1 outline-sky-400">
          <h2 className="sticky mt-30 left-0 top-0 w-full bg-linear-to-r from-blue-500 to-green-500 text-gray-200 h-15 ">
            Contacts
          </h2>

          <div className=" mt-20 bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageTwo} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Andrew Tate</h2>
          </div>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageThree} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Ryan Garcia</h2>
          </div>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageFour} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300"> Tristan Talisman</h2>
          </div>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageFive} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Bonnie Blue</h2>
          </div>
          <div className=" bg-gray-700 rounded-[0.3em] flex flex-row gap-4 justify-center w-3/5 items-center">
            <img src={imageSix} className=" w-12 h-12 rounded-full" alt="" />
            <h2 className=" text-gray-300">Marques BrownLee</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Position;
