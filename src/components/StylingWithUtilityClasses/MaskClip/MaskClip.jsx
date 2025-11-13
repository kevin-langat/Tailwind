function MaskClip() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        mask-clip
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the bounding box of an element's mask.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mask-clip-border','mask-clip-padding', and
        'mask-clip-content' to control the bounding box of an element's mask:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-row justify-around items-center'>
        <div className=' flex flex-col items-center gap-2 '>
          <h2 className='text-vsm text-gray-300'>mask-clip-border</h2>
          <div className=' w-30 h-30 border-3 p-1.5 bg-gray-300 bg-cover border-dashed border-orange-600 [mask-clip:border-box] [-webkit-mask-clip:border-box] [mask-image:url(/Images/abstract.png)] [-webkit-mask-image:url(/Images/abstract.png)] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-size:cover] [-webkit-mask-size:cover] bg-[url(/Images/scribble.png)] bg-center '></div>
        </div>
        <div className=' flex flex-col items-center gap-2 '>
          <h2 className='text-vsm text-gray-300'>mask-clip-padding</h2>
          <div className=' w-30 h-30 border-3 p-1.5 bg-gray-300 bg-cover border-dashed border-orange-600 [mask-clip:padding-box] [-webkit-mask-clip:padding-box] [mask-image:url(/Images/scribble.png)] [-webkit-mask-image:url(/Images/scribble.png)] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-size:cover] [-webkit-mask-size:cover] bg-[url(/Images/abstract.png)] bg-center  '></div>
        </div>
        <div className=' flex flex-col items-center gap-2 '>
          <h2 className='text-vsm text-gray-300'>mask-clip-content</h2>
          <div className=' w-30 h-30 border-4 p-1.5 bg-gray-300 bg-cover border-dashed border-orange-600 [mask-image:url(/Images/scribble.png)] [-webkit-mask-image:url(/Images/scribble.png)] [mask-clip:content-box] [-webkit-mask-clip:content-box] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]  [mask-size:cover] [-webkit-mask-size:cover] bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-2 '>
          <h2 className='text-vsm text-gray-300'>mask-clip-stroke</h2>
          <div className=' w-30 h-30 border-4 p-1.5 bg-gray-300 bg-cover border-dashed border-orange-600 [mask-image:url(/Images/scribble.png)] [-webkit-mask-image:url(/Images/scribble.png)] [mask-clip:stroke-box] [-webkit-mask-clip:stroke-box] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-size:cover] [-webkit-mask-size:cover] bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
    </div>
  );
}

export default MaskClip;
