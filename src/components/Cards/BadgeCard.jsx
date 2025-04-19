import React from "react";

function BadgeCard() {
  return (
    <div>
      <div className="bg-white rounded shadow p-5 max-w-sm">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold">Product Title</h3>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            New
          </span>
        </div>
        <p className="text-gray-600 mb-4">
          This is a product card with a badge and call-to-action.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default BadgeCard;
