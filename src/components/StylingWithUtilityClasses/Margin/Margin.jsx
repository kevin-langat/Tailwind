function Margin() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        margin
      </h2>
      <h2 className=" w-1/2 text-vsm">
        Utilities for controlling an element's padding.
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>p-{'<number>'}</h2>
        <h2>padding: calc(var(--spacing)*{'<number>'})</h2>
        <h2>p-px</h2>
        <h2>padding:1px</h2>
        <h2>p-({'<custom-property>'})</h2>
        <h2>padding:var({'<custom-property>'});</h2>
        <h2>p-{'<value>'}</h2>
        <h2>padding:{'<value>'};</h2>
        <h2>px-{'<px>'}</h2>
        <h2>padding-inline: 1px;</h2>
      </div>
    </div>
  );
}

export default Margin;
