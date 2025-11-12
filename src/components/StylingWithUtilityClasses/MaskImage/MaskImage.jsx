function MaskImage() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        mask-image
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling an element's mask image.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Using an image mask</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mask-add','mask-intersect' to control how an
        element's masks are combined together:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col items-center gap-3 justify-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <div className=' w-30 h-30  p-1.5 bg-gray-300 bg-cover  mask-[url(/Images/scribble.png)]    bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      <h2 className='underline'>Masking edges</h2>
      <h2 className='text-vsm'>
        Use utilities like 'mask-b-from-{'<value>'} and 'mask-t-to-{'<value>'}'
        to add linear gradient mask to a single side of an element:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-2 gap-3 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'> mask-t-from-50%</h2>
          <div className=' mask-t-from-50%  w-30 h-30  p-1.5 bg-gray-300 bg-cover     bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'> mask-r-from-50%</h2>
          <div className='  mask-r-from-50% w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>
            mask-l-from-50% mask-l-to-80%{' '}
          </h2>
          <div className='mask-l-from-50% w-30 h-30  p-1.5 bg-gray-300 bg-cover mask-l-to-80%  bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>
            mask-b-from-50% mask-b-to-90%
          </h2>
          <div className=' mask-b-from-50% mask-b-to-90% w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)]'></div>
        </div>
      </div>
      <h2 className='text-vsm w-1/2'>
        Additionally use utilities like 'mask-x-from-70%' and 'mask-y-to-90%' to
        apply a mask to two sides of an element at the same time:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-2 gap-3 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>
            {' '}
            mask-x-from-70% mask-x-to-90%
          </h2>
          <div className=' mask-x-from-70% mask-x-to-90%  w-30 h-30  p-1.5 bg-gray-300 bg-cover     bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>
            {' '}
            mask-y-from-80% mask-y-to-90%
          </h2>
          <div className=' mask-y-from-80% mask-y-to-90% w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      <h2 className='text-vsm w-1/2'>
        By default linear gradient mask transition from black to transparent,
        but you can customize the gradient colors using the 'mask-{'<side>'}
        -from-{'<color>'}' utility.
      </h2>
      {/* Adding a angled mask */}
      <h2 className='underline'>Adding an angled linear mask</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mask-linear-{'<angle>'}', 'mask-linear-from-20' and
        'mask-linear-to-40' to add a custom linear gradient mask to an element.
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-2 gap-3 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'> mask-linear-220</h2>
          <div className=' mask-linear-220 mask-linear-from-20% mask-linear-to-80%  w-30 h-30  p-1.5 bg-gray-300 bg-cover     bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'> -mask-linear-50</h2>
          <div className='  -mask-linear-50 mask-linear-from-60% mask-linear-to-80%  mask-y-to-90% w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Adding a radial mask */}
      <h2 className='underline'>Adding an radial mask</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-radial-from-{'<value>'}' and 'mask-radial-to-{'value'}'
        utilities to add a radial gradients mask to an element:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col items-center gap-3 justify-around '>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'> mask-radial-from-20%</h2>
          <div className=' mask-radial-from-20% mask-radial-[40%_40%]  w-30 h-30  p-1.5 bg-gray-300 bg-cover bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Setting the radial position */}
      <h2 className='underline'>Setting the radial position</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mask-radial-at-bottom-left' and
        'mask-radial-at-[35%_35%]' to set the position of the center of the
        radial gradient mask:
      </h2>
      <div className=' w-3/5 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-3 gap-3 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'> mask-radial-at-top-left</h2>
          <div className=' mask-radial-from-20% w-30 h-30 mask-radial-[60%_60%] mask-radial-at-top-left p-1.5  bg-gray-300 bg-cover bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-radial-at-top</h2>
          <div className='mask-radial-from-25%  mask-radial-at-top mask-radial-[50%_50%] w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-radial-at-top-right</h2>
          <div className='mask-radial-from-25%  mask-radial-at-top-right mask-radial-[50%_50%] w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-radial-at-left</h2>
          <div className='mask-radial-from-25%  mask-radial-at-left mask-radial-[50%_50%] w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-radial-at-center</h2>
          <div className='mask-radial-from-25%  mask-radial-at-center mask-radial-[50%_50%] w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-radial-at-right</h2>
          <div className='mask-radial-from-25%  mask-radial-at-right mask-radial-[50%_50%] w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-radial-at-bottom-left</h2>
          <div className='mask-radial-from-25%  mask-radial-at-bottom-left mask-radial-[50%_50%] w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>mask-radial-at-bottom</h2>
          <div className='mask-radial-from-25%  mask-radial-at-bottom mask-radial-[50%_50%] w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>
            mask-radial-at-bottom-right{' '}
          </h2>
          <div className='mask-radial-from-25%  mask-radial-at-bottom-right mask-radial-[50%_50%] w-30 h-30  p-1.5 bg-gray-300 bg-cover   bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Setting the radial size */}
      <h2 className='underline'>Setting the radial size</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mask-radial-closest-corner' and
        'mask-radial-farthest-side' to set the size of the radial gradient mask:
      </h2>
      <div className=' w-3/5 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-2 gap-2 justify-around items-center'>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'> mask-radial-closest-side</h2>
          <div className=' mask-radial-from-100% mask-radial-at-[30%_80%]  w-30 h-30 mask-radial-closest-side p-1.5  bg-gray-300 bg-cover bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>
            {' '}
            mask-radial-closest-corner
          </h2>
          <div className=' mask-radial-from-100% mask-radial-at-[30%_80%]  w-30 h-30 mask-radial-closest-corner p-1.5  bg-gray-300 bg-cover bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'> mask-radial-farthest-side</h2>
          <div className=' mask-radial-from-100% mask-radial-at-[30%_80%]  w-30 h-30 mask-radial-farthest-side p-1.5  bg-gray-300 bg-cover bg-[url(/Images/abstract.png)] '></div>
        </div>
        <div className=' flex flex-col items-center gap-0.5 '>
          <h2 className='text-vsm text-gray-300'>
            {' '}
            mask-radial-farthest-corner
          </h2>
          <div className=' mask-radial-from-100% mask-radial-at-[30%_80%]  w-30 h-30 mask-radial-farthest-corner p-1.5  bg-gray-300 bg-cover bg-[url(/Images/abstract.png)] '></div>
        </div>
      </div>
      {/* Adding a conic mask */}
      <h2 className='underline'>Adding a conic mask</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-conic-from-{'<value>'}', 'mask-conic-to{'value'}' and
        'mask-conic-{'<angle>'}' utilities to add a conic mask to an element:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col gap-2 justify-around items-center'>
        <div className=' mask-conic-from-40% bg-gray-400  w-15 h-15  p-1.5 rounded-full mask-conic-to-75%  bg-cover border-2 border-orange-600 '></div>
      </div>
      {/* Combining masks */}
      <h2 className='underline'> Combining masks</h2>
      <h2 className='text-vsm w-1/2'>
        Gradient mask utilities, like 'mask-radial-from-{'<value>'}',
        'mask-conic-to-{'<value>'}' and 'mask-l-from-{'<value>'}' can be
        combined to create more complex gradient masks:
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] grid grid-cols-2 place-items-center justify-around items-center'>
        <div className=' mask-t-from-50% mask-radial-[50%_90%]  mask-radial-from-80% w-30 h-30  p-1.5  bg-[url(/Images/abstract.png)] bg-cover  '></div>
        <div className=' mask-r-from-80% mask-b-from-80 mask-radial-to-85% mask-radial-from-70% w-30 h-30  p-1.5  bg-[url(/Images/abstract.png)] bg-cover  '></div>
      </div>
      {/*Removing mask images */}
      <h2 className='underline'> Removing mask images</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'mask-none' utlity to remove an existing mask image from an
        element
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col justify-around items-center'>
        <div className=' mask-none w-30 h-30  p-1.5  bg-[url(/Images/abstract.png)] bg-cover  '></div>
      </div>
      {/*Using a custom value */}
      <h2 className='underline'> Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'mask-linear-{'<value>'}' and 'mask-radial-
        {'<value>'}' to set the mask image based on a custom value.
      </h2>
      <div className=' w-1/2 py-3 bg-gray-700 outline-1 outline-gray-400 rounded-[0.4em] flex flex-col justify-around items-center'>
        <div className=' mask-linear-[70deg,transparent_10%,black,transparent_80%] w-30 h-30  p-1.5  bg-[url(/Images/abstract.png)] bg-cover  '></div>
      </div>
    </div>
  );
}

export default MaskImage;
