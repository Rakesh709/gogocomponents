import React from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function PasswordInput() {
    const [show, setShow] = useState(false);
  return (
    <div>
      <div className="relative max-w-xs">
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-2.5 text-gray-500"
        >
          {show ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
