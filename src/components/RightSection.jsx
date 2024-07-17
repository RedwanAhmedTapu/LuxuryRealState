import React from 'react';

const RightSection = () => {
  return (
    <aside className="flex flex-col p-8">
      <div className="flex items-center justify-between">
        <i className='bx bx-bell text-gray-400'></i>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="assets/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
            <div className="flex flex-col">
              <h5 className="text-lg font-semibold">Reza Mehdikhanlou</h5>
              <a href="#" className="text-sm text-gray-500">Basic Plan</a>
            </div>
          </div>
          <i className='bx bxs-chevron-right text-gray-400'></i>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-gray-100 rounded-lg p-4">
          <h4 className="text-lg font-semibold">Statistics</h4>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <StatsItem title='Courses' value='02' />
          <StatsItem title='Total Points' value='250' />
          <StatsItem title='Courses In Progress' value='03' />
          <StatsItem title='Tasks Finished' value='250' />
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-gray-100 rounded-lg p-4">
          <h4 className="text-lg font-semibold">Weekly Work</h4>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full p-2">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold">3/4</span>
              </div>
            </div>
            <h5 className="text-base font-semibold">Tasks This Week</h5>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-lg font-semibold">75%</span>
            </div>
            <p className="text-sm text-gray-500">Progress</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

const StatsItem = ({ title, value }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-500">Gained</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="w-4 h-20 bg-blue-500 rounded-full"></div>
        <h3 className="text-4xl font-semibold">{value}</h3>
      </div>
    </div>
  );
}

export default RightSection;
