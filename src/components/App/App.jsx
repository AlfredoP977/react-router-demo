import "./App.css";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard"; // New import

import Reviews from "../Reviews/Reviews";
import AboutMe from "../AboutMe/AboutMe";
import AboutUs from "../AboutUs/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Wrap a Route component inside a Routes component
          and specify the path and element attributes as shown. */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
