import React from 'react'
import ComponentPreview from "../ComponentPreview.jsx";
import Navbar from '../Navbar/Navbar.jsx';
function Header() {
  return (
    <div>
        <ComponentPreview title="NavBar" code={navbarCode}>
            <Navbar/>
          </ComponentPreview>
          {/* THIS IS FOR TOOGLE BUTTON */}
          <ComponentPreview title="Toggle Button" code={toogleButton}>
            <Toggle/>
          </ComponentPreview>
          <ComponentPreview title="Toggle Button" code={toogleButton}>
            <Toggle/>
          </ComponentPreview>
    </div>
  )
}

export default Header