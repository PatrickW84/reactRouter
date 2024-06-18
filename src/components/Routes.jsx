import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Green from "./Green";
import Home from "./Home";
import Game from "./Game";

export default function R() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/Blue" element={<Blue />} />
        <Route path="/Red" element={<Red />} />
        <Route path="/Green" element={<Green />} />
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route
          path="*"
          element={<h1 className="lost">Lost in the woods?</h1>}
        />
      </Routes>
    </div>
  );
}
