function ListStylePosition() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        line-style-position
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the position of bullets and numbers in lists.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use Utilities like 'list-inside' and 'list-outside' to control the
        position of the markup and text indentation in a list:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-row text-gray-300 pl-12   gap-4 p-3">
        <ul className="flex bg-gray-700 rounded-[0.4em] text-vsm list-disc list-inside flex-col pl-2 w-1/2 justify-start gap-0 5">
          <li>5 cups of chopped mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
        <ul className="flex bg-gray-700 rounded-[0.4em] pl-2 text-vsm list-disc list-outside flex-col w-1/2 justify-start gap-0 5">
          <li>5 cups of chopped mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
      </div>
    </div>
  );
}

export default ListStylePosition;
