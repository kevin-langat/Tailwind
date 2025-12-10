import { Shield } from 'lucide-react';
import React from 'react';

function StrokeWidth() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        stroke-width
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Utilities for styling the stroke width of SVG elements.
      </h2>
      {/*Basic example*/}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        Use stroke-{'<number>'} utilities like stroke-1 and stroke-2 to set the
        stroke width of an SVG:
      </h2>
      <div
        className='flex text-gray-300 gap-6 *:even:-mt-5
       flex-col items-center bg-gray-800 justify-center rounded-[0.2em] py-4 w-1/3'
      >
        <h2 className='text-vsm'>stroke-width-1</h2>
        <Shield size={40} className=' stroke-1 stroke-green-500' />{' '}
        <h2 className='text-vsm'>stroke-width-2</h2>
        <Shield size={40} className=' stroke-2 stroke-green-500' />{' '}
      </div>
      {/*Using a custom value*/}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the stroke-{'[<value>] '}syntax to set the stroke width based on a
        completely custom value:
      </h2>
      <div
        className='flex text-gray-300 gap-6 *:even:-mt-5
       flex-col items-center bg-gray-800 justify-center rounded-[0.2em] py-4 w-1/3'
      >
        <h2 className='text-vsm'>stroke-width-2.6</h2>
        <Shield size={40} className=' stroke-[2.6] stroke-green-500' />{' '}
      </div>
    </div>
  );
}

export default StrokeWidth;
