import React from "react";
import Background from "./components/Background.jsx";
import Footer from "./components/Footer.jsx";
import FSDestinations from "./components/FSDestinations.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar/>
      <Background />
      <FSDestinations />
      <Footer />  
    </div>
  );
}

export default App;
