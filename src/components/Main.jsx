import React from 'react';

const MainContent = () => {
  return (
    <main className="flex-1 p-8 border-r border-l border-gray-200">
      <header className="flex items-center gap-4">
        <button className="menu-btn w-8 h-8 bg-blue-200 rounded-md flex items-center justify-center">
          <i className='bx bx-menu text-blue-600'></i>
        </button>
        <h5 className="text-blue-600 text-lg font-semibold">Hello <b>REZA</b>, welcome back!</h5>
      </header>

      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-4">
          <h3 className="text-3xl font-semibold">My Courses</h3>
          <a href="#" className="text-blue-600">View All</a>
        </div>
        <div className="flex items-center gap-4">
          <i className='bx bx-search text-gray-500 text-xl'></i>
          <input type="text" placeholder="Search..." className="text-gray-500 placeholder-gray-500 focus:outline-none" />
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-4">Analytics</h4>
          <div className="flex justify-between">
            <AnalyticsItem title="Courses" value="02" />
            <AnalyticsItem title="Total Points" value="250" />
            <AnalyticsItem title="Courses In Progress" value="03" />
            <AnalyticsItem title="Tasks Finished" value="250" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-4">Planning</h4>
          <div className="flex flex-col gap-4">
            <PlanningItem
              icon="bx bx-book-reader"
              title="Learning: The Definitive Guide"
              description="Chapter 1: Introduction"
            />
            <PlanningItem
              icon="bx bx-pencil"
              title="Task: Complete React Project"
              description="Finalize the main components and styling"
            />
            <PlanningItem
              icon="bx bx-time-five"
              title="Schedule: Meeting with team"
              description="Discuss the next steps for the project"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-4">Upcoming Tasks</h4>
          <div className="flex flex-col gap-4">
            <TaskItem
              icon="bx bx-check-circle"
              title="Finish Design Mockups"
              date="July 20, 2024"
            />
            <TaskItem
              icon="bx bx-check-circle"
              title="Implement Authentication"
              date="July 22, 2024"
            />
            <TaskItem
              icon="bx bx-check-circle"
              title="Deploy to Production"
              date="July 25, 2024"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

const AnalyticsItem = ({ title, value }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
      <span className="text-2xl font-semibold text-blue-600">{value}</span>
    </div>
    <p className="mt-2 text-gray-500">{title}</p>
  </div>
);

const PlanningItem = ({ icon, title, description }) => (
  <div className="flex items-center gap-4">
    <i className={`${icon} text-blue-600 text-3xl`}></i>
    <div>
      <h5 className="text-lg font-semibold">{title}</h5>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);

const TaskItem = ({ icon, title, date }) => (
  <div className="flex items-center gap-4">
    <i className={`${icon} text-blue-600 text-2xl`}></i>
    <div>
      <h5 className="text-lg font-semibold">{title}</h5>
      <p className="text-gray-500">{date}</p>
    </div>
  </div>
);

export default MainContent;
