import { Col, Container, Row } from "react-bootstrap"

const Status=():JSX.Element=>{
    // (function() {
    //     let step = 0;
        
    //     let steps = document.getElementsByClassName('step');
    //     let progressBars = document.getElementsByClassName('progress');
        
    //     let prevBtn = document.getElementById('prev');
    //     let nextBtn = document.getElementById('next');
        
    //     nextBtn.onclick = function() {
    //       if (step < steps.length - 1) {
    //         progressBars[step].className = 'progress complete';
    //         step += 1;
    //         steps[step].className = "step active-step";
    //       }
    //     }
        
    //     prevBtn.onclick = function() {
    //       if (step > 0) {
    //         progressBars[step - 1].className = 'progress';
    //         steps[step].className = "step";
    //         step -= 1;
    //         steps[step].className = "step active-step";
    //       }
    //     }
    //   })();
    return(
        <div>
    <h5 className="d-flex my-3">Status</h5>
   
  <div className="stepper">
    <div className="step active-step">
      <span className="step-number">1</span>
      <span className="step-title">Application delivered to the Institute</span>
    </div>
    <span className="progress"></span>
    <div className="step">
      <span className="step-number">2</span>
      <span className="step-title">The application has not yet been opened.</span>
    </div>
    <span className="progress"></span>
    <div className="step">
      <span className="step-number">3</span>
      <span className="step-title">Waiting for information from the Institute</span>
    </div>
  </div>
    </div>
    )
}
export default Status