import Footer from "./Footer";
import NavBar1 from "./NavBar1";
import reglInter from "./assets/reglement.png"
import progGeneral from "./assets/normaux.png"
import progSpe from "./assets/hautistes.png"
import wave from "./assets/wave.png"
import pdf1 from "./assets/Reglementinter.pdf"
import pdf2 from "./assets/programmepédagogique.pdf"
import "./Programme.css"

const Programme = () => {
    return ( 
        <div className="programme-page">
             <div className="progHeader">
                <NavBar1></NavBar1>
                <div className="wave-top">
                    <img src={wave} alt="wave" className="wave"/>
                </div>
            </div>
            <div className="programme-container">
                <p>Programmes</p>
                <div className="programme-cards">
                    <div className="reg-inter prog-card">
                        <img src={reglInter} alt="reglinter"></img>
                        <div className="card-txt">
                            <p>Reglement Interieur</p>
                            <span>Organiser la vie au sein de notre crèche</span>
                            <a href={pdf1}target="_blank" rel="noopener noreferrer" >Voir plus</a>
                        </div>
                    </div>
                    <div className="prog-gene prog-card">
                        <img src={progGeneral} alt="progGeneral"></img>
                        <div className="card-txt">
                            <p>Programme général</p>
                            <span>les objectifs éducatifs pour les enfants</span>
                            <a href={pdf2} target="_blank" rel="noopener noreferrer" >Voir plus</a>
                        </div>
                    </div>
                    <div className="prog-spe prog-card">
                        <img src={progSpe} alt="progSpecial"></img>
                        <div className="card-txt">
                            <p>Programme autiste</p>
                            <span>les activités proposées pour les enfants spéciaux</span>
                            <a  href={pdf2} target="_blank" rel="noopener noreferrer">Voir plus</a>
                        </div>
                    </div>
                </div>  
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Programme;