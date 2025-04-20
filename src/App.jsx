
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar";
import ComponentPreview from "./components/ComponentPreview";
import Toggle from "./components/Toggle";
import PrimaryButton from "./components/Buttons/PrimaryButton.jsx";
import OutlineButton from "./components/Buttons/OutlineButton.jsx";
import GhostButton from "./components/Buttons/GhostButton.jsx";
import SimpleCard from "./components/Cards/SimpleCard.jsx";
import ProfileCard from "./components/Cards/ProfileCard.jsx";
import ImageCard from "./components/Cards/ImageCard.jsx";
import PasswordInput from "./components/Inputs/PasswordInput.jsx";
import FloatingLabelInput from "./components/Inputs/FloatingLabelInput.jsx";
import ThemePicker from "./components/ThemePicker/ThemePicker.jsx";
import OTPInput from "./components/OtpInput/OTPInput.jsx";
import Badges from "./components/Badges/badges.jsx";

const navbarCode = `
              import React from 'react'
              
              function Navbar() {
                return (
                  <header className="w-full flex justify-between items-center  px-8 py-4 shadow bg-white border-b">
                    <h1 className="text-2xl font-bold text-brown-800 text-black m-1">
                      GoGoComponent
                    </h1>
                    <nav className="space-x-6">
                      <a href="#" className="hover:underline font-medium">
                        Home
                      </a>
                      <a href="#" className="hover:underline font-medium">
                        Components
                      </a>
                      <a href="#" className="hover:underline font-medium">
                        Docs
                      </a>
                      <a href="#" className="hover:underline font-medium">
                        Feedback
                      </a>
                      <button className="bg-brown-700 text-black px-4 py-1 border-r-black rounded cursor-pointer border-1 border-r-2">
                        GitHub
                      </button>
                    </nav>
                  </header>
                );
              }
              
              export default Navbar;
`;

const toogleButton = `
  import { useState } from "react";
  
  const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
  
    const toggle = () => setIsOn((prev) => !prev);
    return (
      <>
        <button
          onClick={toggle}
          className={"relative w-14 h-8 rounded-full transition-colors duration-300 px-1 " + (isOn ? "bg-yellow-400" : "bg-gray-600")}
        >
          <span
            className={"absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center text-[16px] " + (isOn ? "translate-x-6" : "")}
          >
            {isOn ? "🌞" : "🌙"}
          </span>
        </button>
      </>
    );
  };
  
  export default Toggle;
`;

const primaryButton = `
    import React from "react";
    
    function PrimaryButton() {
      return (
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Primary
          </button>
        </div>
      );
    }
    
    export default PrimaryButton;
    
`;
const outlineButton = `
  import React from "react";
  
  function PrimaryButton() {
    return (
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Primary
        </button>
      </div>
    );
  }
  
  export default PrimaryButton;
  
`;

const ghostButton = `
    import React from "react";
    
    function GhostButton() {
      return (
        <div>
          <button className="bg-transparent border border-gray-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition">
            Ghost
          </button>
        </div>
      );
    }
    
    export default GhostButton;
    
`;
// card section

const simpleCard = `
  import React from "react";
  
  function SimpleCard() {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
        <h3 className="text-xl font-semibold mb-2">Simple Card</h3>
        <p className="text-gray-700">
          This is a basic card layout with some text content.
        </p>
      </div>
    );
  }
  
  export default SimpleCard;
`;

const profileCard = `
  import React from "react";
  
  function ProfileCard() {
    return (
      <div>
        <div className="max-w-sm bg-white rounded-lg shadow p-6 text-center">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://i.pravatar.cc/150?img=3"
            alt="Profile"
          />
          <h3 className="text-xl font-bold">Jane Doe</h3>
          <p className="text-gray-500">Frontend Developer</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Follow
          </button>
        </div>
      </div>
    );
  }
  
  export default ProfileCard;
  
`;
const imageCard = `
  import React from "react";
  
  function ImageCard() {
    return (
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src="https://source.unsplash.com/random/400x300"
            alt="Random"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Card with Image</h3>
            <p className="text-gray-600">
              Nice picture, right? This is a card with an image header.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ImageCard;
  
`;

