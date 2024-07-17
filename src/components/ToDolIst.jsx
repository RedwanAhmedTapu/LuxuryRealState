import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Task 1", completed: false },
    { id: 2, task: "Task 2", completed: true },
    { id: 3, task: "Task 3", completed: false },
    // Add more initial tasks as needed
  ]);
  const [newTask, setNewTask] = useState("");

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks

    const newTaskObj = {
      id: tasks.length + 1,
      task: newTask,
      completed: false
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask(""); // Clear input after adding task
  };

  // Function to handle deleting a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
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
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Add</button>
      </div>
      {tasks.map(task => (
        <div key={task.id} className="flex items-center border-b py-2">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500"
            checked={task.completed}
            onChange={() => {/* Implement toggle completion logic */}}
          />
          <div className="ml-4 flex-grow">
            <div className="flex items-center justify-between">
              <span className={`text-gray-800 ${task.completed ? "line-through text-gray-400" : ""}`}>{task.task}</span>
              <button onClick={() => deleteTask(task.id)} className="text-red-500"><i className="fa fa-times"></i></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
