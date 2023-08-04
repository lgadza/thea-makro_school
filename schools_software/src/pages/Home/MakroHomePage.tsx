
import { Container } from "react-bootstrap";
import HomeNavbar from "./HomeNavbar";
import Carousel from "./Carousel";
import FAQComp from "./FAQComp";
import Footer from "../../components/Footer";
import PageProgress from "./PageProgress";

const MakroHomePage: React.FC = () => {
  const sections = [
    { label: "Home" },
    { label: "Carousel" },
    { label: "FAQ" },
    { label: "Footer" },
  ];

  return (
    <div className="page-container">
      <div className="progress-container">
        <PageProgress steps={sections} />
      </div>
      <div className="content-container">
        <Container fluid className="px-0 mb-5">
          <Container className="px-5">
            <HomeNavbar />
            <Carousel />
            <FAQComp />
          </Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default MakroHomePage;
// import { Container } from "react-bootstrap";
// import HomeNavbar from "./HomeNavbar";
// import Carousel from "./Carousel";
// import FAQComp from "./FAQComp";
// import Footer from "../../components/Footer";
// import PageProgress from "./PageProgress";
// import React, { useState, useEffect, useRef } from "react";
// import "./PageProgress.css";

// interface Step {
//   label: string;
// }

// const MakroHomePage: React.FC = () => {
//   const sections: Step[] = [
//     { label: "Home" },
//     { label: "Carousel" },
//     { label: "FAQ" },
//     { label: "Footer" },
//   ];

//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [sectionHeights, setSectionHeights] = useState<number[]>([]);

//   useEffect(() => {
//     const updateSectionHeights = () => {
//       const heights = sectionRefs.current.map(
//         (ref) => ref?.getBoundingClientRect().height || 0
//       );
//       setSectionHeights(heights);
//     };

//     window.addEventListener("resize", updateSectionHeights);

//     return () => {
//       window.removeEventListener("resize", updateSectionHeights);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;

//       let activeStep = 0;
//       let totalHeight = 0;

//       for (let i = 0; i < sectionHeights.length; i++) {
//         totalHeight += sectionHeights[i];
//         if (totalHeight > scrollPosition + windowHeight / 2) {
//           activeStep = i;
//           break;
//         }
//       }

//       setCurrentStep(activeStep);

//       const remainingHeight = scrollPosition - totalHeight + sectionHeights[activeStep];
//       const ratio = remainingHeight / sectionHeights[activeStep];
//       setFillRatio(ratio);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [sectionHeights]);

//   const setCurrentStep = (step: number) => {
//     // To avoid setting invalid step index
//     setCurrentStepIndex(step >= 0 && step < sections.length ? step : 0);
//   };

//   const [currentStepIndex, setCurrentStepIndex] = useState(0);
//   const [fillRatio, setFillRatio] = useState(0);

//   return (
//     <div className="page-container">
//       <div className="progress-container">
//         <PageProgress steps={sections} currentStep={currentStepIndex} fillRatio={fillRatio} />
//       </div>
//       <div className="content-container">
//         <Container fluid className="px-0 mb-5">
//           <div ref={(ref) => (sectionRefs.current[0] = ref)}>
//             <HomeNavbar />
//           </div>
//           <div ref={(ref) => (sectionRefs.current[1] = ref)}>
//             <Carousel />
//           </div>
//           <div ref={(ref) => (sectionRefs.current[2] = ref)}>
//             <FAQComp />
//           </div>
//         </Container>
//         <div ref={(ref) => (sectionRefs.current[3] = ref)}>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MakroHomePage;
