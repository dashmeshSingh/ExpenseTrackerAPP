import React from "react";
import HomeComponent from "./modules/home";
import NavbarComponent from "./modules/home/NavbarComponent";
import "./App.css";

const App = () => {
  return (
    <div className="appcontainer">
      <NavbarComponent />
      
      <HomeComponent />
    </div>
  );
};

export default App;
