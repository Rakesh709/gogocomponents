// src/App.jsx
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Sidebar from "./components/Sidebar";
// import ComponentPreview from "./components/ComponentPreview";
// import Toggle from "./components/Toggle.jsx"
// import { useState } from "react";

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

const ghostButton =`
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
    
`
// card section

const simpleCard =`
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
`

const profileCard =`
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
  
`
const imageCard=`
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
  
`


export default function App() {
  return (
    // <div className="w-full">
    //   <Navbar />
    //   <div className="flex">
    //     <Sidebar />
    //     <main className="flex-1 p-8 overflow-y-auto">
    //       <h2 className="text-3xl font-bold mb-6 text-brown-900">
    //         All Components
    //       </h2>
    //       <div>
    //       <a className="bg-amber-200" href="#testSection">Click me</a>
    //       </div>
    //       {/* <ComponentPreview title="NavBar" code={navbarCode}>
    //         <Navbar/>
    //       </ComponentPreview> */}
    //       {/* THIS IS FOR TOOGLE BUTTON */}

    //       <ComponentPreview title="Toggle Button" code={toogleButton}>
    //         <Toggle/>
    //       </ComponentPreview>
    //       <ComponentPreview title="Toggle Button" code={toogleButton}>
    //         <Toggle/>
    //       </ComponentPreview>
    //       <ComponentPreview title="Toggle Button" code={toogleButton}>
    //         <Toggle/>
    //       </ComponentPreview>
    //       <ComponentPreview title="Toggle Button" code={toogleButton}>
    //         <Toggle/>
    //       </ComponentPreview>
    //       <ComponentPreview title="Toggle Button" code={toogleButton}>
    //         <Toggle/>
    //       </ComponentPreview>
    //       <ComponentPreview title="Toggle Button" code={toogleButton}>
    //         <Toggle/>
    //       </ComponentPreview>

    //       <div id="testSection">
    //       <ComponentPreview title="Toggle test" code={toogleButton} >
    //         <Toggle/>
    //       </ComponentPreview>
    //       </div>
    //     </main>
    //   </div>
    // </div>

    <div className="w-full">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-brown-900">
            All Components
          </h2>
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
            <h3 className="text-xl font-bold py-2" >Button Component</h3>

            <ComponentPreview title="Primary Button" code={primaryButton}>
              <PrimaryButton/>
            </ComponentPreview>

            <ComponentPreview title="Outline Button" code={outlineButton}>
              <OutlineButton/>
            </ComponentPreview>

            <ComponentPreview title="Ghost Button" code={ghostButton}>
              <GhostButton/>
            </ComponentPreview>
          </div>
          {/* -------------------cardSection -----------------------------*/}
          <div id="cardSection">
            <h3 className="text-xl font-bold">Card Component</h3>
            <ComponentPreview title="Simple Card" code={simpleCard}>
              <SimpleCard/>
            </ComponentPreview>

            <ComponentPreview title="Profile Card" code={profileCard}>
              <ProfileCard/>
            </ComponentPreview>

            <ComponentPreview title="Image Card" code={imageCard}>
              <ImageCard/>
            </ComponentPreview>
          </div>
        </main>
      </div>
    </div>
  );
}
