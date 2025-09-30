import imageOne from '../../../assets/faces/uifaces-human-image (40).jpg';
import imageTwo from '../../../assets/faces/uifaces-human-image (41).jpg';
import imageThree from '../../../assets/faces/uifaces-human-image (42).jpg';
import imageFour from '../../../assets/faces/uifaces-human-image (43).jpg';
import imageFive from '../../../assets/faces/uifaces-human-image (44).jpg';
import imageSix from '../../../assets/faces/uifaces-human-image (50).jpg';
import imageSeven from '../../../assets/faces/uifaces-human-image (46).jpg';
import imageEight from '../../../assets/faces/uifaces-human-image (48).jpg';
import imageNine from '../../../assets/faces/uifaces-human-image (49).jpg';

function ObjectPosition() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        object-Position
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how a replaced element's content should be
        positioned within its container
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>object-top-left</h2>
        <h2>object-position:top left;</h2>
        <h2>object-top</h2>
        <h2>object-position:top;</h2>
        <h2>object-top-right</h2>
        <h2>object-position:top right</h2>
        <h2>object-left</h2>
        <h2>object-position:left;</h2>
        <h2>object-center</h2>
        <h2>object-position:center;</h2>
        <h2>object-right</h2>
        <h2>object-position:right;</h2>
        <h2>object-left</h2>
        <h2>object-position:left;</h2>
        <h2>object-bottom-left</h2>
        <h2>object-position:bottom left;</h2>
        <h2>object-bottom</h2>
        <h2>object-position:bottom;</h2>
      </div>
      <h2 className="underline">Basic Example</h2>
      <h2 className="w-1/2 text-vsm">
        Use utilities like 'object-left' and 'object-bottom-right' to specify
        how a replaced element should be positioned within its container
      </h2>

      <div className=" grid grid-cols-2 place-self-center place-items-center sm:grid-cols-3 w-[40%] p-2 bg-gray-800 gap-2 rounded-[0.4em]">
        <img
          src={imageOne}
          className="w-full h-30 rounded-[0.4em] object-top-left"
          alt=""
        />
        <img
          src={imageTwo}
          className="w-full h-30 rounded-[0.4em] object-top"
          alt=""
        />
        <img
          src={imageThree}
          className="w-full h-30 rounded-[0.4em] object-top-right"
          alt=""
        />
        <img
          src={imageFour}
          className="w-full h-30 rounded-[0.4em] object-left"
          alt=""
        />
        <img
          src={imageFive}
          className="w-full h-30 rounded-[0.4em] object-center"
          alt=""
        />
        <img
          src={imageSix}
          className="w-full h-30 rounded-[0.4em] object-right"
          alt=""
        />
        <img
          src={imageSeven}
          className="w-full h-30 rounded-[0.4em] object-bottom"
          alt=""
        />
        <img
          src={imageEight}
          className="w-full h-30 rounded-[0.4em] object-bottom"
          alt=""
        />
        <img
          src={imageNine}
          className="w-full h-30 rounded-[0.4em] object-bottom-right"
          alt=""
        />
      </div>

      {/* object-cover */}
    </div>
  );
}

export default ObjectPosition;
