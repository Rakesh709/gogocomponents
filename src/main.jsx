import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./components/HomePage/Homepage.jsx";
import Documentation from "./components/Documentation/Documentation.jsx";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm.jsx";
import Layout from "./components/Layout/Layout.jsx"; // New Layout
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="components" element={<App />} />
      <Route path="docs" element={<Documentation />} />
      <Route path="feedback" element={<FeedbackForm />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
