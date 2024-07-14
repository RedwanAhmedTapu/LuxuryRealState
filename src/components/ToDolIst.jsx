import React from 'react'

const ToDolIst = () => {
  return (
    <>
    {/* To Do List Widget */}
    <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <h6 className="text-xl font-bold text-gray-800">To Do List</h6>
      <a href="#" className="text-blue-500">Show All</a>
    </div>
    <div className="flex mb-4">
      <input
        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter task"
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Add</button>
    </div>
    {[...Array(4)].map((_, index) => (
      <div key={index} className="flex items-center border-b py-2">
        <input type="checkbox" className="form-checkbox text-blue-500" />
        <div className="ml-4 flex-grow">
          <div className="flex items-center justify-between">
            <span className="text-gray-800">Short task goes here...</span>
            <button className="text-red-500"><i className="fa fa-times"></i></button>
          </div>
        </div>
      </div>
    ))}
  </div>
  </>
  )
}

export default ToDolIst
