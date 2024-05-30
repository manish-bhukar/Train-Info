import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./livetrain.css"; // Import the provided CSS file

const LiveTrain = () => {
  const { trainNo, date } = useParams();
  const [routeData, setRouteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentStation, setCurrentStation] = useState("");
  const trainNumber = trainNo.split('=')[1];
  const dat = date.split('=')[1];

  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:6080/getLiveTrainInfo?trainNo=${trainNumber}&date=${dat}`);
        const responseData = response.data;
        const route = responseData.route; // Access the route object
        const liveStatusArray = responseData["live status"]; // Access the live status array

        // Check if live status is an array before setting the routeData state
        if (Array.isArray(liveStatusArray)) {
          setRouteData(liveStatusArray);
          setCurrentStation(route.current["current station code"]);
        } else {
          console.error("Live status is not an array:", liveStatusArray);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching train route data:", error);
        setLoading(false);
      }
    };

    fetchRouteData();
  }, [trainNo, date]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (routeData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md">
          <p className="text-red-500">No data found for this train number</p>
        </div>
      </div>
    );
  }

  return (
    <div className="timeline">
      {routeData.map((station, index) => (
        <div
          key={station.station_code}
          className={`timeline-item ${index % 2 === 0 ? 'even' : 'odd'} ${station.Has_passed ? 'passed' : ''} ${station.station_code === currentStation ? 'current' : ''}`}
          style={{ zIndex: 9000 - index, backgroundColor: `var(--color${index % 7 + 1})` }}
        >
          {index !== 0 && (
            <div className="grey-line" style={{ left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#b7b7b7' }}></div>
          )}
          <div className="arrow-end" style={{ borderLeft: `15px solid var(--color${index % 7 + 1})` }}></div>
          <div className="content-half-circle"></div>
          <div className="buble-content">
            <div className="content-year">
              <p className="time" style={{ backgroundColor: `var(--color${index % 7 + 1})` }}>{station.Arrival}</p>
              <p className="station-name bg-white text-black sliding-text">{station.Station}</p>
              <p className="time" style={{ backgroundColor: `var(--color${index % 7 + 1})` }}>{station.Departure}</p>
            </div>
          </div>
          <div className="circle" style={{ backgroundColor: `var(--color${index % 7 + 1})` }}>
            <div className="inner-circle">
              {station.station_code === currentStation && (
                <div className="current-train-dot"></div>
              )}
            {station['Has passed']&& (
                <div className="passed-mark">&#10004;</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveTrain;
