import React from 'react'

const MainPage = () => {
  return (
    <div className='max-w-[900px] mx-auto py-10'>
      <div className='flex justify-between gap-8'>
        <div className='flex flex-col gap-10 basis-4/5'>POSTS</div>
        <div className='basis-1/5'>
          <div className='text-xs uppercase text-white'>Популярні:</div>
          POPULAR POSTS
          </div>
      </div>
    </div>
  )
}

export default MainPage