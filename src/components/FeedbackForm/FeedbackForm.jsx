import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log feedback
    console.log("Feedback submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="max-w-full">
      <Navbar />

      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-10">
        <h2 className="text-2xl font-semibold mb-4">💬 Feedback</h2>

        {submitted ? (
          <div className="text-green-600 font-medium">
            Thank you for your feedback! 🙌
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="text-center mt-6">
        <p className="font-semibold text-lg">
          This is dummy feedback. Please reach out via
        </p>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a
            href="https://github.com/rakesh709"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-kumar-6b3228145/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
