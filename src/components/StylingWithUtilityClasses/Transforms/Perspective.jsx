function Perspective() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        perspective
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        The perspective property in CSS is used to give 3D-positioned elements a
        sense of depth by defining the distance between the user's viewpoint and
        the 2D screen (the z=0 plane).
      </h2>
      {/* Basic Example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like perspective-normal and perspective-distant to control
        how close or how far away the z-plane is from the screen:
      </h2>
      <div className='w-1/2 outline-1  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-around gap-10   text-gray-300 py-12 '>
        <label htmlFor='check1'>perspective-dramatic</label>
        <div class='perspective-dramatic  w-22 h-22'>
          <div class='relative w-full h-full [transform-style:preserve-3d] animate-spin-3d [transform:rotateX(45deg)_rotateY(45deg)]'>
            <div class='absolute w-full h-full bg-blue-500/70 border-4 border-blue-800 text-white flex items-center justify-center text-4xl [transform:translateZ(3rem)]   '>
              1
            </div>

            <div class='absolute    w-full h-full bg-red-500/70 border-4 border-red-800 text-white flex items-center justify-center text-4xl [transform:rotateY(180deg)_translateZ(3rem)]'>
              2
            </div>

            <div class='absolute w-full h-full bg-green-500/70 border-4 border-green-800 text-white flex items-center justify-center text-4xl [transform:rotateY(90deg)_translateZ(3rem)]   '>
              3
            </div>

            <div class='absolute w-full h-full bg-yellow-500/70 border-4 border-yellow-800 text-black flex items-center justify-center text-4xl [transform:rotateY(-90deg)_translateZ(3rem)]   '>
              4
            </div>

            <div class='absolute w-full h-full bg-purple-500/70 border-4 border-purple-800 text-white flex items-center justify-center text-4xl [transform:rotateX(90deg)_translateZ(3rem)]   '>
              5
            </div>

            <div class='absolute w-full h-full bg-pink-500/70 border-4 border-pink-800 text-white flex items-center justify-center text-4xl [transform:rotateX(-90deg)_translateZ(3rem)]   '>
              6
            </div>
          </div>
        </div>
        <label htmlFor='check1'>perspective-normal</label>
        <div class='perspective-normal w-22 h-22'>
          <div class='relative w-full h-full [transform-style:preserve-3d] animate-spin-3d [transform:rotateX(45deg)_rotateY(45deg)]'>
            <div class='absolute w-full h-full bg-blue-500/70 border-4 border-blue-800 text-white flex items-center justify-center text-4xl [transform:translateZ(3rem)]   '>
              1
            </div>

            <div class='absolute    w-full h-full bg-red-500/70 border-4 border-red-800 text-white flex items-center justify-center text-4xl [transform:rotateY(180deg)_translateZ(3rem)]'>
              2
            </div>

            <div class='absolute w-full h-full bg-green-500/70 border-4 border-green-800 text-white flex items-center justify-center text-4xl [transform:rotateY(90deg)_translateZ(3rem)]   '>
              3
            </div>

            <div class='absolute w-full h-full bg-yellow-500/70 border-4 border-yellow-800 text-black flex items-center justify-center text-4xl [transform:rotateY(-90deg)_translateZ(3rem)]   '>
              4
            </div>

            <div class='absolute w-full h-full bg-purple-500/70 border-4 border-purple-800 text-white flex items-center justify-center text-4xl [transform:rotateX(90deg)_translateZ(3rem)]   '>
              5
            </div>

            <div class='absolute w-full h-full bg-pink-500/70 border-4 border-pink-800 text-white flex items-center justify-center text-4xl [transform:rotateX(-90deg)_translateZ(3rem)]   '>
              6
            </div>
          </div>
        </div>
        <label htmlFor='check1'>perspective-midrange</label>
        <div class='perspective-midrange w-22 h-22'>
          <div class='relative w-full h-full [transform-style:preserve-3d] animate-spin-3d [transform:rotateX(45deg)_rotateY(45deg)]'>
            <div class='absolute w-full h-full bg-blue-500/70 border-4 border-blue-800 text-white flex items-center justify-center text-4xl [transform:translateZ(3rem)]   '>
              1
            </div>

            <div class='absolute    w-full h-full bg-red-500/70 border-4 border-red-800 text-white flex items-center justify-center text-4xl [transform:rotateY(180deg)_translateZ(3rem)]'>
              2
            </div>

            <div class='absolute w-full h-full bg-green-500/70 border-4 border-green-800 text-white flex items-center justify-center text-4xl [transform:rotateY(90deg)_translateZ(3rem)]   '>
              3
            </div>

            <div class='absolute w-full h-full bg-yellow-500/70 border-4 border-yellow-800 text-black flex items-center justify-center text-4xl [transform:rotateY(-90deg)_translateZ(3rem)]   '>
              4
            </div>

            <div class='absolute w-full h-full bg-purple-500/70 border-4 border-purple-800 text-white flex items-center justify-center text-4xl [transform:rotateX(90deg)_translateZ(3rem)]   '>
              5
            </div>

            <div class='absolute w-full h-full bg-pink-500/70 border-4 border-pink-800 text-white flex items-center justify-center text-4xl [transform:rotateX(-90deg)_translateZ(3rem)]   '>
              6
            </div>
          </div>
        </div>
      </div>
      {/* Removing perspective */}
      <h2 className='underline'>Removing perspective </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Use the perspective-none utility to remove a perspective transform from
        an element:
      </h2>
      <div className='w-1/2 outline-1  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-around gap-10   text-gray-300 py-12 '>
        <label htmlFor='check1'>perspective-none</label>
        <div class='perspective-none  w-22 h-22'>
          <div class='relative w-full h-full [transform-style:preserve-3d] animate-spin-3d [transform:rotateX(45deg)_rotateY(45deg)]'>
            <div class='absolute w-full h-full bg-blue-500/70 border-4 border-blue-800 text-white flex items-center justify-center text-4xl [transform:translateZ(3rem)]   '>
              1
            </div>

            <div class='absolute    w-full h-full bg-red-500/70 border-4 border-red-800 text-white flex items-center justify-center text-4xl [transform:rotateY(180deg)_translateZ(3rem)]'>
              2
            </div>

            <div class='absolute w-full h-full bg-green-500/70 border-4 border-green-800 text-white flex items-center justify-center text-4xl [transform:rotateY(90deg)_translateZ(3rem)]   '>
              3
            </div>

            <div class='absolute w-full h-full bg-yellow-500/70 border-4 border-yellow-800 text-black flex items-center justify-center text-4xl [transform:rotateY(-90deg)_translateZ(3rem)]   '>
              4
            </div>

            <div class='absolute w-full h-full bg-purple-500/70 border-4 border-purple-800 text-white flex items-center justify-center text-4xl [transform:rotateX(90deg)_translateZ(3rem)]   '>
              5
            </div>

            <div class='absolute w-full h-full bg-pink-500/70 border-4 border-pink-800 text-white flex items-center justify-center text-4xl [transform:rotateX(-90deg)_translateZ(3rem)]   '>
              6
            </div>
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Use the perspective-{'[<value>]'} syntax to set the perspective based on
        a completely custom value:
      </h2>
      <div className='w-1/2 outline-1  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-around gap-10   text-gray-300 py-12 '>
        <label htmlFor='check1'>perspective-[750px]</label>
        <div class='perspective-[750px]  w-22 h-22'>
          <div class='relative w-full h-full [transform-style:preserve-3d] animate-spin-3d [transform:rotateX(45deg)_rotateY(45deg)]'>
            <div class='absolute w-full h-full bg-blue-500/70 border-4 border-blue-800 text-white flex items-center justify-center text-4xl [transform:translateZ(3rem)]   '>
              1
            </div>

            <div class='absolute    w-full h-full bg-red-500/70 border-4 border-red-800 text-white flex items-center justify-center text-4xl [transform:rotateY(180deg)_translateZ(3rem)]'>
              2
            </div>

            <div class='absolute w-full h-full bg-green-500/70 border-4 border-green-800 text-white flex items-center justify-center text-4xl [transform:rotateY(90deg)_translateZ(3rem)]   '>
              3
            </div>

            <div class='absolute w-full h-full bg-yellow-500/70 border-4 border-yellow-800 text-black flex items-center justify-center text-4xl [transform:rotateY(-90deg)_translateZ(3rem)]   '>
              4
            </div>

            <div class='absolute w-full h-full bg-purple-500/70 border-4 border-purple-800 text-white flex items-center justify-center text-4xl [transform:rotateX(90deg)_translateZ(3rem)]   '>
              5
            </div>

            <div class='absolute w-full h-full bg-pink-500/70 border-4 border-pink-800 text-white flex items-center justify-center text-4xl [transform:rotateX(-90deg)_translateZ(3rem)]   '>
              6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perspective;
