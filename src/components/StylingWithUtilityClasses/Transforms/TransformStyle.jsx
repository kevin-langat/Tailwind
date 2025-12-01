function TransformStyle() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        transform-style
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        The transform-style CSS property sets whether the children of an element
        are positioned in the 3D space or are flattened into the 2D plane of
        their parent.
      </h2>
      {/* Basic Example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use transform-3d to position children in 3D space:
      </h2>
      <div className='w-1/2 outline-1  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-around gap-10   text-gray-300 py-12 '>
        <label htmlFor='check1'> transfrom-flat </label>
        <div className='[perspective:700px]   w-22 h-22'>
          <div className='relative w-full transform-flat h-full  animate-spin-3d [transform:rotateX(45deg)_rotateY(45deg)]'>
            <div className='absolute w-full h-full bg-blue-500/70 border-4 border-blue-800 text-white flex items-center justify-center text-4xl [transform:translateZ(3rem)] '>
              1
            </div>

            <div className='absolute   w-full h-full bg-red-500/70 border-4 border-red-800 text-white flex items-center justify-center text-4xl [transform:rotateY(180deg)_translateZ(3rem)]'>
              2
            </div>

            <div className='absolute w-full h-full bg-green-500/70 border-4 border-green-800 text-white flex items-center justify-center text-4xl [transform:rotateY(90deg)_translateZ(3rem)]  '>
              3
            </div>

            <div className='absolute w-full h-full bg-yellow-500/70 border-4 border-yellow-800 text-black flex items-center justify-center text-4xl [transform:rotateY(-90deg)_translateZ(3rem)]  '>
              4
            </div>

            <div className='absolute w-full h-full bg-purple-500/70 border-4 border-purple-800 text-white flex items-center justify-center text-4xl [transform:rotateX(90deg)_translateZ(3rem)]  '>
              5
            </div>

            <div className='absolute w-full h-full bg-pink-500/70 border-4 border-pink-800 text-white flex items-center justify-center text-4xl [transform:rotateX(-90deg)_translateZ(3rem)]  '>
              6
            </div>
          </div>
        </div>
        <label htmlFor='check1'> transfrom-3d </label>
        <div className='[perspective:700px]   w-22 h-22'>
          <div className='relative w-full transform-3d h-full  animate-spin-3d [transform:rotateX(45deg)_rotateY(45deg)]'>
            <div className='absolute w-full h-full bg-blue-500/70 border-4 border-blue-800 text-white flex items-center justify-center text-4xl [transform:translateZ(3rem)] '>
              1
            </div>

            <div className='absolute   w-full h-full bg-red-500/70 border-4 border-red-800 text-white flex items-center justify-center text-4xl [transform:rotateY(180deg)_translateZ(3rem)]'>
              2
            </div>

            <div className='absolute w-full h-full bg-green-500/70 border-4 border-green-800 text-white flex items-center justify-center text-4xl [transform:rotateY(90deg)_translateZ(3rem)]  '>
              3
            </div>

            <div className='absolute w-full h-full bg-yellow-500/70 border-4 border-yellow-800 text-black flex items-center justify-center text-4xl [transform:rotateY(-90deg)_translateZ(3rem)]  '>
              4
            </div>

            <div className='absolute w-full h-full bg-purple-500/70 border-4 border-purple-800 text-white flex items-center justify-center text-4xl [transform:rotateX(90deg)_translateZ(3rem)]  '>
              5
            </div>

            <div className='absolute w-full h-full bg-pink-500/70 border-4 border-pink-800 text-white flex items-center justify-center text-4xl [transform:rotateX(-90deg)_translateZ(3rem)]  '>
              6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransformStyle;
