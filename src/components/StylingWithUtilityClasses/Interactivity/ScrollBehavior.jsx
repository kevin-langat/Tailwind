function ScrollBehavior() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        scroll-behavior
      </h2>
      <h2 className='flex w-1/3 text-justify text-vsm'>
        Utilities for controlling the scroll behavior of an element.
      </h2>
      {/*Use smooth scrolling*/}
      <h2 className='underline'>Use smooth scrolling</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'scroll-smooth' utility to enable smooth scrolling within an
        element:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center items-center gap-5  text-gray-300 py-4 '>
        <div className='flex w-3/4 gap-6 *:even:-mt-5 flex-col justify-around items-center font-sans text-orange-500 '>
          {'<html class="scroll-smooth">'} <br />
          {'      <//code here>'} <br />
          {'</html>'}
        </div>
      </div>
      <h2 className='text-vsm'>
        Setting the scroll-behavior only affects scroll events that are
        triggered by the browser.
      </h2>
      {/*Using normal scrolling*/}
      <h2 className='underline'>Using normal scrolling</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'scroll-auto' utility to revert to default browser behavior for
        scrolling:
      </h2>
      <div className='w-1/2 outline-1 px-2  place-items-center outline-gray-400 bg-gray-800 rounded-[0.3em] flex flex-col justify-center items-center gap-5  text-gray-300 py-4 '>
        <div className='flex w-3/4 gap-6 *:even:-mt-5 flex-col justify-around items-center font-sans text-orange-500 '>
          {'<html class="scroll-smooth md:scroll-auto">'} <br />
          {'      <//code here>'} <br />
          {'</html>'}
        </div>
      </div>
    </div>
  );
}

export default ScrollBehavior;
