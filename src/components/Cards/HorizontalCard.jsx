import React from "react";

function HorizontalCard() {
  return (
    <div>
      <div className="flex bg-white shadow rounded overflow-hidden max-w-2xl">
        <img
          src="https://source.unsplash.com/random/200x200"
          alt="Example"
          className="w-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">Horizontal Layout</h3>
          <p className="text-gray-600">
            Cards can be horizontal too! Great for listings or previews.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
