function CustomStyles() {


  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Adding Custom Styles
      </h2>

      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Using Arbitrary Values
        </h2>
        <div className="  py-4 px-4 gap-2 justify-center flex flex-col items-center w-2/5 bg-gray-800 outline-1 outline-gray-300 rounded-[0.4em]">
          <h2 className="text-gray-100">
            When you need to break out of tailwind constraints like 'top-3' and
            want something like 'top:10px' you can always use the tailwind's
            bracket notation to generate a class on the fly with any arbitrary
            value: for example
            <strong className="font-light text-blue-400"> 'top-[117px]'</strong>
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Adding custom utilities
        </h2>
        <div className=" py-4 px-4 gap-2 justify-center flex flex-col items-center w-2/5 bg-gray-800 outline-1 outline-gray-300 rounded-[0.4em]">
          <h2 className=" hover:content-auto text-gray-100">
            You can also add custom utilities.Useful when you want want a css
            feature tailwind does not provide
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Handling whitespaces{' '}
        </h2>
        <div className=" py-4 px-4 gap-2 justify-center flex flex-col items-center w-2/5 bg-gray-800 outline-1 outline-gray-300 rounded-[0.4em]">
          <h2 className=" hover:content-auto text-gray-400">
            When an arbitrary value needs to contain a space, use an underscore
            ('_') instead and tailwind will translate it to space during build
            time.For example when defining grid-cols-[1fr_1fr_1.3fr]
          </h2>

          <div className="w-[98%] py-3 px-3 gap-2 outline-1 outline-gray-500 rounded-[0.3em] grid grid-cols-[1fr_1fr_1.3fr] bg-gray-700/50">
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              01
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              02
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              03
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              04
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              05
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              06
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Adding base styles
        </h2>
        <div className=" py-4 px-4 gap-2 justify-center flex flex-col items-center w-2/5 bg-gray-800 outline-1 outline-gray-300 rounded-[0.4em]">
          <h2 className=" hover:content-auto text-gray-400">
            If you want to set base styles for the whole page e.g. text use
            '@layer' directive to add these styles to tailwind `base` layer. for
            example we add the base styles for all the h1 tags:
          </h2>
          <h1>Hello world</h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Adding components classes
        </h2>
        <div className=" py-4 px-4 gap-2 justify-center flex flex-col items-center w-2/5 bg-gray-900 outline-1 outline-gray-300 rounded-[0.4em]">
          <h2 className=" hover:content-auto text-gray-400">
            Use `components` layer for any complicated classes you want to add
            to your project that you'd still like to be able to override with
            utility classes. for example we used box-shadow to be full(50%) in
            layer components but changed it to [0.5em] with utility classes:
          </h2>
          <button className=" text-hello rounded-[0.5em] text-gray-400 outline-1 outline-sky-500/30">
            Hello world
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Using Variants
        </h2>
        <div className=" prefDark py-4 px-4 gap-2 justify-center flex flex-col items-center w-2/5 bg-gray-500/20 outline-1 outline-gray-300 rounded-[0.4em]">
          <h2 className="prefDark text-gray-800">
            Use the `@variant` directive to apply a tailwind variant with custom
            css
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Adding a custom variants
        </h2>
        <div className=" prefDark py-4 px-4 gap-2 justify-center flex flex-col items-center w-2/5 bg-gray-500/20 outline-1 outline-gray-300 rounded-[0.4em]">
          <h2 className=" prefDark text-gray-800 theme-midnight:bg-green-500">
            You can add custom variants using the `@custom-variant` directive
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CustomStyles;
