import "./Home.css"
import BaraemAnimal from "./assets/baraemHeader.png"
import wave from './assets/wave.png';
import waveTopWhite from "./assets/wavetopwhite.png"
import waveBottomWhite from "./assets/wavebottomwhite.png"
import staff from "./assets/staff.jpg"
import Mail from '@mui/icons-material/MailOutline';
import Place from '@mui/icons-material/PlaceOutlined';
import Phone from '@mui/icons-material/LocalPhoneOutlined';
import ArrowForward from '@mui/icons-material/ArrowForwardOutlined';
import { Link } from "react-router-dom";
import NavBar1 from "./NavBar1";
import Footer from "./Footer";
import Avis from "./Avis";
import { useState } from "react";
const Home = () => {
    const [nom , setNom] = useState("");
    const [email , setEmail] = useState("");
    const [msg , setMsg] = useState("");
    const [isPending , setIsPending] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsPending(true)
    }
    const dataEquipe=[
        {
            name : "NomPrenom",
            job : "nourrice",
            imgSrc : staff,

        },
        {
            name : "NomPrenom",
            job : "nourrice",
            imgSrc : staff,
            
        },
        {
            name : "NomPrenom",
            job : "nourrice",
            imgSrc : staff,
            
        },

    ]
    return ( 
        <div className="home-page">
           
            <div className="header"> 
                
                <NavBar1 showBtn={false}></NavBar1>
                <div className="container">
                    <div className="text-info">
                        <p>Créche maternelle Ahla el Baraem</p>
                        <span>"Un monde de douceur pour les petits explorateurs en herbe"</span>
                        <a href="/" className="button-connecter"> Se connecter</a>
                    </div>
                    <img src={BaraemAnimal} alt="Baraemheader" className="BaraemHeader"/>
                </div>
                <div className="wave-top">
                    <img src={wave} alt="wave" className="wave"/>
                </div>

            </div>
            <div className="a-propos">
                <Link to="/Gallery" className="children" ></Link>
                <div className="text-apropos">
                    <p>A propos de nous</p>
                    <span>  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv</span>
                </div>
            </div>
            <div className="notre-equipe">
                <p>Notre equipe</p>
                <div className="notre-equipe-members">
                    {
                        dataEquipe.map((item,index)=>{
                            return(
                                <div className="members" key={index}>
                                <img src={item.imgSrc} alt=""></img>
                                <p>{item.name}</p>
                                <h1> {item.job} </h1>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="values">
                <div className="wave-top">
                    <img src={waveTopWhite} alt="wave-top"></img>
                </div>
                 <div className="container-values">
                    <p>Nos valeurs</p>
                    <div className="cards">
                        <div className="row1">
                            <div className="card">
                                <span className="circle one"></span>
                                <p>innovation</p>
                            </div>   
                            <div className="card">
                                <span className="circle two"></span>
                                <p>l'éducation</p>
                            </div>   
                            <div className="card">
                                <span className="circle three"></span>
                                <p>le respect</p>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="card">
                                <span className="circle four"></span>
                                <p>la persévérance</p>
                            </div>   
                            <div className="card">
                                <span className="circle five"></span>
                                <p>la patience</p>
                            </div>  
                        </div>
                           
                         
                    </div>
                    
                 </div>
                 <div className="wave-bottom">
                    <img src={waveBottomWhite} alt="wave-bottom"></img>
                 </div>
                 
            </div>
            <Avis></Avis>
            <div className="contact-us" id="contact-us">
                <div className="contact-us-container">
                    <div className="map">
                        <h2>Contactez nous</h2>
                        <p> nous sommes ouverts à toutes suggestions  vous allez proposer</p>
                        <div className="contacts">
                            <div className="contact">
                                <Mail></Mail>
                                <div className="text">
                                    <p>ahlaelbaraem@gmail.com</p>
                                    <p>adr@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact">
                                <Phone></Phone>
                                <div className="text">
                                    <p>0559 37 95 99 </p>
                                    <p>0559 37 95 99 </p>
                                </div>
                            </div>
                            <div className="contact">
                                <Place></Place>
                                <div className="text">
                                    <p>Rue Belkacem Omar</p>
                                    <p>Béjaïa , Béjaïa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label>Nom</label>
                                <input type="text" className="field-int" value={nom}  onChange={(e)=>{ setNom(e.target.value)}}></input>
                                <span className="separator"> </span>
                            </div>
                            <div className="field">
                                <label>email</label>
                                <input type="email" className="field-int" value={email}  onChange={(e)=>{ setEmail(e.target.value)}}></input>
                                <span className="separator"> </span>
                            </div>
                            <div className="field message-home">
                                <label>message</label>
                                <input type="text" className="field-int" value={msg}  onChange={(e)=>{ setMsg(e.target.value)}}></input>
                                <span className="separator"> </span>
                            </div>
                            <button> 
                                <p>envoyer</p>
                                <ArrowForward></ArrowForward>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Home;