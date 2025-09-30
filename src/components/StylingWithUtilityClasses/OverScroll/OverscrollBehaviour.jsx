function OverscrollBehaviour() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        overscroll behaviour
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how the browser behaves when reaching the
        boundary of a scrolling area
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>overscroll-auto</h2>
        <h2>overscroll-behavior:auto;</h2>
        <h2>overscroll-contain</h2>
        <h2>overscroll-behavior-contain;</h2>
        <h2>overscroll-none</h2>
        <h2>overscroll-behavior:none;</h2>
        <h2>overscroll-x-auto</h2>
        <h2>overscroll-behavior-x:auto;</h2>
        <h2>overscroll-x-contain</h2>
        <h2>overscroll-behavio-xr:contain;</h2>
        <h2>overscroll-x-none</h2>
        <h2>overscroll-behavior-x:none;</h2>
        <h2>overscroll-y-auto</h2>
        <h2>overscroll-behavior-y:auto;</h2>
        <h2>overscroll-y-contain</h2>
        <h2>overscroll-behavio-y:contain;</h2>
        <h2>overscroll-y-none</h2>
        <h2>overscroll-behavior-y:none;</h2>
      </div>
      <div className=" w-1/2 flex flex-col items-center">
        <h2 className="underline">Preventing parent overscrolling</h2>
        <h2 className="text-vsm">
          Use the 'overscroll-contain' utility to prevent scrolling in the
          target area from triggering scrolling in the parent element, but
          preserve "bounce" effects when scrolling past the end of the container
        </h2>
        <div className="w-3/4 overflow-scroll bg-gray-800 rounded-[0.4em] overscroll-contain h-20 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          deserunt ipsa debitis ipsum ut veniam numquam mollitia rerum vitae
          porro atque consequuntur provident, eligendi optio possimus tempora
          impedit nulla velit? Debitis, quam! Porro quibusdam id laborum
          dignissimos, laudantium pariatur nesciunt modi? Porro, nisi dolor?
          Repudiandae rerum aspernatur architecto eum fugiat consectetur amet,
          est autem neque, nemo blanditiis. Explicabo voluptatibus facere
          quaerat maiores autem doloremque voluptas similique hic reprehenderit.
          Consectetur dolores autem distinctio perferendis, obcaecati, maiores
          ducimus eius nulla dignissimos nemo id. In laboriosam necessitatibus
          nostrum. Saepe dicta culpa, veniam assumenda sequi iure, minus maxime
          earum facere est reiciendis accusamus aut.
        </div>
      </div>
      <div className=" w-1/2 flex flex-col items-center">
        <h2 className="underline">Preventing overscroll bouncing</h2>
        <h2 className="text-vsm">
          Use the 'overscroll-none' utility to prevent scrolling in the target
          area from triggering scrolling in the parent element, and also prevent
          "bounce" effects when scrolling past the end of the container.
        </h2>
        <div className="w-3/4 overflow-scroll bg-gray-800 rounded-[0.4em] overscroll-none h-20 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          deserunt ipsa debitis ipsum ut veniam numquam mollitia rerum vitae
          porro atque consequuntur provident, eligendi optio possimus tempora
          impedit nulla velit? Debitis, quam! Porro quibusdam id laborum
          dignissimos, laudantium pariatur nesciunt modi? Porro, nisi dolor?
          Repudiandae rerum aspernatur architecto eum fugiat consectetur amet,
          est autem neque, nemo blanditiis. Explicabo voluptatibus facere
          quaerat maiores autem doloremque voluptas similique hic reprehenderit.
          Consectetur dolores autem distinctio perferendis, obcaecati, maiores
          ducimus eius nulla dignissimos nemo id. In laboriosam necessitatibus
          nostrum. Saepe dicta culpa, veniam assumenda sequi iure, minus maxime
          earum facere est reiciendis accusamus aut.
        </div>
      </div>
      <div className=" w-1/2 flex flex-col items-center">
        <h2 className="underline">Using default overscroll behavior</h2>
        <h2 className="text-vsm">
          Use the 'overscroll-auto' to make it possible for the user to continue
          scrolling a parent scroll area when they reach the boundary of the
          primary scroll area.
        </h2>
        <div className="w-3/4 overflow-scroll bg-gray-800 rounded-[0.4em] overscroll-auto h-20 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          deserunt ipsa debitis ipsum ut veniam numquam mollitia rerum vitae
          porro atque consequuntur provident, eligendi optio possimus tempora
          impedit nulla velit? Debitis, quam! Porro quibusdam id laborum
          dignissimos, laudantium pariatur nesciunt modi? Porro, nisi dolor?
          Repudiandae rerum aspernatur architecto eum fugiat consectetur amet,
          est autem neque, nemo blanditiis. Explicabo voluptatibus facere
          quaerat maiores autem doloremque voluptas similique hic reprehenderit.
          Consectetur dolores autem distinctio perferendis, obcaecati, maiores
          ducimus eius nulla dignissimos nemo id. In laboriosam necessitatibus
          nostrum. Saepe dicta culpa, veniam assumenda sequi iure, minus maxime
          earum facere est reiciendis accusamus aut.
        </div>
      </div>
    </div>
  );
}

export default OverscrollBehaviour;
