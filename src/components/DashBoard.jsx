import React, { useState } from "react";
import UserImage from "../assets/userImage.png";
import HomeCard from "./HomeCard";
import Calendar from "./Calendar";
import ToDolIst from "./ToDolIst";
import SalesRevenue from "./SalesRevenue";
import Form from "./Form";
import Datatable from "./DataTable";

const Dashboard = () => {
  return (
    <>
    <div className="container mx-auto p-4">
      {/* Sale & Revenue */}
      <HomeCard />

      {/* Sales Charts */}
      {/* <SalesRevenue /> */}
      <Form />
      {/* Recent Sales */}
      <div className="mt-8">
        <Datatable />
      </div>
     

      {/* Widgets */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Messages Widget */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-xl font-bold text-blue-600">Messages</h6>
            <a href="#" className="text-blue-500">
              Show All
            </a>
          </div>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center border-b py-3">
              <img
                className="w-16 h-16 rounded-full border-2 border-blue-500"
                src={UserImage}
                alt=""
              />
              <div className="ml-4 flex-grow">
                <div className="flex items-center justify-between">
                  <h6 className="text-lg font-medium text-gray-800">
                    Redwan Ahmed
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
    </>
  );
};

export default Dashboard;
