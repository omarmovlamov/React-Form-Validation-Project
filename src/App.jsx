import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import General from "./components/General";
import Portal from "./components/Portal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
      <p>All rights reserved | omarmovlamov</p>
    </div>
  );
}
export default App;
