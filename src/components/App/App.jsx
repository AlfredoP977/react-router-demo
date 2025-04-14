import "./App.css";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard"; // New import

function App() {
  return (
    <div className="App">
      <Header />
      {/* Wrap a Route component inside a Routes component
          and specify the path and element attributes as shown. */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
