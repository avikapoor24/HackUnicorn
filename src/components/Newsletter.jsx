import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-4 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-transparent text-[#525252]  rounded-md font-medium text-2xl ml-4 my-6 px-6 py-3 hover:bg-[#535fc1] hover:text-black '>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;