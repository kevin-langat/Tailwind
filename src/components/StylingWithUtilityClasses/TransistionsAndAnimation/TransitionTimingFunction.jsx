function TransitionTimingFunction() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        transition-timing-function
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        The transition-timing-function is a CSS property that defines the speed
        curve of a transition effect. It controls how the animation progresses
        over its duration—whether it moves linearly, speeds up at the beginning,
        slows down at the end, or uses a complex bounce effect.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'ease-in', 'ease-out' and 'ease-in-out' to apply
        transition timing function.
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-3 text-vsm text-gray-300  '>
        <label htmlFor='check1'>ease-in</label>
        <button className='transition ease-in hover:scale-125 duration-150  bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button A
        </button>
        <label htmlFor='check2'>ease-out</label>
        <button className='transition duration-300 ease-out hover:scale-125 bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button B
        </button>
        <label htmlFor='check2'>ease-in-out</label>
        <button className=' transition duration-300 ease-in-out hover:scale-125 bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button C
        </button>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the ease-{'[<value>]'} syntax to set the transition timing function
        based on a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-3 text-vsm text-gray-300  '>
        <label htmlFor='check1'>
          ease-[cubic-bezier(0.95,0.05,0.795,0.035)]{' '}
        </label>
        <button className='transition ease-[cubic-bezier(0.95,0.05,0.795,0.035)] hover:scale-125 duration-150  bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button A
        </button>
      </div>
    </div>
  );
}

export default TransitionTimingFunction;
