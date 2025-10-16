function FontFamily() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        font-family
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for controlling the font-family of an element.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use utilities like 'font-sans' and 'font-mono' to set the font family of
        an element: <br />
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-sans</h2>
          <h2 className=" font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-serif</h2>
          <h2 className=" font-serif">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-mono</h2>
          <h2 className=" font-mono">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className="underline">Using a custom value </h2>
      <h2 className="w-1/2 text-vsm">
        Use 'font-{'<value>'}' syntax to set the font based on a completely
        custom value:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-gray-400 text-vsm">font-sans</h2>
          <h2 className="font-[Open_Sans] ">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Customizing your theme */}
      <h2 className="underline">Customizing your theme </h2>
      <h2 className="w-1/2 text-vsm">
        Use '--font-*' theme variables to customize the font-family utilities in
        your project:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className="text-orange-600 text-vsm font-sans ">
            @theme{'{'} <br />
            {'--font-display: "Oswald", sans-serif'} <br />
            {'}'}
          </h2>
        </div>
      </div>
      <h2 className=" w-1/2 font-display text-vsm">
        Now the theme can be used anywhere in your markup.
        <br />
        if you are loading a fint from a service lie Google Fonts make sure you
        put the @import statement at the very top of your CSS file:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className="text-orange-600 text-vsm font-sans ">
            {'@import url("https://fonts...")'} <br />
            {'@import "tailwindcss"")'} <br />
            @theme{'{'} <br />
            {'--font-display: "Roboto", sans-serif'} <br />
            {'}'}
          </h2>
        </div>
      </div>

      <h2 className="w-1/2 text-vsm">
        Browsers require that '@import' statements come before any other rules,
        so url imports need to be above imports like '@import "tailwindcss"'
        which are in the compiled css
      </h2>
    </div>
  );
}

export default FontFamily;
