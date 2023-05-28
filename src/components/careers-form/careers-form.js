import React from 'react';
import './careers.scss';

function CareersForm() {
  return (
    <div className="careers-page">
  
        <div class="container">
            <div class="row">
                
                <div class="col-lg-8 offset-lg-2">

                    <h2>Current Job Openings</h2>

                    <div id="accordion">
                      {Array.from({ length: 10 }, (_, index) => (
                        <div className="card" key={`jobPosition${index}`}>
                          <div className="card-header" id={`heading${index}`}>
                            <h5 className="mb-0">
                              <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                Job Position {index + 1}
                              </button>
                              <button className="btn btn-link">
                                Apply
                              </button>
                            </h5>
                          </div>
                          <div id={`collapse${index}`} className={`collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-parent="#accordion">
                            <div className="card-body">
                              <h3>Job Description</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices nisl, ac sodales diam faucibus vitae.</p>
                              <button className="btn btn-primary">Apply Now</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default CareersForm;
