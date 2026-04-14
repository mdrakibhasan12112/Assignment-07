import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">Add a Friend</button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
        <div className=" shadow-sm text-center p-10">
          <h3 className="text-2xl font-semibold text-[#244D3F] ">10</h3>
          <p>Total Friend</p>
        </div>
        <div className=" shadow-sm text-center p-10">
          <h3 className="text-2xl font-semibold text-[#244D3F] ">3</h3>
          <p>On Track</p>
        </div>
        <div className=" shadow-sm text-center p-10">
          <h3 className="text-2xl font-semibold text-[#244D3F] ">6</h3>
          <p>Need Attention</p>
        </div>
        <div className=" shadow-sm text-center p-10">
          <h3 className="text-2xl font-semibold text-[#244D3F] ">12</h3>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
