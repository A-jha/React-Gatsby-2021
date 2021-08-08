import { Link } from "gatsby"
import React, { useState } from "react"
import { FiAlignJustify } from "react-icons/fi"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <span>Simpley</span>
              <span>Reciepes</span>
            </Link>
            <button className="nav-btn" onClick={() => setShow(!show)}>
              <FiAlignJustify />
            </button>
          </div>
          <div className={show ? "nav-links show-links" : "nav-links"}>
            <Link to="/" className="nav-link" activeClassName="active-link">
              Home
            </Link>
            <Link
              to="/recipes"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(!show)}
            >
              Recipes
            </Link>
            <Link
              to="/tags"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(!show)}
            >
              Tags
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(!show)}
            >
              about
            </Link>
            <div className="nav-link contact-link">
              <Link
                to="/contact"
                className="btn"
                onClick={() => setShow(!show)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
