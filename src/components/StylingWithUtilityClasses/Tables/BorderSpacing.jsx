function BorderSpacing() {
  return (
    <div className='w-full  mb-20 flex flex-col items-center justify-center gap-4 '>
      <h2 className=' text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4'>
        border-spacing
      </h2>
      <h2 className='flex flex-col items-center text-vsm'>
        Utilities for controlling the spacing between table borders
      </h2>
      {/* Basic example */}
      <h2 className='underline'>Basic example</h2>
      <h2 className='text-vsm w-1/2'>
        {' '}
        Use 'border-spacing-{'<number>'}'' utilities like 'border-spacing-4' and
        'border-spacing-x-2' to control the space between the borders of the
        table cells with separate borders:
      </h2>
      <div className='w-1/2 outline-1 place-items-center outline-gray-400/40  bg-gray-800 h-50 rounded-[0.3em] flex flex-col justify-around text-vsm'>
        <h2 className='text-vsm text-gray-300'>border-spacing-2</h2>
        <table className='border-separate border-spacing-2 w-[80%] h-35 bg-gray-700 border border-gray-500'>
          <thead>
            <tr>
              <th className='border text-gray-300 font-extralight border-gray-500 px-4'>
                Name
              </th>
              <th className='border text-gray-300 font-extralight border-gray-500 px-4'>
                price
              </th>
              <th className='border text-gray-300 font-extralight border-gray-500 px-4'>
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                Oppo Find X7
              </td>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                $1300
              </td>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                24
              </td>
            </tr>
            <tr>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                Samsung Galaxy S22 Ultra
              </td>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                $700
              </td>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                30
              </td>
            </tr>
            <tr>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                iPhone 13 Pro Max
              </td>
              <td className='border text-gray-300 font-extralight border-gray-400 px-4'>
                $800
              </td>
              <td className='border text-gray-300 font-extralight border-gray-400 px-4'>
                15
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Using a custom value */}
      <h2 className='underline'>Using a custom value</h2>
      <h2 className='text-vsm w-1/2'>
        Use the border-spacing-{'[<value>]'} syntax to set the border spacing
        based on a completely custom value:
      </h2>
      <div className='w-1/2 outline-1 place-items-center outline-gray-400/40 p-1  bg-gray-800 h-40 rounded-[0.3em] flex flex-col gap-4 justify-around text-vsm'>
        <h2 className='text-gray-300'>border-spacing-[5px]</h2>
        <table className='border-separate border-spacing-[5px] w-3/4 h-35 bg-gray-700 border border-gray-500'>
          <thead>
            <tr>
              <th className='border text-gray-300 font-extralight border-gray-500 px-4'>
                Name
              </th>
              <th className='border text-gray-300 font-extralight border-gray-500 px-4'>
                price
              </th>
              <th className='border text-gray-300 font-extralight border-gray-500 px-4'>
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                Oppo Find X7
              </td>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                $1300
              </td>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                24
              </td>
            </tr>
            <tr>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                Samsung Galaxy S22 Ultra
              </td>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                $700
              </td>
              <td className='border text-gray-300 font-extralight border-gray-500 px-4'>
                30
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BorderSpacing;
