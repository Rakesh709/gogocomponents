import { useState } from "react";

export default function ComponentPreview({ title, children, code }) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border rounded shadow bg-white mb-10 border-r-2 border-b-2 border-black">
      <div className="p-4 font-semibold text-xl">{title}</div>

      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-2 text-center font-medium border-b-2 text-black ${
            activeTab === "preview"
              ? "border-blue-500 text-black"
              : "border-transparent text-gray-500"
          }`}
        >
          👁️ Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex-1 py-2 text-center font-medium border-b-2 text-black ${
            activeTab === "code"
              ? "border-blue-500 text-black"
              : "border-transparent text-gray-500"
          }`}
        >
          {"</>"}  Code
        </button>
      </div>

      <div className="p-4">
        {activeTab === "preview" ? (
          <div className="bg-gray-50 p-4 rounded border">{children}</div>
        ) : (
          <div className="relative">
            <button
              onClick={copyCode}
              className="absolute top-2 right-2 text-sm bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
              <code className="whitespace-pre">{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
