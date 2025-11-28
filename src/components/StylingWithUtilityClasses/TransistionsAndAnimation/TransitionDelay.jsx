function TransitionDelay() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        transition-delay
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        The transition-delay property is a CSS property that defines how long to
        wait before a transition effect actually starts after the triggering
        event has occurred (e.g., a hover event or a state change via
        JavaScript).
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like delay-150 and delay-700 to set the transition delay
        of an element in milliseconds:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-3 text-vsm text-gray-300  '>
        <label htmlFor='check1'>delay-150</label>
        <button className='transition hover:scale-125 delay-150 duration-500  bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button A
        </button>
        <label htmlFor='check2'>delay-300</label>
        <button className='   transition delay-500 duration-300 hover:scale-125 bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button B
        </button>
        <label htmlFor='check2'>delay-700</label>
        <button className=' transition delay-700 duration-500 hover:scale-125 bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button C
        </button>
      </div>
      {/* Supporting reduced motion */}
      <h2 className='underline'>Supporting reduced motion</h2>
      <h2 className='text-vsm w-1/2'>
        For situations where the user has specified that they prefer reduced
        motion, you can conditionally apply animations and transitions using the
        'motion-safe' and 'motion-reduce' variants:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-3 text-vsm text-gray-300  '>
        <label htmlFor='check1'>motion-reduce:delay-0</label>
        <button className='transition hover:scale-125 delay-200 motion-reduce:delay-0 duration-500  bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button A
        </button>
      </div>
      {/* Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the delay-{'[<value>]'} syntax to set the transition delay based on
        a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 py-4  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-3 text-vsm text-gray-300  '>
        <label htmlFor='check1'>delay-[500ms,2s]</label>
        <button className='transition-[scale,opacity] delay-[500ms,2s] hover:scale-125  hover:opacity-65 duration-500  bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          Button A
        </button>
      </div>
    </div>
  );
}

export default TransitionDelay;
