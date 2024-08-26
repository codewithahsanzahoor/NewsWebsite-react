import React from "react";

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About us</h2>
              <p>
                We are dedicated to keeping you informed and up-to-date with the
                latest news and events from around the world. Our goal is to
                provide a seamless and personalized news experience that caters
                to your interests and preferences. At our core, we believe in
                the power of reliable and trustworthy journalism. We partner
                with renowned news sources and publications to bring you
                accurate and balanced reporting on a wide range of topics,
                including politics, business, technology, entertainment, sports,
                and more.
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Trusted Sources</li>
                    <li>Personalized Experience</li>
                    <li>Comprehensive Coverage</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Interactive Elements</li>
                    <li>Social Engagement</li>
                    <li>Seamless Accessibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
