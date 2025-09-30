import imageOne from '../../../assets/Houses/img5.jpg';
import imageTwo from '../../../assets/faces/uifaces-human-image (40).jpg';
function Clear() {
  return (
    <div className=" w-full flex flex-col items-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Clear
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the wrapping of the content around an element
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>clear-left</h2>
        <h2>clear:left;</h2>
        <h2>clear-right</h2>
        <h2>clear:right;</h2>
        <h2>clear-both</h2>
        <h2>clear:both;</h2>
        <h2>clear-inline-start</h2>
        <h2>clear:inline-start;</h2>
        <h2>clear:none;</h2>
      </div>

      <div className=" flex flex-col items-center gap-1 w-full">
        <h2 className="underline">Clearing left</h2>
        <h2 className=" text-vsm">
          Use 'clear-left' utility to position an element below any preceding
          left-floated elements:
        </h2>
        <div className="text-gray-300 w-1/2 bg-gray-800 outline-1 outline-gray-500 rounded-[0.4em] py-2 px-3">
          <img
            src={imageOne}
            className="w-40 rounded-[0.4em] h-40 float-right"
            alt=""
          />
          <img
            src={imageTwo}
            className="w-34 rounded-[0.4em] h-24 float-left"
            alt=""
          />
          <h2 className="text-vsm clear-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
            atque reiciendis dolor reprehenderit molestias ducimus dolorem illo
            iste. Recusandae adipisci, similique eos quidem assumenda
            dignissimos debitis qui eum voluptates nemo exercitationem sed amet
            aspernatur consectetur alias, maxime id placeat inventore incidunt
            repellendus culpa reprehenderit cum illo deleniti! Numquam inventore
          </h2>
        </div>
      </div>
      {/* clearing right */}
      <div className=" flex flex-col items-center gap-1 w-full">
        <h2 className="underline">Clearing right</h2>
        <h2 className=" text-vsm ">
          Use 'clear-right' utility to position an element below any preceding
          right-floated elements:
        </h2>
        <div className="text-gray-300 w-1/2 bg-gray-800 outline-1 outline-gray-500 rounded-[0.4em] py-2 px-3">
          <img
            src={imageOne}
            className="w-40 rounded-[0.4em] h-24 float-right"
            alt=""
          />
          <img
            src={imageTwo}
            className="w-34 rounded-[0.4em] h-40 float-left"
            alt=""
          />
          <h2 className=" text-vsm clear-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
            atque reiciendis dolor reprehenderit molestias ducimus dolorem illo
            iste. Recusandae adipisci, similique eos quidem assumenda
            dignissimos debitis qui eum voluptates nemo exercitationem sed amet
            aspernatur consectetur alias, maxime id placeat inventore incidunt
            repellendus culpa reprehenderit cum illo deleniti! Numquam inventore
          </h2>
        </div>
      </div>
      {/* clearing all */}
      <div className=" flex flex-col items-center gap-1 w-full">
        <h2 className="underline">Clearing all</h2>
        <h2 className=" text-vsm ">
          Use 'clear-both' utility to position an element below all preceding
          floated elements:
        </h2>
        <div className="text-gray-300 w-1/2 bg-gray-800 outline-1 outline-gray-500 rounded-[0.4em] py-2 px-3">
          <img
            src={imageOne}
            className="w-40 rounded-[0.4em] h-40 float-right"
            alt=""
          />
          <img
            src={imageTwo}
            className="w-34 rounded-[0.4em] h-24 float-left"
            alt=""
          />
          <h2 className="text-vsm clear-both">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
            atque reiciendis dolor reprehenderit molestias ducimus dolorem illo
            iste. Recusandae adipisci, similique eos quidem assumenda
            dignissimos debitis qui eum voluptates nemo exercitationem sed amet
            aspernatur consectetur alias, maxime id placeat inventore incidunt
            repellendus culpa reprehenderit cum illo deleniti! Numquam inventore
          </h2>
        </div>
      </div>
      {/* Disabling clears */}
      <div className=" flex flex-col items-center gap-1 w-full">
        <h2 className="underline">Disabling clears</h2>
        <h2 className=" text-vsm ">
          Use 'clear-none' utility to reset any clears that are applied to an
          element:
        </h2>
        <div className="text-gray-300 w-1/2 bg-gray-800 outline-1 outline-gray-500 rounded-[0.4em] py-2 px-3">
          <img
            src={imageOne}
            className="w-40 rounded-[0.4em] h-40 float-right"
            alt=""
          />
          <img
            src={imageTwo}
            className="w-34 rounded-[0.4em] h-24 float-left"
            alt=""
          />
          <h2 className=" text-vsm clear-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
            atque reiciendis dolor reprehenderit molestias ducimus dolorem illo
            iste. Recusandae adipisci, similique eos quidem assumenda
            dignissimos debitis qui eum voluptates nemo exercitationem sed amet
            aspernatur consectetur alias, maxime id placeat inventore incidunt
            repellendus culpa reprehenderit cum illo deleniti! Numquam inventore
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Clear;
