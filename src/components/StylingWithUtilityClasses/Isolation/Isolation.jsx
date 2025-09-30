function Isolation() {
  return (
    <div className=" w-full flex flex-col items-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        isolation
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling whether an element should explicitly create a
        new stacking context
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>isolate</h2>
        <h2>isolation:isolate;</h2>
        <h2>isolation-auto</h2>
        <h2>isolation:auto;</h2>
      </div>
      <div className=" w-full flex flex-col items-center justify-center isolate">
        <h2 className="text-gray-800 underline">Basic example</h2>
        <h2 className=" w-1/2 p-2 bg-gray-800 rounded-[0.4em] text-gray-300 text-vsm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          beatae, impedit cupiditate animi architecto at? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Repudiandae, eius. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Sit, quo!
        </h2>
      </div>
    </div>
  );
}

export default Isolation;
