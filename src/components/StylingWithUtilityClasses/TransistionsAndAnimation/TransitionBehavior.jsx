function TransitionBehavior() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        transition-behavior
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities to control the behavior of CSS transitions.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use the transition-discrete utility to start transitions when changing
        properties with a discrete set of values, such as elements that change
        from hidden to block:
      </h2>
      <div className='w-1/4 outline-1 place-items-center outline-gray-400 bg-gray-800 h-35 rounded-[0.3em] flex flex-col justify-center gap-4 *:even:-mt-4  '>
        <div className='peer/one flex gap-2 text-gray-300 text-vsm'>
          <input id='check1' type='checkbox' />
          <label htmlFor='check1'>transition-normal</label>
        </div>

        <button className=' peer-has-checked/one:opacity-0 opacity-100 transition-normal bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          I Hide
        </button>
        <div className='peer/two flex gap-2 text-gray-300 text-vsm'>
          <input id='check2' type='checkbox' />
          <label htmlFor='check2'>transition-discrete</label>
        </div>

        <button className=' peer-has-checked/two:opacity-0 opacity-100 transition-all bg-fuchsia-600 px-3 rounded-[0.3em] drop-shadow-lg drop-shadow-gray-700 py-1 text-gray-300 '>
          I Fade
        </button>
      </div>
    </div>
  );
}

export default TransitionBehavior;
