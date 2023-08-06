import { admissionFeatures } from "../../assets/data/makrohome"
const SimplifyProcess:React.FC=()=>{
    return(
        <div className="px-3">
<h3 className="text-start" >Admission Management</h3>
<h4 className="text-start">Elevate the admissions process to deliver an enriching experience for all</h4>
<div className="row">
    <div className="col">
        <ul>
        {admissionFeatures.map((feature,_)=>{
           return <li className="text-start" key={feature.id}>
                    <div className="d-flex flex-column">
                        <span>{feature.heading} </span>    
                        <small>{feature.content} </small>    
                    </div>
            </li>
        })}
        </ul>
    </div>
    <div className="col"></div>
</div>
        </div>
    )
}
export default SimplifyProcess