function NotFoundPage() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <img src='/public/Svgs/notfound.svg' className=' w-60 h-60' alt='' />
        <h1 className='text-6xl font-bold text-blue-600'>404</h1>
        <h2 className='text-2xl mt-4 text-red-500'>Page Not Found</h2>
      </div>
    </div>
  );
}

export default NotFoundPage;
