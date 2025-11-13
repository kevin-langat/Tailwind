const MaskMode = () => {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        mask-mode
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling an element's mask mode.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'mask-alpha', 'mask-luminance' and 'mask-match' utlities to control
        the mode of an element's mask:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-1 gap-3 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-alpha</h2>
          <div className=' mask-alpha mask-r-from-white  w-1/2 h-30  p-1.5 bg-gray-300 bg-cover bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className='flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-luminance</h2>
          <div className=' mask-luminance mask-r-from-white mask-r-from-20% mask-r-to-black w-1/2 h-30  p-1.5 bg-gray-300 bg-cover bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      <h2 className='text-vsm w-1/2 text-justify'>
        When using 'mask-luminance' the luminance value of the mask determines
        visibility, so sticking with grayscale colors wil produce the most
        predictable results, with 'mask-alpha', the opacity of the mask
        determines the visibility of the masked element.{' '}
      </h2>
    </div>
  );
};

export default MaskMode;
