function TransitionDuration() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        transition-duration
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        The transition-duration property is a fundamental part of CSS
        transitions that defines how long an animation takes to complete one
        full cycle (from its start state to its end state).
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like duration-150 and duration-700 to set the transition
        duration of an element in milliseconds:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-3 text-vsm text-gray-300  '>
        <label htmlFor='check1'>duration-150</label>
        <button className='transition hover:scale-125 duration-150  bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button A
        </button>
        <label htmlFor='check2'>duration-300</label>
        <button className='   transition duration-300 hover:scale-125 bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button B
        </button>
        <label htmlFor='check2'>duration-700</label>
        <button className=' transition duration-700 hover:scale-125 bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button C
        </button>
      </div>
      {/* Supporting reduced motion */}
      <h2 className='underline'>Supporting reduced motion</h2>
      <h2 className='text-vsm w-1/2'>
        For situations where the user has specified that they prefer reduced
        motion, you can conditionally apply animations and transitions using the
        motion-safe and motion-reduce variants:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-3 text-vsm text-gray-300  '>
        <label htmlFor='check1'>motion-reduce:duration-0</label>
        <button className='transition hover:scale-125 duration-500 motion-reduce:duration-0 ease-in-out bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button A
        </button>
      </div>
      {/* Basic example */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the duration-{'[<value>]'} syntax to set the transition duration
        based on a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-3 text-vsm text-gray-300  '>
        <label htmlFor='check1'>duration-[1s,3s,2s]</label>
        <button className='transition-[opacity,scale,translate] hover:opacity-80 hover:scale-125 hover:translate-x-10 duration-[1s,3s] ease-out bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button A
        </button>
      </div>
    </div>
  );
}

export default TransitionDuration;
