import React from "react";

export default function About(){
    return (
        
        
        <section id="about">
            <div className="container-fluid">
  <div id="about" className="row about-section">
    <div className="col-lg-4 about-card">
      <h3 className="font-weight-light">Howdy, I'm Ayrton</h3>
      <span className="line mb-5" />
      <h5 className="mb-3">
        Lmao
      </h5>
      <p className="mt-20">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui
        deserunt consequatur fugit repellendusillo voluptas?
      </p>
      <button className="btn btn-outline-danger">
        <i className="icon-down-circled2 " />
        Download My CV
      </button>
    </div>
    <div className="col-lg-4 about-card">
      <h3 className="font-weight-light">About me</h3>
      <span className="line mb-5" />

    </div>
    <div className="col-lg-4 about-card">
    <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./laptop.svg"
          />
    </div>
  </div>
</div>


        </section>
    )
}