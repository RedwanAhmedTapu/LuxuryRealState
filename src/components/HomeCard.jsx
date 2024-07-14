import React from 'react'
import {
    BarChart as BarChartIcon,
    PieChart as PieChartIcon,
    ShowChart as ShowChartIcon,
    AttachMoney as AttachMoneyIcon,
  } from "@mui/icons-material";
  
  const data = [
    {
      icon: <ShowChartIcon className="text-green-500" style={{ fontSize: 40 }} />,
      title: "Today Sale",
      amount: "$1234",
    },
    {
      icon: <BarChartIcon className="text-blue-500" style={{ fontSize: 40 }} />,
      title: "Total Sale",
      amount: "$1234",
    },
    {
      icon: <AttachMoneyIcon className="text-red-500" style={{ fontSize: 40 }} />,
      title: "Today Revenue",
      amount: "$1234",
    },
    {
      icon: <PieChartIcon className="text-purple-500" style={{ fontSize: 40 }} />,
      title: "Total Revenue",
      amount: "$1234",
    },
  ];
const HomeCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {data.map((item, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between"
      >
        <div className="flex items-center">
          {item.icon}
          <div className="ml-4">
            <p className="text-gray-600 text-lg font-medium">
              {item.title}
            </p>
            <h6 className="text-2xl font-bold text-gray-800">
              {item.amount}
            </h6>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default HomeCard