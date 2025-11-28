function TransitionProperty() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        transition-property
      </h2>
      <h2 className='flex w-1/2 flex-col items-center text-vsm'>
        The transition property in CSS is a shorthand property used to apply a
        smooth, animated effect when a CSS property value changes. Instead of a
        change occurring instantaneously, the transition property allows the
        change to happen gradually over a specified duration.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'transition' and 'transition-colors' to specify which
        properties should transition when they change
      </h2>
      <div className='w-1/4 outline-1 place-items-center outline-gray-400 bg-gray-800 h-20 rounded-[0.3em] flex flex-col justify-around '>
        <button className='bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 transition delay-75 duration-300 ease-in hover:-translate-y-0.5 hover:scale-105 hover:bg-fuchsia-700 '>
          Pay Now
        </button>
      </div>
      {/* Supporting reduced motion */}
      <h2 className='underline'>Supporting reduced motion</h2>
      <h2 className='text-vsm w-1/2'>
        For situations where the user has specified that they prefer reduced
        motion, you can conditionally apply animations and transitions using the
        'motion-safe' and 'motion-reduce' variants:
      </h2>
      <div className='w-1/4 outline-1 place-items-center outline-gray-400 bg-gray-800 h-20 rounded-[0.3em] flex flex-col justify-around '>
        <button className='bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 transition delay-75 duration-100 ease-in hover:-translate-y-0.5 hover:scale-105 hover:bg-fuchsia-700 motion-reduce:transition-none motion-reduce:hover:transform-none'>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default TransitionProperty;
