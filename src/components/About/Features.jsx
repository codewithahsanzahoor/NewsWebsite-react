/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Features() {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row">
          <div className=" section-title">
            <h2>Features</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-6 col-sm-3">
            <a href="/">
              <i className="fa fa-circle-nodes"></i>
            </a>
            <h3>News Aggregation</h3>
            <p>
              The application gathers news from multiple reputable sources,
              including verified news channels.
            </p>
          </div>
          <div className="col-xs-6 col-sm-3">
            <a href="/">
              <i className="fa fa-bell"></i>
            </a>
            <h3>Breaking News</h3>
            <p>
              The News Application provides real-time breaking news stories and
              important updates.
            </p>
          </div>
          <div className="col-xs-6 col-sm-3">
            <a href="/">
              <i className="fa fa-language"></i>
            </a>
            <h3>Language</h3>
            <p>
              The News Application provides news in two respective language i.e.
              English and Spanish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
