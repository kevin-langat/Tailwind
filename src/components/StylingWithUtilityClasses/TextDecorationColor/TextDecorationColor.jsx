function TextDecorationColor() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        text-decoration-color
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the color of the text decorations.
      </h2>
      {/* Basic example */}
      <h2 className="underline">Basic example</h2>
      <h2 className="text-vsm">
        Use Utilities like 'decoration-sky-500' and 'decoration-indigo-600' to
        change the text decoration color of an element
      </h2>

      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]  flex flex-col text-gray-300 items-center justify-center  p-5">
        <h2 className=" text-left text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          <a className=" underline decoration-sky-500 inline-flex">
            doloremque omnis
          </a>
          , optio, quia exercitationem labore vel tempora a qui mollitia in
          porro voluptatibus alias laborum.{' '}
          <a className=" underline decoration-teal-500 inline-flex">
            Dolores alias labore optio,
          </a>{' '}
          sit nemo quidem{' '}
          <a className=" underline decoration-pink-500 inline-flex">
            obcaecati provident hic
          </a>{' '}
          porro aut unde vel quibusdam commodi, architecto id natus facilis
          aliquid ea.
          <a className=" underline decoration-indigo-500 inline-flex">
            consequuntur recusandae qui
          </a>{' '}
        </h2>
      </div>
      {/* Changing the opacity*/}
      <h2 className="underline">Changing the opacity</h2>
      <h2 className="text-vsm">
        Use the color opacity modifier to control the text decoration color
        opacity of an element:
      </h2>

      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]  flex flex-col text-gray-300 items-center justify-center  p-5">
        <h2 className=" text-left text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          <a className=" underline decoration-sky-500/50 inline-flex">
            doloremque omnis
          </a>
          , optio, quia exercitationem labore vel tempora a qui mollitia in
          porro voluptatibus alias laborum.{' '}
          <a className=" underline decoration-teal-500/90 inline-flex">
            Dolores alias labore optio,
          </a>{' '}
          sit nemo quidem{' '}
          <a className=" underline decoration-pink-500/60 inline-flex">
            obcaecati provident hic
          </a>{' '}
          porro aut unde vel quibusdam commodi, architecto id natus facilis
          aliquid ea.
          <a className=" underline decoration-indigo-500/80 inline-flex">
            consequuntur recusandae qui
          </a>{' '}
        </h2>
      </div>
      {/* Using a custom value*/}
      <h2 className="underline">Using a custom value</h2>
      <h2 className="text-vsm">
        Use the 'decoration-[{'<value>'}]' syntax to set the text decoration
        color based on a completely custom value:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]  flex flex-col text-gray-300 items-center justify-center  p-5">
        <h2 className=" text-left text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          <a className=" underline decoration-[#50d71e]">
            doloremque omnis optio, quia exercitationem
          </a>
          , optio, quia exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et, cupiditate!
        </h2>
      </div>
      {/* Applying on hover*/}
      <h2 className="underline">Applying on hover</h2>
      <h2 className="text-vsm">
        Prefix a 'text-decoration-color' utility with a variant like 'hover:*'
        to only apply the utility in that state:
      </h2>
      <div className=" w-1/2 bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em]  flex flex-col text-gray-300 items-center justify-center  p-5">
        <h2 className="  text-left text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          <a className=" underline cursor-pointer hover:decoration-orange-600  decoration-[#50d71e]">
            doloremque omnis optio, quia exercitationem
          </a>
          , optio, quia exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et, cupiditate!
        </h2>
      </div>
      {/* Customzing your theme*/}
      <h2 className="underline">Customzing your theme</h2>
      <h2 className="text-vsm">
        Use '--color-*' theme variables to customize the color utilities in your
        project:
      </h2>
      <div className=" bg-gray-950 outline-1 outline-gray-600 rounded-[0.4em] flex flex-col text-gray-300 items-center justify-center gap-4 p-3">
        <div className="flex flex-col w-full justify-start gap-0 5">
          <h2 className="text-orange-600 text-vsm font-sans ">
            @theme{'{'} <br />
            {'--color-regal: #243c5a;'} <br />
            {'}'}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TextDecorationColor;
