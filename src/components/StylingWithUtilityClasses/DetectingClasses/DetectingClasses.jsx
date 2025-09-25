function DetectingClasses() {
  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Detecting Classes In Source Files
      </h2>
      <div className=" w-1/2 flex flex-col items-center bg-gray-800 outline-1 outline-sky-400 border-l-4 border-green-500 rounded-[0.4em] py-2 px-2">
        <h2 className=" text-gray-300 hover:text-gray-400 selection:bg-orange-400 selection:text-gray-700">
          Tailwind treats all of your source files as plain text, and does not
          attempt to actually parse your files as code in any way. Instead it
          looks for any tokens in your file that could be classes based on which
          characters Tailwind is expecting.Then it tries to generate the css of
          all the tokens throwing away any tokens that don't map to the utility
          class Tailwind Knows about <br />
          Tailwind will scan all the files except the following: <br />
          node_modules <br />
          .gitIgnore files <br />
          binary files like images, videos <br />
          CSS files
        </h2>
      </div>

      <div className=" flex flex-col items-center gap-2 w-full">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Explicitly registering sources
        </h2>

        <div className="w-1/2 flex flex-col items-center bg-gray-800 outline-1 outline-sky-400 border-l-4 border-green-500 rounded-[0.4em] py-2 px-2">
          <h2 className=" text-gray-300">
            Use `@source` to explicitly register source paths relative to the
            stylesheet e.g. <br />{' '}
            <strong className=" bg-gray-600/20 rounded-[0.3em] outline-1 outline-green-400/60 text-sm font-light text-sky-300/70 px-1">
              {' '}
              @source "../node_modules/@acmecorp/ui"
            </strong>
          </h2>
          <br />
          <hr className=" w-full text-gray-500" />
          <h2 className=" w-full text-gray-300">
            To ignore some secific paths use `@source not` e.g. <br />
            <strong className=" bg-gray-600/20 rounded-[0.3em] outline-1 outline-green-400/60 text-sm font-light text-sky-300/70 px-1">
              {' '}
              @source not "../node_modules/@acmecorp/ui"
            </strong>
          </h2>
        </div>

        <div className=" flex flex-col items-center gap-2 w-full">
          <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
            Disabling automatic detection
          </h2>

          <div className="w-1/2 flex flex-col items-center bg-gray-800 outline-1 outline-sky-400 border-l-4 border-green-500 rounded-[0.4em] py-2 px-2">
            <h2 className=" text-gray-300 flex flex-col gap-3 *:w-1/2">
              Use `@source(none)` to completely disable automatic source
              detection if you want tp register all of your sources register
              source paths relative to the stylesheet e.g. <br />{' '}
              <strong className=" bg-gray-600/20 rounded-[0.3em] outline-1 outline-green-400/60 text-sm font-light text-sky-300/70 px-1">
                {' '}
                @import "tailwindcss" source(none) <br /> @source "../admin"{' '}
                <br />
                @source "../shared"
              </strong>
            </h2>
          </div>
          <div className="w-1/2 flex flex-col items-center bg-gray-800 outline-1 outline-sky-400 border-l-4 border-green-500 rounded-[0.4em] py-2 px-2">
            <h2 className=" text-gray-300 flex flex-col gap-3 *:w-1/2">
              Use `@source(none)` to completely disable automatic source
              detection if you want tp register all of your sources register
              source paths relative to the stylesheet e.g. <br />{' '}
              <strong className=" bg-gray-600/20 rounded-[0.3em] outline-1 outline-green-400/60 text-sm font-light text-sky-300/70 px-1">
                {' '}
                @import "tailwindcss" source(none) <br /> @source "../admin"{' '}
                <br />
                @source "../shared"
              </strong>
            </h2>
            <br />
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 w-full">
          <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
            Safelisting specific utilities{' '}
          </h2>

          <div className="w-1/2 flex flex-col items-center bg-gray-800 outline-1 outline-sky-400 border-l-4 border-sky-500 rounded-[0.4em] py-2 px-2">
            <h2 className=" text-gray-300 flex flex-col gap-3 *:w-1/2">
              If you need to make sure Tailwind generates certain class names
              that don't exist in your content files use `@source inline` to
              force them to be generated
              <strong className=" bg-gray-600/20 rounded-[0.3em] outline-1 outline-green-400/60 text-sm font-light text-sky-300/70 px-1">
                {' '}
                @import "tailwindcss" <br /> @source inline("underline")
              </strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetectingClasses;
