import { useState } from "react";
import wave from "./assets/wave.png"
import waveTopWhite from "./assets/wavetopwhite.png"
import waveBottomWhite from "./assets/wavebottomwhite.png"


import "./Nourrice.css"
import "./Orthophonist.css"
import NavBar1 from "./NavBar1";
import Comment from "./Comment";
import ListEnfantStaff from "./ListEnfantStaff";

let CommentData = [
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    },
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    },
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    },
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    }
]

const Psychologue = () => {
    let [list , setList] = useState(true);
    let [comment , setComment] = useState(false);
    return ( 
        <div className="nourrice-page">
            <div className="nourHeader"> {/*in the header section i put the navBar and the wave*/}
                <NavBar1 showBtn={true}></NavBar1>
                <div className="wave-top">
                    <img src={wave} alt="wave" className="wave"/>
                </div>
            </div>
            <div className="ortho-menu"> {/*adi ani drt fiha adik ta3 list des enfants w commentaires w matiere w activites ntiya ak tbdlihm b gestion d'equipe gestion des enfant w gestion du site*/}
                <button className={list? "active-btn" :""} onClick={()=>{ setList(true);setComment(false)}}>liste des enfants</button>
                <button className={comment? "active-btn cmnt" :"cmnt"} onClick={()=>{setList(false);setComment(true)}}>Commentaires</button>
            </div>
            
            <div className="content-container"> {/* w ada l container tkhali fih adou les waves*/}
                <div className="wave-top"> {/*l wave adi */}
                    <img src={waveTopWhite} alt="wave-top"></img>
                </div>
                <div className="nour-content"> {/*wtbdli hnaya 3la hssab la page ta3k*/}
                    {list && <ListEnfantStaff></ListEnfantStaff>}
                    {comment && <Comment data={CommentData}></Comment>}
                </div>
                <div className="wave-bottom"> {/*wl wave adi */}
                    <img src={waveBottomWhite} alt="wave-bottom"></img>
                 </div>
            </div>
        </div>
     );
}
 
export default Psychologue;