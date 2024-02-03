import React from "react";

export default function Banner(){
    return (
        <header className="header">
  <div className="container">
    <ul className="social-icons pt-3">
      <li className="social-item">
        <a className="social-link text-light" href="#">
          <i className="ti-facebook" aria-hidden="true" />
        </a>
      </li>
      <li className="social-item">
        <a className="social-link text-light" href="#">
          <i className="ti-twitter" aria-hidden="true" />
        </a>
      </li>
      <li className="social-item">
        <a className="social-link text-light" href="#">
          <i className="ti-google" aria-hidden="true" />
        </a>
      </li>
      <li className="social-item">
        <a className="social-link text-light" href="#">
          <i className="ti-instagram" aria-hidden="true" />
        </a>
      </li>
      <li className="social-item">
        <a className="social-link text-light" href="#">
          <i className="ti-github" aria-hidden="true" />
        </a>
      </li>
    </ul>
    <div className="header-content">
      <h4 className="header-subtitle">Hello, I am</h4>
      <h1 className="header-title">Ayrton Frieslaar</h1>
      <h6 className="header-mono">Title | Developer</h6>
      <button className="btn btn-primary btn-rounded">
        <i className="ti-file pr-2" />
        Download CV
      </button>
    </div>
  </div>
</header>

    )
}