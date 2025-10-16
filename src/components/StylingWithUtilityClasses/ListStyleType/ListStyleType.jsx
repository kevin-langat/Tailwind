function ListStyleType() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        line-style-type
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the marker style of a list.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="w-1/2 text-vsm">
        Use Utilities like 'list-disc' and 'list-decimal' to control the style
        of the markers in a list:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col items-center text-gray-300 pl-12   gap-4 p-3">
        <h2 className="text-vsm underline text-gray-400">list-disc</h2>
        <ul className="flex bg-gray-700 rounded-[0.4em] text-vsm list-disc flex-col pl-2 w-1/2 py-3 justify-start gap-0 5">
          <li>5 cups of chopped mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
        <h2 className="text-vsm underline text-gray-400">list-decimal</h2>

        <ul className="flex py-3 bg-gray-700 rounded-[0.4em] pl-2 text-vsm list-decimal  flex-col w-1/2 justify-start gap-0 5">
          <li>5 cups of chopped mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
        <h2 className="text-vsm underline text-gray-400">list-none</h2>

        <ul className="flex py-3 bg-gray-700 rounded-[0.4em] pl-2 text-vsm list-none  flex-col w-1/2 justify-start gap-0 5">
          <li>5 cups of chopped mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
      </div>

      {/* Using a custom value */}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'list-{'[<value>]'}' syntax to set the marker based on a
        completely custom value:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col items-center text-gray-300 pl-12   gap-4 p-3">
        {' '}
        <ul className="flex py-3  rounded-[0.4em] pl-2 text-vsm list-[lower-roman]  flex-col w-1/2 justify-start gap-0 5">
          <li>5 cups of chopped mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
      </div>
    </div>
  );
}

export default ListStyleType;
