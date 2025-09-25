function FunctionsAndDirectives() {
  return (
    <div className=" w-full flex flex-col items-center gap-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Functions and Directives{' '}
      </h2>
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Directives{' '}
      </h2>
      <div className=" py-4 w-3/4 bg-gray-800 rounded-[0.4em] items-center flex flex-col ">
        <ul className="  *:text-sky-300/80 *:outline-1 *:outline-gray-500 *:bg-sky-800/40 *:rounded-[0.4em] *:px-3 *:w-11/12  w-11/12 items-center place-items-center justify-center h-full  grid grid-cols-1 gap-2 *:font-extralight *:max-md:text-sm">
          <li>@import- directive to import css files incuding tailwind</li>
          <li>
            @theme- directive to define your project's custom design tokens e.g.
            fonts
          </li>
          <li>
            @source- directive to explicitly specify source files that are not
            picked by tailwind's auto detect
          </li>
          <li>
            @utility- directive to add custom utilities to your project that
            work with variants like 'hover'
          </li>
          <li>
            @variant- directive to apply a tailwind variant like 'dark' styles
            in your css
          </li>
          <li>
            @custom-variant- directive to add a custom variant to your project
          </li>
        </ul>
      </div>
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        Functions{' '}
      </h2>
      <div className=" py-4 w-3/4 bg-gray-800 rounded-[0.4em] items-center flex flex-col ">
        <ul className="  *:text-gray-300/80 *:outline-1 *:outline-gray-500 *:bg-sky-800/20 *:rounded-[0.4em] *:px-3 *:w-11/12  w-11/12 items-center place-items-center justify-center h-full  grid grid-cols-1 gap-2 *:font-extralight *:max-md:text-sm">
          <li>
            '--aplha()'- functions to adjust the opacity of a color e.g. color:
            --alpha(var(--color-lime-300)/50%)
          </li>
          <li>
            '--spacing-'- function to generate spacing value based on your theme{' '}
            e.g. margin: --spacing(4)
          </li>
          <li>
            theme()- function to access your tailwind theme values useing dot
            notation: e.g. margin: theme(spacing.12)
          </li>
        </ul>
      </div>
    </div>
  );
}
export default FunctionsAndDirectives;
