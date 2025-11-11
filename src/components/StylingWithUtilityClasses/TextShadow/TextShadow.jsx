function TextShadow() {
  return (
    <div className='w-full  mb-10 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        text-shadow
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the shadow of an text element
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'text-shadow-sm' and 'text-shadow-lg' to apply
        different sized text shadows to an element:
      </h2>

      <div className=' bg-gray-200 text-gray-900 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col  items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-sm text-gray-400 text-vsm'> text-shadow-2xs</h2>
          <h2 className=' text-shadow-2xs text-shadow-sky-500  text-base font-stretch-extra-condensed font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-sm text-gray-400 text-vsm'>text-shadow-xs</h2>
          <h2 className='  text-base text-shadow-xs text-shadow-sky-500 font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>text-shadow-sm</h2>
          <h2 className=' text-base text-shadow-sm text-shadow-sky-500  font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>text-shadow-md</h2>
          <h2 className=' text-base text-shadow-md text-shadow-sky-500   font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>text-shadow-lg</h2>
          <h2 className=' text-base text-shadow-lg text-shadow-sky-500   font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/* Changing the opacity */}
      <h2 className='underline'>Changing the opacity</h2>
      <h2 className='text-vsm w-1/2'>
        Use the opacity modifier to adjust the opacity of the text shadow:
      </h2>

      <div className=' bg-gray-200 text-gray-900 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col  items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-sm text-gray-400 text-vsm'> text-shadow-lg</h2>
          <h2 className=' text-shadow-lg text-shadow-sky-500  text-base font-stretch-extra-condensed font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-sm text-gray-400 text-vsm'>text-shadow-lg/75</h2>
          <h2 className='  text-base text-shadow-lg/75 text-shadow-sky-500 font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>text-shadow-lg/50</h2>
          <h2 className=' text-base text-shadow-lg/50 text-shadow-sky-500  font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/*Setting the shadow */}
      <h2 className='underline'>Setting the shadow color</h2>
      <h2 className='text-vsm w-1/2'>
        Use utilities like 'text-shadow-indigo-500' and
        'text-shadow-fuchsia-500/50' to change the color of a text shadow:
      </h2>

      <div className=' bg-gray-200 text-gray-900 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col  items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-sm text-gray-400 text-vsm'>
            {' '}
            text-shadow-fuchsia-500
          </h2>
          <h2 className=' text-shadow-lg text-shadow-fuchsia-500  text-base font-stretch-extra-condensed font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-sm text-gray-400 text-vsm'>
            text-shadow-cyan-500
          </h2>
          <h2 className='  text-base text-shadow-lg/75 text-shadow-cyan-500 font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/*Removing a text shadow */}
      <h2 className='underline'>Removing a text shadow</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'text-shadow-none' utility to remove an existing text-shadow
        from an element:
      </h2>

      <div className=' bg-gray-200 text-gray-900 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col  items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-sm text-gray-400 text-vsm'> text-shadow-none</h2>
          <h2 className=' text-shadow-none  text-base font-stretch-extra-condensed font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>
      {/*Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'text-shadow-[{'<value>'}] syntax to set the text shadow base
        don a completely custom value:
      </h2>

      <div className=' bg-gray-200 text-gray-900 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col  items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-sm text-gray-400 text-vsm'>
            {' '}
            text-shadow-[0_35px_35px_rgba(0_0_0_/_0.25)]
          </h2>
          <h2 className=' text-shadow-[0_5px_35px_rgba(0_0_0_/_0.25)] text-shadow-dark-blue  text-base font-stretch-extra-condensed font-sans'>
            The quick brown fox jumps over the lazy dog.
          </h2>
        </div>
      </div>

      {/*Customing Shadows*/}
      <h2 className='underline'>Customing Shadows</h2>
      <h2 className='text-vsm w-1/2'>
        Use the '--text-shadow-*' theme variables to customize the text shadow
        utilities in your project:
      </h2>
      <div className=' bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className='text-orange-600 text-vsm font-sans '>
            @theme{'{'} <br />
            {'--text-shadow-3xl: 0 35px 35px rgb(0, 0, 0 / 0.25)'} <br />
            {'}'}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextShadow;
