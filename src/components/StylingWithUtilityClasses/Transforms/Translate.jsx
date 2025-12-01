function Translate() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('/public/Images/mountain.jpg')`,
  };
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        translate
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        The term "translate" in the context of CSS and Tailwind CSS refers to
        the repositioning or movement of an element from its original position
        on the screen. It is one of the fundamental CSS transform functions.
      </h2>
      {/* Using the spacing scale */}
      <h2 className='underline'>Using the spacing scale</h2>
      <h2 className='text-vsm w-1/2'>
        Use translate-{'<number> '}utilities like translate-2 and -translate-4
        to translate an element on both axes based on the spacing scale:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between gap-5  text-gray-300 py-10 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-translate-6</h2>
          <div
            style={backgroundStyle}
            className='w-24  h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -translate-6'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-6 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-2</h2>
          <div
            style={backgroundStyle}
            className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] translate-2 h-full w-full'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-4 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-8</h2>
          <div
            style={backgroundStyle}
            className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full translate-8'
              alt=''
            />
          </div>
        </div>
      </div>
      {/*Using a percentage */}
      <h2 className='underline'>Using a percentage</h2>
      <h2 className='text-vsm w-1/2'>
        Use 'translate-{'<fraction>'}' utilities like 'translate-1/4' and
        'translate-full' to translate an element on both axes by a percentage of
        an element's size:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between  text-gray-300 py-10 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-translate-1/4</h2>
          <div
            style={backgroundStyle}
            className='w-24  h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -translate-1/4'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-6 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-1/6</h2>
          <div
            style={backgroundStyle}
            className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] translate-1/6 h-full w-full'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-2 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-1/2</h2>
          <div
            style={backgroundStyle}
            className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full translate-1/2'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Translating on the x-axis */}
      <h2 className='underline'>Translating on the x-axis</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'trasnslate-x-{'<number>'}' or translate-x-{'<fraction>'}{' '}
        utilities like 'translate-x-4' and 'translate-x-1/4' to translate an
        element on the x-axis:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between  text-gray-300 py-10 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-translate-x-4</h2>
          <div
            style={backgroundStyle}
            className='w-24  h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -translate-x-4'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-6 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-x-6</h2>
          <div
            style={backgroundStyle}
            className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] translate-x-6 h-full w-full'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-2 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-x-1/2</h2>
          <div
            style={backgroundStyle}
            className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full translate-x-1/2'
              alt=''
            />
          </div>
        </div>
      </div>
      {/*Translating on the y-axis */}
      <h2 className='underline'>Translating on the y-axis</h2>
      <h2 className='text-vsm w-1/2'>
        Use translate-y-{'<number>'} or translate-y-{'<fraction>'} utilities
        like translate-y-6 and translate-y-1/3 to translate an element on the
        y-axis:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between  text-gray-300 py-10 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-translate-y-4</h2>
          <div
            style={backgroundStyle}
            className='w-24  h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full -translate-y-4'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-6 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-y-6</h2>
          <div
            style={backgroundStyle}
            className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] translate-y-6 h-full w-full'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-2 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-y-1/4</h2>
          <div
            style={backgroundStyle}
            className='w-24 h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] h-full w-full translate-y-1/4'
              alt=''
            />
          </div>
        </div>
      </div>
      {/*Translating on the z-axis */}
      <h2 className='underline'>Translating on the z-axis</h2>
      <h2 className='text-vsm w-1/2'>
        The translateZ property is a CSS transform function used to reposition
        an element along the Z-axis in 3D space, moving it either closer to or
        farther away from the viewer. Use translate-z-{'<number>'} or
        translate-z-{'<fraction>'} utilities like translate-y-6 utilities like
        'translate-z-6' and '-translate-z-12' to translate an element on the
        z-axis:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-row justify-between  text-gray-300 py-10 '>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>-translate-z-8</h2>
          <div
            style={backgroundStyle}
            className='w-24 [perspective:1000px] transform-3d h-24 rounded-[0.3em] border-2 skew-x-6 rotate-45 border-dotted  border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] skew-x-6 rotate-z-90 h-full w-full [transform:translateZ(50px)_rotateY(45deg)] -translate-z-8'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-z-4</h2>
          <div
            style={backgroundStyle}
            className='w-24 [perspective:1000px] transform-3d h-24 rounded-[0.3em] border-2 skew-x-6 rotate-45 border-dotted  border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] skew-x-6 rotate-z-90 h-full w-full [transform:translateZ(50px)_rotateY(45deg)] translate-z-4'
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-8 place-items-center w-1/3 flex-col'>
          <h2 className='text-vsm'>translate-z-12</h2>
          <div
            style={backgroundStyle}
            className='w-24 [perspective:1000px] transform-3d h-24 rounded-[0.3em] border-2 skew-x-6 rotate-45 border-dotted  border-gray-500'
          >
            <img
              src='/public/Images/mountain.jpg'
              className='rounded-[0.3em] skew-x-6 rotate-z-90 h-full w-full [transform:translateZ(50px)_rotateY(45deg)] translate-z-12'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the translate-{'[<value>]'} syntax to set the translation based on a
        completely custom value:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-between gap-2  text-gray-300 py-4 '>
        <h2 className='text-vsm'>translate-[1em]</h2>
        <div
          style={backgroundStyle}
          className='w-24  h-24 rounded-[0.3em] border-2 border-dotted border-gray-500'
        >
          <img
            src='/public/Images/mountain.jpg'
            className='rounded-[0.3em] h-full w-full translate-[1em]'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Translate;
