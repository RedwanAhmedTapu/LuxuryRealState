import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import "boxicons/css/boxicons.min.css";
import profileImg from "../assets/userImage.png"; // Adjust the path accordingly
import podcastImg from "../assets/userImage.png"; // Adjust the path accordingly
import MainContent from './MainSection';
import RightSection from './RightSection';
import Main from "./Main"

Chart.register(...registerables);

const HomeCard = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);

  useEffect(() => {
    const ctx = document.querySelector('.activity-chart');
    const ctx2 = document.querySelector('.prog-chart');

    if (ctx && ctx2) {
      // Activity Chart
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          datasets: [{
            label: 'Time',
            data: [8, 6, 7, 6, 10, 8, 4],
            backgroundColor: '#1e293b',
            borderWidth: 3,
            borderRadius: 6,
            hoverBackgroundColor: '#60a5fa'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              border: {
                display: true
              },
              grid: {
                display: true,
                color: '#1e293b'
              }
            },
            y: {
              ticks: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        }
      });

      // Progress Chart
      new Chart(ctx2, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Class GPA',
            data: [6, 10, 8, 14, 6, 7, 4],
            borderColor: '#0891b2',
            tension: 0.4
          },
          {
            label: 'Average GPA',
            data: [8, 6, 7, 6, 11, 8, 10],
            borderColor: '#ca8a04',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              ticks: {
                display: false
              },
              border: {
                display: false,
                dash: [5, 5]
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        }
      });
    }
  }, []); // Empty dependency array ensures this runs only once after initial render



  return (
    <div className="flex flex-col gap-y-12">
      <MainContent/>

    <div className="bg-gray-100">
      
      <div className="bg-[#031224] rounded-b-3xl pb-4">
        <div className="flex items-center justify-between px-5 py-4 border-b-2 border-gray-800">
          <div className="flex items-center gap-2">
            <i className="bx bxl-codepen text-2xl text-white"></i>
            <a href="#" className="text-white text-lg">marcuricIT</a>
          </div>
          
         
        </div>
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-white font-medium text-lg">Your courses</h4>
          </div>
          <div className="flex items-center gap-3 flex-wrap lg:flex-nowrap">
            <div className="bg-blue-200 w-full lg:w-1/4 p-5 rounded-2xl mb-4 lg:mb-0">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <h5 className="text-lg font-semibold">Data Analysis</h5>
                  <p className="text-sm font-medium">- 3 lessons left</p>
                  <p className="text-sm font-medium">- 1 project left</p>
                </div>
                <i className="bx bx-data text-lg p-2 bg-blue-900 text-white rounded-full"></i>
              </div>
              <div className="relative h-2 bg-gray-400 rounded-full">
                <div className="absolute top-0 left-0 h-2 w-11/12 bg-blue-900 rounded-full"></div>
                <span className="absolute top-[-1.5rem] right-0 text-lg font-semibold">92%</span>
              </div>
            </div>
            <div className="bg-yellow-100 w-full lg:w-1/4 p-5 rounded-2xl mb-4 lg:mb-0">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <h5 className="text-lg font-semibold">Machine Learn</h5>
                  <p className="text-sm font-medium">- 2 assignments left</p>
                  <p className="text-sm font-medium">- 5 tutorials left</p>
                </div>
                <i className="bx bx-terminal text-lg p-2 bg-blue-900 text-white rounded-full"></i>
              </div>
              <div className="relative h-2 bg-gray-400 rounded-full">
                <div className="absolute top-0 left-0 h-2 w-2/3 bg-blue-900 rounded-full"></div>
                <span className="absolute top-[-1.5rem] right-0 text-lg font-semibold">65%</span>
              </div>
            </div>
            <div className="bg-blue-300 w-full lg:w-1/4 p-5 rounded-2xl mb-4 lg:mb-0">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <h5 className="text-lg font-semibold">Python</h5>
                  <p className="text-sm font-medium">- 4 chapters left</p>
                  <p className="text-sm font-medium">- 8 quizzes left</p>
                </div>
                <i className="bx bxl-python text-lg p-2 bg-blue-900 text-white rounded-full"></i>
              </div>
              <div className="relative h-2 bg-gray-400 rounded-full">
                <div className="absolute top-0 left-0 h-2 w-4/5 bg-blue-900 rounded-full"></div>
                <span className="absolute top-[-1.5rem] right-0 text-lg font-semibold">80%</span>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      {/* <div className="flex gap-5 p-7 flex-wrap lg:flex-nowrap">
        <div className="bg-white w-full lg:w-1/2 p-5 rounded-3xl mb-5 lg:mb-0">
          <div className="flex items-center justify-between mb-5">
            <h4 className="font-semibold text-lg">Learning Progress</h4>
            <div className="bg-gray-200 p-1 rounded-full flex gap-1">
              <a href="#" className="px-4 py-1 text-sm font-semibold bg-white rounded-full">1Y</a>
              <a href="#" className="px-4 py-1 text-sm font-semibold">6M</a>
              <a href="#" className="px-4 py-1 text-sm font-semibold">3M</a>
            </div>
          </div>
          <div className="flex gap-5 mb-7">
            <div>
              <h2 className="text-2xl font-light">3.45</h2>
              <p className="text-sm text-gray-500">Current GPA</p>
            </div>
            <div className="w-0.5 h-16 bg-gray-200"></div>
            <div>
              <h2 className="text-2xl font-light">4.78</h2>
              <p className="text-sm text-gray-500">Class Average GPA</p>
            </div>
          </div>
          <canvas ref={chartRef2} className="w-full"></canvas>
        </div>
        <div className="bg-white w-full lg:w-1/4 p-5 rounded-3xl mb-5 lg:mb-0">
          <div className="flex items-center justify-between mb-10">
            <h4 className="font-semibold text-lg">Popular</h4>
            <a href="#" className="text-sm font-semibold bg-gray-200 px-2 py-1 rounded-full"># Data</a>
          </div>
          <img src={podcastImg} alt="Podcast" className="w-full aspect-video rounded-2xl mb-5" />
          <div className="flex items-center gap-2 mb-5">
            <i className="bx bx-podcast text-2xl bg-blue-100 p-1.5 rounded-full"></i>
            <a href="#" className="text-sm font-semibold">Podcast: Mastering Data Visualization</a>
          </div>
          <p className="text-sm font-medium mb-12">Learn to create compelling visualizations with data.</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-gray-200 p-2 rounded-xl gap-2">
              <img src={profileImg} alt="Author" className="w-10 h-10 rounded-full" />
              <div>
                <a href="#" className="text-sm font-semibold">Alex</a>
                <p className="text-sm text-gray-500">Data Analyst</p>
              </div>
            </div>
            <a href="#" className="text-sm font-semibold text-blue-900">Read More</a>
          </div>
        </div>
        <div className="bg-white w-full lg:w-1/4 p-5 rounded-3xl mb-5 lg:mb-0">
          <div className="flex items-center justify-between mb-10">
            <h4 className="font-semibold text-lg">Most Viewed</h4>
            <a href="#" className="text-sm font-semibold bg-gray-200 px-2 py-1 rounded-full"># ML</a>
          </div>
          <img src={podcastImg} alt="Podcast" className="w-full aspect-video rounded-2xl mb-5" />
          <div className="flex items-center gap-2 mb-5">
            <i className="bx bx-podcast text-2xl bg-blue-100 p-1.5 rounded-full"></i>
            <a href="#" className="text-sm font-semibold">Podcast: Exploring Machine Learning</a>
          </div>
          <p className="text-sm font-medium mb-12">Dive into the world of machine learning with our experts.</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-gray-200 p-2 rounded-xl gap-2">
              <img src={profileImg} alt="Author" className="w-10 h-10 rounded-full" />
              <div>
                <a href="#" className="text-sm font-semibold">John</a>
                <p className="text-sm text-gray-500">ML Specialist</p>
              </div>
            </div>
            <a href="#" className="text-sm font-semibold text-blue-900">Read More</a>
          </div>
        </div>
      </div> */}
      {/* <Main/> */}

      {/* <RightSection/> */}
    </div>
    </div>
  );
};

export default HomeCard;
