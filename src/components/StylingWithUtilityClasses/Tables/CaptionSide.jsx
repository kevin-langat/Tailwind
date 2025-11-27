function CaptionSide() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        caption side
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the alignment of a caption element inside the
        table.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Placing at the top of the table</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'caption-top' utility to place the table caption at the top of
        the table:
      </h2>
      <div className='w-1/2 outline-1 place-items-center outline-gray-400 bg-gray-800 h-55 rounded-[0.3em] flex flex-col justify-around '>
        <h2 className=' text-gray-300'>caption-top</h2>
        <table className=' caption-top table-auto w-3/4 text-vsm h-35 bg-gray-700 border border-gray-500'>
          <caption className='text-gray-400 font-light'>
            Table 3.1: Artist, song and year of release
          </caption>
          <thead>
            <tr>
              <th className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Song
              </th>
              <th className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Artist
              </th>
              <th className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Malcolm Lockyer
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                1961
              </td>
            </tr>
            <tr>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Witchy Woman
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                The Eagles
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                1972
              </td>
            </tr>
            <tr>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Shining Star
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-400 px-4'>
                Earth, Wind, and Fire
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-400 px-4'>
                1975
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Placing it at the bottom of the table */}
      <h2 className='underline'>Placing at the bottom of the table</h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'caption-bottom' utility to place the table caption at the
        bottom of the table:
      </h2>
      <div className='w-1/2 outline-1 place-items-center outline-gray-400 bg-gray-800 h-55 rounded-[0.3em] flex flex-col justify-around '>
        <h2 className=' text-gray-300'>caption-bottom</h2>
        <table className=' caption-bottom table-auto w-3/4 text-vsm h-35 bg-gray-700 border border-gray-500'>
          <caption className='text-gray-400 font-light'>
            Table 3.1: Artist, song and year of release
          </caption>
          <thead>
            <tr>
              <th className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Song
              </th>
              <th className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Artist
              </th>
              <th className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Malcolm Lockyer
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                1961
              </td>
            </tr>
            <tr>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Witchy Woman
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                The Eagles
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                1972
              </td>
            </tr>
            <tr>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
                Shining Star
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-400 px-4'>
                Earth, Wind, and Fire
              </td>
              <td className='border-y-1 border-x-0 text-gray-300 font-extralight border-gray-400 px-4'>
                1975
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CaptionSide;
