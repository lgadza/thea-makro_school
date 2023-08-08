import React from 'react';
import './HorizontalTimeline.css'; 
import calaUpload from "../assets/CALAUpload.png"
import * as Icon from "react-bootstrap-icons"
const HorizontalTimeline: React.FC = () => {
  return (
    
    <section id="horizontal-process">
      <div className="row">
        <div className="section-heading">
          <h2 className="text-center orange my-3 color-header">How it works</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="steps-timeline text-center">
            <div className="steps-one">
              <h5>Upload your PDFs</h5>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src={calaUpload} alt="CalaUpload" />
                  <div className='Icon' >
                  <Icon.FilePdf size={30} color="red"/>
                  </div>
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <small>Upload multiple PDF files or any kind of text file directly from your device</small>
                </div>
              </div>
            </div>
            <div className="steps-one">
              <h5>Upload your PDFs</h5>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src={calaUpload} alt="CalaUpload" />
                  <div className='Icon' >
                  <Icon.FilePdf size={30} color="red"/>
                  </div>
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <small>Upload multiple PDF files or any kind of text file directly from your device</small>
                </div>
              </div>
            </div>
            <div className="steps-one">
              <h5>Upload your PDFs</h5>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src={calaUpload} alt="CalaUpload" />
                  <div className='Icon' >
                  <Icon.FilePdf size={30} color="red"/>
                  </div>
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <small>Upload multiple PDF files or any kind of text file directly from your device</small>
                </div>
              </div>
            </div>
            <div className="steps-one">
              <h5>Upload your PDFs</h5>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src={calaUpload} alt="CalaUpload" />
                  <div className='Icon' >
                  <Icon.FilePdf size={30} color="red"/>
                  </div>
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <small>Upload multiple PDF files or any kind of text file directly from your device</small>
                </div>
              </div>
            </div>
            <div className="steps-one">
              <h5>Upload your PDFs</h5>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src={calaUpload} alt="CalaUpload" />
                  <div className='Icon' >
                  <Icon.FilePdf size={30} color="red"/>
                  </div>
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="inverted-steps-pane">
                  <small>Upload multiple PDF files or any kind of text file directly from your device</small>
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
