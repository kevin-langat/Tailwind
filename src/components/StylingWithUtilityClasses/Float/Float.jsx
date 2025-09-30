import imageOne from '../../../assets/Houses/img42.jpg';

function Float() {
  return (
    <div className=" w-full flex flex-col items-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Float
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the wrapping of the content around an element
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>float-right</h2>
        <h2>float-right;</h2>
        <h2>float-left</h2>
        <h2>float:left;</h2>
        <h2>float-start</h2>
        <h2>float:inline-start;</h2>
        <h2>float-end</h2>
        <h2>float:inline-end</h2>
        <h2>float-none</h2>
        <h2>float:none</h2>
      </div>
      <div className=" flex flex-col items-center gap-1 w-full">
        <h2 className="underline">Floating the elements to the right</h2>
        <h2>
          Use 'float-right' utility to float an element to the right of its
          container
        </h2>
        <div className="text-gray-300 w-1/2 bg-gray-800 outline-1 outline-gray-500 rounded-[0.4em] py-2 px-3">
          <img
            src={imageOne}
            className="w-34 rounded-[0.4em] h-24 float-right"
            alt=""
          />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
            atque reiciendis dolor reprehenderit molestias ducimus dolorem illo
            iste. Recusandae adipisci, similique eos quidem assumenda
            dignissimos debitis qui eum voluptates nemo exercitationem sed amet
            aspernatur consectetur alias, maxime id placeat inventore incidunt
            repellendus culpa reprehenderit cum illo deleniti! Numquam inventore
          </h2>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-1 w-full">
        <h2 className="underline">Floating the elements to the left</h2>
        <h2 className="text-vsm">
          Use 'float-left' utility to float an element to the left of its
          container
        </h2>
        <div className="text-gray-300 w-1/2 bg-gray-800 outline-1 outline-gray-500 rounded-[0.4em] py-2 px-3">
          <img
            src={imageOne}
            className="w-34 rounded-[0.4em] h-24 float-left mr-2 "
            alt=""
          />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
            atque reiciendis dolor reprehenderit molestias ducimus dolorem illo
            iste. Recusandae adipisci, similique eos quidem assumenda
            dignissimos debitis qui eum voluptates nemo exercitationem sed amet
            aspernatur consectetur alias, maxime id placeat inventore incidunt
            repellendus culpa reprehenderit cum illo deleniti! Numquam inventore
          </h2>
        </div>
      </div>
      {/* using logical properties */}
      <div className=" flex flex-col items-center gap-1 w-full">
        <h2 className="underline">Using logical properties</h2>
        <h2 className=" w-1/2 text-vsm">
          Use 'float-start' and 'float-end' utility, which uses logical
          properties to map either the left or the right side based on the text
          direction. in this case we use 'ltr' and 'rtl'
        </h2>
        <div className="text-gray-300 w-1/2 bg-gray-800 outline-1 outline-gray-500 rounded-[0.4em] flex flex-col py-2 px-3 gap-2">
          <div
            dir="ltr"
            className="w-full  outline-1 outline-gray-300 p-2 rounded-[0.4em] "
          >
            <img
              src={imageOne}
              className="w-34 rounded-[0.4em] h-24 float-start mr-2 "
              alt=""
            />
            <h2 className=" text-vsm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
              atque reiciendis dolor reprehenderit molestias ducimus dolorem
              illo iste. Recusandae adipisci, similique eos quidem assumenda
              dignissimos debitis qui eum voluptates nemo exercitationem sed
              amet aspernatur consectetur alias, maxime id placeat inventore
              incidunt repellendus culpa reprehenderit cum illo deleniti!
              Numquam inventore
            </h2>
          </div>
          <div
            dir="rtl"
            className="w-full outline-1 outline-gray-300 p-2 rounded-[0.4em] "
          >
            <img
              src={imageOne}
              className="w-34 rounded-[0.4em] ml-1 h-24 float-start  "
              alt=""
            />
            <h2 className=" text-vsm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
              atque reiciendis dolor reprehenderit molestias ducimus dolorem
              illo iste. Recusandae adipisci, similique eos quidem assumenda
              dignissimos debitis qui eum voluptates nemo exercitationem sed
              amet aspernatur consectetur alias, maxime id placeat inventore
              incidunt repellendus culpa reprehenderit cum illo deleniti!
              Numquam inventore
            </h2>
          </div>
        </div>
      </div>
      {/* float-none */}
      <h2 className="underline">Disabling float</h2>
      <h2 className="text-vsm">
        Use 'float-none' utility to reset floats that are applied to an element
      </h2>
    </div>
  );
}

export default Float;
