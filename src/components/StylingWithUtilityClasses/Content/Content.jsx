import { ArrowUp } from 'lucide-react';

function Content() {
  return (
    <div className='  w-full flex flex-col items-center justify-center gap-4 mb-4'>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        content
      </h2>
      <h2 className=' w-1/2 flex flex-col items-center text-vsm'>
        Utilities for controlling the content of the before and after
        pseudo-elements.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'content-{'[<value>]'}' syntax, along with the 'before' and
        'after' variants, to set the contents of the '::before' and '::after'
        pseudo-elements:
      </h2>

      <div className=' w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <div className='flex flex-col w-full justify-start gap-0 5'>
          <h2 className=' text-gray-400 text-vsm'>hyphens-none</h2>
          <h2 className='  font-sans'>
            The longest word in any of the major English language dictionaries
            is{' '}
            <a
              className={` underline-offset-4 text-sky-500 hover:text-sky-600 hover:underline after:content-['-->']`}
              href='https://google.com/pneumonoultramicroscopicsilicovolcanocona'
            >
              pneumonoultramicroscopicsilicovolcanocona
            </a>{' '}
            word a word that refers to a lung diseases contracted from the
            inhalation of very fine silica particles, specifically from a
            volcano.
          </h2>
        </div>
      </div>
      {/* Referencing an attribute value */}
      <h2 className='underline'>Referencing an attribute value</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'content-{'[attr(<name>)]'}' syntax to reference a value stored
        in attribute using 'attr()' CSS function:
      </h2>

      <div className=' w-1/5 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <h2
          before='Hello World '
          className=' before:content-[attr(before)] text-gray-400 text-vsm'
        >
          !
        </h2>
      </div>
      {/*Using spaces and underscores */}
      <h2 className='underline'>Using spaces and underscores</h2>
      <h2 className='w-1/2 text-vsm'>
        Since the whitespace denotes the end of a class in HTML, replace any
        spaces in an arbitrary value with an underscore:
      </h2>

      <div className=' w-1/5 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <h2 className=' before:content-["Hello_World_"] text-gray-400 text-vsm'>
          !
        </h2>
      </div>

      <h2 className='w-1/2 text-vsm'>
        If you need to include an actual underscore, you can do this by escaping
        it with a backslash:
      </h2>

      <div className=' w-1/5 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3'>
        <h2 className=' before:content-["Hello\_World"] text-gray-400 text-vsm'>
          !
        </h2>
      </div>
    </div>
  );
}

export default Content;
