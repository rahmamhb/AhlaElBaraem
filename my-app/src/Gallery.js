import children from "./assets/children.jpg"
import "./Gallery.css"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import wave from "./assets/wave.png"
import NavBar1 from "./NavBar1";
import Footer from "./Footer"

const Gallery = () => {
    var data = [
        {
            id : 1 ,
            imgSrc : children ,
        },
        {
            id : 2 ,
            imgSrc : children ,
        },
        {
            id : 3 ,
            imgSrc : children ,
        },
        {
            id : 4 ,
            imgSrc : children ,
        },
        {
            id : 5,
            imgSrc : children ,
        },
        {
            id : 6 ,
            imgSrc : children ,
        },
        {
            id : 7 ,
            imgSrc : children ,
        },
        {
            id : 8,
            imgSrc : children ,
        },
    
    ]
    const [model , setModel] = useState(false);
    const [tempImgSrc , setTempImgSrc] = useState("");
    
    const getImg = (imgSrc)=>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return ( 
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt="children"/>
            <CloseIcon onClick={()=>{setModel(false)}} />
        </div>
        <div className="gallery-page">

            <div className="galHeader">
                <NavBar1></NavBar1>
                <div className="wave-top">
                    <img src={wave} alt="wave" className="wave"/>
                </div>
            </div>
            <div className="gallery-container"> 
                    <p>Gallerie </p>
                    <div className="images">
                        {
                            data.map((item,index)=>{
                                return(
                                    <div className="pics" key={index} onClick={()=>{getImg(item.imgSrc)}}>
                                        <img src={item.imgSrc} alt={`img${index}`} style={{width:"100%"}} />
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
            <Footer></Footer>
        </div>
        </>
     );
}
 
export default Gallery;
