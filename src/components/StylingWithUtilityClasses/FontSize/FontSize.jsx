function FontSize() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        font-size
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for controlling the font size of an element.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use utilities like 'text-sm' and 'text-lg' to set the font size of an
        element: <br />
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">text-sm</h2>
          <h2 className=" font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-base</h2>
          <h2 className=" text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-lg</h2>
          <h2 className=" text-lg font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-xl</h2>
          <h2 className=" text-xl font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-2xl</h2>
          <h2 className=" text-2xl font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Setting the line-height */}
      <h2 className="underline">Setting the line-height</h2>
      <h2 className="w-1/2 text-vsm">
        Use utilities like 'text-sm/6' and 'text-lg/7' to set the font size and
        the line-height of an element at the same time: <br />
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">text-sm/6</h2>
          <h2 className=" text-sm/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloremque omnis, optio, quia exercitationem labore vel tempora a
            qui mollitia in porro voluptatibus alias laborum. Dolores alias
            labore optio, sit nemo quidem obcaecati provident hic porro aut unde
            vel quibusdam commodi, architecto id consequuntur recusandae qui
            natus facilis aliquid ea.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-sm/7</h2>
          <h2 className=" text-sm/7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt
            tempora iusto, eveniet dignissimos alias quam aspernatur, odio et
            molestiae repellat labore ducimus tenetur harum neque impedit
            quaerat, velit nisi at corrupti! Voluptates nobis distinctio illo
            saepe delectus illum modi veniam eligendi nesciunt est perferendis,
            debitis voluptatem molestias tenetur perspiciatis?
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-sm/8</h2>
          <h2 className=" text-sm/8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            hic sequi deserunt similique cupiditate recusandae aliquid
            temporibus autem maiores omnis optio cumque voluptatem ex facere,
            quasi unde delectus exercitationem quia, qui laboriosam quisquam.
            Natus qui dolores fugiat nisi sapiente, dicta, et nemo aliquid
            temporibus voluptas quam sed, vero debitis illum.
          </h2>
        </div>
      </div>

      {/* Using a custom value */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'text-{'[<value>]'}' syntax to set the font size based on a
        completely custom value:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">text-[14px]</h2>
          <h2 className=" text-[14px] font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm ">text-[18px]</h2>
          <h2 className=" text-[18px] font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>

      {/*Customizing your theme*/}
      <h2 className="underline">Customizing your theme</h2>
      <h2 className="w-1/2 text-vsm">
        Use the '--text-*' theme variables to customize the font size utilities
        in your project:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className="text-orange-600 text-vsm font-sans ">
            @theme{'{'} <br />
            {' --text-tiny: 0.625rem;'} <br />
            {'}'}
          </h2>
        </div>
      </div>
      <h2 className="text-vsm text-tiny w-1/3">
        You can also provide default 'line-height', 'letter-spacing' and
        'font-weight' values for the font size:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className="text-orange-600 text-vsm font-sans ">
            @theme{'{'} <br />
            {' --text-tiny: 0.625rem;'} <br />
            {' --text-tiny--line-height: 1.5rem;'} <br />
            {' --text-tiny--letter-spacing: 0.125rem;'} <br />
            {' --text-tiny--font-weight: 500;'} <br />
            {'}'}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default FontSize;
