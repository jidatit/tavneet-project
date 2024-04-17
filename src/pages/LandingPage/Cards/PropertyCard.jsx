import React from 'react';

const PropertyCard = ({ type, houseNumber, plotArea, houseArea, price, sold }) => {
  return (
    <div className="w-fit py-3 px-7 rounded-lg border border-[#404040] bg-[rgba(0,0,0,0.3)] flex uppercase cursor-pointer hover:bg-white hover:text-gray-400">
      <div className="flex flex-col gap-2 pr-6 border-r border-[#404040]">
        <p className="text-[10px]">{type}</p>
        <p className="text-base">{houseNumber}</p>
      </div>
      <div className="flex flex-col gap-2 pl-6">
        <p className="text-[10px]">Plot, M²</p>
        <p className="text-base">{plotArea}</p>
      </div>
      <div className="flex flex-col gap-2 pl-6">
        <p className="text-[10px]">House, M²</p>
        <p className="text-base">{houseArea}</p>
      </div>
      <div className="flex flex-col gap-2 pl-6">
        <p className="text-[10px]">{sold ? 'Status' : 'Price, EUR'}</p>
        {sold ? (
          <p className="text-xs py-1 px-6 rounded-md bg-[#404040] text-white">sold</p>
        ) : (
          <p className="text-sm">{price}</p>
        )}
      </div>
    </div>
  );
};

export default PropertyCard
