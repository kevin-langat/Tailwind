import imageOne from '../../../assets/Houses/OIG1.jpg';

function BackgroundOrigin() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        background-origin
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling how an element's background is positioned
        relative to the borders, padding, and content.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm'>
        Use the 'bg-origin-border', 'bg-origin-padding' and 'bg-origin-content'
        utilities to control where an element's background is rendered:
      </h2>
      <div className='items-center justify-center bg-gray-800 rounded-[0.2em] w-1/2 h-30 flex flex-row gap-10'>
        <div className=' h-[80%] flex flex-col items-center justify-center gap-2 w-1/4'>
          <h2 className=' text-vsm text-gray-300'>bg-orgin-border</h2>
          <div
            style={{
              backgroundImage: `url(${imageOne})`,
              backgroundRepeat: 'no-repeat',
              border: '4px dashed gray',
              backgroundPosition: 'center',
              backgroundSize: '100%',
              padding: '10px',
              backgroundOrigin: 'border-box',
              width: '60%',
              height: '100%',
              borderRadius: '7px',
            }}
          ></div>
        </div>
        <div className=' h-[80%] flex flex-col items-center justify-center gap-2 w-1/4'>
          <h2 className=' text-vsm text-gray-300'>bg-orgin-padding</h2>
          <div
            style={{
              backgroundImage: `url(${imageOne})`,
              backgroundRepeat: 'no-repeat',
              border: '4px dashed gray',
              backgroundPosition: 'center',
              backgroundSize: '100%',
              padding: '10px',
              backgroundOrigin: 'padding-box',
              width: '60%',
              height: '100%',
              borderRadius: '7px',
            }}
          ></div>
        </div>
        <div className=' h-[80%] flex flex-col items-center justify-center gap-2 w-1/4'>
          <h2 className=' text-vsm text-gray-300'>bg-orgin-content</h2>
          <div
            style={{
              backgroundImage: `url(${imageOne})`,
              backgroundRepeat: 'no-repeat',
              border: '4px dashed gray',
              backgroundPosition: 'center',
              backgroundSize: '100%',
              padding: '10px',
              backgroundOrigin: 'content-box',
              width: '60%',
              height: '100%',
              borderRadius: '7px',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundOrigin;
