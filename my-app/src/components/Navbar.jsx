import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg custom-nav">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} height="60" alt="Logo" />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>

                <ul className="dropdown-menu custom-dropdown">
                  <li><Link className="dropdown-item" to="/iotdev">IOT Development</Link></li>
                  <li><Link className="dropdown-item" to="/appdev">Application Development</Link></li>
                  <li><Link className="dropdown-item" to="/cloudservices">Cloud Services</Link></li>
                  <li><Link className="dropdown-item" to="/softwaredev">Software Development</Link></li>
                  <li><Link className="dropdown-item" to="/mobileappdev">Mobile App Development</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;