// Hooks
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import { Header } from "./components/";
import Home from "./components/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
};

export default App;
