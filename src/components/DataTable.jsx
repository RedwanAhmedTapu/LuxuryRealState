import React, { useState } from "react";
import Toast from "./Toast";

const DataTable = () => {
  const [tableRows, setTableRows] = useState([
    {
      id: 1,
      date: "01 Jan 2045",
      invoice: "INV-0123",
      customer: "John Doe",
      amount: "$123",
      status: "Paid",
    },
    {
      id: 2,
      date: "02 Jan 2045",
      invoice: "INV-0124",
      customer: "Jane Doe",
      amount: "$456",
      status: "Pending",
    },
    {
      id: 3,
      date: "03 Jan 2045",
      invoice: "INV-0125",
      customer: "Michael Smith",
      amount: "$789",
      status: "Paid",
    },
    // Add more initial rows as needed
  ]);

  const [toastData, setToastData] = useState({
    showToast: false,
    toastType: "success", // success or error
    toastMessage: "",
  });
  console.log(toastData.showToast,"d")

  // Function to add a new row
  const addRow = () => {
    const newRow = {
      id: tableRows.length + 1,
      date: "New Date",
      invoice: "New Invoice",
      customer: "New Customer",
      amount: "$0",
      status: "Pending",
    };
    setTableRows([...tableRows, newRow]);
  };

  // Function to delete a row
  const deleteRow = (id) => {
    const updatedRows = tableRows.filter((row) => row.id !== id);
    setTableRows(updatedRows);
    setToastData({
      showToast: true,
      toastType: "success",
      toastMessage: "Row deleted successfully!",
    });
  };

  // Function to update row data (for future use)
  const updateRow = (id) => {
    // Implement update logic as needed
    setToastData({
      showToast: true,
      toastType: "error",
      toastMessage: "Update functionality is not implemented yet.",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h6 className="text-xl font-bold text-gray-800">Recent Sales</h6>
          <button onClick={addRow} className="text-blue-500">
            Add New Row
          </button>
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
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.id} className="border-t hover:bg-gray-100">
                  <td className="py-2 px-4">{row.date}</td>
                  <td className="py-2 px-4">{row.invoice}</td>
                  <td className="py-2 px-4">{row.customer}</td>
                  <td className="py-2 px-4">{row.amount}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        row.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => updateRow(row.id)}
                      className="text-blue-500"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteRow(row.id)}
                      className="ml-2 text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toast {...toastData} />
    </div>
  );
};

export default DataTable;
