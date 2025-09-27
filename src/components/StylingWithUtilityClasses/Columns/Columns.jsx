import imageOne from '../../../assets/faces/uifaces-popular-image (3).jpg';
import imageTwo from '../../../assets/faces/uifaces-popular-image (2).jpg';
import imageThree from '../../../assets/faces/uifaces-popular-image (1).jpg';

function Columns() {
  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Columns
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the number of columns within an element
      </h2>
      <h2 className="text-vsm">Setting by number</h2>
      <div className=" resizableVid w-1/2 grid grid-cols-2 items-center bg-gray-800 outline-1 outline-sky-400 border-l-4 border-green-500 rounded-[0.4em] py-2 px-2 columns-[90vh] *:nth-last-2:aspect-3/2 *:nth-last-1:aspect-square *:first:aspect-square gap-1 min-w-50 max-h-120 overflow-auto max-w-1/3">
        <img src={imageOne} className=" w-full rounded-[0.4em]" alt="" />
        <img src={imageTwo} className=" w-full  rounded-[0.4em]" alt="" />
        <img src={imageThree} className=" w-full rounded-[0.4em]" alt="" />
        <img src={imageOne} className=" w-full rounded-[0.4em]" alt="" />
      </div>
    </div>
  );
}

export default Columns;
