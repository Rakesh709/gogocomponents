import React from "react";

function FloatingLabelInput() {
  return (
    <div>
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          id="floating"
          placeholder=" "
          className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 focus:outline-none focus:border-blue-500"
        />
        <label
          htmlFor="floating"
          className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Your Name
        </label>
      </div>
    </div>
  );
}

export default FloatingLabelInput;
