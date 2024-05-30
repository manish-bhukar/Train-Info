import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LiveTrainForm = ({ onSubmit }) => {
  const [trainNo, setTrainNo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
   
    navigate(`/live-train-info/trainNo=${trainNo}/date=${date}`);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6">Live Train Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="trainNo" className="block text-sm font-medium text-gray-700">
              Train Number:
            </label>
            <input
              type="text"
              id="trainNo"
              className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={trainNo}
              onChange={(e) => setTrainNo(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date (dd-mm-yyyy):
            </label>
            <input
              type="text"
              id="date"
              className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="dd-mm-yyyy"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Get Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveTrainForm;
