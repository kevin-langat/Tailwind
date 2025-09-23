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
        <div className=" py-4 px-4 gap-2 justify-center flex flex-col items-center w-2/5 bg-gray-800 outline-1 outline-gray-300 rounded-[0.4em]">
          <h2 className=" text-gray-100">
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
            <strong className="font-light text-blue-400"> 'top-[117px]'</strong>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CustomStyles;
