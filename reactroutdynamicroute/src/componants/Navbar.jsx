import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/products">Products</Link>
      </h1>
    </div>
  );
};
