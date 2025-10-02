function Flex() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        flex
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how the flex-items both grow and shrink
      </h2>
      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>flex-{'<number>'}</h2>
        <h2>flex:{'<number>'};</h2>
        <h2>flex-fraction;</h2>
        <h2>flex:calc({'<fraction>'}*100);</h2>
        <h2>flex-auto</h2>
        <h2>flex:auto;</h2>
        <h2>flex-none</h2>
        <h2>flex:none;</h2>
        <h2>flex-initial</h2>
        <h2>flex:initial;</h2>
      </div>

      {/* Basic example*/}
      <div className="flex gap-1 flex-col items-center place-self-center w-1/2 ">
        <h2 className="underline">Basic example</h2>
        <h2 className="text-vsm">
          Use 'flex-{'<number>'}' utilities like 'flex-1' to allow item to grow
          and shrinks as needed, ignoring its initial size:
        </h2>
        <div
          className="resizableVid relative flex px-1 flex-row items-center py-2 gap-2 w-1/2
        rounded-[0.4em]  bg-gray-800"
        >
          <div className=" w-1/3 flex-1 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            01
          </div>
          <div className=" w-1/3 flex-2 flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            02
          </div>
          <div className=" w-1/3 flex-none flex flex-col items-center justify-center text-gray-300 bg-indigo-500 rounded-[0.4em] z-40">
            03
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flex;
