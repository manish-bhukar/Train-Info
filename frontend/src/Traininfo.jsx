import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TrainInfoPage() {
  const { trainNo } = useParams();
  const[d,setD]=useState();
  const [trainData, setTrainData] = useState(null);
  const [loading, setLoading] = useState(true);
console.log(trainNo)
  useEffect(() => {
    const fetchTrainInfo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:6080/getTrainInformation/?trainNo=${trainNo}`
        );
        setD(response.data);
        console.log(response.data)
        const trainD = response.data;
        const fetchedTrainData = trainD.data;
        setTrainData(fetchedTrainData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching train data:", error);
        setLoading(false);
      }
    };

    fetchTrainInfo();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md">
          <p className="text-lg font-medium text-gray-800">Loading...</p>
        </div>
      </div>
    );
  }

  if (d.success==false) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md">
          <p className="text-red-500">No data found for this train number</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-800 to-indigo-600 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Train Information
        </h2>
        <div className="mb-4">
          <p className="text-lg font-medium">
            <strong>Train Number:</strong> {trainData.train_no}
          </p>
          <p className="text-lg font-medium">
            <strong>Train Name:</strong> {trainData.train_name}
          </p>
          <p className="text-lg font-medium">
            <strong>Start time:</strong> {trainData.from_time}
          </p>
          <p className="text-lg font-medium">
            <strong>End time:</strong> {trainData.to_time}
          </p>
          <p className="text-lg font-medium">
            <strong>Start station:</strong> {trainData.from_stn_name}
          </p>
          <p className="text-lg font-medium">
            <strong>End station:</strong> {trainData.to_stn_name}
          </p>
          <p className="text-lg font-medium">
            <strong>Train type:</strong> {trainData.type}
          </p>
          <p className="text-lg font-medium">
            <strong>Total distance travelled:</strong> {trainData.distance_from_to}
          </p>
          <p className="text-lg font-medium">
            <strong>Average speed:</strong> {trainData.average_speed}
          </p>

          {/* Add more train data fields here */}
        </div>
      </div>
    </div>
  );
}
