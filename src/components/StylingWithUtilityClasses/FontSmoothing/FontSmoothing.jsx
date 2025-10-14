function FontSmoothing() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        font-smoothing
      </h2>

      {/* Grayscale antialiasing */}
      <h2 className="underline"> Grayscale antialiasin</h2>
      <h2 className="w-1/2 flex flex-row justify-center text-vsm">
        Use 'antialiased' utility to render text using grayscale antialiasing:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <h2 className=" antialiased font-sans">
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
      {/* Subpixel antialiasing */}
      <h2 className="underline">Subpixel antialiasing </h2>
      <h2 className="w-1/2 flex flex-row justify-center text-vsm">
        Use 'subpixel-antialiased' utility to render text using subpixel
        antialiasing:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <h2 className=" subpixel-antialiased font-sans">
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
    </div>
  );
}

export default FontSmoothing;
