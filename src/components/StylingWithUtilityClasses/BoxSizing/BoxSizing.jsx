function BoxSizing() {
  return (
    <div className=" w-full flex *:nth-2:text-vsm flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        box-sizing
      </h2>
      <h2>
        Utilities for controlling how the browser should calculate an element's
        total size
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>box-border</h2>
        <h2>box-sizing: border-box</h2>
        <h2>box-content</h2>
        <h2>box-sizing: content-box</h2>
      </div>
      <h2 className="underline">Including borders and padding</h2>
      <div className="flex flex-col items-center w-1/2 bg-gray-800 rounded-[0.4em] *:text-gray-300 p-2">
        <h2>
          Use the 'box-border' utility to set an element's to border-box telling
          the browser to include the element's borders and padding where you
          give a height or width.This means a 100px * 100px element with a 2px
          border and 10px of padding on all sides will be rendered as 100px
          *100px with an internal content area of 76px * 76px
        </h2>
        <div
          draggable
          className="w-[100px] box-border p-[10px] h-[100px] flex flex-col items-center justify-center border-[2px] border-sky-400 bg-transparent"
        >
          <div className="w-full h-full bg-sky-400">
            <h2 className="invisible">Box-border</h2>
          </div>
        </div>
      </div>
      <h2 className="underline">Excluding borders and padding</h2>
      <div className="flex flex-col items-center w-1/2 bg-gray-800 rounded-[0.4em] *:text-gray-300 p-2">
        <h2>
          Use the 'box-content' utility to set an element's to box-sizing to
          'content-box',telling the browser to add borders and padding on top of
          the element's specified width or height. This means a 100px * 100px
          with 2px border and 10px padding on all sides will actually ne
          rendered as 124px * 124px, with an internal content area of 100px *
          100px{' '}
        </h2>
        <div className="w-[100px] box-content p-[10px] h-[100px] flex flex-col items-center justify-center border-[2px] border-sky-400 bg-transparent">
          <div className=" w-full h-full *:only:invisible bg-sky-400">
            <h2>hey</h2>
          </div>
        </div>
      </div>

      <h2 className="underline text-vsm">Responsive design</h2>

      <div className="flex flex-col items-center w-1/2 bg-gray-800 rounded-[0.4em] *:text-gray-300 p-2">
        <h2 className="text-vsm">
          Prefix a 'box-sizing' utlity with a breakpoint variant like 'md:' to
          apply the utility at medium screen sizes and above . for example this
          container will change from 'box-border' in small screens to
          'border-content' in medium screens and above
        </h2>
        <div
          draggable
          className="w-[100px] box-border md:box-content p-[10px] h-[100px] flex flex-col items-center justify-center border-[2px] border-sky-400 bg-transparent"
        >
          <div className=" w-full h-full *:only:invisible bg-sky-400">
            <h2>Responsive Degin</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxSizing;
