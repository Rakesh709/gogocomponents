import React from 'react'
import { useState } from "react";

const themes = [
  { name: "Light", color: "#fef3c7" },
  { name: "Dark", color: "#1f2937" },
  { name: "Neon", color: "#34d399" },
  { name: "Candy", color: "#f472b6" },
];

function ThemePicker() {
    const [selectedTheme, setSelectedTheme] = useState(null);
  return (
    <div className="fixed bottom-6 right-6 bg-white shadow-lg border rounded-lg p-4 w-56">
      <h4 className="font-bold mb-3 text-gray-700">🎨 Pick a Theme</h4>
      <div className="grid grid-cols-2 gap-3">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => setSelectedTheme(theme.name)}
            className="flex items-center gap-2 p-2 border rounded hover:scale-105 transition-transform"
            style={{ borderColor: theme.color }}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: theme.color }}
            ></div>
            <span className="text-sm">{theme.name}</span>
          </button>
        ))}
      </div>
      {selectedTheme && (
        <p className="mt-3 text-sm text-gray-600 text-center">
          Selected: <span className="font-semibold">{selectedTheme}</span>
        </p>
      )}
    </div>
  )
}

export default ThemePicker