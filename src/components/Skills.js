import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { experiences, qualifications, skills } from "../data";

export default function Skills(){
    return(
<section className="section" id="resume">
  <div className="container">
    <h2 className="mb-5">
      <span className="text-danger">Skills</span> & Interests
    </h2>
    <div className="row">
    
      <div className="col-md-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            <div className="mt-2">
              <h4>Experience</h4>
              <span className="line" />
            </div>
          </div>
        {experiences.map((experience) => (  
        <div className="card-body">
            <h6 className="title text-danger">{experience.year}</h6>
            <p>{experience.role}</p>
            <p className="subtitle">
              {experience.duties}
            </p>
            <hr />

        </div>
         ))}
         </div>
      </div>
   
      <div className="col-md-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            <div className="mt-2">
              <h4>Education</h4>
              <span className="line" />
            </div>
          </div>
          
            {qualifications.map((qualification) =>(
          <div className="card-body">
            <h6 className="title text-danger">{qualification.year}</h6>
            <p>{qualification.qualification}</p>
            <p className="subtitle">
              {qualification.description}
            </p>
            <hr />
          </div>              
            ))}

            

        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header">
            <div className="pull-left">
              <h4 className="mt-2">Skills</h4>
              <span className="line" />
            </div>
          </div>
          { skills.map((skill)=>(
          <div className="card-body pb-2">
            <h6>{skill.skill}</h6>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: skill.progression }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            
          </div>            
          ))}

        </div>

      </div>
    </div>
  </div>
</section>

    );
}

