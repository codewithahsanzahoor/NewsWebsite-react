/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Services() {
    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>
                        Our news application is a comprehensive platform
                        designed to keep you informed and up-to-date with the
                        latest news from around the world.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <a href="/">
                            <i className="fa fa-bell"></i>
                        </a>
                        <div className="service-desc">
                            <h3>Real-time News Updates</h3>
                            <p>
                                The news application provides users with
                                up-to-date and reliable news from various
                                trusted sources.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <a href="/">
                            <i className="fa fa-folder"></i>
                        </a>
                        <div className="service-desc">
                            <h3>Multimedia Content</h3>
                            <p>
                                The news application goes beyond text-based
                                articles and incorporates multimedia elements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
