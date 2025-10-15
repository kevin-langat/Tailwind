import { Check } from 'lucide-react';
import listImage from '../../../assets/faces/uifaces-human-image (37).jpg';

function ListStyleImage() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        line-style-image
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the marker images for list items.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'list-image{'<value>'}' syntax to control the marker image for
        list items:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <ul
          className={`flex flex-col list-image-[${(
            <Check />
          )}] w-full text-sm justify-start gap-0 5`}
        >
          <li>5 cups of chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
      </div>
      {/*Removing the marker image */}
      <h2 className="underline">Removing the marker image</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'list-image-none' utility to remove an existng marker image from
        list items
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <ul
          className={`flex flex-col list-image-none w-full text-sm justify-start gap-0 5`}
        >
          <li>5 cups of chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
      </div>
    </div>
  );
}

export default ListStyleImage;
