const BackgroundSize = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        background-size
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the background size of an element's background
        image:
      </h2>
      {/* filing the container */}
      <h2 className='underline'>Filing the container</h2>
      <h2 className='text-vsm'>
        Use the 'bg-cover' utility to scale the background image untill it fills
        the background layer cropping the image if needed:
      </h2>
      <div className=' h-50 w-80 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abstract.png)] bg-center bg-no-repeat bg-cover'></div>
      {/* filing without cropping */}
      <h2 className='underline'>Filing without cropping</h2>
      <h2 className='text-vsm'>
        Use the 'bg-contain' utility to scale the background image to the outer
        edges without cropping or stretching:
      </h2>
      <div className=' h-50 w-90 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abstract.png)] bg-center bg-no-repeat bg-contain'></div>
      {/* Using the default size */}
      <h2 className='underline'>Using the default size</h2>
      <h2 className='text-vsm'>
        Use the 'bg-auto' utlity to display the background image at its default
        size:
      </h2>
      <div className=' h-50 w-90 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abstract.png)] bg-center bg-no-repeat bg-auto'></div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm'>
        Use the 'bg-size-{'[<value>]'}' syntax to set the background size based
        on a completely custom value:
      </h2>
      <div className=' h-50 w-90 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abstract.png)] bg-center bg-no-repeat bg-[auto_150px]'></div>
    </div>
  );
};

export default BackgroundSize;
