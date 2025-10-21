import { useContext } from 'react';
import { globalState } from '../../../Global/GlobalContext';

function VerticalAlign() {
  const { moveToNextTopic } = useContext(globalState);
  return (
    <div className='  w-full flex flex-col items-center justify-center gap-4 mb-4'>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        vertical-align
      </h2>
      <h2 className=' w-1/2 flex flex-col items-center text-vsm'>
        Utilities for controlling the vertical alignment of an inline or
        table-cell box.
      </h2>
      {/* Aligning to the baseline*/}
      <h2 className='underline'>Aligning to the baseline</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'indent-{'<number>'} utilities like 'indent-2' and 'indent-8' to
        set the amount of empty space (indentation) that's shown before text in
        a block:
      </h2>

      <div className=' pl-2 w-1/3 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]'>
        <h2 className=' inline-block text-vsm rounded-[0.4em] bg-gray-700 text-white align-middle'>
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
      {/* Aligning to the top*/}
      <h2 className='underline'>Aligning to the top</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'align-top' utility to align the top of an element and its
        descendants with the top of the entire line:
      </h2>

      <div className=' pl-2 w-1/3 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]'>
        <h2 className=' inline-block text-vsm rounded-[0.4em] bg-gray-700 text-white align-top'>
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
      {/* Aligning to the middle*/}
      <h2 className='underline'>Aligning to the middle</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'align-middle' utility to align the middle with the baseline
        plus half the x-height of the parent:
      </h2>

      <div className=' pl-2 w-1/3 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]'>
        <h2 className=' inline-block text-vsm rounded-[0.4em] bg-gray-700 text-white align-middle'>
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
      {/* Aligning to the top*/}
      <h2 className='underline'>Aligning to the bottom</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'align-bottom' utility to align the bottom of an element and its
        descendants with the bottom of the entire line:
      </h2>

      <div className=' pl-2 w-1/3 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]'>
        <h2 className=' inline-block text-vsm rounded-[0.4em] bg-gray-700 text-white align-bottom'>
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
      {/* Aligning to the parent top*/}
      <h2 className='underline'>Aligning to the parent top</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'align-text-top' utility to align the top of an element with the
        top of the parent element's font:
      </h2>

      <div className=' pl-2 w-1/3 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]'>
        <h2 className=' inline-block text-vsm rounded-[0.4em] bg-gray-700 text-white align-text-top'>
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
      {/* Aligning to the parent bottom*/}
      <h2 className='underline'>Aligning to the parent bottom</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'align-text-bottom' utility to align the bottom of an element
        with the bottom of the parent element's font:
      </h2>

      <div className=' pl-2 w-1/3 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]'>
        <h2 className=' inline-block text-vsm rounded-[0.4em] bg-gray-700 text-white align-text-bottom'>
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
      {/* Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='w-1/2 text-vsm'>
        Use the 'align-['{'<value>'}']' syntax to set the vertical alignment
        based on a completely custom value:
      </h2>

      <div className=' pl-2 w-1/3 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]'>
        <h2 className=' inline-block text-vsm rounded-[0.4em] bg-gray-700 text-white align-[10px]'>
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>
      <button
        onClick={moveToNextTopic}
        className='bg-gray-800 px-4 rounded-full text-gray-300'
      >
        Next
      </button>
    </div>
  );
}

export default VerticalAlign;
