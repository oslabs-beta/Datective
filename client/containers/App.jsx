import React, { useEffect, useState } from "react";

import NavBar from "./NavBar.jsx";
import Topbar from "./Topbar.jsx";
import Back from "../components/Back.jsx"
import Forward from "../components/Forward.jsx"
import Development from "./Development.jsx";
import Production from "./Production.jsx";
import Header from "./Header.jsx";
import Home from "../components/Home.jsx";
import HomeButton from "../components/HomeButton.jsx";
import ChartsContainer from "./ChartsContainer.jsx";
import URIList from "../components/URIList.jsx";
import URI from "../components/URI.jsx";
import Dashboard from "./Dashboard.jsx";
import Settings from "../components/Settings.jsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "../styles/globals.scss";

const App = () => {

  const [simulation, setSimulation] = useState(false);
  const [monitoring, setMonitoring] = useState(false);

  return (
    <Router>
      <div className="fullApp">
        <NavBar />
        <Topbar />
        <Back />
        <Forward />
        <Header setSimulation={setSimulation} setMonitoring={setMonitoring} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/urilist" element={<URIList />} />
            <Route path="/uri" element={<URI />} />
            <Route path="/uri/:id" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/development/:id" element={<Development />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
