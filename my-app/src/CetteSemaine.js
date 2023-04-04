
import Absent from "./assets/absent.png"
import Present from "./assets/present.png"
import Bud from "./assets/bud.png"
import "./CetteSemaine.css"
import Menu from './Menu'



const CetteSemaine = () => {
    const emojis = ["😒","🙁","😊","🥰","👏"];
   

    const budsList = [
        {
            day : "Dimanche",
            isPresent : true
        },
        {
            day: "Lundi",
            isPresent : false
        },
        {
            day : "Mardi",
            isPresent : true,
        },
        
        {
            day : "Mercredi", 
            isPresent : "",
        }, 
        {
            day : "Jeudi",
            isPresent : "",
        }
    ]
  

    return (
        <div className="cette-semaine-container">
            <div className="comportement">
                <div className="title">
                    <h1 className="first-title">COMPORTEMENT</h1>
                    <h2 className="second-title">d’aujourd’hui</h2>
                </div>
                <div class="emoji-container">
                    {emojis.map((emoji, index) => (
                        <div className="emoji">
                            {emoji}
                        </div>
                   
                    ))}
                </div>
            </div>

            <div className="absences">
                <div className="title">
                    <h1 className="first-title">ABSENCES</h1>
                    <h2 className="second-title">de la semaine</h2>
                </div>
                <div class="bud-container">
                    {budsList.map((bud, index) => (
                        <div className="bud">
                            <img key={index} src= {bud.isPresent===true ? Present : bud.isPresent===false ? Absent : Bud} alt=""/>
                            <p className="day">{bud.day}</p>
                        </div>
                    
                    ))}
                </div>
            </div>

            <div className="menu">
                <div className="title">
                    <h1 className="first-title">MENU</h1>
                    <Menu></Menu>
                </div>
                <div className="menu-container">
                </div>
            </div>
            
        </div>
    );
}
 
export default CetteSemaine;