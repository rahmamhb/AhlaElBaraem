import SchoolIcon from '@mui/icons-material/School';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import "./Matiere.css"
import { useState } from 'react';
const data = [
    {
        matiereName :"Dessin",
        color:"255 181 133",
        activities : ["Dessin libre","Dessin avec des objets","Dessin à partir d'une histoire","Dessin de portraits"],

    },
    {
        matiereName :"Math",
        color:"255 231 148",
        activities : [],

    },
    {
        matiereName :"educ civil",
        color:"255 72 72",
        activities : [],

    },
    {
        matiereName :"educ islamic",
        color:"154 219 255",
        activities : [],

    },
    {
        matiereName :"arabe",
        color:"255 189 167",
        activities : [],

    },
    {
        matiereName :"francais",
        color:"255 153 0",
        activities : [],

    },
]

function setRowNb(nbr){
    document.documentElement.style.setProperty("--rowNumMat",nbr);
}

const Matiere = () => {
    const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
    console.log(selectedItems)
  };
    
    return ( 
        <div className="matiere-page">
            <div className="matieres">
                <p>Les matieres</p>
                <div className="matiere-container">
                    <div className="mats" onChange={()=>setRowNb(Math.ceil(data.length/3))}>  
                        {
                            data.map((item,index)=>{
                                return(
                                    <button className="mat" style={{"--matiereColor": item.color}} key={index}>
                                        <span><SchoolIcon></SchoolIcon></span>
                                        <h3>{item.matiereName}</h3>
                                        <p>{`${item.activities.length} activités`}</p>
                                    </button>
                                )
                            })
                        }
                    </div>
                    <button><AddCircleIcon></AddCircleIcon></button>
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