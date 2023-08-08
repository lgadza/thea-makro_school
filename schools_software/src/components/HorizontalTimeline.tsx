import React from 'react';
import './HorizontalTimeline.css'; 
import calaUpload from "../assets/CALAUpload.png"
import textExtration from "../assets/textExtraction2.png"
import contentCategory from "../assets/contentCategory.png"
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
              <h5>Upload Your Files</h5>
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
                <div className="ps-2 inverted-steps-pane text-start">
                  <small>Upload multiple PDF files or any kind of text file directly from your device</small>
                </div>
              </div>
            </div>
            <div className="steps-one">
              <h5>Text Extraction</h5>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src={textExtration} alt="textExtration" />
                  <div className='Icon fileExe'  >
                  <Icon.FiletypeExe size={30} />
                  </div>
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="ps-2 inverted-steps-pane text-start">
                  <small>Extract text and data from uploaded files through advanced parsing.</small>
                </div>
              </div>
            </div>
            <div className="steps-one">
              <h5>Content Categorization</h5>
              <div className="end-circle back-orange"></div>
              <div className="step-wrap">
                <div className="steps-stops">
                  <div className="verticle-line back-orange"></div>
                </div>
              </div>
              <div className="pane-warp back-blue">
                <div className="steps-pane">
                  <img src={contentCategory} alt="ContentCategory" />
                  <div className='Icon bookmark' >
                  <Icon.Bookmarks size={30} color="rgb(2, 130, 136)"/>
                  </div>
                </div>
              </div>
              <div className="inverted-pane-warp back-blue">
                <div className="ps-2 inverted-steps-pane text-start">
                  <small>Categorize and organize extracted content by subject and type for efficient access.</small>
                </div>
              </div>
            </div>
            <div className="steps-one">
              <h5>Search Interface</h5>
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
                <div className="ps-2 inverted-steps-pane text-start">
                  <small>Query the AI using natural language to find specific information from categorized content.</small>
                </div>
              </div>
            </div>
            <div className="steps-one">
              <h5>Personalized Insights</h5>
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
                <div className="ps-2 inverted-steps-pane text-start">
                  <small>Get tailored recommendations and insights based on your queries and preferences.</small>
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
