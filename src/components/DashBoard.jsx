import React, { useEffect, useRef, useState } from "react";
import UserImage from "../assets/userImage.png";
import HomeCard from "./HomeCard";
import Calendar from "./Calendar";
import ToDolIst from "./ToDolIst";
import Salesrevenue from "./SalesRevenue";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Sale & Revenue */}
      <HomeCard />

      {/* Sales Charts */}
      <Salesrevenue />

      {/* Recent Sales */}
      <div className="mt-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-xl font-bold text-gray-800">Recent Sales</h6>
            <a href="#" className="text-blue-500">
              Show All
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200 text-gray-600">
                <tr>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Invoice</th>
                  <th className="py-2 px-4">Customer</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2 px-4">01 Jan 2045</td>
                    <td className="py-2 px-4">INV-0123</td>
                    <td className="py-2 px-4">John Doe</td>
                    <td className="py-2 px-4">$123</td>
                    <td className="py-2 px-4">
                      <span className="text-green-500">Paid</span>
                    </td>
                    <td className="py-2 px-4">
                      <button className="text-blue-500">Detail</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Widgets */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Messages Widget */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-xl font-bold text-gray-800">Messages</h6>
            <a href="#" className="text-blue-500">
              Show All
            </a>
          </div>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center border-b py-3">
              <img className="w-12 h-12 rounded-full" src={UserImage} alt="" />
              <div className="ml-4 w-full">
                <div className="flex items-center justify-between">
                  <h6 className="text-lg font-medium text-gray-800">
                    John Doe
                  </h6>
                  <small className="text-gray-500">15 minutes ago</small>
                </div>
                <p className="text-gray-600">Short message goes here...</p>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Widget */}

        <Calendar />
        <ToDolIst />
      </div>
    </div>
  );
};

export default Dashboard;
