function BackfaceVisibility() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        backface-visibility
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        The backface-visibility property controls whether the reverse side of an
        element is visible when it is rotated in 3D space.
      </h2>
      {/* Basic Example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use the backface-visible utility to show the backface of an element,
        like a cube, even when it's rotated away from view:
      </h2>
      <div className='w-1/2 outline-1  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-around gap-10   text-gray-300 py-12 '>
        <label htmlFor='check1'>backface-hidden</label>
        <div class='[perspective:700px]  w-22 h-22'>
          <div class='relative w-full h-full [transform-style:preserve-3d] animate-spin-3d [transform:rotateX(45deg)_rotateY(45deg)]'>
            <div class='absolute w-full h-full bg-blue-500/70 border-4 border-blue-800 text-white flex items-center justify-center text-4xl [transform:translateZ(3rem)] backface-hidden'>
              1
            </div>

            <div class='absolute backface-hidden w-full h-full bg-red-500/70 border-4 border-red-800 text-white flex items-center justify-center text-4xl [transform:rotateY(180deg)_translateZ(3rem)]'>
              2
            </div>

            <div class='absolute w-full h-full bg-green-500/70 border-4 border-green-800 text-white flex items-center justify-center text-4xl [transform:rotateY(90deg)_translateZ(3rem)] backface-hidden'>
              3
            </div>

            <div class='absolute w-full h-full bg-yellow-500/70 border-4 border-yellow-800 text-black flex items-center justify-center text-4xl [transform:rotateY(-90deg)_translateZ(3rem)] backface-hidden'>
              4
            </div>

            <div class='absolute w-full h-full bg-purple-500/70 border-4 border-purple-800 text-white flex items-center justify-center text-4xl [transform:rotateX(90deg)_translateZ(3rem)] backface-hidden'>
              5
            </div>

            <div class='absolute w-full h-full bg-pink-500/70 border-4 border-pink-800 text-white flex items-center justify-center text-4xl [transform:rotateX(-90deg)_translateZ(3rem)] backface-hidden'>
              6
            </div>
          </div>
        </div>
        <label htmlFor='check1'>backface-visible</label>
        <div class='[perspective:700px]  w-22 h-22'>
          <div class='relative w-full h-full [transform-style:preserve-3d] animate-spin-3d [transform:rotateX(45deg)_rotateY(45deg)]'>
            <div class='absolute w-full h-full bg-blue-500/70 border-4 border-blue-800 text-white flex items-center justify-center text-4xl [transform:translateZ(3rem)] backface-visible'>
              1
            </div>

            <div class='absolute backface-visible w-full h-full bg-red-500/70 border-4 border-red-800 text-white flex items-center justify-center text-4xl [transform:rotateY(180deg)_translateZ(3rem)]'>
              2
            </div>

            <div class='absolute w-full h-full bg-green-500/70 border-4 border-green-800 text-white flex items-center justify-center text-4xl [transform:rotateY(90deg)_translateZ(3rem)] backface-visible'>
              3
            </div>

            <div class='absolute w-full h-full bg-yellow-500/70 border-4 border-yellow-800 text-black flex items-center justify-center text-4xl [transform:rotateY(-90deg)_translateZ(3rem)] backface-visible'>
              4
            </div>

            <div class='absolute w-full h-full bg-purple-500/70 border-4 border-purple-800 text-white flex items-center justify-center text-4xl [transform:rotateX(90deg)_translateZ(3rem)] backface-visible'>
              5
            </div>

            <div class='absolute w-full h-full bg-pink-500/70 border-4 border-pink-800 text-white flex items-center justify-center text-4xl [transform:rotateX(-90deg)_translateZ(3rem)] backface-visible'>
              6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackfaceVisibility;
