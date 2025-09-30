import imageOne from '../../../assets/faces/uifaces-human-image (37).jpg';
import imageTwo from '../../../assets/faces/uifaces-human-image (41).jpg';
import imageThree from '../../../assets/faces/uifaces-human-image (42).jpg';
import imageFour from '../../../assets/faces/uifaces-human-image (43).jpg';
import imageFive from '../../../assets/faces/uifaces-human-image (44).jpg';
function Overflow() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        overflow
      </h2>
      <h2 className=" text-vsm">
        Utilities for controlling how a element handle content that is too large
        for the container
      </h2>

      <div className=" grid grid-cols-2 place-items-center flex-col gap-1.5 py-2  bg-gray-800 w-3/4 sm:w-1/2 *:even:text-indigo-400/70 *:text-vsm *:odd:text-gray-300 *:nth-1:underline *:nth-1:text-orange-400 *:nth-2:text-orange-400 *:nth-2:underline rounded-[0.4em]">
        <h2>Class</h2>
        <h2>Styles</h2>
        <h2>Overflow-auto</h2>
        <h2>overflow:auto;</h2>
        <h2>overflow-hidden</h2>
        <h2>overflow:hidden;</h2>
        <h2>overflow-clip</h2>
        <h2>overflow:clip;</h2>
        <h2>oveflow-visible</h2>
        <h2>overflow:visible;</h2>
        <h2>overflow-scroll</h2>
        <h2>overflow:scroll;</h2>
        <h2>overflow-x-auto</h2>
        <h2>overflow-x:auto;</h2>
        <h2>object-y-auto</h2>
        <h2>overflow-y:auto;</h2>
        <h2>overflow-x-hidden</h2>
        <h2>overflow-x:hidden;</h2>
        <h2>overflow-y-hidden</h2>
        <h2>overflow-y:hidden;</h2>
        <h2>overflow-x-clip</h2>
        <h2>overflow-x:clip;</h2>
        <h2>overflow-y-clip</h2>
        <h2>overflow-y:clip;</h2>
        <h2>overflow-x-visible</h2>
        <h2>overflow-x:visible;</h2>
        <h2>overflow-y-scroll</h2>
        <h2>overflow-y:scroll;</h2>
        <h2>overflow-x-scroll</h2>
        <h2>overflow-x:scroll;</h2>
        <h2>object-bottom-left</h2>
        <h2>object-position:bottom left;</h2>
        <h2>object-bottom</h2>
        <h2>object-position:bottom;</h2>
      </div>
      <div className=" gap-2 flex flex-col w-1/2 items-center justify-center ">
        <h2 className="underline">
          Showing content that overflow using 'oveflow-visible'
        </h2>
        <div className=" rounded-[0.4em] flex flex-row gap-5 w-60 overflow-visible bg-gray-900 items-center justify-center">
          <img
            src={imageOne}
            alt=""
            className=" w-16 -ml-30 h-16 rounded-full outline-1 outline-red-500"
          />
          <div className=" *:first:font-bold">
            <h2 className=" text-gray-300">Kevin Langat</h2>
            <h2 className=" text-gray-400 text-vsm">Web Developer</h2>
          </div>
        </div>
      </div>
      <div className=" gap-2 flex flex-col w-1/2 items-center justify-center ">
        <h2 className="underline">
          Hidding the content that overflows using 'oveflow-hidden'
        </h2>
        <div className=" rounded-[0.4em] flex flex-row gap-5 w-60 overflow-hidden bg-gray-900 items-center justify-center">
          <img
            src={imageOne}
            alt=""
            className=" w-16 -ml-30 h-16 rounded-full outline-1 outline-red-500"
          />
          <div className=" *:first:font-bold">
            <h2 className=" text-gray-300">Kevin Langat</h2>
            <h2 className=" text-gray-400 text-vsm">Web Developer</h2>
          </div>
        </div>
      </div>
      <div className=" gap-2 flex flex-col w-1/2 items-center justify-center ">
        <h2 className="underline">Scrolling if needed using 'oveflow-auto'</h2>
        <div className="w-1/2 py-3 px-1 rounded-[0.4em] flex items-center justify-center gap-1 flex-col overflow-scroll h-50 bg-gray-800">
          <div className=" pt-30 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-16 h-16 rounded-full outline-1 outline-red-500"
            />
            <div className=" *:first:font-bold">
              <h2 className=" text-gray-300">Kevin Langat</h2>
              <h2 className=" text-gray-400 text-vsm">Web Developer</h2>
            </div>
          </div>
          <div className=" py-1 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center">
            <img
              src={imageTwo}
              alt=""
              className=" w-16 h-16 rounded-full outline-1 outline-red-500"
            />
            <div className=" *:first:font-bold">
              <h2 className=" text-gray-300">Tom Vicetti</h2>
              <h2 className=" text-gray-400 text-vsm">Driver</h2>
            </div>
          </div>

          <div className=" py-1 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center">
            <img
              src={imageFour}
              alt=""
              className=" w-16 h-16 rounded-full outline-1 outline-red-500"
            />
            <div className=" *:first:font-bold">
              <h2 className=" text-gray-300">Nusra Hakim</h2>
              <h2 className=" text-gray-400 text-vsm">Chef</h2>
            </div>
          </div>
          <div className=" py-1 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center">
            <img
              src={imageFive}
              alt=""
              className=" w-16 h-16 rounded-full outline-1 outline-red-500"
            />
            <div className=" *:first:font-bold">
              <h2 className=" text-gray-300">Madeline Monet</h2>
              <h2 className=" text-gray-400 text-vsm">Actress</h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-2 flex flex-col w-1/2 items-center justify-center ">
        <h2 className="underline">
          Scrolling horizontally if needed using 'oveflow-x-auto'
        </h2>
        <div className="w-1/2 overflow-x-auto py-3 px-1 rounded-[0.4em] flex items-center justify-center gap-1 flex-row bg-gray-800">
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
        </div>
      </div>
      {/* scrolling horizontall */}
      <div className=" gap-2 flex flex-col w-1/2 items-center justify-center ">
        <h2 className="underline">
          Scrolling if needed using 'oveflow-x-auto'
        </h2>
        <div className="w-1/2 py-3 px-1 rounded-[0.4em] flex items-center justify-center gap-1 flex-col overflow-y-auto h-50 bg-gray-800">
          <div className=" pt-30 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-16 h-16 rounded-full outline-1 outline-red-500"
            />
            <div className=" *:first:font-bold">
              <h2 className=" text-gray-300">Kevin Langat</h2>
              <h2 className=" text-gray-400 text-vsm">Web Developer</h2>
            </div>
          </div>
          <div className=" py-1 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center">
            <img
              src={imageTwo}
              alt=""
              className=" w-16 h-16 rounded-full outline-1 outline-red-500"
            />
            <div className=" *:first:font-bold">
              <h2 className=" text-gray-300">Tom Vicetti</h2>
              <h2 className=" text-gray-400 text-vsm">Driver</h2>
            </div>
          </div>

          <div className=" py-1 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center">
            <img
              src={imageFour}
              alt=""
              className=" w-16 h-16 rounded-full outline-1 outline-red-500"
            />
            <div className=" *:first:font-bold">
              <h2 className=" text-gray-300">Nusra Hakim</h2>
              <h2 className=" text-gray-400 text-vsm">Chef</h2>
            </div>
          </div>
          <div className=" py-1 px-1 rounded-[0.4em] flex flex-row gap-5 w-60 bg-gray-900 items-center justify-center">
            <img
              src={imageFive}
              alt=""
              className=" w-16 h-16 rounded-full outline-1 outline-red-500"
            />
            <div className=" *:first:font-bold">
              <h2 className=" text-gray-300">Madeline Monet</h2>
              <h2 className=" text-gray-400 text-vsm">Actress</h2>
            </div>
          </div>
        </div>
      </div>

      {/* overflow-x-scroll */}

      <div className=" gap-2 flex flex-col w-1/2 items-center justify-center ">
        <h2 className="underline">
          Scrolling horizontally always using 'overflow-x-scroll'
        </h2>
        <div className="w-1/2 overflow-x-scroll py-3 px-1 rounded-[0.4em] flex items-center justify-center gap-1 flex-row bg-gray-800">
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
          <div className=" px-1 w-24 rounded-[0.4em] flex flex-col gap-0.5 bg-gray-900 items-center justify-center">
            <img
              src={imageOne}
              alt=""
              className=" w-full h-16 rounded-full outline-1 outline-red-500"
            />
            <h2 className=" text-gray-300">Kevin</h2>
          </div>
        </div>
      </div>

      {/* scroll in all directions */}
      <div className=" gap-2 flex flex-col w-1/2 items-center justify-center ">
        <h2 className="underline">
          Scrolling in all directions using 'overflow-scroll'
        </h2>
        <div className="w-40 p-3 h-40 overflow-scroll py-3 px-1 flex items-center justify-center gap-1 flex-row bg-gray-800">
          <h2 className=" w-120  text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil
            nam dolorem, sed, vel velit tenetur, id dolores delectus architeus
            consectetonsectetur consequuntur saepe accusamus nesciunt doloremque
            dolorem culpa eligendi fugit repudiandae suscipit, ab odit ipsa
            pariatur. Quia laudantium voluptas iusto. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sequi nihil nam dolorem, sed, vel
            velit tenetur, id dolores delectus architeus consectetonsectetur
            consequuntur saepe accusamus nesciunt doloremque dolorem culpa
            eligendi fugit repudiandae suscipit, ab odit ipsa pariatur. Quia
            laudantium voluptas iusto. nam dolorem, sed, vel velit tenetur, id
            dolores delectus architeus consectetonsectetur consequuntur saepe
            accusamus nesciunt doloremque dolorem culpa eligendi fugit
            repudiandae suscipit, ab odit ipsa pariatur. Quia laudantium
            voluptas iusto. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi nihil nam dolorem, sed, vel velit tenetur, id dolores
            delectus architeus consectetonsectetur consequuntur saepe accusamus
            nesciunt doloremque dolorem culpa eligendi fugit repudiandae
            suscipit, ab odit ipsa pariatur. Quia laudantium voluptas iusto.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Overflow;
