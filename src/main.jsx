import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./components/HomePage/Homepage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Documentation from "./components/Documentation/Documentation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/components" element={<App />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
