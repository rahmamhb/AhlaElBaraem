import YellowEllipse from './assets/YellowEllipse.png'
import YellowEllipseA from './assets/YellowEllipseA.png'
import OrangeEllipse from './assets/OrangeEllipse.png'
import OrangeEllipseA from './assets/OrangeEllipseA.png'
import RedEllipse from './assets/RedEllipse.png'
import RedEllipseA from './assets/RedEllipseA.png'
import GreenEllipse from './assets/GreenEllipse.png'
import GreenEllipseA from './assets/GreenEllipseA.png'
import "./Compétence.css"



import Moment from "react-moment";
const Compétence = () => {
    const competences = [
        {
            matière: "Lecture",
            activité1: "texte",
            rating1 : "green",
            activité2: "texte",
            rating2: "red"
        },
        {
            matière: "Lecture",
            activité1: "texte desciptif",
            rating1: "orange",
            activité2: "texte",
            rating2: "yellow"
        },
        {
            matière: "Lecture",
            activité1: "texte desciptif",
            rating1: "orange",
            activité2: "texte",
            rating2: "green"
        },
        {
            matière: "Lecture",
            activité1: "texte desciptif",
            rating1: "red",
            activité2: "texte",
            rating2: "green"
        },
        {
            matière: "Lecture",
            activité1: "texte desciptif",
            rating1: "red",
            activité2: "texte",
            rating2: "yellow"
        }

]

    return ( 
        <div className='competence-container'>
            {
                competences.map((competence,index)=>{
                    return(
                        <div className="competence" key={index}>
                            <span className="competence-date"><Moment format='dddd L'>{competence.addingDate}</Moment></span>
                            <div className="container">
                                <span className="matiere">{competence.matière}</span>

                                <span className="activite1">
                                    <span className="activite">{competence.activité1}</span>
                                    <span className="ratings">
                                        <img src={competence.rating1==="red"? RedEllipseA : RedEllipse} alt=""/>
                                        <img src={competence.rating1==="orange"? OrangeEllipseA : OrangeEllipse} alt=""/>
                                        <img src={competence.rating1==="yellow"? YellowEllipseA : YellowEllipse} alt=""/>
                                        <img src={competence.rating1==="green"? GreenEllipseA : GreenEllipse} alt=""/>            
                                    </span>
                                </span>
                                <span className="activite2">
                                    <span className="activite">{competence.activité2}</span>
                                    <span className="ratings">
                                        <img className='cirle' src={competence.rating2==="red"? RedEllipseA : RedEllipse} alt=""/>
                                        <img className='cirle' src={competence.rating2==="orange"? OrangeEllipseA : OrangeEllipse} alt=""/>
                                        <img className='cirle' src={competence.rating2==="yellow"? YellowEllipseA : YellowEllipse} alt=""/>
                                        <img className='cirle' src={competence.rating2==="green"? GreenEllipseA : GreenEllipse} alt=""/>            
                                    </span>
                                </span>
                            </div>
                        </div>
                        )
                    })
            }
        </div>
     );
}
 
export default Compétence;