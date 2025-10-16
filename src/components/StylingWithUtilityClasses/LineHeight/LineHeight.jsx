function LineHeight() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        line-height
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the leading, or line height of an element.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use font size utilities like'text-sm/6' and 'text-lg/7' to set the font
        size and line-heght of an element at the same time:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">text-sm/6</h2>
          <h2 className=" text-justify text-sm/6">
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
          <h2 className=" text-justify text-sm/7">
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
          <h2 className=" text-justify text-sm/8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            hic sequi deserunt similique cupiditate recusandae aliquid
            temporibus autem maiores omnis optio cumque voluptatem ex facere,
            quasi unde delectus exercitationem quia, qui laboriosam quisquam.
            Natus qui dolores fugiat nisi sapiente, dicta, et nemo aliquid
            temporibus voluptas quam sed, vero debitis illum.
          </h2>
        </div>
      </div>
      {/*Setting them independently */}
      <h2 className="underline">Setting them independently</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'leading-{'<number>'}' utilities like 'leading-6' and 'leading-7' to
        set the line-height of an element independent of the font size.
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">leading-5</h2>
          <h2 className=" text-justify text-sm leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloremque omnis, optio, quia exercitationem labore vel tempora a
            qui mollitia in porro voluptatibus alias laborum. Dolores alias
            labore optio, sit nemo quidem obcaecati provident hic porro aut unde
            vel quibusdam commodi, architecto id consequuntur recusandae qui
            natus facilis aliquid ea.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">leading-6</h2>
          <h2 className=" text-justify text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt
            tempora iusto, eveniet dignissimos alias quam aspernatur, odio et
            molestiae repellat labore ducimus tenetur harum neque impedit
            quaerat, velit nisi at corrupti! Voluptates nobis distinctio illo
            saepe delectus illum modi veniam eligendi nesciunt est perferendis,
            debitis voluptatem molestias tenetur perspiciatis?
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">leading-7</h2>
          <h2 className=" text-justify text-sm leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            hic sequi deserunt similique cupiditate recusandae aliquid
            temporibus autem maiores omnis optio cumque voluptatem ex facere,
            quasi unde delectus exercitationem quia, qui laboriosam quisquam.
            Natus qui dolores fugiat nisi sapiente, dicta, et nemo aliquid
            temporibus voluptas quam sed, vero debitis illum.
          </h2>
        </div>
      </div>
      {/*Removing the leading*/}
      <h2 className="underline">Removing the leading</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'leading-none' utility to set the line-height of an element equal to
        its font size
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">leading-5</h2>
          <h2 className=" text-sm leading-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloremque omnis, optio, quia exercitationem labore vel tempora a
            qui mollitia in porro voluptatibus alias laborum. Dolores alias
            labore optio, sit nemo quidem obcaecati provident hic porro aut unde
            vel quibusdam commodi, architecto id consequuntur recusandae qui
            natus facilis aliquid ea.
          </h2>
        </div>
      </div>
      {/*Using a custom value*/}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use 'leading-[{'<value>'}] syntax to set the line height based on a
        completely custom value:
      </h2>{' '}
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">leading-[1.5]</h2>
          <h2 className="  text-sm leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloremque omnis, optio, quia exercitationem labore vel tempora a
            qui mollitia in porro voluptatibus alias laborum. Dolores alias
            labore optio, sit nemo quidem obcaecati provident hic porro aut unde
            vel quibusdam commodi, architecto id consequuntur recusandae qui
            natus facilis aliquid ea.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LineHeight;
