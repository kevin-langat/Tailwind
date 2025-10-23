import image from '../../../assets/Houses/OIG1.jpg';

function BackgroundAttachment() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        background-attachment
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling how a background image behaves when scrolling.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Fixing the background image</h2>
      <h2 className='text-vsm'>
        Use the 'bg-fixed' utlity to fix the background image relative to the
        viewport:
      </h2>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`w-1/3 h-50 bg-contain shadow shadow-gray-700 overflow-y-scroll  bg-gray-800 bg-center rounded-[0.4em] bg-fixed `}
      >
        <h2 className=' mt-35 ml-2 p-1 rounded-[0.3em] text-gray-300 bg-gray-700 text-vsm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui
          repellat aliquid id saepe consequuntur consequatur, maxime praesentium
          nesciunt quis blanditiis laborum laudantium reprehenderit nostrum
          deserunt facilis. Magni debitis at nulla ducimus, voluptate porro
          saepe reprehenderit quos placeat autem voluptatum ipsum ad eaque vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur
          praesentium doloribus, harum molestias recusandae vitae nemo vero
          officiis, sequi iusto molestiae officia consequatur magni? Maxime quo
          quibusdam voluptatum modi. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aspernatur non natus harum nisi commodi a, illo
          voluptate explicabo autem porro sit assumenda cumque animi pariatur
          ipsam dolorum corrupti. Rem, dignissimos repellendus error
          exercitationem dolorum, odio asperiores natus dolor, dolorem amet eius
          non itaque labore eligendi laborum consectetur ab quidem aut? Aliquid
          odio nisi, obcaecati dignissimos quam alias veritatis ullam temporibus
          omnis accusantium repudiandae dolor autem fugiat laudantium provident
          inventore repellendus nemo sint saepe voluptates magnam nihil,
          pariatur blanditiis! Reprehenderit tempora praesentium explicabo
          mollit ia porro similique sint voluptas asperiores nobis quam,
          inventore commodi veniam dolore assumenda eligendi excepturi suscipit
          fugit accusantium?
        </h2>
      </div>
      {/* Scrolling with the container */}
      <h2 className='underline'>Scrolling with the container</h2>
      <h2 className='text-vsm'>
        Use the 'bg-local' utlity to scroll the background image with the
        container and the viewport:
      </h2>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`w-1/3 h-50 bg-cover shadow shadow-gray-700 overflow-y-scroll bg-gray-800 bg-center rounded-[0.4em] bg-local `}
      >
        <h2 className=' mt-10 ml-2 p-1 rounded-[0.3em] text-blue-600 text-vsm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui
          repellat aliquid id saepe consequuntur consequatur, maxime praesentium
          nesciunt quis blanditiis laborum laudantium reprehenderit nostrum
          deserunt facilis. Magni debitis at nulla ducimus, voluptate porro
          saepe reprehenderit quos placeat autem voluptatum ipsum ad eaque vel.
          Rem, dignissimos repellendus error exercitationem dolorum, odio
          asperiores natus dolor, dolorem amet eius non itaque labore eligendi
          laborum consectetur ab quidem aut? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Enim illum ex officia distinctio qui
          fugit temporibus sint tempore cupiditate, nesciunt dolorum
          praesentium, doloremque sapiente molestiae! Assumenda incidunt minus
          aut autem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsum excepturi, ipsam enim illum doloremque libero inventore tempore
          asperiores laudantium reiciendis maxime ipsa, eligendi esse voluptates
          soluta incidunt nostrum necessitatibus. Alias fugiat culpa, autem sunt
          quis dolores ea delectus consequatur sit fuga soluta tenetur ducimus
        </h2>
      </div>
      {/* Scrolling with the viewport */}
      <h2 className='underline'>Scrolling with the viewport</h2>
      <h2 className='text-vsm'>
        Use the 'bg-scroll' utility to scroll the background image with the
        viewport, but not the container:
      </h2>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`w-1/3 h-50 bg-cover shadow shadow-gray-700 overflow-y-scroll  bg-gray-800 bg-center rounded-[0.4em] bg-scroll `}
      >
        <h2 className='ml-2 p-1 rounded-[0.3em] text-orange-500 text-vsm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui
          repellat aliquid id saepe consequuntur consequatur, maxime praesentium
          nesciunt quis blanditiis laborum laudantium reprehenderit nostrum
          deserunt facilis. Magni debitis at nulla ducimus, voluptate porro
          saepe reprehenderit quos placeat autem voluptatum ipsum ad eaque vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur
          praesentium doloribus, harum molestias recusandae vitae nemo vero
          officiis, sequi iusto molestiae officia consequatur magni? Maxime quo
          quibusdam voluptatum modi. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aspernatur non natus harum nisi commodi a, illo
          voluptate explicabo autem porro sit assumenda cumque animi pariatur
          ipsam dolorum corrupti. Rem, dignissimos repellendus error
          exercitationem dolorum, odio asperiores natus dolor, dolorem amet eius
          non itaque labore eligendi laborum consectetur ab quidem aut? Aliquid
          odio nisi, obcaecati dignissimos quam alias veritatis ullam temporibus
          omnis accusantium repudiandae dolor autem fugiat laudantium provident
          inventore repellendus nemo sint saepe voluptates magnam nihil,
          pariatur blanditiis! Reprehenderit tempora praesentium explicabo
          mollit ia porro similique sint voluptas asperiores nobis quam,
          inventore commodi veniam dolore assumenda eligendi excepturi suscipit
          fugit accusantium?
        </h2>
      </div>
    </div>
  );
}

export default BackgroundAttachment;
