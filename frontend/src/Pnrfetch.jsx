import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PnrStatus() {
  const [pnrData, setPnrData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Get the pnr from URL params
  const { pnr } = useParams();

  useEffect(() => {
    async function fetchPnrData() {
      try {
        const response = await axios.get(`/getPNRinfo/?pnr=${pnr}`);
        setPnrData(response.data);
        console.log(response)
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchPnrData();
  }, [pnr]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pnrData) {
    return <div>Error fetching data</div>;
  }

  const {
    BookingDate,
    ArrivalTime,
    Class,
    DestinationName,
    TrainNo,
    TrainName,
    Doj,
    From,
    To,
    DepartureTime,
    PassengerStatus
  } = pnrData;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">PNR Status</h2>
      <h3 className="text-xl font-semibold mb-2">Important Information</h3>
      <p><strong>PNR:</strong> {pnr}</p>
      <p><strong>Train No:</strong> {TrainNo}</p>
      <p><strong>Train Name:</strong> {TrainName}</p>
      <p><strong>Date of Journey:</strong> {Doj}</p>
      <p><strong>From:</strong> {From}</p>
      <p><strong>To:</strong> {To}</p>
      <p><strong>Departure Time:</strong> {DepartureTime}</p>
      <p><strong>Arrival Time:</strong> {ArrivalTime}</p>
      <p><strong>Class:</strong> {Class}</p>
      <p><strong>Booking Date:</strong> {BookingDate}</p>
      <p><strong>Destination:</strong> {DestinationName}</p>
      <h3 className="text-xl font-semibold mb-2">Passenger Status</h3>
      {/* {PassengerStatus.map((passenger, index) => (
        <div key={index} className="passenger-status mb-4">
          <p><strong>Passenger {index + 1}:</strong></p>
          <p><strong>Coach:</strong> {passenger.Coach}</p>
          <p><strong>Berth:</strong> {passenger.Berth}</p>
          <p><strong>Booking Status:</strong> {passenger.BookingStatus}</p>
          <p><strong>Current Status:</strong> {passenger.CurrentStatus}</p>
        </div>
      ))} */}
    </div>
  );
}

export default PnrStatus;
