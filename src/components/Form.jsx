import React, { useState } from 'react';
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error message when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      errors.name = 'Name cannot contain numbers or special characters';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.age.trim()) {
      errors.age = 'Age is required';
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      errors.age = 'Age must be a valid number greater than zero';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Submit logic (e.g., API call)
      console.log('Form submitted:', formData);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
      });
      setFormErrors({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl">
        <form className="bg-white p-6 rounded-lg shadow-md relative z-10" onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-6 text-center">Custom Form Example</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              <AiOutlineUser className="inline-block mr-2 text-gray-500" />Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            />
            {formErrors.name && (
              <p className="mt-1 text-xs text-red-600">
                <AiOutlineExclamationCircle className="inline-block mr-1" />
                {formErrors.name}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              <AiOutlineMail className="inline-block mr-2 text-gray-500" />Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            />
            {formErrors.email && (
              <p className="mt-1 text-xs text-red-600">
                <AiOutlineExclamationCircle className="inline-block mr-1" />
                {formErrors.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              <AiOutlineLock className="inline-block mr-2 text-gray-500" />Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                formErrors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            />
            {formErrors.password && (
              <p className="mt-1 text-xs text-red-600">
                <AiOutlineExclamationCircle className="inline-block mr-1" />
                {formErrors.password}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              <AiOutlineLock className="inline-block mr-2 text-gray-500" />Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                formErrors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            />
            {formErrors.confirmPassword && (
              <p className="mt-1 text-xs text-red-600">
                <AiOutlineExclamationCircle className="inline-block mr-1" />
                {formErrors.confirmPassword}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              <AiOutlineUser className="inline-block mr-2 text-gray-500" />Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                formErrors.age ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            />
            {formErrors.age && (
              <p className="mt-1 text-xs text-red-600">
                <AiOutlineExclamationCircle className="inline-block mr-1" />
                {formErrors.age}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
