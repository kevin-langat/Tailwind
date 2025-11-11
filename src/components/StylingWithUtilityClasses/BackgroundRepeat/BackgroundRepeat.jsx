function BackgroundRepeat() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        background-repeat
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the repeatition of an elements background
        image.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm'>
        Use utilities like 'bg-repeat' to repeat the background image vertically
        and horizontally:
      </h2>
      <div className=' h-60 w-1/2 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abst.png)] bg-center bg-repeat '></div>
      {/*Repeating horizontally */}
      <h2 className='underline'>Repeating horizontally</h2>
      <h2 className='text-vsm'>
        Use the 'bg-repeat-x' utility to only repeat the background image
        horizontally:
      </h2>
      <div className=' h-60 w-1/2 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abst.png)] bg-center bg-repeat-x bg-'></div>
      {/*Repeating vertically */}
      <h2 className='underline'>Repeating vertically</h2>
      <h2 className='text-vsm'>
        Use the 'bg-repeat-y' utility to only repeat the background image
        vertically:
      </h2>
      <div className=' h-60 w-1/2 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abst.png)] bg-center bg-repeat-y '></div>
      {/*Preventing clipping*/}
      <h2 className='underline'>Preventing clipping</h2>
      <h2 className='text-vsm'>
        Use the 'bg-repeat-space' utility to repeat the background image without
        clipping
      </h2>
      <div className=' h-60 w-1/2 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abst.png)] bg-center bg-repeat-space '></div>
      {/*Preventing clipping and gaps*/}
      <h2 className='underline'>Preventing clipping and gaps</h2>
      <h2 className='text-vsm'>
        Use the 'bg-repeat-round' utility to repeat the background image without
        clipping, stretching if needed to avoid gaps:
      </h2>
      <div className=' h-60 w-1/2 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abst.png)] bg-center bg-repeat-round '></div>
      {/*Disabling repeating*/}
      <h2 className='underline'>Disabling repeating</h2>
      <h2 className='text-vsm'>
        Use the 'bg-no-repeat' utlity to prevent the background image from
        repeating:
      </h2>
      <div className=' h-60 w-1/2 p-2 bg-gray-800/30 outline-1 outline-gray-900/30 rounded-[0.5em] bg-[url(../../public/images/abst.png)] bg-center bg-no-repeat '></div>
    </div>
  );
}

export default BackgroundRepeat;
