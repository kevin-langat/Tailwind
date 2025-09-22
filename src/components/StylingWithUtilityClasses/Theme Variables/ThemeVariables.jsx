import { useEffect } from 'react';

function ThemeVariables() {
  useEffect(() => {
    console.log(getComputedStyle(document.documentElement));
  }, []);
  return (
    <div className=" w-full mb-5 flex flex-col items-center justify-center gap-8">
      <div className="  flex flex-col w-full items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Creating a custom color with theme variables
        </h2>
        <div className=" w-1/2 flex flex-row items-center justify-center bg-gray-800 py-2 px-3 outline-2 outline-mint-500 rounded-[0.4em]">
          <h2 className=" text-mint-500 selection:text-black selection:bg-mint-500 rounded-full">
            This is a new color(mint) added through theme variables
          </h2>
        </div>
      </div>
      <div className=" w-1/2 flex flex-col items-center justify-center bg-gray-800 py-2 px-3 border-l-4 border-blue-500  rounded-[0.4em]">
        <h2 className="text-gray-300 ">Relationships to utility classes</h2>
        <h2 className="text-sm text-gray-100/70 font-popins">
          Some utility classes like flex and other are static, but many others
          are driven by theme variablesfro example theme variables defined in
          the '--font-*' namespace determine all the font family utilities that
          exist in the project. For example in this very text we have used a
          custom font
        </h2>
      </div>
      <div className=" group cursor-pointer alg:bg-sky-600/30 w-1/2 flex flex-col items-center justify-center bg-gray-950 py-2 px-3 border-l-4 border-green-500 rounded-[0.4em] alg:outline-sky-500 outline-1 ">
        <h2 className="text-gray-300 alg:text-gray-950 ">
          Relationships to variants
        </h2>
        <h2 className=" not-alg:group-hover:text-gray-300 text-sm text-gray-100/70 font-popins alg:text-gray-900 alg:group-has-hover:text-orange-500 ">
          Some theme variables are used to define variants rather than utilities
          e.g. '--breakpoint-*' namespace to determine which responsive variants
          exists in your project. For example this very container will change
          background to sky-500/30 at a custom breakpoint defined under theme
          variables
        </h2>
      </div>
      <div className="  flex flex-col w-full items-center gap-2">
        <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
          Customizing your theme
        </h2>
        <h2 className=" w-1/2 text-sm bg-gray-800 rounded-[0.4em] p-4  text-gray-400 anima">
          Overriding you default theme: override the default theme by redefining
          it within '@theme'.For example '--breakpoint-sm:30rem;'. To completely
          override the entire namespace set the entire namespace to 'initial'
          using asterisk e.g. '--color-*:intial;' To completely get rid of the
          entire theme use the asterisk and set it to initial e.g.
          '*:inital'.You can also define animations in the ThemeVariables
        </h2>
      </div>
    </div>
  );
}

export default ThemeVariables;
