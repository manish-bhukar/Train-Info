import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PnrForm() {
  const [pnr, setPnr] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pnrinfo/${pnr}`);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">PNR Input Form</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pnr" className="block text-sm font-medium text-gray-700">
              Enter PNR:
            </label>
            <div className="mt-1">
              <input
                id="pnr"
                name="pnr"
                type="text"
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
                autoComplete="off"
                required
                className="appearance-none block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g. ABC123"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PnrForm;
