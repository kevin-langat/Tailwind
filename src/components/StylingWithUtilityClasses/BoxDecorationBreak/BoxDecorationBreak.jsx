function BoxDecorationBreak() {
  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        box-decoration-break
      </h2>

      <h2 className="w-1/2 text-vsm">
        Utilities for controlling how elements fragments should be rendered
        across multiple line, columns or pages
      </h2>
      <h2>Basic example:</h2>
      <div className="bg-gray-800 rounded-[0.4em] flex flex-col items-center gap-2 w-1/2 py-3 px-3">
        <h2 className="text-vsm text-gray-300">
          Use the 'box-decoration-slice' and 'box-decoration-clone' utilities to
          control whether properties like background, border, border
          image,box-shadow, clip path, margin, and padding should be rendered as
          if the elements were one continous fragment, or distinct blocks
        </h2>

        <div className=" flex flex-row gap-20 *:w-20 *:flex *:flex-col *:items-center *:justify-center *:rounded-[0.3em] items-center">
          <h2 className="bg-linear-to-r from-indigo-500 to-green-400 box-decoration-slice">
            Kevin <br /> <span>Langat</span>
          </h2>
          <h2 className="bg-linear-to-r from-indigo-500 to-green-400 box-decoration-clone">
            Kevin <br /> Langat
          </h2>
        </div>
      </div>
    </div>
  );
}

export default BoxDecorationBreak;
