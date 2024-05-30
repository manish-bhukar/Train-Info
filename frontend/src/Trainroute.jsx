import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./train.css"; // Import the provided CSS file

const TrainRouteMap = () => {
  const { trainNo } = useParams();
  const [routeData, setRouteData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:6080/getRoute?trainNo=${trainNo}`);
        const responseData = response.data;
        const data = responseData.data;

        const stationsWithOrder = data.map((station, index) => ({
          ...station,
          order: index + 1,
        }));

        const sortedStations = stationsWithOrder.sort((a, b) => a.order - b.order);

        setRouteData(sortedStations);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching train route data:", error);
        setLoading(false);
      }
    };

    fetchRouteData();
  }, [trainNo]);

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
          className={`timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`}
          style={{ zIndex: 9000 - index, backgroundColor: `var(--color${index % 7 + 1})` }}
        >
          {index !== 0 && (
            <div className="grey-line" style={{ left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#b7b7b7' }}></div>
          )}
          <div className="arrow-end" style={{ borderLeft: `15px solid var(--color${index % 7 + 1})` }}></div>
          <div className="content-half-circle"></div>
          <div className="buble-content">
            <div className="content-year">
              <p className="time" style={{ backgroundColor: `var(--color${index % 7 + 1})` }}>Arrive: { station.arrive}</p>
              <p className="station-name bg-white text-black sliding-text">{station.source_stn_name}</p>
              <p className="time" style={{ backgroundColor: `var(--color${index % 7 + 1})` }}>{station.depart}</p>
            </div>
          </div>
          <div className="circle" style={{ backgroundColor: `var(--color${index % 7 + 1})` }}>
            <div className="inner-circle" style={{ backgroundImage: `url(https://cdn-icons-png.flaticon.com/512/9746/9746772.png)` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainRouteMap;
