import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TrainCard() {
  const [trainNo, setTrainNo] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  
    navigate(`/train-info/${trainNo}`);
  };

  const handleShowRoute = () => {
    navigate(`/train-route/${trainNo}`);
  };
  const handleLive=()=>{
    navigate('/train-live')
  }
  const handleOther = () =>{
    navigate('/getassistance')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-800 to-indigo-600 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Enter Train Number
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="trainNo"
              className="block text-sm font-medium text-gray-700"
            >
              Train Number:
            </label>
            <input
              type="text"
              id="trainNo"
              value={trainNo}
              onChange={(e) => setTrainNo(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter train number"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleShowRoute}
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
          >
            {"Find Train Route"}
          </button>
          <button
            type="button"
            onClick={handleLive}
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
          >
            {"Find Live  Train Route"}
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Loading..." : "Find train info"}
          </button>
          <button
            type="submit"
            onClick={handleOther}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            
          >
            {"Get assistance"}
          </button>
          
        </form>
      </div>
    </div>
  );
}
