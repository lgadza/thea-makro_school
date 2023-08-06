import { useEffect, useState } from "react";
import { admissionFeatures } from "../../assets/data/makrohome"
import { PushButton } from "../../components/Buttons";
const SimplifyProcess:React.FC=()=>{
    const [currentFeature, setCurrentFeature] = useState<number>(1);

    const featureSwitcher = () => {
      setCurrentFeature((prevFeature) => (prevFeature % 3) + 1);
    };
  
    useEffect(() => {
      const featureTimer = setInterval(featureSwitcher, 5000);
      return () => clearInterval(featureTimer);
    }, []);
  
    const handleFeatureClick = (featureNumber: number) => {
      setCurrentFeature(featureNumber);
    };
  
interface AdmissionCardProps {
  title: string;
  content: string;
}

const AdmissionCard: React.FC<AdmissionCardProps> = ({ title, content }) => {
  return (
    <li className="card">
      <h1>{title}</h1>
      <p>{content}</p>
    </li>
  );
};

const AdmissionCards: React.FC = () => {
  const admissionData: AdmissionCardProps[] = [
    {
      title: 'Admission Card 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, lorem vel tincidunt...',
    },
    {
      title: 'Admission Card 2',
      content:
        'Vestibulum nunc massa, gravida quis porta nec, feugiat id metus. Nunc ac arcu dolor...',
    },
    {
      title: 'Admission Card 3',
      content:
        'Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante...',
    },
    {
      title: 'Admission Card 4',
      content:
        'Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante...',
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const handleCardClick = (index: number) => {
    setCurrentCard(index);
  };

  return (
    <ul className="cards">
      {admissionData.map((data, index) => (
        <AdmissionCard
          key={index}
          title={data.title}
          content={data.content}
          onClick={() => handleCardClick(index)} 
          className={index === currentCard ? 'card--current' : ''}
        />
      ))}
    </ul>
  );
};


    return(
        <div className="p-3 simplify-feature">
             <input type="radio" id="feature1" className="sec-1-input" name="feature" checked={currentFeature === 1} />
        <input type="radio" id="feature2" className="sec-1-input" name="feature" checked={currentFeature === 2} />
        <input type="radio" id="feature3" className="sec-1-input" name="feature" checked={currentFeature === 3} />
<div className="row">
    <div className="col">
<h3 className="text-start header" >Admission Management</h3>
<h4 className="text-start">Elevate the admissions process to deliver an enriching experience for all</h4>
        <ul>
        {admissionFeatures.map((feature,_)=>{
           return <li 
           style={{
            color: currentFeature === feature.id ? "" : "gray",
          }} 
          className="text-start py-4" key={feature.id}>
                    <div className="d-flex flex-column">
                        <span className="my-3 simplify-feature-text">{feature.heading} </span> 
                        {currentFeature === feature.id && (<small className="simplify-feature-text">{feature.content} </small>)}   
                            
                    </div>
                    <span   style={{
backgroundColor: currentFeature === feature.id ? "white" : "gray",
          }}  className="simplify-progressbar">
                         <span className="simplify-progressbar-fill"></span>
                    </span>
            </li>
        })}
        </ul>
    </div>
    <div className="col">
        <div className="slider">
        </div>
    </div>
</div>
<div className="text-start">
<PushButton message="Learn more!"/>
</div>

        </div>
    )
}
export default SimplifyProcess