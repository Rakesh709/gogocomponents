import React from 'react'
import { FiDownload } from "react-icons/fi";

function IconButton() {
  return (
    <div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
    <FiDownload />
    Download
  </button>
    </div>
  )
}

export default IconButton