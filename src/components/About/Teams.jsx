import React from "react";
import profile from "../assets/img/profile.jpg";
function Team() {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Team of skilled developers specializing in creating innovative
            software solutions to drive digital transformation and enhance user
            experiences.
          </p>
        </div>
        <div id="row">
          <div className="col-md-6 team">
            <div className="thumbnail">
              <img src={profile} alt="..." className="team-img" />
              <div className="caption">
                <p>React Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
