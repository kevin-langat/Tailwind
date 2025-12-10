import imageOne from '../../../assets/faces/uifaces-human-image (38).jpg';
import imageTwo from '../../../assets/faces/uifaces-human-image (34).jpg';
import imageThree from '../../../assets/faces/uifaces-human-image (40).jpg';
import imageFour from '../../../assets/faces/uifaces-human-image (42).jpg';
import imageFive from '../../../assets/faces/uifaces-human-image (34).jpg';

function WillChange() {
  return (
    <div className='w-full   mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        will-change
      </h2>
      <h2 className='flex w-1/2 text-justify text-vsm'>
        Utilities for optimizing upcoming animations of elements that are
        expected to change.
      </h2>
      {/*Optimizing with will change*/}
      <h2 className='underline'>Optimizing with will change</h2>
      <h2 className='text-vsm w-1/2'>
        Use the will-change-scroll, will-change-contents and
        will-change-transform utilities to optimize an element that's expected
        to change in the near future by instructing the browser to prepare the
        necessary animation before it actually begins:
      </h2>
      <div className=' gap-2 flex flex-col w-1/2 items-center justify-center '>
        <div className='w-1/2 py-3 px-1 rounded-[0.4em] flex items-center justify-center gap-1 flex-col overflow-y-auto will-change-scroll h-50 bg-gray-800'>
          <div className=' pt-30 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center'>
            <img
              src={imageOne}
              alt=''
              className=' w-16 h-16 rounded-full outline-1 outline-red-500'
            />
            <div className=' *:first:font-bold'>
              <h2 className=' text-gray-300'>Kevin Langat</h2>
              <h2 className=' text-gray-400 text-vsm'>Web Developer</h2>
            </div>
          </div>
          <div className=' py-1 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center'>
            <img
              src={imageTwo}
              alt=''
              className=' w-16 h-16 rounded-full outline-1 outline-red-500'
            />
            <div className=' *:first:font-bold'>
              <h2 className=' text-gray-300'>Tom Vicetti</h2>
              <h2 className=' text-gray-400 text-vsm'>Driver</h2>
            </div>
          </div>

          <div className=' py-1 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center'>
            <img
              src={imageFour}
              alt=''
              className=' w-16 h-16 rounded-full outline-1 outline-red-500'
            />
            <div className=' *:first:font-bold'>
              <h2 className=' text-gray-300'>Nusra Hakim</h2>
              <h2 className=' text-gray-400 text-vsm'>Chef</h2>
            </div>
          </div>
          <div className=' py-1 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center'>
            <img
              src={imageFive}
              alt=''
              className=' w-16 h-16 rounded-full outline-1 outline-red-500'
            />
            <div className=' *:first:font-bold'>
              <h2 className=' text-gray-300'>Madeline Monet</h2>
              <h2 className=' text-gray-400 text-vsm'>Actress</h2>
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-vsm w-1/2 font-bold text-justify'>
        It's recommended that you apply these utilities just before an element
        changes, and then remove it shortly after it finishes using
        will-change-auto. The will-change property is intended to be used as a
        last resort when dealing with known performance problems. Avoid using
        these utilities too much, or simply in anticipation of performance
        issues, as it could actually cause the page to be less performant.
      </h2>
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2 select-all font-bold text-justify'>
        Use the will-change-{'[<value>]'} syntax to set the will-change property
        based on a completely custom value. For example 'will-change-[top,left]'
      </h2>
    </div>
  );
}

export default WillChange;
