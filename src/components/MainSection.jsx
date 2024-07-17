import React from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

function MainSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
      <main className="col-span-2 p-10">
        <header className="flex items-center gap-4">
          <button className="hidden menu-btn bg-blue-200 p-2 rounded-md" id="menu-open">
            <i className='bx bx-menu text-blue-600'></i>
          </button>
          <h5 className="text-lg text-blue-600 font-medium">welcome back!</h5>
        </header>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-8">
            <h3 className="text-2xl">My Courses</h3>
            <Link to="#" className="text-sm mt-1">View All</Link>
          </div>
          <div className="flex items-center gap-4">
            <i className='bx bx-search text-gray-400'></i>
            <input type="text" placeholder="Search..." className="border-none text-sm outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="flex items-center justify-between p-5 bg-blue-600 text-white rounded-2xl">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <h5 className="font-bold text-xl">Locations</h5>
                <p className="text-sm">35 Lessons</p>
              </div>
              <div className="progress-bar h-14 w-14 bg-gradient-to-r from-blue-700 to-white rounded-full flex items-center justify-center">
                <span className="text-xs">75%</span>
              </div>
            </div>
            <i className='bx bx-map-pin text-6xl'></i>
          </div>
          <div className="flex items-center justify-between p-5 bg-orange-400 text-white rounded-2xl">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <h5 className="font-bold text-xl">People</h5>
                <p className="text-sm">30 Lessons</p>
              </div>
              <div className="progress-bar h-14 w-14 bg-gradient-to-r from-orange-500 to-white rounded-full flex items-center justify-center">
                <span className="text-xs">50%</span>
              </div>
            </div>
            <i className='bx bx-user-voice text-6xl'></i>
          </div>
          <div className="flex items-center justify-between p-5 bg-green-500 text-white rounded-2xl">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <h5 className="font-bold text-xl">Airport</h5>
                <p className="text-sm">45 Lessons</p>
              </div>
              <div className="progress-bar h-14 w-14 bg-gradient-to-r from-green-600 to-white rounded-full flex items-center justify-center">
                <span className="text-xs">25%</span>
              </div>
            </div>
            <i className='bx bxs-plane-land text-6xl'></i>
          </div>
          <div className="flex items-center justify-between p-5 bg-yellow-400 text-white rounded-2xl">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <h5 className="font-bold text-xl">Places</h5>
                <p className="text-sm">20 Lessons</p>
              </div>
              <div className="progress-bar h-14 w-14 bg-gradient-to-r from-yellow-500 to-white rounded-full flex items-center justify-center">
                <span className="text-xs">75%</span>
              </div>
            </div>
            <i className='bx bxs-castle text-6xl'></i>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-8">
            <h3 className="text-2xl">Planning</h3>
            <Link to="#" className="text-sm mt-1">View All</Link>
          </div>
          <input type="date" className="border-none font-bold text-blue-600 outline-none w-24" value="2023-10-15" />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-5">
          <div className="flex items-center justify-between p-5 bg-gray-100 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-4 rounded-lg">
                <i className='bx bx-book-alt text-blue-600'></i>
              </div>
              <div className="flex flex-col">
                <h5 className="text-sm font-semibold">Reading - Topic 1</h5>
                <p className="text-xs text-gray-400">8:00 - 10:00</p>
              </div>
            </div>
            <i className='bx bx-dots-vertical-rounded text-gray-400'></i>
          </div>
          <div className="flex items-center justify-between p-5 bg-gray-100 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 p-4 rounded-lg">
                <i className='bx bx-edit-alt text-orange-400'></i>
              </div>
              <div className="flex flex-col">
                <h5 className="text-sm font-semibold">Writing - Topic 2</h5>
                <p className="text-xs text-gray-400">13:00 - 14:00</p>
              </div>
            </div>
            <i className='bx bx-dots-vertical-rounded text-gray-400'></i>
          </div>
          <div className="flex items-center justify-between p-5 bg-gray-100 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-4 rounded-lg">
                <i className='bx bx-headphone text-green-500'></i>
              </div>
              <div className="flex flex-col">
                <h5 className="text-sm font-semibold">Listening - Topic 1</h5>
                <p className="text-xs text-gray-400">15:00 - 16:00</p>
              </div>
            </div>
            <i className='bx bx-dots-vertical-rounded text-gray-400'></i>
          </div>
          <div className="flex items-center justify-between p-5 bg-gray-100 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-100 p-4 rounded-lg">
                <i className='bx bx-chalkboard text-yellow-500'></i>
              </div>
              <div className="flex flex-col">
                <h5 className="text-sm font-semibold">Speaking - Topic 2</h5>
                <p className="text-xs text-gray-400">10:00 - 12:00</p>
              </div>
            </div>
            <i className='bx bx-dots-vertical-rounded text-gray-400'></i>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-8">
            <h3 className="text-2xl">Recent Files</h3>
            <Link to="#" className="text-sm mt-1">View All</Link>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs">Date</p>
            <input type="date" className="border-none font-bold text-blue-600 outline-none w-24" value="2023-10-15" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-5">
          <div className="flex flex-col items-center justify-between p-5 bg-gray-100 rounded-2xl">
            <i className='bx bx-file text-gray-400 text-5xl'></i>
            <div className="flex items-center justify-between gap-1">
              <h5 className="text-xs">file name</h5>
              <small className="text-gray-400 text-xs">10:00</small>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between p-5 bg-gray-100 rounded-2xl">
            <i className='bx bx-file text-gray-400 text-5xl'></i>
            <div className="flex items-center justify-between gap-1">
              <h5 className="text-xs">file name</h5>
              <small className="text-gray-400 text-xs">10:00</small>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between p-5 bg-gray-100 rounded-2xl">
            <i className='bx bx-file text-gray-400 text-5xl'></i>
            <div className="flex items-center justify-between gap-1">
              <h5 className="text-xs">file name</h5>
              <small className="text-gray-400 text-xs">10:00</small>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainSection;
