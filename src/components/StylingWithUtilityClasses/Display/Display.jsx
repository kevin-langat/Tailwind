import { Settings } from 'lucide-react';
import imageOne from '../../../assets/faces/uifaces-popular-image (1).jpg';

function Display() {
  return (
    <div className=" w-full flex flex-col items-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        display
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling the display box type of an element.
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>inline</h2>
        <h2>diplay:inline;</h2>
        <h2>block</h2>
        <h2>diplay:block;</h2>
        <h2>inline-block</h2>
        <h2>display:inline-block;</h2>
        <h2>flow-root</h2>
        <h2>display:flow-root;</h2>
        <h2>flex</h2>
        <h2>display:flex;</h2>
        <h2>inline-flex</h2>
        <h2>display:inline-flex;</h2>
        <h2>grid</h2>
        <h2>display:grid;</h2>
        <h2>inline-grid</h2>
        <h2>display:inline-grid;</h2>
      </div>

      <div className="flex flex-col  gap-6 items-center w-1/2 *:nth-2:text-vsm ">
        <h2 className="text-gray-600 underline">1. block and inline</h2>
        <h2>
          Use 'inline', 'inline-block' and 'block' utilities to control the flow
          of text and elements
        </h2>
        <h2 className="resizableVid p-3  text-gray-300 text-vsm w-1/2 rounded-[0.4em] bg-gray-800 min-w-30 max-w-3/4">
          When controlling the flow of text, using the css property
          <strong className="bg-sky-400/30 inline  px-0.5 font-extralight mx-0.5 rounded-[0.4em]">
            'display:inline'
          </strong>{' '}
          will cause the text-inside the element to wrap normally
        </h2>

        <div className=" resizableVid w-full bg-gray-800 text-gray-300 rounded-[0.4em] min-w-30 flex flex-col items-center max-w-3/4 p-3 *:text-vsm">
          <h2>
            While using the property{' '}
            <strong className="bg-sky-400/30 inline-block px-0.5 font-extralight mx-0.5 rounded-[0.4em]">
              'display:inline-block'
            </strong>{' '}
            will wrap the element to prevent the text inside from extending
            beyond the parent element
          </h2>
        </div>

        <h2 className="resizableVid p-3 text-gray-300 text-vsm w-1/2 rounded-[0.4em] bg-gray-800 min-w-30 max-w-3/4">
          Lastly using the property
          <strong className="bg-sky-400/30 px-0.5 w-25 font-extralight mx-0.5 rounded-[0.4em] block">
            'display:block'
          </strong>{' '}
          will put the element on its own line and fills its parent
        </h2>
      </div>

      {/* flow root */}
      <div className=" flex flex-col items-center w-full justify-center gap-1.5">
        <h2 className="underline">2. flow root</h2>
        <h2 className="text-vsm w-1/2">
          Use the 'flow root' utility to create a block level element with its
          block-formatting context. Use it to prevent margin collapse.
        </h2>

        <div className="w-1/2 p-2 rounded-[0.4em] bg-gray-900 text-gray-300">
          <div className=" flow-root bg-gray-800 rounded-[0.4em]">
            <div className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              ipsam! Porro sit quidem officia incidunt?Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Similique explicabo accusamus,
              officia totam molestias sed.
            </div>
          </div>

          <div className=" flow-root  bg-gray-700 rounded-[0.4em]">
            <div className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              minus adipisci necessitatibus illum quidem eos laborum ducimus
              molestias, debitis eius est natus aliquam recusandae obcaecati.
              Nostrum, vel quis. Maiores, veniam!
            </div>
          </div>
        </div>
      </div>

      {/* flex */}
      <div className="flex flex-col items-center place-self-center w-full ">
        <h2 className="underline">3. flex</h2>
        <h2 className="text-vsm">
          Use 'flex' utility to create a block-level container
        </h2>
        <div className=" px-6 py-2 flex items-center gap-2 bg-gray-800 text-gray-300 rounded-[0.4em]">
          <img src={imageOne} className=" w-12 h-12 rounded-full" alt="" />
          <div className=" flex flex-col gap-0.5 *:last:text-vsm *:first:text-indigo-400">
            <h2>Iryana Zarutska</h2>
            <h2>Kyiv, Ukraine</h2>
          </div>
        </div>
      </div>

      {/* inline-flex */}
      <div className="flex flex-col items-center place-self-center w-full ">
        <h2 className=" underline">4. inline-flex</h2>
        <h2 className="text-vsm">
          Use the 'inline-flex' utility to create an inline flex container that
          flows with the text
        </h2>
        <p className="w-1/2 p-2 bg-gray-800 **:text-gray-300 rounded-[0.4em]  text-gray-300">
          Today i spent most of the day researching way to take advantage of the
          fact that bottles can be returned for 10 cents in Kericho, but only 5
          cents here in Nairobi.
          <span className=" inline-flex items-baseline mr-1">
            <img
              src={imageOne}
              alt=""
              className="mx-1 self-center rounded-full w-6 h6"
            />
            <span>Iryna </span>
          </span>
          keeps telling me that there is no way to make it work, that she has
          run numbers on every possible approach.
        </p>
      </div>

      {/* grid */}
      <div className="flex gap-1 flex-col items-center place-self-center w-full ">
        <h2 className="underline">5. grid</h2>
        <h2 className="text-vsm">
          Use the 'grid' utility to create grid container:
        </h2>
        <div className="w-11/12 md:w-1/2 rounded-[0.4em] py-3 px-2 bg-gray-900 grid grid-cols-3  gap-2">
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            01
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            02
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            03
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            04
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            05
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            06
          </span>
        </div>
      </div>

      {/* inline-grid */}

      <div className=" flex gap-1 flex-col items-center place-self-center w-full">
        {' '}
        <h2 className="underline">6. inline-grid</h2>
        <h2 className="text-vsm">
          Use the 'inline-grid' utility to create an inline grid container
        </h2>
        <div className=" w-3/5">
          <div className=" inline-grid md:w-1/2 rounded-[0.4em] py-3 px-2 bg-gray-900  grid-cols-3  gap-2">
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              01
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              02
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              03
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              04
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              05
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              06
            </span>
          </div>
          <div className="w-1/2 inline-grid rounded-[0.4em] py-3 px-2 bg-gray-900  grid-cols-3  gap-2">
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              01
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              02
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              03
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              04
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              05
            </span>
            <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
              06
            </span>
          </div>
        </div>
      </div>

      {/* contents */}
      <h2 className="underline">7. contents</h2>
      <h2 className="text-vsm w-1/2">
        Use the 'contents' utility to create a phantom container whose children
        act like direct children of th parent{' '}
      </h2>
      <div className=" *:w-16 flex *:ml-1 **:ml-1  **:w-16">
        <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
          01
        </span>
        <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
          02
        </span>
        <div className="contents">
          <span className="text-gray-800 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-sky-400/20 flex flex-row items-center justify-center">
            03
          </span>
          <span className="text-gray-800 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-sky-400/20 flex flex-row items-center justify-center">
            04
          </span>
        </div>
        <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center  justify-center">
          05
        </span>
        <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
          06
        </span>
      </div>

      {/* Table */}
      <div className=" flex flex-col items-center gap-1 w-full">
        <h2 className="underline">8. table</h2>
        <h2 className="text-vsm w-1/2">
          Use the 'table', 'table-row', 'table-cell', 'table-caption',
          'table-column','table-column-group','table-header-group',
          'table-row-group' and 'table-footer-group' utilities to create
          elements that behave like their respective elements
        </h2>
        <div className="table w-3/4 bg-gray-800 rounded-[0.4em] pl-2">
          <div className="table-header-group">
            <div className="table-row">
              <h2 className="table-cell  text-gray-300">No</h2>
              <h2 className="table-cell  text-gray-300">Song</h2>
              <h2 className="table-cell  text-gray-300">Artist</h2>
              <h2 className="table-cell  text-gray-300">Year</h2>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row *:text-gray-400">
              <h2 className="table-cell">1</h2>
              <h2 className="table-cell">Kidagaa Kimemwozea</h2>
              <h2 className="table-cell">Ken Walibora</h2>
              <h2 className="table-cell">2014</h2>
            </div>
            <div className="table-row *:text-gray-400">
              <h2 className="table-cell">2</h2>
              <h2 className="table-cell">Chozi La Heri</h2>
              <h2 className="table-cell">Asumpta K. Matei</h2>
              <h2 className="table-cell">2018</h2>
            </div>
            <div className="table-row *:text-gray-400">
              <h2 className="table-cell">3</h2>
              <h2 className="table-cell">The River Between</h2>
              <h2 className="table-cell">Uknown</h2>
              <h2 className="table-cell">2016</h2>
            </div>
          </div>
        </div>

        <h2 className="text-vsm">example two of a table:</h2>

        <div className="table w-1/2 pl-10 bg-gray-800 rounded-[0.4em] gap-0.5 text-gray-300">
          <div className="table-header-group">
            <div className="table-row">
              <h2 className="table-cell">No</h2>
              <h2 className="table-cell">Country</h2>
              <h2 className="table-cell">Name</h2>
            </div>
          </div>

          <div className="table-row-group">
            <div className="table-row">
              <h2 className="table-cell">1 </h2>
              <h2 className="table-cell">USA</h2>
              <h2 className="table-cell">Anita Monet</h2>
            </div>
            <div className="table-row">
              <h2 className="table-cell">2 </h2>
              <h2 className="table-cell">Kenya</h2>
              <h2 className="table-cell">Diana Muthoni</h2>
            </div>
            <div className="table-row">
              <h2 className="table-cell">3 </h2>
              <h2 className="table-cell">South Africa</h2>
              <h2 className="table-cell">Elon Musk </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden */}

      <div className=" flex flex-col items-center w-full gap-3">
        <h2 className=" text-gray-800 underline">9. hidden</h2>
        <h2 className="text-gray-700 text-vsm">
          Use 'hidden' to remove an element from a document: <br />
          e.g. 01 and 03 are hidden here:
        </h2>

        <div className="flex flex-row items-center *:w-16 justify-center gap-2 rounded-[0.4em] w-3/5">
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800  flex-row items-center  justify-center hidden">
            01
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            02
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800  flex-row items-center  justify-center hidden">
            03
          </span>
          <span className="text-gray-300 font-bold text-2xl outline-1 outline-gray-500 rounded-[0.3em] bg-gray-800 flex flex-row items-center justify-center">
            04
          </span>
        </div>
      </div>

      {/* sr-only */}

      <div className=" flex flex-col items-center w-1/2 gap-3">
        <h2 className=" text-gray-800 underline">10. sr-only</h2>
        <h2 className="text-gray-700 text-vsm">
          Use 'sr-only' to hide an element visually without hiding it from the
          screen readers. And use the 'not-sr-only' to undo the 'sr-only'
        </h2>
        <a
          href="#"
          className=" sr-only max-md:not-sr-only bg-sky-400/30 px-5 py-0.5 rounded-full flex flex-row items-center justify-center gap-3 outline-1 outline-gray-400"
        >
          {' '}
          <Settings className=" w-5 h-5" />
          <span className=" text-vsm">Settings</span>
        </a>
      </div>
    </div>
  );
}

export default Display;