//input component

const passwordInput=`
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
`

const floatingLabelInput=`
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
  
`

//theme picker
const themePicker =`
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
`
//otp Input

const otpInput=`
import React, { useState } from "react";
import OtpInput from "react-otp-input";

function OTPInput() {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex justify-center">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        separator={<span className="mx-1">-</span>}
        inputStyle="w-10 h-10 border rounded text-center"
        isInputNum
      />
    </div>
  );
}

export default OTPInput;
`

//Badges
const badge=`
import React from "react";

function Badges() {
    const badges = [
        { label: "New", color: "bg-green-100 text-green-800" },
        { label: "Beta", color: "bg-yellow-100 text-yellow-800" },
        { label: "Pro", color: "bg-purple-100 text-purple-800" },
        { label: "Coming Soon", color: "bg-blue-100 text-blue-800" },
        { label: "🔥 Trending", color: "bg-red-100 text-red-800" },
      ];
  return (
    <div className="flex flex-wrap gap-3 p-4 bg-white shadow rounded">
      {badges.map((badge, index) => (
        <span
          key={index}
          className="{px-3 py-1 text-sm font-semibold rounded-full '}"
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}

export default Badges;

`

export default function App() {
  return (
    <div className="w-full">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-brown-900">
            All Components
          </h2>
          {/* Theme Picker */}

          <div id="themePicker">
            <h3 className="text-xl font-bold">ThemePicker Component</h3>
            <ComponentPreview title="Theme Picker" code={themePicker}>
              {/* <ThemePicker /> */}
              <p>Sorry my Friend 😊 No Preview Available  </p>
            </ComponentPreview>

          </div>

          {/* otp Input 
          <div id="otpInput">
            <h3 className="text-xl font-bold">OTP Input</h3>
            <ComponentPreview title="OTP Input" code={otpInput}>
              <OTPInput/>
            </ComponentPreview>

          </div> */}


          {/* ------------------------------------------------- */}
          <div id="navbarSection">
            <h3 className="text-xl font-bold">Navbar Component</h3>
            <ComponentPreview title="NavBar Section" code={navbarCode}>
              <Navbar />
            </ComponentPreview>
          </div>
          {/* ------------------------------------------------- */}
          <div id="toggleSection">
            <h3 className="text-xl font-bold">Toggle Button Component</h3>
            <ComponentPreview title="Toggle Button" code={toogleButton}>
              <Toggle />
            </ComponentPreview>
          </div>
          {/* ---------------buttonSection---------------------------------- */}
          <div id="buttonSection">
            <h3 className="text-xl font-bold py-2">Button Component</h3>

            <ComponentPreview title="Primary Button" code={primaryButton}>
              <PrimaryButton />
            </ComponentPreview>

            <ComponentPreview title="Outline Button" code={outlineButton}>
              <OutlineButton />
            </ComponentPreview>

            <ComponentPreview title="Ghost Button" code={ghostButton}>
              <GhostButton />
            </ComponentPreview>
          </div>
          {/* -------------------cardSection -----------------------------*/}
          <div id="cardSection">
            <h3 className="text-xl font-bold">Card Component</h3>
            <ComponentPreview title="Simple Card" code={simpleCard}>
              <SimpleCard />
            </ComponentPreview>

            <ComponentPreview title="Profile Card" code={profileCard}>
              <ProfileCard />
            </ComponentPreview>

            <ComponentPreview title="Image Card" code={imageCard}>
              <ImageCard />
            </ComponentPreview>
          </div>

          {/* inputComponents */}

          <div id="inputSection">
            <h3 className="text-xl font-bold">Input Component</h3>
            <ComponentPreview title="Password Input" code={passwordInput}>
              <PasswordInput />
            </ComponentPreview>

            <ComponentPreview title="Floadting Input" code={floatingLabelInput}>
              <FloatingLabelInput />
            </ComponentPreview>
          </div>

          {/* badges section */}
          <div id="badgeSection">
            <h3 className="text-xl font-bold">Badge Component</h3>
            <ComponentPreview title="Badge" code={badge}>
              <Badges/>
            </ComponentPreview>

          
          </div>

        </main>
      </div>
    </div>
  );
}
