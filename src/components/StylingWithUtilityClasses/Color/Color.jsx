function Color() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        color{' '}
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the text color of an element.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use utilities like 'text-blue-700' and 'text-gray-800' to control the
        text color of an element:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-sky-400 text-vsm">text-sky-400</h2>
          <h2 className=" font-normal text-sky-400 text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Changing the opacity */}
      <h2 className="underline">Changing the opacity</h2>
      <h2 className="w-1/2 text-vsm">
        Use the color opacity modifier to control the text color opacity of an
        element:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-sky-400/100 text-vsm">
            text-sky-400/100
          </h2>
          <h2 className=" font-normal text-sky-400/100 text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-sky-400/75 text-vsm">text-sky-400/75</h2>
          <h2 className=" font-normal text-sky-400/75 text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-sky-400/50 text-vsm">text-sky-400/50</h2>
          <h2 className=" font-normal text-sky-400/50 text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-sky-400/25 text-vsm">text-sky-400/25</h2>
          <h2 className=" font-normal text-sky-400/25 text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'text-[{'<value>'}]' syntax to set the color based on a
        completely custom value:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className=" text-sm text-[#50d71e] text-vsm">text-[#50d71e]</h2>
          <h2 className=" font-normal text-[#50d71e] text-base font-sans">
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>

      {/* Applying on hover */}
      <h2 className="underline">Applying on hover</h2>
      <h2 className="w-1/2 text-vsm">
        Prefix a 'color' utility with a variant like 'hover:*' to only apply the
        utility in that state:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <h2 className=" font-normal text-gray-400 text-base font-sans">
          Oh I gotta get on{' '}
          <a
            href="https://twitter.com"
            className=" text-sky-400 underline hover:text-blue-700 "
            target="_blank"
          >
            Twitter
          </a>{' '}
          I'm late on everything!
        </h2>
      </div>
      {/*Customizing your theme */}
      <h2 className="underline">Customizing your theme</h2>
      <h2 className="w-1/2 text-vsm">
        Prefix a 'color-*' theme variables to customize the color utilities in
        your project:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className="text-orange-600 text-vsm font-sans ">
            @theme{'{'} <br />
            {'--color-regal: #50d71e;'} <br />
            {'}'}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Color;
