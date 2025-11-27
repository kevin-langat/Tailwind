function TableLayout() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        table-layout
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the table layout algorithm.
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Sizing columns automatically</h2>
      <h2 className='text-vsm w-1/2'>
        Use the table-auto utility to automatically size table columns to fit
        the contents of its cells:
      </h2>
      <div className='w-1/2 outline-1 place-items-center outline-gray-400/40  bg-gray-800 h-50 rounded-[0.3em] flex flex-col justify-around '>
        <h2 className=' text-gray-300'>table-auto</h2>
        <table className=' table-auto w-3/5 text-vsm h-35 bg-gray-700 border border-gray-500'>
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
      {/* Using fixed column widths  */}
      <h2 className='underline'>Using fixed column widths </h2>
      <h2 className='text-vsm w-1/2'>
        Use the 'table-fixed' utility to ignore the content of the table cells
        and use fixed widths for each column:
      </h2>
      <div className='w-1/2 outline-1 place-items-center outline-gray-400/40  bg-gray-800 h-50 rounded-[0.3em] flex flex-col justify-around '>
        <h2 className=' text-gray-300'>table-fixed</h2>
        <table className=' table-fixed w-3/5 text-vsm h-35  bg-gray-700 border border-gray-500'>
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
      {/* setting a fixed width */}
      <h2 className='underline'>Setting a fixed width </h2>
      <h2 className='text-vsm w-1/2'>
        You can manually set the widths for some columns and the rest of the
        available width will be divided evenly amongst columns without an
        explicit width. The widths set in the first row will set the column
        width for the whole table.
      </h2>
      <div className='w-1/2 outline-1 place-items-center outline-gray-400/40  bg-gray-800 h-50 rounded-[0.3em] flex flex-col justify-around '>
        <table className=' table-auto w-3/5 text-vsm h-35 bg-gray-700 border border-gray-500'>
          <thead>
            <tr>
              <th className='border-y-1 w-1/2 border-x-0 text-gray-300 font-extralight border-gray-500 px-4'>
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

export default TableLayout;
