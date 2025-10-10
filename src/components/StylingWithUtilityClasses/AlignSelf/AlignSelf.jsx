function AlignSelf() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        align-self
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for controlling how a indivdual flex or grid item is
        positioned along its container axis
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>self-auto</h2>
        <h2>align-self: auto;</h2>
        <h2>self-start</h2>
        <h2>align-self: flex-start;</h2>
        <h2>self-end</h2>
        <h2>align-self: flex-end;</h2>
        <h2>self-end-safe</h2>
        <h2>align-self: safe flex-end;</h2>
        <h2>self-center</h2>
        <h2>align-self: center;</h2>
      </div>

      {/* auto */}
      <h2 className="underline">auto</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'self-auto' utility to align an item based on the value of the
        container's 'align-items' property
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 flex flex-row  h-26 items-stretch *:justify-center gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 self-auto  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-indigo-600 w-11/12 self-auto rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600 self-auto rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
      </div>
      {/* start */}
      <h2 className="underline">start</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'self-start' utility to align an item to the start of the
        container's cross axis, despite the container's 'align-items' value
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 flex flex-row  h-26 items-stretch *:justify-center gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 self-auto  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600 w-11/12 self-start rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600 self-auto rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
      </div>
      {/* center */}
      <h2 className="underline">center</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'self-center' utility to align an item along the center of the
        container's cross axis, despite the container's 'align-items' value:
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 flex flex-row  h-26 items-stretch *:justify-center gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 self-auto  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600 w-11/12 self-center rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600 self-auto rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
      </div>
      {/* end */}
      <h2 className="underline">end</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'self-end' utility to align an item to the end of the
        container's cross axis, despite the container's 'align-items' value:
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 flex flex-row  h-26 items-stretch *:justify-center gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 self-auto  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600 w-11/12 self-end rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600 self-auto rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
      </div>
      {/* stretch */}
      <h2 className="underline">stretch</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'self-stretch' utility to stretch an item to fill the
        container's cross axis, despite container's 'align-items' value:
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 flex flex-row  h-26 items-stretch *:justify-center gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 self-auto  rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
        </span>
        <span className="bg-pink-600 w-11/12 self-stretch rounded-[0.3em] flex flex-col items-center justify-center">
          02
        </span>
        <span className="bg-indigo-600 self-auto rounded-[0.3em] w-11/12 flex flex-col items-center">
          03
        </span>
      </div>
      {/* baseline */}
      <h2 className="underline">baseline</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'self-baseline' utility to align an item such that its baseline
        with the baseline of the flex container's cross axis:
      </h2>

      <div
        className=" w-1/2
      bg-gray-900 flex flex-row  h-26 items-center *:justify-center gap-0.5 py-2 px-2.5 rounded-[0.4em]"
      >
        <span className="bg-indigo-600 h-18 pb-8  self-baseline   rounded-[0.3em] w-11/12 flex flex-col items-center">
          01
          <hr className="w-full text-gray-300" />
        </span>
        <span className="bg-indigo-600 w-11/12  self-baseline h-12 pt-4 rounded-[0.3em] flex flex-col items-center justify-center">
          02
          <hr className="w-full text-gray-300" />
        </span>
        <span className="bg-indigo-600 h-16  self-baseline rounded-[0.3em] w-11/12 flex flex-col items-center pb-6">
          03
          <hr className="w-full text-gray-300" />
        </span>
      </div>
    </div>
  );
}

export default AlignSelf;
