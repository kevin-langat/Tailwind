import imageOne from '../../../assets/Houses/img5.jpg';
import imageTwo from '../../../assets/Houses/img42.jpg';
import vid from '../../../assets/Videos/vidOne.mp4';
function AspectRatio() {
  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Aspect Ratio
      </h2>
      <h2 className=" font-extralight rounded-[0.4em] bg-sky-600/30 outline-1 outline-sky-500 text-vsm px-4">
        Basic Example
      </h2>
      <div className=" group flex flex-col items-center gap-1 w-full">
        <h2 className="w-1/2 text-vsm group-has-hover:text-blue-500 text-gray-800">
          {' '}
          Use `aspect-ratio` utilities like `apect-3/2` to give an element a
          specific aspect ratio:
        </h2>
        <div className=" resizable w-1/2 flex flex-col items-center justify-center bg-gray-800 rounded-[0.5em] max-w-150 max-h-60 ">
          <img src={imageOne} className=" aspect-5/3 object-cover " alt="" />
        </div>
      </div>
      <h2 className=" font-extralight rounded-[0.4em] bg-sky-600/30 outline-1 outline-sky-500 text-vsm px-4">
        Using a video aspect ratio
      </h2>
      <div className=" group flex flex-col items-center justify-center gap-1 w-full">
        <h2 className="w-1/2 text-vsm group-has-hover:text-green-500 text-gray-800">
          {' '}
          Use `aspect-video` utility to give a video element 16/9 aspect ratio.
        </h2>
        <div className=" resizableVid w-1/2 flex flex-col items-center justify-center bg-gray-800 rounded-[0.5em] max-w-150 max-h-60 ">
          <video
            loop
            controls
            muted
            src={vid}
            className=" aspect-video"
            alt=""
          />
        </div>
      </div>

      <h2 className=" font-extralight rounded-[0.4em] bg-sky-600/30 outline-1 outline-sky-500 text-vsm px-4">
        Using a custom value
      </h2>
      <div className=" group flex flex-col items-center gap-1 w-full">
        <h2 className="w-1/2 text-vsm group-has-hover:text-blue-500 text-gray-800">
          {' '}
          Use the `apect-[value]` syntax to set the aspect ratio on a completely
          custom value` for example `aspect-[calc(1+5)/3]` on this image
        </h2>
        <div className=" resizable w-1/2 flex flex-col items-center justify-center bg-gray-800 rounded-[0.5em] max-w-150 max-h-60 ">
          <img
            src={imageTwo}
            className=" aspect-[calc(1+5)/3] object-cover "
            alt=""
          />
        </div>
      </div>

      <h2 className=" font-extralight rounded-[0.4em] bg-sky-600/30 outline-1 outline-sky-500 text-vsm px-4">
        Responsive design
      </h2>
      <div className=" group flex flex-col items-center gap-1 w-full">
        <h2 className="w-1/2 text-vsm group-has-hover:text-indigo-500 text-gray-800">
          {' '}
          Prefix an `aspect-ratio` utility with a breakpoint variant like 'md:'
          to only apply utility at a breakpoint
        </h2>
        <div className="resizableVid w-1/2 flex flex-col items-center justify-center bg-gray-800 rounded-[0.5em] min-w-50 max-w-150 max-h-60 ">
          <img
            src={imageTwo}
            className=" md:aspect-square object-cover "
            alt=""
          />
        </div>
      </div>
      <h2 className=" font-extralight rounded-[0.4em] bg-sky-600/30 outline-1 outline-sky-500 text-vsm px-4">
        Customizing your theme
      </h2>
      <div className=" group flex flex-col items-center gap-1 w-full">
        <h2 className="w-1/2 text-vsm text-gray-800">
          {' '}
          Use the `--aspect-*` theme variable to customize the aspect ratio
          utilities for example: <br />
          @theme '<br /> --aspect-retro:4/3 <br /> '
        </h2>

        <div className="resizableVid w-1/2 flex flex-col items-center justify-center bg-gray-800 rounded-[0.5em] min-w-50 max-w-150 max-h-60 ">
          <img src={imageTwo} className="aspect-retro object-cover " alt="" />
        </div>
      </div>
    </div>
  );
}

export default AspectRatio;
