import React from 'react';
import './HorizontalTimeline.css'; 
import calaUpload from "../assets/CALAUpload.png"

const HorizontalTimeline: React.FC = () => {
  return (
    
    <section id="horizontal-process">
      <div className="row">
        <div className="section-heading">
          <h2 className="text-center orange">Responsive Horizontal Timeline</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="steps-timeline text-center">
            <div className="steps-one">
              <h3>Step 1</h3>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src={calaUpload} alt="CalaUpload" />
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <small>Upload multiple PDF files or any kind of text file directly from your device</small>
                </div>
              </div>
            </div>
            <div className="steps-two">
              <h3>Upload Your PDFs</h3>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src="https://imgur.com/5U7IJvy.png" alt="Step 1" />
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <small>Please fill your respective details in the attached TAX sheet whose salary mandat</small>
                </div>
              </div>
            </div>
            <div className="steps-three">
              <h3>Step 1</h3>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src="https://imgur.com/5U7IJvy.png" alt="Step 1" />
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <small>Please fill your respective details in the attached TAX sheet whose salary mandat</small>
                </div>
              </div>
            </div>
            <div className="steps-four">
              <h3>Step 1</h3>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src="https://imgur.com/5U7IJvy.png" alt="Step 1" />
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <small>Please fill your respective details in the attached TAX sheet whose salary mandat</small>
                </div>
              </div>
            </div>

            {/* Repeat the same structure for other steps */}
            
          </div>
          {/* /.steps-timeline */}
        </div>
      </div>
    </section>
  
  );
};

export default HorizontalTimeline;
