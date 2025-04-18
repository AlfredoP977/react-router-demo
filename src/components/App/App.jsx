import "./App.css";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard"; // New import

import Reviews from "../Reviews/Reviews";
import AboutMe from "../AboutMe/AboutMe";
import AboutUs from "../AboutUs/AboutUs";

import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";
import MyStory from "../AboutMe/MyStory";

import SiteMission from "../AboutUs/SiteMission";
import SiteHistory from "../AboutUs/SiteHistory";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Wrap a Route component inside a Routes component
          and specify the path and element attributes as shown. */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="hobbies" element={<SiteMission />} />
          <Route path="my-story" element={<SiteHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
