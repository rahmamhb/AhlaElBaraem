import happyEmoji from "./assets/happyEmoji.png";
import happyEmojiActive from "./assets/happyEmojiActive.png";
import satisfiedEmoji from "./assets/satisfiedEmoji.png"
import satisfiedEmojiActive from "./assets/satisfiedEmojiActive.png"
import normalEmojiActive from "./assets/normalEmojiActive.png"
import normalEmoji from "./assets/normalEmoji.png"
import sadEmoji from "./assets/sadEmoji.png"
import sadEmojiActive from "./assets/sadEmojiActive.png"
import dissapointedEmoji from "./assets/dissapointedEmoji.png"
import dissapointedEmojiActive from "./assets/dissapointedEmojiActive.png"
import Absent from "./assets/absent.png"
import Present from "./assets/present.png"
import Bud from "./assets/bud.png"
import "./CetteSemaine.css"
import Menu from './Menu'



const CetteSemaine = () => {
    const emojiList = [
        {
            src1 : dissapointedEmoji,
            src2 : dissapointedEmojiActive,
            isSelected : false
        },
        {
            src1 : sadEmoji,
            src2 : sadEmojiActive,
            isSelected : false
        },
        {
            src1 : normalEmoji,
            src2 : normalEmojiActive,
            isSelected : false
        },
        
        {
            src1 : satisfiedEmoji,
            src2 : satisfiedEmojiActive,
            isSelected : true
        }, 
        {
            src1 : happyEmoji,
            src2 : happyEmojiActive,
            isSelected : false
        }
    ] 

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
            isPresent : "",
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
                    {emojiList.map((emoji, index) => (
                        <div className="emoji">
                            <img key={index} src= {emoji.isSelected ? emoji.src2 : emoji.src1} alt="" /> 
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