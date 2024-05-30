import React from 'react';

function AssistanceCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <svg className="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* You can replace this with your preferred icon */}
            <path d="M0 0h24v24H0V0z" fill="none"/>
          </svg>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Assistance</div>
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 sm:text-2xl sm:truncate">Contact on this number 1234567890</h3>
        </div>
      </div>
    </div>
  );
}

export default AssistanceCard;
