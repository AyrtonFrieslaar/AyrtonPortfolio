import { ArrowRightIcon } from "@heroicons/react/solid"
import React from "react";

export default function Navbar(){
    return(
<nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark rounded shadow mb-3">
  <div className="container">
    <a className="navbar-brand" href="#">
      Ayrton
    </a>
    <button
      className="navbar-toggler ml-auto"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#service">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team">
            Skills
          </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#contact">
                Contact me
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    )
}