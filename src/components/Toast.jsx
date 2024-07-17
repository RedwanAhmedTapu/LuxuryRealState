import React, { useState, useEffect } from "react";

const Toast = ({ showToast, toastType, toastMessage }) => {
  const [visible, setVisible] = useState(false);
  console.log(showToast,"toast")

  useEffect(() => {
    setVisible(showToast);
    if (showToast) {
      setTimeout(() => {
        setVisible(false);
      }, 1500);
    }
  }, [showToast,toastMessage,toastType]);

  return (
    <div className={`fixed top-20 right-10 z-50 ${visible ? "block" : "hidden"}`}>
      <div
        className={`bg-white border-l-4 ${
          toastType === "success" ? "border-green-500" : "border-red-500"
        } shadow-lg rounded-lg p-4 flex items-center justify-between`}
      >
        <div className="flex items-center space-x-4">
          <span className={`text-2xl ${toastType === "success" ? "text-green-500" : "text-red-500"}`}>
            {toastType === "success" ? "✓" : "✕"}
          </span>
          <p className="text-lg">{toastMessage}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Toast;
