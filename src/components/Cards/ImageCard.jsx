import React from "react";

function ImageCard() {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1744671904209-671573b35fd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Random"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Card with Image</h3>
          <p className="text-gray-600">
            Nice picture, right? This is a card with an image header.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
