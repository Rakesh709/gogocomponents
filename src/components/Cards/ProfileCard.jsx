import React from "react";

function ProfileCard() {
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg shadow p-6 text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src="https://i.pravatar.cc/150?img=3"
          alt="Profile"
        />
        <h3 className="text-xl font-bold">Jane Doe</h3>
        <p className="text-gray-500">Frontend Developer</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Follow
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
