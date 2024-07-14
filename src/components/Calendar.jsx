import React,{useState} from 'react';
import {
    
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
  } from '@mui/icons-material';

const Calendar = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
  
    const getDaysInMonth = (year, month) =>
      new Date(year, month + 1, 0).getDate();
  
    const generateCalendar = () => {
      const daysInMonth = getDaysInMonth(
        currentDate.getFullYear(),
        currentDate.getMonth()
      );
      const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const startingDayOfWeek = firstDayOfMonth.getDay();
  
      const calendar = [];
  
      for (let i = 0; i < startingDayOfWeek; i++) {
        calendar.push(<div key={`empty-${i}`} className="text-gray-400"></div>);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        const isCurrentDate =
          day === new Date().getDate() &&
          currentDate.getMonth() === new Date().getMonth();
  
        calendar.push(
          <div
            key={day}
            className={`cursor-pointer p-2 hover:rounded-lg hover:flex_center hover:bg-white hover:text-black ${
              isCurrentDate
                ? "bg-blue-500 text-white hover:text-black flex_center font-bold rounded-full"
                : ""
            }`}
            onClick={() =>
              console.log(
                `Clicked on ${currentDate.toLocaleString("default", {
                  month: "long",
                })} ${day}, ${currentDate.getFullYear()}`
              )
            }
          >
            {day}
          </div>
        );
      }
  
      return calendar;
    };
  
    const goToPreviousMonth = () => {
      setCurrentDate(
        (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
      );
    };
  
    const goToNextMonth = () => {
      setCurrentDate(
        (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
      );
    };
  
  return (
    <>
     <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-xl font-bold text-gray-800">Calendar</h6>
            <div className="flex space-x-2">
              <button onClick={goToPreviousMonth} className="text-gray-600">
                <ChevronLeftIcon />
              </button>
              <button onClick={goToNextMonth} className="text-gray-600">
                <ChevronRightIcon />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            <div className="text-center font-bold text-gray-600">Sun</div>
            <div className="text-center font-bold text-gray-600">Mon</div>
            <div className="text-center font-bold text-gray-600">Tue</div>
            <div className="text-center font-bold text-gray-600">Wed</div>
            <div className="text-center font-bold text-gray-600">Thu</div>
            <div className="text-center font-bold text-gray-600">Fri</div>
            <div className="text-center font-bold text-gray-600">Sat</div>
            {generateCalendar()}
          </div>
        </div>
    </>
  )
}

export default Calendar