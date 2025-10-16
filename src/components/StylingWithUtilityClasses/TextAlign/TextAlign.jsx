function TextAlign() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        text-align
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the alignment of text.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Aligning Text</h2>

      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] *:bg-gray-800 *:rounded-[0.3em] *:outline-1 *:outline-gray-500/70 *:p-1 flex flex-col text-gray-300 items-center justify-center gap-4 p-5">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-gray-400 text-vsm">text-left</h2>
          <h2 className=" text-left text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloremque omnis, optio, quia exercitationem labore vel tempora a
            qui mollitia in porro voluptatibus alias laborum. Dolores alias
            labore optio, sit nemo quidem obcaecati provident hic porro aut unde
            vel quibusdam commodi, architecto id consequuntur recusandae qui
            natus facilis aliquid ea.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-right</h2>
          <h2 className=" text-right text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt
            tempora iusto, eveniet dignissimos alias quam aspernatur, odio et
            molestiae repellat labore ducimus tenetur harum neque impedit
            quaerat, velit nisi at corrupti! Voluptates nobis distinctio illo
            saepe delectus illum modi veniam eligendi nesciunt est perferendis,
            debitis voluptatem molestias tenetur perspiciatis?
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-center</h2>
          <h2 className=" text-center tracking-wide text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            hic sequi deserunt similique cupiditate recusandae aliquid
            temporibus autem maiores omnis optio cumque voluptatem ex facere,
            quasi unde delectus exercitationem quia, qui laboriosam quisquam.
            Natus qui d
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">text-justify</h2>
          <h2 className=" text-justify tracking-tight text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            hic sequi deserunt similique cupiditate recusandae aliquid
            temporibus autem maiores omnis optio cumque voluptatem ex facere,
            quasi unde delectus exercitationem quia, qui laboriosam quisquam.
            Natus qui dolores fugiat nisi sapiente, dicta, et nemo aliquid
            temporibus voluptas quam sed, vero debitis illum.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextAlign;
