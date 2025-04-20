import React from "react";
import Navbar from "../Navbar/Navbar";

function Documentation() {
  return (
    <div className="max-w-full space-y-2 mb-3 ">
      <Navbar />
      <div className="p-6 bg-white border rounded shadow max-w-3xl mx-auto border-r-2 border-black border-b-2">
        <h1 className="text-2xl font-bold mb-4">🚀 Installation Guide</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. Create Vite + React Project
          </h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            <code>
              npx create-vite@latest my-app --template react <br />
              cd my-app <br />
              npm install
            </code>
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Install Tailwind CSS
          </h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            <code>npm install tailwindcss @tailwindcss/vite</code>
          </pre>
          <p className="text-gray-700 mt-2">
            Add the @tailwindcss/vite plugin to your Vite configuration. <br />
            <code>
              content:import tailwindcss from '@tailwindcss/vite'
              
              plugins: [tailwindcss(),]
            </code>
          </p>

          <p className="text-gray-700 mt-2">
            And in <code>index.css</code> or <code>App.css</code>:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto mt-2">
            <code>
              @tailwind base;
              <br />
              @tailwind components;
              <br />
              @tailwind utilities;
            </code>
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Install Icons and Router
          </h2>
          <ul className="list-disc ml-6 mb-2 text-gray-800">
            <li>
              <code>lucide-react</code>: Elegant icon library
            </li>
            <li>
              <code>react-icons</code>: Popular icon sets like Feather,
              FontAwesome, etc.
            </li>
            <li>
              <code>react-router</code>: Routing solution for React
            </li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            <code>npm install lucide-react react-icons react-router</code>
          </pre>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">✅ Done!</h2>
          <p className="text-gray-700">
            You’re all set to start building your website with Vite,
            TailwindCSS, and awesome icon and routing libraries.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Documentation;
