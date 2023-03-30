import SchoolIcon from '@mui/icons-material/School';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeft from '@mui/icons-material/ChevronLeftRounded';
import "./Matiere.css"
import { useState } from 'react';

function setRowNb(property,nbr ){
    document.documentElement.style.setProperty(property,nbr);
}

const Matiere = ({data}) => {

    const [selectedItems, setSelectedItems] = useState([]);

    const handleClick = (item) => {
        if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else {
        setSelectedItems([...selectedItems, item]);
        }
        console.log(selectedItems)
    };
    const [currentOverlayIndex, setCurrentOverlayIndex] = useState(null);
    const [overlay , setOverlay] = useState(false);

    return ( 
        <div className="matiere-page">
            <div className="matieres">
                <p>Les matieres</p>
                <div className="matiere-container">
                    <div className="mats" onChange={()=>setRowNb(Math.ceil("--rowNumMat",data.length/3))}>  
                        {
                            data.map((item,index)=>{
                                return(
                                    <div>
                                        <div className={currentOverlayIndex === index ? "comportement-overlay open" : "comportement-overlay"}  key={index}>
                                            <div className='more-about-matiere'>
                                                <span className='matiere-header'>
                                                    <button onClick={() => setCurrentOverlayIndex(null)}><ChevronLeft></ChevronLeft></button>
                                                    <h3>{item.matiereName}</h3>
                                                </span>
                                                <div className='activities'>
                                                    {item.activities.map((activity,index)=>{
                                                        return(
                                                            <div className='activity'onChange={setRowNb("--rowNbAct",item.activities.length)}>
                                                                <span className='circle'></span>
                                                                <span className='text'> {activity}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <form >
                                                    <input type="text" placeholder='Ajouter une activité'></input>
                                                    <button><AddCircleIcon></AddCircleIcon></button>
                                                </form>
                                            </div>
                                        </div>
                                        <button className="mat" style={{"--matiereColor": item.color}} onClick={() => setCurrentOverlayIndex(index)} key={index}>
                                            <span><SchoolIcon></SchoolIcon></span>
                                            <h3>{item.matiereName}</h3>
                                            <p>{`${item.activities.length} activités`}</p>
                                        </button>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                    <button onClick={()=>setOverlay(true)}><AddCircleIcon></AddCircleIcon></button>
                    <div className={overlay ? "comportement-overlay open" : "comportement-overlay"}>
                        <div className='add-matiere'>
                            <span className='matiere-header'>
                                <button onClick={() => setOverlay(false)}><ChevronLeft></ChevronLeft></button>
                                <h3 style={{fontSize:"20px"}}>Ajouter une matière</h3>
                            </span>
                            <form>
                                <input type="text" placeholder='nom de la matiere'></input>
                                <input type="text" placeholder='activité 1'></input>
                                <input type="text" placeholder='activité 2'></input>
                                <input type="text" placeholder='activité 3'></input>
                                
                                <div className="colors">
                                    <p>Choisissez une couleur :</p>
                                    <div className='circleContainer'>
                                        <label >
                                            <input class="radio" type="radio" name="review" id="9" value="255 181 133"/>
                                            <span className="first"></span>
                                        </label>
                                        <label >
                                            <input class="radio" type="radio" name="review" id="10" value="255 231 148"/>
                                            <span className="second"></span>
                                        </label>
                                        <label >
                                            <input class="radio" type="radio" name="review" id="20" value="255 72 72"/>
                                            <span className="third"></span>
                                        </label>
                                        <label>
                                            <input class="radio" type="radio" name="review" id="30" value="154 219 255"/>
                                            <span className="forth"></span>
                                        </label>
                                        <label>
                                            <input class="radio" type="radio" name="review" id="40" value="255 189 167"/>
                                            <span className="fifth"></span>
                                        </label>
                                        <label>
                                            <input class="radio" type="radio" name="review" id="50" value="255 153 0"/>
                                            <span className="sixth"></span>
                                        </label>
                                    </div>
                                </div>
                                <button className='confirmer'>Confirmer</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="matieres-of-the-day">
                <p>Matieres d'aujourd'hui</p>
                <div className='matieres-of-the-day-container'>
                {data.map((item, index) => (
                                <span
                                    key={index}
                                    onClick={() => handleClick(item.matiereName)}
                                    className={selectedItems.includes(item.matiereName) ? 'activeMatiere' : 'matiere-of-the-day'}
                                >
                                    <p>{item.matiereName}</p>
                                    {selectedItems.includes(item.matiereName) && <button onClick={() => handleClick(item.matiereName)}><CloseIcon></CloseIcon></button>}
                                </span>
                            )
                        )}
                </div>
            </div>
        </div>
     );
}
 
export default Matiere;