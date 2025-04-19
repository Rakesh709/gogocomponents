import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Homepage() {
  return (
    <div className="max-w-full">
      <Navbar />
      <div className="relative  overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px]  rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-10 right-0 w-[500px] h-[500px]  rounded-full blur-2xl opacity-20 animate-ping" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-medium italic">
            Lightning fast⚡
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-2">
            with <span className=" underline ">GogoComponent</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
            Supercharge your frontend with handcrafted React components that are
            responsive, accessible, and easy to drop into any project.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4"></div>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <div className="bg-[#111827] text-white px-5 py-3 rounded-lg shadow-md rotate-[-6deg] text-sm font-medium">
              copy & past
            </div>
            <div className="bg-[#fbfbfb] text-black border-1  px-4 py-4 rounded-full  shadow-md transform hover:scale-105 transition">
              nothing else
            </div>
            <div className="bg-[#1f2937] text-white px-4 py-4 rounded-lg text-xs font-semibold rotate-[-3deg]">
              & Deploy
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
