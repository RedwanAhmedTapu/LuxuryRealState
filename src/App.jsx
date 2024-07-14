import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/DashBoard';
import Loader from './components/Loader';

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-12 gap-4 h-screen bg-transparent">
          {/* Sidebar */}
          <div className="col-span-2 fixed top-0 left-0 z-10">
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          </div>

          {/* Main Content */}
          <div className={`col-span-10 col-start-2 flex flex-col transition-all duration-300 `}>
            {/* Navbar */}
            <div className={`fixed top-0 left-20 w-full col-span-10 bg-gray-300 transition-all duration-300 ${isExpanded && "ml-28"}`}>
              <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            </div>

            {/* Main Content Area */}
            <div className={`p-6 mt-16 bg-white ${isExpanded&& "ml-28"}`}>
              <Dashboard />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
