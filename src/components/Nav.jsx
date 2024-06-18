import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div id="navbar">
      <Link to="/Blue">Blue</Link>
      <Link to="/Red">Red</Link>
      <Link to="/Green">Green</Link>
      <Link to="/Game">Game</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
