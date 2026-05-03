import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: 20, background: "#eee" }}>
      <nav style={{ display: "flex", gap: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}